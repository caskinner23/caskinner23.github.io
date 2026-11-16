const steps = [
  {
    title: 'Influence through trust',
    body: 'I build relationships with partners and leaders early by leading with curiosity, knowing the product deeply, bringing them into the research, and tailoring insights to each audience so the trust is already there when we need it.',
    color: 'bg-sun',
  },
  {
    title: 'Lead through ambiguity',
    body: 'I stay close to customers and the business to get ahead of the roadmap and spot the hard questions before teams know to ask them. Then I run research that helps us navigate complexity and choose a path forward with confidence.',
    color: 'bg-ember',
  },
  {
    title: 'Balance speed & rigor',
    body: "Rigor should match the risk. I know when a quick read is enough, when to push for a deeper dive, which methods fit which questions, and how to get creative when the team needs direction but can't afford to wait.",
    color: 'bg-sky',
  },
  {
    title: 'Scale research impact',
    body: "I build repeatable systems that mature an org's research practice, thoughtfully applying AI to cut planning and analysis time from weeks to days while keeping depth and human judgment at the center.",
    color: 'bg-primary',
  },
]

const capabilities = [
  'Foundational research',
  'In-depth interviews',
  'Contextual inquiry & ethnography',
  'Participatory design & co-creation',
  'Diary studies',
  'Jobs-to-be-done',
  'Journey mapping',
  'Prototype & usability testing',
  'Survey design & analysis',
  'A/B testing & experimentation',
  'Multivariate statistics',
  'Behavioral science frameworks',
  'Design sprints',
  'Workshop planning & facilitation',
  'Executive storytelling',
  'AI-assisted research',
]

export function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">Approach</p>
      <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-balance md:text-5xl">
        Turning uncertainty into shared conviction
      </h2>
      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-3 bg-background p-6 md:p-8">
            <span className="flex items-center gap-3">
              <span className={`size-2.5 rounded-full ${step.color}`} aria-hidden="true" />
              <span className="font-serif text-lg italic text-muted-foreground">0{index + 1}</span>
            </span>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <h3 className="text-sm font-medium text-muted-foreground">Methods & capabilities</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {capabilities.map((item) => (
            <li key={item} className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
