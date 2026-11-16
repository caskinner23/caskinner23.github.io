'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, LockKeyhole } from 'lucide-react'
import { caseStudies } from '@/lib/case-studies'
import { useUnlocked } from '@/components/use-unlocked'

export function WorkList() {
  const unlocked = useUnlocked()
  return (
    <section id="work" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Selected work</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">Case studies</h2>
          </div>
          <p className="max-w-md text-muted-foreground text-pretty">
            {unlocked
              ? 'Thanks for visiting. Full case studies are unlocked for this browser.'
              : 'Due to NDAs, full case studies are password protected. Previews are shown below.'}
          </p>
        </div>

        <ul className="mt-14 flex flex-col gap-6">
          {caseStudies.map((study, index) => (
            <li key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                className="group grid overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-5"
              >
                <div className="relative aspect-[16/10] md:col-span-2 md:aspect-auto">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    style={
                      {
                        '--img-pos': study.imagePosition ?? '50% 50%',
                        '--img-pos-sm': study.imagePositionMobile ?? study.imagePosition ?? '50% 50%',
                      } as React.CSSProperties
                    }
                    className="object-cover [object-position:var(--img-pos-sm)] transition-transform duration-500 group-hover:scale-[1.03] md:[object-position:var(--img-pos)]"
                  />
                </div>
                <div className="flex flex-col gap-5 p-6 md:col-span-3 md:p-10">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>
                      {String(index + 1).padStart(2, '0')} · {study.client} · {study.year}
                    </span>
                    {unlocked ? (
                      <ArrowUpRight
                        className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                        <LockKeyhole className="size-3" aria-hidden="true" />
                        Protected
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl leading-snug tracking-tight text-balance md:text-3xl">
                    {study.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{study.summary}</p>
                  <ul className="mt-auto flex flex-wrap gap-2" aria-label="Methods">
                    {study.methods.map((method) => (
                      <li
                        key={method}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
