import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, LockKeyhole } from 'lucide-react'
import { UnlockForm } from '@/components/unlock-form'

export const metadata: Metadata = {
  title: 'Enter password — Casey Skinner',
  robots: { index: false, follow: false },
}

export default function UnlockPage() {
  return (
    <main className="grid min-h-dvh lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 md:px-12">
        <Link
          href="/"
          className="-my-2 inline-flex w-fit items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-16">
          <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <LockKeyhole className="size-5" aria-hidden="true" />
          </span>
          <h1 className="mt-6 font-serif text-4xl tracking-tight">Protected case studies</h1>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            This work includes confidential client details shared under NDA. Enter the password to
            continue.
          </p>
          <div className="mt-8">
            <UnlockForm />
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Don&apos;t have a password?{' '}
            <a
              href="mailto:caskinner23@gmail.com?subject=Portfolio%20access%20request"
              className="py-2 font-medium text-foreground underline underline-offset-4"
            >
              Request access
            </a>
          </p>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image
          src="/images/case-auctions.png"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent p-12">
          <p className="font-serif text-5xl text-sun">$2.9B</p>
          <p className="mt-3 max-w-md text-lg leading-snug text-primary-foreground">
            in GMV protected by research that cut unpaid items by 56%.
          </p>
        </div>
      </div>
    </main>
  )
}
