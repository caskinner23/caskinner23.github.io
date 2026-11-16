import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudy } from '@/lib/case-studies'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/about-contact'
import { ProtectedCaseStudy } from '@/components/protected-case-study'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const preview = getCaseStudy(slug)
  if (!preview) notFound()

  const index = caseStudies.findIndex((s) => s.slug === slug)
  const nextStudy = caseStudies[(index + 1) % caseStudies.length]

  return (
    <>
      <SiteHeader />
      <main>
        <ProtectedCaseStudy preview={preview} nextStudy={nextStudy} />
      </main>
      <SiteFooter />
    </>
  )
}
