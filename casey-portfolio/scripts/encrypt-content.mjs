// Encrypts content/case-studies.private.json into lib/protected-content.json.
// Usage: PORTFOLIO_PASSWORD='your passphrase' node scripts/encrypt-content.mjs
// The private source file and the password are never committed.

import { readFileSync, writeFileSync } from 'node:fs'
import { webcrypto as crypto } from 'node:crypto'

const ITERATIONS = 600000
const password = process.env.PORTFOLIO_PASSWORD
if (!password) {
  console.error('Set PORTFOLIO_PASSWORD first.')
  process.exit(1)
}

const plaintext = readFileSync(new URL('../content/case-studies.private.json', import.meta.url), 'utf8')
JSON.parse(plaintext) // fail fast on invalid JSON

const salt = crypto.getRandomValues(new Uint8Array(16))
const iv = crypto.getRandomValues(new Uint8Array(12))
const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits'])
const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITERATIONS }, material, 256)
const key = await crypto.subtle.importKey('raw', bits, 'AES-GCM', false, ['encrypt'])
const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(plaintext))

const b64 = (bytes) => Buffer.from(bytes).toString('base64')
const payload = { v: 1, iterations: ITERATIONS, salt: b64(salt), iv: b64(iv), data: b64(new Uint8Array(data)) }
writeFileSync(new URL('../lib/protected-content.json', import.meta.url), JSON.stringify(payload) + '\n')
console.log('Wrote lib/protected-content.json')
