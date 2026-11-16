import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '10+', label: 'years of mixed-methods research' },
  { value: '600+', label: 'hours conducting research sessions' },
  { value: '15+', label: 'successful product launches supported' },
  { value: '$3B+', label: 'in measurable research impact' },
]

const markers = ['bg-sun', 'bg-ember', 'bg-sky', 'bg-primary']

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="size-2 rounded-full bg-ember" aria-hidden="true" />
        Staff UX Researcher · Marketplaces, e-commerce & fintech
      </p>
      <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
        I lead research for ambiguous, high-risk spaces where{' '}
        <em className="relative whitespace-nowrap">
          <span className="relative z-10">trust</span>
          <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun/70 md:h-4" aria-hidden="true" />
        </em>{' '}
        is everything.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
        I&apos;m Casey Skinner, a mixed-methods product-savvy researcher who leads end-to-end
        research to drive product and UX strategy, from 0-to-1 user experiences to big-bet financial products. I help
        teams build roadmaps, de-risk decisions, and ship experiences that solve real user problems.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          See selected work
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center rounded-full border border-input px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
        >
          Request access
        </Link>
      </div>
      <dl className="mt-16 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className={`h-1 w-8 rounded-full ${markers[index]}`} aria-hidden="true" />
            <dt className="order-last text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="mt-2 font-serif text-4xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
