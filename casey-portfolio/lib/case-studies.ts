// Public previews only. Full case study details are encrypted in lib/protected-content.json
// (source: content/case-studies.private.json, which is never committed).

export type CaseStudyPreview = {
  slug: string
  title: string
  client: string
  year: string
  methods: string[]
  summary: string
  image: string
  imageAlt: string
  /** Optional CSS object-position to keep the subject in frame when cropped, e.g. '75% center'. */
  imagePosition?: string
  /** Optional object-position for phone-sized cards only (below 768px); falls back to imagePosition. */
  imagePositionMobile?: string
}

export type CaseStudyDetails = {
  role: string
  scope: string
  impact: { value: string; label: string }[]
  sections: { heading: string; body: string[] }[]
  insight: string
}

export type CaseStudy = CaseStudyPreview & CaseStudyDetails

export const caseStudies: CaseStudyPreview[] = [
  {
    "slug": "enthusiast-co-lab",
    "title": "The Enthusiast Co-Lab: systematizing eBay’s participatory design practice and driving cross-functional research engagement",
    "client": "eBay · Core Buyer Experience",
    "year": "2025–2026",
    "methods": [
      "Participatory design",
      "Co-creation",
      "AI-assisted research",
      "Cross-functional engagement"
    ],
    "summary": "I created Co-Lab, a bi-weekly co-creation program with eBay’s enthusiast customers, and used AI tooling like Gemini and Claude Code to cut study planning and analysis from a week to 3 days.",
    "image": "/images/case-co-lab.jpg",
    "imageAlt": "Several people around a workshop table mapping a user journey with sketches, wireframes and yellow, orange and teal sticky notes, with a digital whiteboard open on a laptop"
  },
  {
    "slug": "view-item",
    "title": "Simplifying and personalizing eBay’s highest-traffic page",
    "client": "eBay · Core Buyer Experience",
    "year": "2025",
    "methods": [
      "Jobs-to-be-done",
      "Rapid concept testing",
      "Feature prioritization",
      "Design sprints"
    ],
    "summary": "The View Item page reaches 35M users a month and drives $33.6B in annual GMV. I led the design sprints and rapid concept testing that identified & prioritized AI-powered personalization, category verticalization, and trust-building feature opportunities.",
    "image": "/images/case-view-item.png",
    "imageAlt": "Printed mobile product page wireframes on a table beside a smartphone and markers"
  },
  {
    "slug": "seller-capital",
    "title": "Earning seller trust to reduce perceived risk for a financing product",
    "client": "eBay · Financial Services",
    "year": "2022–2024",
    "methods": [
      "In-depth interviews",
      "Concept testing",
      "Journey mapping",
      "Behavioral data analysis"
    ],
    "summary": "Offering financing to small sellers only works if they trust it. I led research that identified the foundational trust principles and unnecessary friction points that shaped eBay Seller Capital.",
    "image": "/images/case-seller-capital.png",
    "imageAlt": "A small reseller’s home workspace with shipping boxes, a laptop and handwritten notes"
  },
  {
    "slug": "unpaid-items",
    "title": "Reducing unpaid items by 56% without hurting buyer and seller experiences",
    "client": "eBay · Trust & Auctions",
    "year": "2023",
    "methods": [
      "Contextual inquiry",
      "Participatory design",
      "Surveys & CSAT",
      "Workshop facilitation"
    ],
    "summary": "Unpaid items cost buyers, sellers and eBay billions. I built and aligned stakeholders on a mixed-methods roadmap to reduce them, and surfaced a shipping risk that changed the launch strategy.",
    "image": "/images/case-unpaid-items.jpg",
    "imageAlt": "A seller’s hands packing sleeved trading cards and a vintage toy robot into one shipping box, next to a phone showing a payment confirmation checkmark"
  },
  {
    "slug": "classroom-of-the-future",
    "title": "Re-imagining the classroom of the future",
    "client": "Haworth · Workplace Design & Innovation",
    "year": "2020–2021",
    "methods": [
      "Instructor interviews",
      "Pre/post student surveys",
      "In-class observation",
      "Mixed-methods synthesis"
    ],
    "summary": "Haworth partnered with Grand Valley State University to imagine classrooms built for team-based, experiential learning after COVID-19. I led a mixed-methods study of how professors and students actually used new collaborative spaces.",
    "image": "/images/case-classroom.jpg",
    "imageAlt": "College students working in small teams in a flexible classroom, mapping ideas with sticky notes on the floor and on a rolling whiteboard"
  }
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
