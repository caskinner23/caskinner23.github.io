'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Mail } from 'lucide-react'
import { loadProtectedContent } from '@/lib/access'
import type { CaseStudy, CaseStudyPreview } from '@/lib/case-studies'
import { CaseStudyView } from '@/components/case-study-view'

type State = { status: 'loading' } | { status: 'ready'; study: CaseStudy } | { status: 'pending' }

export function ProtectedCaseStudy({
  preview,
  nextStudy,
}: {
  preview: CaseStudyPreview
  nextStudy: CaseStudyPreview
}) {
  const router = useRouter()
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    let active = true
    loadProtectedContent().then((content) => {
      if (!active) return
      if (!content) {
        router.replace(`/unlock/?next=${encodeURIComponent(`/work/${preview.slug}/`)}`)
        return
      }
      const details = content[preview.slug]
      // Unlocked, but this case study's full write-up hasn't been added yet.
      if (!details) {
        setState({ status: 'pending' })
        return
      }
      setState({ status: 'ready', study: { ...preview, ...details } })
    })
    return () => {
      active = false
    }
  }, [preview, router])

  if (state.status === 'loading') return <div className="min-h-dvh" aria-busy="true" />
  if (state.status === 'ready') return <CaseStudyView study={state.study} nextStudy={nextStudy} />

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-12 md:pt-16">
      <Link
        href="/#work"
        className="-my-2 inline-flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All case studies
      </Link>
      <h1 className="mt-8 font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
        {preview.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">{preview.summary}</p>
      <aside className="mt-12 rounded-2xl border-l-4 border-ember bg-card p-8 md:p-10">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Full write-up in progress</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          I&apos;m still writing up this case study. I&apos;m happy to walk you through it in
          conversation in the meantime.
        </p>
        <a
          href="mailto:caskinner23@gmail.com?subject=Co-Lab%20case%20study"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" aria-hidden="true" />
          Ask me about it
        </a>
      </aside>
    </article>
  )
}
