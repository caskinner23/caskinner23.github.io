'use client'

import { useActionState, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react'
import { sanitizeNextPath, unlockWithPassword } from '@/lib/access'

type UnlockState = { error: string | null }

const initialState: UnlockState = { error: null }

export function UnlockForm() {
  const router = useRouter()
  const [next, setNext] = useState('/#work')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setNext(sanitizeNextPath(new URLSearchParams(window.location.search).get('next')))
  }, [])

  async function unlockPortfolio(_prev: UnlockState, formData: FormData): Promise<UnlockState> {
    const attempt = formData.get('password')
    if (typeof attempt !== 'string' || attempt.length === 0 || attempt.length > 200) {
      return { error: 'Please enter the password you were given.' }
    }
    if (!(await unlockWithPassword(attempt))) {
      return { error: 'That password didn’t match. Check your invitation email and try again.' }
    }
    router.push(sanitizeNextPath(formData.get('next')))
    return { error: null }
  }

  const [state, formAction, pending] = useActionState(unlockPortfolio, initialState)

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="next" value={next} />
      <label htmlFor="password" className="text-sm font-medium">
        Password
      </label>
      <div className="relative">
        <input
          id="password"
          name="password"
          type={visible ? 'text' : 'password'}
          autoComplete="current-password"
          required
          autoFocus
          aria-invalid={state.error ? true : undefined}
          aria-describedby={state.error ? 'password-error' : 'password-hint'}
          className="h-12 w-full rounded-lg border border-input bg-background px-4 pr-12 text-base outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring aria-invalid:border-destructive"
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-muted-foreground hover:text-foreground"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
        </button>
      </div>
      {state.error ? (
        <p id="password-error" role="alert" className="text-sm text-destructive">
          {state.error}
        </p>
      ) : (
        <p id="password-hint" className="text-sm text-muted-foreground">
          The password was included in my application or outreach email.
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight className="size-4" aria-hidden="true" />
        )}
        {pending ? 'Checking…' : 'Unlock case studies'}
      </button>
    </form>
  )
}
