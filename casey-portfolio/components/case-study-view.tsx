import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { CaseStudy, CaseStudyPreview } from '@/lib/case-studies'

export function CaseStudyView({ study, nextStudy }: { study: CaseStudy; nextStudy: CaseStudyPreview }) {
  const meta = [
    { label: 'Role', value: study.role },
    { label: 'Scope', value: study.scope },
    { label: 'Team', value: study.client },
    { label: 'Year', value: study.year },
  ]

  return (
    <article>
      <header className="mx-auto max-w-4xl px-6 pb-12 pt-12 md:pt-16">
        <Link
          href="/#work"
          className="-my-2 inline-flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All case studies
        </Link>
        <h1 className="mt-8 font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
          {study.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">{study.summary}</p>
        <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 md:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 text-sm font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={study.image} alt={study.imageAlt} fill priority sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
        </div>
      </div>

      <section aria-labelledby="impact-heading" className="mx-auto max-w-4xl px-6 py-16">
        <h2 id="impact-heading" className="text-sm font-medium uppercase tracking-widest text-accent">
          Impact
        </h2>
        <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {study.impact.map((item) => (
            <div key={item.label} className="flex flex-col-reverse gap-2 bg-card p-6">
              <dt className="text-sm text-muted-foreground">{item.label}</dt>
              <dd className="font-serif text-4xl text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mx-auto flex max-w-4xl flex-col gap-14 px-6 pb-16">
        {study.sections.map((section) => (
          <section key={section.heading} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
            <h2 className="font-serif text-2xl tracking-tight">{section.heading}</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
          <h2 className="font-serif text-2xl tracking-tight">Methods</h2>
          <ul className="flex flex-wrap gap-2">
            {study.methods.map((method) => (
              <li key={method} className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
                {method}
              </li>
            ))}
          </ul>
        </section>

        <aside aria-label="Key insight" className="rounded-2xl border-l-4 border-ember bg-card p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Key insight</p>
          <p className="mt-4 font-serif text-2xl leading-snug md:text-3xl">{study.insight}</p>
        </aside>
      </div>

      <nav aria-label="Next case study" className="border-t border-border">
        <Link
          href={`/work/${nextStudy.slug}`}
          className="group mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-12"
        >
          <div>
            <p className="text-sm text-muted-foreground">Next case study</p>
            <p className="mt-2 font-serif text-2xl tracking-tight text-balance md:text-3xl">{nextStudy.title}</p>
          </div>
          <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </nav>
    </article>
  )
}
