'use client'

import Link from 'next/link'
import { LockKeyhole, LockKeyholeOpen } from 'lucide-react'
import { lockPortfolio } from '@/lib/access'
import { useUnlocked } from '@/components/use-unlocked'

const navItems = [
  { href: '/#work', label: 'Work' },
  { href: '/#approach', label: 'Approach' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  const unlocked = useUnlocked()

  function handleLock(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    lockPortfolio()
    window.location.assign('/')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="whitespace-nowrap font-serif text-lg tracking-tight min-[390px]:text-xl">
          Casey Skinner, M.A.
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="py-3 transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {unlocked ? (
            <form onSubmit={handleLock}>
              <button
                type="submit"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <LockKeyholeOpen className="size-3.5" aria-hidden="true" />
                Lock portfolio
              </button>
            </form>
          ) : (
            <Link
              href="/unlock"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <LockKeyhole className="size-3.5" aria-hidden="true" />
              <span className="min-[390px]:hidden">Case studies</span>
              <span className="hidden min-[390px]:inline">View case studies</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
