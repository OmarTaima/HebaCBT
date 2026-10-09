import {
  Award,
  BadgeCheck,
  BarChart3,
  CalendarCheck,
  CreditCard,
  FolderOpen,
  GraduationCap,
  HelpCircle,
  Link2,
  Monitor,
  Phone,
  Users,
} from 'lucide-react'
import Accordion from '../components/Accordion'
import Chip from '../components/Chip'
import Monogram from '../components/Monogram'
import SectionHeading from '../components/SectionHeading'
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
const WORDMARK = 'HEBA CBT'
const TIP_ICONS = [CalendarCheck, FolderOpen, Users]
const BAND = 'py-8 sm:py-10 lg:py-12'
const BAND_DARK = 'py-8 sm:py-10 lg:py-16'
const CTA_CENTER = 'flex justify-center'

const pad2 = (value: number) => String(value).padStart(2, '0')

interface BandMarkerProps {
  index: string
  tone?: 'teal' | 'aqua'
}

function BandMarker({ index, tone = 'teal' }: BandMarkerProps) {
  return (
    <p className="ed-eyebrow mb-2" aria-hidden="true">
      <span className={`font-bold ${tone === 'aqua' ? 'text-ed-aqua' : 'text-ed-teal'}`}>{index}</span>
    </p>
  )
}

function HomePage() {
  const content = useContent(home)
  const shared = useContent(common)
  usePageTitle(shared.titles.home)
  const [valueHead, ...valueTail] = content.banner.value.split(' ')
  const valueUnit = valueTail.join(' ')

  return (
    <div className="w-full">
      <section className="border-b border-ed-rule bg-ed-cream">
        <div
          className={`${narrowContainer} anim-fade flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Monogram className="size-9 text-ed-teal" />
            <span className="text-[20px] font-bold text-ed-ink-text">{WORDMARK}</span>
            <span className="hidden h-6 w-px bg-ed-rule sm:block" aria-hidden="true" />
            <span className="ed-eyebrow text-ed-subtle">{content.heroStrip.brand}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Chip variant="tag" icon={GraduationCap}>
              {content.heroStrip.chips[0]}
            </Chip>
            <Chip variant="tag" icon={Monitor}>
              {content.heroStrip.chips[1]}
            </Chip>
            <Chip variant="tag" icon={Award}>
              {content.heroStrip.chips[2]}
            </Chip>
          </div>
        </div>
      </section>

      <section className="bg-ed-ink focus-light">
        <div className={`${narrowContainer} ${BAND_DARK} anim-fade grid gap-8 lg:grid-cols-12`}>
          <div className="lg:col-span-7">
            <p className="ed-eyebrow inline-block border-b border-ed-aqua/40 pb-1 text-label font-bold text-ed-aqua">
              <CreditCard className="me-2 inline-block size-8 align-middle text-ed-aqua/60" aria-hidden="true" />
              {content.hero.chip}
            </p>
            <h1 className="mt-5 max-w-[18ch] text-mega font-bold text-white">{content.hero.title}</h1>
            <span className="mt-6 block h-[2px] w-24 bg-ed-aqua" aria-hidden="true" />
            <p className="mt-6 max-w-[58ch] text-[17px] leading-[2] text-white/85">{content.hero.intro}</p>
            <div className="mt-8">
              <WhatsAppButton href={BOOK_URL} variant="light" label={shared.cta.book} />
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-card border border-ed-rule-dark bg-ed-teal-deep/50 p-6 lg:col-span-5 lg:p-8">
            <span aria-hidden="true" className="ed-fig-rules pointer-events-none absolute inset-0" />
            <span aria-hidden="true" className="ed-fig-rule absolute inset-x-0 top-0 h-[3px] bg-ed-aqua" />

            <div className="relative flex items-center justify-between gap-4 border-b border-ed-rule-dark pb-4">
              <p className="ed-eyebrow text-label font-bold text-ed-aqua">{content.banner.eyebrow}</p>
              <BarChart3 className="size-5 shrink-0 text-ed-aqua/60" aria-hidden="true" />
            </div>

            <p className="relative">
              <span className="block text-[clamp(3rem,7vw,5rem)] font-bold leading-[1.15] tabular-nums text-white">
                {valueHead}
              </span>
              {valueUnit && (
                <span className="mt-1 block text-[clamp(1.125rem,1.6vw,1.375rem)] font-semibold leading-[1.6] text-white/90">
                  {valueUnit}
                </span>
              )}
            </p>

            <div className="relative border-t border-ed-rule-dark pt-4">
              <p className="text-[13.5px] leading-[1.9] text-white/75">{content.banner.sub}</p>
            </div>

            <span aria-hidden="true" className="ed-fig-ticks absolute inset-x-0 bottom-0 h-3" />
          </div>
        </div>
      </section>

      <section className="bg-ed-paper">
        <div className={`${narrowContainer} ${BAND} anim-fade`}>
          <dl className="grid border-t border-ed-rule sm:grid-cols-2 lg:grid-cols-4">
            {content.keyFacts.map((fact, index) => (
              <div
                key={fact.title}
                className="border-b border-ed-rule px-0 py-6 sm:px-5 lg:border-b-0 lg:border-s lg:px-6 lg:py-7 lg:first:border-s-0"
              >
                <p className="ed-eyebrow text-ed-teal tabular-nums" aria-hidden="true">
                  {pad2(index + 1)}
                </p>
                <dt className="mt-2 text-ui font-bold text-ed-ink-text">{fact.title}</dt>
                <dd className="mt-1.5 text-[14px] leading-[1.8] text-ed-body">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ed-cream">
        <div className={`${narrowContainer} ${BAND} anim-fade relative`}>
          <BandMarker index="01" />
          <p className="mt-4 max-w-[66ch] text-[17px] leading-[2.1] text-ed-body">{content.description}</p>
          <Monogram className="pointer-events-none absolute end-0 top-4 size-48 text-ed-teal opacity-[0.05]" />
        </div>
      </section>

      <section className="bg-ed-paper">
        <div className={`${narrowContainer} ${BAND} anim-fade`}>
          <div className="grid items-end gap-4 border-b-2 border-ed-ink pb-5 lg:grid-cols-12">
            <h2 className="flex items-center gap-3 text-band-title font-bold text-ed-ink-text lg:col-span-8">
              <BadgeCheck className="size-6 shrink-0 text-ed-teal" aria-hidden="true" />
              {content.infoTitle}
            </h2>
            <span className="ms-auto block h-[3px] w-16 bg-ed-teal lg:col-span-4" aria-hidden="true" />
          </div>
          <ol className="mt-2">
            {content.infoFacts.slice(0, 5).map((fact, index) => (
              <li
                key={fact.title}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-b border-ed-rule py-6 transition-colors duration-150 ease-out-soft hover:bg-ed-cream lg:grid-cols-[auto_240px_1fr]"
              >
                <span className="text-figure-sm font-bold tabular-nums text-ed-aqua/50" aria-hidden="true">
                  {pad2(index + 1)}
                </span>
                <span className="col-start-2 text-ui font-bold text-ed-ink-text">{fact.title}</span>
                <span className="col-start-2 text-[15px] leading-[1.9] text-ed-body lg:col-start-3">{fact.value}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ed-green">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(6,40,26,0.18)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div className={`${narrowContainer} ${BAND} anim-fade`}>
          <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-band-title font-bold text-ed-on-green">{content.infoFacts[5].title}</h2>
              <p className="mt-2 max-w-[52ch] text-[15px] leading-[1.8] text-ed-on-green/85">
                {content.infoFacts[5].value}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <WhatsAppButton href={BOOK_URL} variant="onGreen" label={shared.cta.book} />
              <a
                href={BOOK_TEL}
                className="inline-flex min-h-11 items-center gap-2 text-[14px] font-bold text-ed-on-green underline underline-offset-4 transition-colors duration-150 ease-out-soft hover:text-ed-on-green/80 focus-visible:outline-2 focus-visible:outline-ed-on-green"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <span dir="ltr" className="tabular-nums">
                  {BOOK_PHONE}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ed-paper">
        <div className={`${narrowContainer} ${BAND} anim-fade`}>
          <div className="mx-auto max-w-[820px]">
            <BandMarker index="02" />
            <Accordion
              variant="editorial"
              headerToggle={{ icon: HelpCircle, title: content.faq.title }}
              items={content.faq.items}
              allowMultiple
            >
              <div className={`mt-8 ${CTA_CENTER}`}>
                <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-ed-cream">
        <div className={`${narrowContainer} ${BAND} anim-fade`}>
          <SectionHeading variant="editorial" index="03" title={content.skills.title} />
          <ul className="mt-6 grid border-t border-ed-rule lg:grid-cols-3">
            {content.skills.items.map((item, index) => (
              <li
                key={item.title}
                className="border-b border-ed-rule px-0 py-7 lg:border-b-0 lg:border-s lg:px-7 lg:first:border-s-0"
              >
                <span className="block text-figure-sm font-bold text-ed-teal/25" aria-hidden="true">
                  {pad2(index + 1)}
                </span>
                <p className="mt-3 text-h3 font-bold text-ed-ink-text">{item.title}</p>
                <p className="mt-2 text-[14px] leading-[1.8] text-ed-subtle">{item.subtitle}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ed-ink focus-light">
        <div className={`${narrowContainer} ${BAND_DARK} anim-fade`}>
          <SectionHeading variant="editorial" index="04" title={content.course.title} onDark />
          <Accordion variant="editorial" tone="onDark" layout="grid" columns={3} items={content.course.items}>
            <div className={`mt-8 ${CTA_CENTER}`}>
              <WhatsAppButton href={BOOK_URL} variant="light" label={shared.cta.book} />
            </div>
          </Accordion>
        </div>
      </section>

      <section className="bg-ed-teal-deep focus-light">
        <div className={`${narrowContainer} ${BAND_DARK} anim-fade`}>
          <div className="mx-auto max-w-[56ch]">
            <span aria-hidden="true" className="block text-[64px] font-bold leading-none text-ed-aqua/40">
              &rdquo;
            </span>
            <Accordion variant="editorial" tone="onDark" headerToggle={{ icon: Link2, title: content.practical.title }}>
              <p className="max-w-[78ch] text-start text-[18px] leading-[2] text-white/90">{content.practical.body}</p>
              <div className={`mt-5 ${CTA_CENTER}`}>
                <WhatsAppButton href={BOOK_URL} variant="light" label={shared.cta.book} />
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-ed-cream">
        <div className={`${narrowContainer} ${BAND} anim-fade`}>
          <SectionHeading variant="editorial" index="05" title={content.roadmap.title} />
          <ol className="mt-6 grid border-t-2 border-ed-ink lg:grid-cols-4">
            {content.roadmap.steps.map((step, index) => (
              <li
                key={step.title}
                className="border-b border-ed-rule px-0 pb-7 pt-6 lg:border-b-0 lg:border-s lg:px-6 lg:first:border-s-0"
              >
                <span className="block text-figure-sm font-bold tabular-nums text-ed-teal" aria-hidden="true">
                  {pad2(index + 1)}
                </span>
                <p className="mt-2 text-ui font-bold text-ed-ink-text">{step.title}</p>
                <p className="mt-2 text-[13.5px] leading-[1.8] text-ed-body">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className={`mt-10 ${CTA_CENTER}`}>
            <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
          </div>
        </div>
      </section>

      <section className="bg-ed-paper">
        <div className={`${narrowContainer} ${BAND} anim-fade`}>
          <SectionHeading variant="editorial" index="06" title={content.tips.title} />
          <ul className="mt-6 grid gap-6 lg:grid-cols-3">
            {content.tips.items.map((tip, index) => {
              const Icon = TIP_ICONS[index]
              return (
                <li key={tip.title} className="border-t-2 border-ed-ink pt-5">
                  <Icon className="size-8 text-ed-teal" aria-hidden="true" />
                  <p className="mt-3 text-ui font-bold text-ed-ink-text">{tip.title}</p>
                  <p className="mt-2 text-[13.5px] leading-[1.8] text-ed-subtle">{tip.description}</p>
                </li>
              )
            })}
          </ul>
          <div className={`mt-10 ${CTA_CENTER}`}>
            <WhatsAppButton href={BOOK_URL} variant="solid" label={shared.cta.book} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
