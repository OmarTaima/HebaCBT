export type Locale = 'ar' | 'en'

export interface AccordionItem {
  id: string
  title: string
  content: string
}

export interface Fact {
  title: string
  value: string
}

export interface Skill {
  title: string
  subtitle: string
}

export interface Step {
  title: string
  description: string
}

export interface Tip {
  title: string
  description: string
}

export interface ContactRow {
  label: string
  value: string
  href: string
  ltr: boolean
}

export interface LegalSection {
  title: string
  body: string
}

export interface CommonContent {
  nav: {
    home: string
    about: string
    contact: string
  }
  footer: {
    terms: string
    privacy: string
    label: string
  }
  ui: {
    mainNav: string
    mobileNav: string
    logoAlt: string
    languageMenu: string
    arabic: string
    english: string
    openMenu: string
    closeMenu: string
    skipToContent: string
    newTab: string
    chatLabel: string
    chatName: string
    sidebar: string
  }
  cta: {
    book: string
  }
  topBar: {
    phone: string
  }
  titles: {
    home: string
    about: string
    contact: string
    terms: string
    privacy: string
  }
}

export interface HomeContent {
  heroStrip: {
    brand: string
    chips: [string, string, string]
  }
  hero: {
    chip: string
    title: string
    intro: string
  }
  banner: {
    eyebrow: string
    value: string
    sub: string
  }
  keyFacts: [Fact, Fact, Fact, Fact]
  description: string
  infoTitle: string
  infoFacts: [Fact, Fact, Fact, Fact, Fact, Fact]
  faq: {
    title: string
    items: [AccordionItem, AccordionItem, AccordionItem]
  }
  skills: {
    title: string
    items: [Skill, Skill, Skill]
  }
  course: {
    title: string
    items: AccordionItem[]
  }
  practical: {
    title: string
    body: string
  }
  roadmap: {
    eyebrow: string
    title: string
    steps: [Step, Step, Step, Step]
  }
  tips: {
    eyebrow: string
    title: string
    items: [Tip, Tip, Tip]
  }
}

export interface AboutContent {
  title: string
  subtitle: string
  body: string
  whatsapp: string
}

export interface ContactContent {
  title: string
  rows: [ContactRow, ContactRow, ContactRow]
}

export interface LegalContent {
  title: string
  intro: string
  sections: LegalSection[]
  updated: string
}

export interface TermsContent extends LegalContent {
  sections: [
    LegalSection,
    LegalSection,
    LegalSection,
    LegalSection,
    LegalSection,
    LegalSection,
  ]
}

export interface PrivacyContent extends LegalContent {
  sections: [LegalSection, LegalSection, LegalSection, LegalSection, LegalSection]
}
