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
  Phone,
  User,
  Users,
  Video,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Accordion from '../components/Accordion'
import Chip from '../components/Chip'
import FactCard from '../components/FactCard'
import Monogram from '../components/Monogram'
import NumberedStep from '../components/NumberedStep'
import SectionHeading from '../components/SectionHeading'
import Tile from '../components/Tile'
import WhatsAppButton from '../components/WhatsAppButton'
import { narrowContainer } from '../components/containers'
import { common } from '../content/common'
import { home } from '../content/home'
import { useContent } from '../i18n/useContent'
import { usePageTitle } from '../i18n/usePageTitle'

const BOOK_NUMBER = '201109016169'
const BOOK_URL = `https://wa.me/${BOOK_NUMBER}`
const BOOK_TEL = `tel:+${BOOK_NUMBER}`
const BOOK_PHONE = '+20 110 901 6169'
const KEY_ICONS = [User, Video, Building2, ClipboardList]
const INFO_ICONS = [Users, ListChecks, Laptop, Clock, Award, MessageCircle]
const TIP_ICONS = [CalendarCheck, FolderOpen, Users]
const CTA_DIVIDER = 'mt-5 flex justify-center border-t border-line pt-5'
const CTA_PLAIN = 'mt-8 flex justify-center'
const LEAD_VALUE_CLASS = '[&>p:last-child]:text-[15px] [&>p:last-child]:leading-[1.9]'

interface TipCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function TipCard({ icon: Icon, title, description }: TipCardProps) {
  return (
    <li className="rounded-row border border-line bg-card p-4 sm:p-5">
      <span className="grid size-9 shrink-0 place-items-center rounded-well grad-teal text-white" aria-hidden="true">
        <Icon className="size-5" />
      </span>
      <p className="mt-3 text-ui font-bold text-ink">{title}</p>
      <p className="mt-2 max-w-[62ch] text-[13.5px] leading-[1.75] text-subtle">{description}</p>
    </li>
  )
}

function HomePage() {
  const content = useContent(home)
  const shared = useContent(common)
  usePageTitle(shared.titles.home)

  return (
    <div className={`${narrowContainer} space-y-4 md:space-y-5`}>
      <header className="anim-rise flex flex-wrap items-center justify-between gap-3 border-b border-line-strong pb-4">
        <div className="flex items-center gap-2.5">
          <span
            className="grid size-11 shrink-0 place-items-center rounded-well grad-teal text-white"
            aria-hidden="true"
          >
            <Monogram className="size-6" />
          </span>
          <span className="text-h3 font-bold text-ink">{content.heroStrip.brand}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip icon={GraduationCap}>{content.heroStrip.chips[0]}</Chip>
          <Chip icon={Monitor}>{content.heroStrip.chips[1]}</Chip>
          <Chip icon={Award}>{content.heroStrip.chips[2]}</Chip>
        </div>
      </header>

      <div className="grid gap-4 md:gap-5 lg:grid-cols-12">
        <Tile
          variant="teal"
          className="anim-rise-1 bento-hover flex min-h-[340px] flex-col rounded-bento lg:col-span-8 lg:min-h-[420px]"
        >
          <div className="flex items-center justify-between gap-3">
            <Chip variant="onDark">{content.hero.chip}</Chip>
            <span className="grid size-10 shrink-0 place-items-center rounded-well bg-white/10" aria-hidden="true">
              <CreditCard className="size-5" />
            </span>
          </div>
          <h1 className="mt-5 text-[26px] leading-[1.3] font-bold text-white sm:text-h1 lg:text-display-lg lg:leading-[1.06]">
            {content.hero.title}
          </h1>
          <span aria-hidden="true" className="accent-rule-bright mt-4 block h-[4px] w-20 rounded-full" />
          <p className="mt-4 max-w-[62ch] text-lead text-white/90">{content.hero.intro}</p>
        </Tile>

        <Tile variant="dark" className="anim-rise-2 bento-hover flex flex-col justify-between rounded-bento lg:col-span-4">
          <span aria-hidden="true" className="banner-deco pointer-events-none absolute inset-0" />
          <div className="relative z-10">
            <p className="text-label text-white/70">{content.banner.eyebrow}</p>
            <p className="mt-1.5 text-[32px] leading-[1.1] font-bold text-white sm:whitespace-nowrap sm:text-[40px]">
              {content.banner.value}
            </p>
            <p className="mt-2 text-[13px] text-white/75">{content.banner.sub}</p>
          </div>
          <BarChart3 className="relative z-10 mt-6 size-10 text-aqua/80" aria-hidden="true" />
        </Tile>

        {content.keyFacts.map((fact, index) => {
          const KeyIcon = KEY_ICONS[index]
          return (
            <div
              key={fact.title}
              className={`bento-hover anim-rise-${index + 1} rounded-card border border-line bg-card p-4 sm:p-5 lg:col-span-3`}
            >
              <span className="grid size-9 place-items-center rounded-well bg-tint text-navink" aria-hidden="true">
                <KeyIcon className="size-5" />
              </span>
              <p className="mt-3 text-label font-bold text-navink">{fact.title}</p>
              <p className="mt-1.5 text-ui font-bold text-ink">{fact.value}</p>
            </div>
          )
        })}
      </div>

      <Tile variant="light" className="overflow-hidden">
        <p className="max-w-[75ch] text-lead text-body">{content.description}</p>
        <Monogram className="pointer-events-none absolute -bottom-6 end-4 size-40 text-nav opacity-[0.06]" />
      </Tile>

      <div className="grid gap-4 md:gap-5 lg:grid-cols-12">
        <Tile variant="tint" className="lg:col-span-4">
          <h2 className="flex items-center gap-2.5 text-h2 font-bold text-ink">
            <BadgeCheck className="size-6 shrink-0 text-navink" aria-hidden="true" />
            {content.infoTitle}
          </h2>
          <span aria-hidden="true" className="accent-rule mt-4 block h-[3px] w-full rounded-full opacity-70" />
        </Tile>

        <Tile variant="light" className="bento-hover lg:col-span-8">
          <ul>
            <FactCard
              icon={INFO_ICONS[0]}
              title={content.infoFacts[0].title}
              value={content.infoFacts[0].value}
              className={LEAD_VALUE_CLASS}
            />
          </ul>
        </Tile>

        <Tile variant="light" className="bento-hover lg:col-span-4">
          <ul>
            <FactCard icon={INFO_ICONS[1]} title={content.infoFacts[1].title} value={content.infoFacts[1].value} />
          </ul>
        </Tile>

        <Tile variant="light" className="bento-hover lg:col-span-4">
          <ul>
            <FactCard icon={INFO_ICONS[2]} title={content.infoFacts[2].title} value={content.infoFacts[2].value} />
          </ul>
        </Tile>

        <Tile variant="light" className="bento-hover lg:col-span-4">
          <ul>
            <FactCard icon={INFO_ICONS[3]} title={content.infoFacts[3].title} value={content.infoFacts[3].value} />
          </ul>
        </Tile>

        <Tile variant="light" className="lg:col-span-12">
          <ul>
            <FactCard
              icon={INFO_ICONS[4]}
              title={content.infoFacts[4].title}
              value={content.infoFacts[4].value}
              layout="row"
            />
          </ul>
        </Tile>
      </div>

      <div className="grid gap-4 md:gap-5 lg:grid-cols-12 lg:items-start">
        <div className="grid gap-4 md:gap-5 lg:col-span-9">
          <Tile variant="light">
            <Accordion
              headerToggle={{ icon: HelpCircle, title: content.faq.title }}
              items={content.faq.items}
              allowMultiple
            >
              <div className={CTA_DIVIDER}>
                <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
              </div>
            </Accordion>
          </Tile>

          <Tile variant="tint">
            <h2 className="text-h3 font-bold text-ink">{content.skills.title}</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {content.skills.items.map((item) => (
                <li key={item.title} className="rounded-row border border-tintline bg-card px-4 py-3.5">
                  <p className="text-ui font-bold text-ink">{item.title}</p>
                  <p className="mt-1 text-[13px] leading-[1.7] text-subtle">{item.subtitle}</p>
                </li>
              ))}
            </ul>
          </Tile>

          <Tile variant="light">
            <Accordion
              headerToggle={{ icon: LayoutGrid, title: content.course.title }}
              items={content.course.items}
              layout="grid"
            >
              <div className={CTA_DIVIDER}>
                <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
              </div>
            </Accordion>
          </Tile>

          <Tile variant="dark" className="rounded-bento self-start overflow-hidden">
            <span aria-hidden="true" className="banner-deco pointer-events-none absolute inset-0" />
            <div className="relative z-10">
              <Accordion tone="onDark" headerToggle={{ icon: Link2, title: content.practical.title }}>
                <p className="max-w-[78ch] text-[15px] leading-[1.9] text-white/85">{content.practical.body}</p>
                <div className="mt-5 flex justify-center">
                  <WhatsAppButton href={BOOK_URL} variant="light" label={shared.cta.book} />
                </div>
              </Accordion>
            </div>
            <Link2
              className="pointer-events-none absolute -bottom-6 start-4 hidden size-24 text-white/10 lg:block"
              aria-hidden="true"
            />
          </Tile>
        </div>

        <aside aria-label={shared.ui.sidebar} className="self-start lg:col-span-3 lg:sticky lg:top-[88px]">
          <Tile variant="green" className="overflow-hidden rounded-bento">
            <span aria-hidden="true" className="canvas-dots pointer-events-none absolute inset-0" />
            <MessageCircle
              className="absolute end-4 bottom-4 hidden size-16 text-white/20 lg:block"
              aria-hidden="true"
            />
            <div className="relative z-10 flex w-full flex-col items-start gap-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-well bg-white/25" aria-hidden="true">
                <CalendarCheck className="size-6 text-ongreen" />
              </span>
              <div className="flex flex-col items-start gap-2.5">
                <p className="text-h3 font-bold text-ongreen">{content.infoFacts[5].title}</p>
                <p className="max-w-[46ch] text-[15px] leading-[1.8] text-ongreen/85">{content.infoFacts[5].value}</p>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <WhatsAppButton
                  href={BOOK_URL}
                  variant="onGreen"
                  label={shared.cta.book}
                  className="w-full sm:w-full"
                />
                <a
                  href={BOOK_TEL}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg text-[14px] font-bold text-ongreen transition-colors duration-150 ease-out-soft hover:underline underline-offset-4 focus-visible:outline-ongreen"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <span dir="ltr" className="tabular-nums">
                    {BOOK_PHONE}
                  </span>
                </a>
              </div>
            </div>
          </Tile>
        </aside>
      </div>

      <Tile variant="light">
        <SectionHeading eyebrow={content.roadmap.eyebrow} title={content.roadmap.title} />
        <div className="relative mt-8">
          <span
            aria-hidden="true"
            className="absolute inset-x-[12%] top-[22px] hidden h-[2px] bg-gradient-to-l from-transparent via-tintline to-transparent lg:block"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {content.roadmap.steps.map((step, index) => (
              <NumberedStep
                key={step.title}
                index={index + 1}
                title={step.title}
                description={step.description}
                orientation="horizontal"
              />
            ))}
          </ul>
        </div>
        <div className={CTA_PLAIN}>
          <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
        </div>
      </Tile>

      <Tile variant="quiet">
        <SectionHeading eyebrow={content.tips.eyebrow} title={content.tips.title} />
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.tips.items.map((tip, index) => (
            <TipCard key={tip.title} icon={TIP_ICONS[index]} title={tip.title} description={tip.description} />
          ))}
        </ul>
        <div className={CTA_PLAIN}>
          <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
        </div>
      </Tile>
    </div>
  )
}

export default HomePage
