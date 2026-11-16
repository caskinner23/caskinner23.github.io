import { ArrowUpRight, Mail } from 'lucide-react'

const EMAIL = 'caskinner23@gmail.com'

// Roles are grouped by company, newest first. A company with more than one role
// shows them as a progression under a single company heading.
const experience = [
  {
    company: 'eBay',
    years: '2021 — Present',
    roles: [
      { role: 'Staff UX Researcher, eBay Live Seller Experience', years: '2026 — Present' },
      { role: 'Staff UX Researcher, Core Buyer Experience', years: '2025 — 2026' },
      { role: 'Senior UX Researcher, Financial Services & Trust', years: '2022 — 2024' },
      { role: 'UX Researcher, Home & Garden (Contract)', years: '2021 — 2022' },
    ],
  },
  { company: 'Odgers Berndtson', years: '2021', roles: [{ role: 'Data & Insights Analyst, IdenX', years: '2021' }] },
  {
    company: 'Haworth',
    years: '2018, 2020 — 2021',
    roles: [
      { role: 'Design Researcher, Workplace Design & Innovation', years: '2020 — 2021' },
      { role: 'Graduate Design Research Intern', years: '2018' },
    ],
  },
  {
    company: 'Brandeis University',
    years: '2018 — 2020',
    roles: [{ role: 'Research & Teaching Fellow, Sociology & Social Policy', years: '2018 — 2020' }],
  },
  {
    company: 'Grand Valley State University',
    years: '2016 — 2018',
    roles: [
      { role: 'Graduate Research Manager, Social Innovation & Entrepreneurship', years: '2016 — 2018' },
      { role: 'Research Consultant, Department of Education', years: '2016 — 2017' },
    ],
  },
  {
    company: 'Dorothy A. Johnson Center for Philanthropy',
    years: '2015 — 2016',
    roles: [{ role: 'Research Assistant, Community Research Institute', years: '2015 — 2016' }],
  },
  {
    company: 'CS Research & Consulting',
    years: '2016 — Present',
    roles: [{ role: 'Principal Researcher & Consultant', years: '2016 — Present' }],
  },
]

const education = [
  'M.A. Sociology, Brandeis University',
  'M.A. Social Policy, Brandeis University',
  'B.S. Sociology, Psychology & Applied Statistics, Grand Valley State University',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">About</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">A little about me</h2>
          <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              At my core, I’m deeply curious about what makes people tick, both personally and
              professionally. I came to UX research from an academic background in sociology,
              psychology, statistics, and social policy, where I used qualitative and quantitative
              methods to study people and organizations, especially what makes entrepreneurs and
              social innovators successful.
            </p>
            <p>
              Since then, I’ve built product sense and an eye for design on top of that rigorous
              research foundation. It’s landed me at what I think is the coolest intersection:
              understanding people and shaping the products that make their lives measurably better.
              Over the last decade, I’ve gotten to do this across e-commerce and B2B/B2C platforms,
              fintech, executive recruiting, commercial interiors, healthcare, and higher education.
              Along the way, I’ve come to believe that no matter the industry, there’s always work to
              be done to improve the human experience, and the best first step is usually
              understanding it better.
            </p>
            <p>
              Outside of work, you can find me tinkering (read: arguing) with Claude Code, climbing
              cringe mountain with content creation, falling down Substack rabbit holes, planning our
              next vacation around must-try food spots, or hosting game nights where no one is marked
              safe from psychoanalysis. All with the love and support of my husband and our golden
              retriever, Russell.
            </p>
          </div>
          <h3 className="mt-10 text-sm font-medium text-muted-foreground">Education</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {education.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Experience</h3>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {experience.map((item) =>
              item.roles.length === 1 ? (
                <li key={item.company} className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.roles[0].role}</p>
                  </div>
                  <p className="shrink-0 text-sm text-muted-foreground">{item.years}</p>
                </li>
              ) : (
                <li key={item.company} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-medium">{item.company}</p>
                    <p className="shrink-0 text-sm text-muted-foreground">{item.years}</p>
                  </div>
                  <ol className="relative mt-3 flex flex-col gap-3 pl-5" aria-label={`Roles at ${item.company}`}>
                    <span
                      className="absolute bottom-2 left-[3px] top-2 w-px bg-border"
                      aria-hidden="true"
                    />
                    {item.roles.map((role, index) => (
                      <li key={role.role} className="relative flex items-baseline justify-between gap-4">
                        <span
                          className={`absolute -left-5 top-[0.45rem] size-[7px] rounded-full ${index === 0 ? 'bg-ember' : 'bg-sky'}`}
                          aria-hidden="true"
                        />
                        <p className="text-sm text-muted-foreground">{role.role}</p>
                        <p className="shrink-0 text-sm text-muted-foreground">{role.years}</p>
                      </li>
                    ))}
                  </ol>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-1.5 w-10 rounded-full bg-sun" />
          <span className="h-1.5 w-10 rounded-full bg-ember" />
          <span className="h-1.5 w-10 rounded-full bg-sky" />
        </div>
        <h2 className="mt-8 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
          Need the password, or want to talk research?
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          Hiring managers and recruiters can request access to full case studies. I usually reply
          within one business day.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${EMAIL}?subject=Portfolio%20access%20request`}
            className="inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            {EMAIL}
          </a>
          <a
            href="https://www.linkedin.com/in/skinnerc23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href="https://csresearchconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            CS Research & Consulting
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Casey Skinner</p>
        <p>Case study details are confidential. Please don&apos;t redistribute.</p>
      </div>
    </footer>
  )
}
