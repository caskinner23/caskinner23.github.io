import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WorkList } from '@/components/work-list'
import { Approach } from '@/components/approach'
import { About, Contact, SiteFooter } from '@/components/about-contact'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WorkList />
        <Approach />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
