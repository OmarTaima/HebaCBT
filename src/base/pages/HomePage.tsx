import {
  Award,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarCheck,
  ClipboardList,
  Clock,
  CreditCard,
  FolderOpen,
  GraduationCap,
  HelpCircle,
  LayoutGrid,
  Laptop,
  Link2,
  ListChecks,
  MessageCircle,
  Monitor,
  User,
  Users,
  Video,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Accordion from '../components/Accordion'
import Card from '../components/Card'
import Chip from '../components/Chip'
import FactCard from '../components/FactCard'
import Monogram from '../components/Monogram'
import NumberedStep from '../components/NumberedStep'
import SectionHeading from '../components/SectionHeading'
import WhatsAppButton from '../components/WhatsAppButton'
import { narrowContainer } from '../components/containers'
import { common } from '../content/common'
import { home } from '../content/home'
import { useContent } from '../i18n/useContent'
import { usePageTitle } from '../i18n/usePageTitle'

const BOOK_URL = 'https://wa.me/201109016169'
const CTA_WRAP = 'flex flex-wrap justify-center'
const KEY_ICONS = [User, Video, Building2, ClipboardList]
const INFO_ICONS = [Users, ListChecks, Laptop, Clock, Award, MessageCircle]
const TIP_ICONS = [CalendarCheck, FolderOpen, Users]

interface TipCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function TipCard({ icon: Icon, title, description }: TipCardProps) {
  return (
    <li className="rounded-row border border-line bg-card p-4 sm:p-5">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-numbg text-navink" aria-hidden="true">
        <Icon className="size-5" />
      </span>
      <p className="mt-3 text-ui font-bold text-ink">{title}</p>
      <p className="mt-2 text-[13.5px] leading-[1.75] text-subtle">{description}</p>
    </li>
  )
}

function HomePage() {
  const content = useContent(home)
  const shared = useContent(common)
  usePageTitle(shared.titles.home)

  return (
    <div className={`${narrowContainer} grid gap-5 lg:gap-6`}>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-card border border-line bg-card px-5 py-4 shadow-card">
        <div className="flex items-center gap-2.5">
          <Monogram className="size-9 text-nav" />
          <span className="text-[17px] font-bold text-ink">{content.heroStrip.brand}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip icon={GraduationCap}>{content.heroStrip.chips[0]}</Chip>
          <Chip icon={Monitor}>{content.heroStrip.chips[1]}</Chip>
          <Chip icon={Award}>{content.heroStrip.chips[2]}</Chip>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,62fr)_minmax(0,38fr)] lg:gap-6">
        <div className="grid gap-5 lg:gap-6">
          <Card>
            <div className="flex items-start justify-between gap-3">
              <Chip variant="success">{content.hero.chip}</Chip>
              <CreditCard className="size-7 shrink-0 text-grayicon" aria-hidden="true" />
            </div>
            <h1 className="mt-4 text-[26px] leading-[1.4] font-bold text-ink sm:text-h1">{content.hero.title}</h1>
            <p className="mt-3 text-[15px] leading-[1.9] text-body sm:text-base">{content.hero.intro}</p>
          </Card>

          <Card variant="dark">
            <span aria-hidden="true" className="banner-deco pointer-events-none absolute inset-0" />
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-label font-medium text-white/70">{content.banner.eyebrow}</p>
                <p className="mt-1.5 text-[26px] leading-[1.15] font-bold text-white sm:text-[34px]">
                  {content.banner.value}
                </p>
                <p className="mt-2 text-[13px] text-white/75 sm:text-[14px]">{content.banner.sub}</p>
              </div>
              <BarChart3 className="hidden size-9 shrink-0 text-white/85 sm:block sm:size-11" aria-hidden="true" />
            </div>
          </Card>

          <ul className="grid gap-4 sm:grid-cols-2">
            {content.keyFacts.map((fact, index) => (
              <FactCard key={fact.title} icon={KEY_ICONS[index]} title={fact.title} value={fact.value} />
            ))}
          </ul>

          <div className={CTA_WRAP}>
            <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
          </div>

          <Card>
            <p className="text-[15px] leading-[1.9] text-body sm:text-base">{content.description}</p>
          </Card>

          <div>
            <h2 className="mb-4 flex items-center gap-2.5 text-h2 font-bold text-ink">
              <BadgeCheck className="size-6 shrink-0 text-navink" aria-hidden="true" />
              {content.infoTitle}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.infoFacts.map((fact, index) => (
                <FactCard key={fact.title} icon={INFO_ICONS[index]} title={fact.title} value={fact.value} />
              ))}
            </ul>
          </div>

          <Card>
            <Accordion
              headerToggle={{ icon: HelpCircle, title: content.faq.title }}
              items={content.faq.items}
              allowMultiple
            />
          </Card>

          <div className={CTA_WRAP}>
            <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
          </div>
        </div>

        <aside aria-label={shared.ui.sidebar} className="grid gap-5 lg:gap-6">
          <Card>
            <h2 className="text-h3 font-bold text-ink">{content.skills.title}</h2>
            <ul className="mt-4 grid gap-3">
              {content.skills.items.map((item) => (
                <li key={item.title} className="rounded-row border border-line px-4 py-3.5">
                  <p className="text-ui font-bold text-ink">{item.title}</p>
                  <p className="mt-1 text-[13px] leading-[1.7] text-subtle">{item.subtitle}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <Accordion
              headerToggle={{ icon: LayoutGrid, title: content.course.title }}
              items={content.course.items}
            >
              <div className={`${CTA_WRAP} mt-4`}>
                <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
              </div>
            </Accordion>
          </Card>

          <Card>
            <Accordion headerToggle={{ icon: Link2, title: content.practical.title }}>
              <p className="text-[15px] leading-[1.9] text-body">{content.practical.body}</p>
              <div className={`${CTA_WRAP} mt-4`}>
                <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
              </div>
            </Accordion>
          </Card>
        </aside>
      </div>

      <Card>
        <SectionHeading eyebrow={content.roadmap.eyebrow} title={content.roadmap.title} />
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.roadmap.steps.map((step, index) => (
            <NumberedStep key={step.title} index={index + 1} title={step.title} description={step.description} />
          ))}
        </ul>
        <div className={`${CTA_WRAP} mt-6`}>
          <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
        </div>
      </Card>

      <Card>
        <SectionHeading eyebrow={content.tips.eyebrow} title={content.tips.title} />
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.tips.items.map((tip, index) => (
            <TipCard key={tip.title} icon={TIP_ICONS[index]} title={tip.title} description={tip.description} />
          ))}
        </ul>
        <div className={`${CTA_WRAP} mt-6`}>
          <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
        </div>
      </Card>
    </div>
  )
}

export default HomePage
