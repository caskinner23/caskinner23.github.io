// Client-side access control for a static site.
// Full case studies are stored encrypted (AES-GCM). The key is derived from the
// portfolio password with PBKDF2-SHA256, so the password itself is never stored
// in the code, and the content cannot be read without it.

import protectedContent from '@/lib/protected-content.json'
import type { CaseStudyDetails } from '@/lib/case-studies'

export const ACCESS_STORAGE_KEY = 'portfolio_access'
export const ACCESS_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

export type EncryptedPayload = {
  v: number
  iterations: number
  salt: string
  iv: string
  data: string
}

type StoredAccess = { k: string; exp: number }

const payload = protectedContent as EncryptedPayload

function fromBase64(value: string): Uint8Array<ArrayBuffer> {
  const binary = atob(value)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

function toBase64(bytes: Uint8Array): string {
  let binary = ''
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
  return btoa(binary)
}

async function deriveKeyBytes(password: string): Promise<Uint8Array> {
  const material = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  )
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt: fromBase64(payload.salt), iterations: payload.iterations },
    material,
    256,
  )
  return new Uint8Array(bits)
}

async function decryptWithKey(keyBytes: Uint8Array): Promise<Record<string, CaseStudyDetails>> {
  const key = await crypto.subtle.importKey('raw', keyBytes as Uint8Array<ArrayBuffer>, 'AES-GCM', false, ['decrypt'])
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: fromBase64(payload.iv) },
    key,
    fromBase64(payload.data),
  )
  return JSON.parse(new TextDecoder().decode(plain))
}

function readStoredKey(): Uint8Array | null {
  try {
    const raw = window.localStorage.getItem(ACCESS_STORAGE_KEY)
    if (!raw) return null
    const stored = JSON.parse(raw) as StoredAccess
    if (!stored.k || typeof stored.exp !== 'number' || stored.exp < Date.now()) {
      window.localStorage.removeItem(ACCESS_STORAGE_KEY)
      return null
    }
    return fromBase64(stored.k)
  } catch {
    return null
  }
}

/** Tries a password. Returns true and remembers access for 7 days if it is correct. */
export async function unlockWithPassword(password: string): Promise<boolean> {
  try {
    const keyBytes = await deriveKeyBytes(password)
    await decryptWithKey(keyBytes)
    try {
      const stored: StoredAccess = { k: toBase64(keyBytes), exp: Date.now() + ACCESS_MAX_AGE_MS }
      window.localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify(stored))
    } catch {
      // Storage unavailable (e.g. private mode): access lasts for this page only.
    }
    sessionKey = keyBytes
    return true
  } catch {
    return false
  }
}

let sessionKey: Uint8Array | null = null

/** Returns the decrypted case study details, or null if this browser is not unlocked. */
export async function loadProtectedContent(): Promise<Record<string, CaseStudyDetails> | null> {
  const keyBytes = sessionKey ?? readStoredKey()
  if (!keyBytes) return null
  try {
    return await decryptWithKey(keyBytes)
  } catch {
    lockPortfolio()
    return null
  }
}

export function lockPortfolio() {
  sessionKey = null
  try {
    window.localStorage.removeItem(ACCESS_STORAGE_KEY)
  } catch {
    // ignore
  }
}

export function sanitizeNextPath(next: unknown): string {
  if (typeof next !== 'string' || !next.startsWith('/') || next.startsWith('//')) {
    return '/#work'
  }
  return next
}
