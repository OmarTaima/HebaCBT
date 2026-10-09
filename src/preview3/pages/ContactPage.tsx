import { ChevronRight, Globe, Mail, MessageSquare } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Tile from '../components/Tile'
import { plainContainer } from '../components/containers'
import { common } from '../content/common'
import { contact } from '../content/contact'
import { useContent } from '../i18n/useContent'
import { usePageTitle } from '../i18n/usePageTitle'

const ROW_ICONS: [LucideIcon, LucideIcon, LucideIcon] = [Globe, MessageSquare, Mail]

function ContactPage() {
  const content = useContent(contact)
  const shared = useContent(common)
  usePageTitle(shared.titles.contact)

  const [siteRow, phoneRow, emailRow] = content.rows
  const rows = [
    { ...siteRow, icon: ROW_ICONS[0] },
    { ...phoneRow, icon: ROW_ICONS[1] },
    { ...emailRow, icon: ROW_ICONS[2] },
  ]

  return (
    <div className={plainContainer}>
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <Tile variant="teal" className="lg:col-span-4">
          <h1 className="text-h2 font-bold text-white sm:text-h1 lg:text-display-sm">{content.title}</h1>
          <span aria-hidden="true" className="accent-rule-bright mt-4 block h-[4px] w-20 rounded-full" />
        </Tile>

        <Tile variant="light" className="lg:col-span-8">
          <div className="grid gap-3">
            {rows.map((row) => (
              <a
                key={row.label}
                href={row.href}
                className="group flex items-center gap-3 rounded-row border border-tintline bg-tint px-4 py-4 transition-all duration-150 ease-out-soft hover:-translate-y-px hover:border-nav/30 hover:bg-card hover:shadow-hover sm:px-5"
              >
                <row.icon
                  className="size-5 shrink-0 text-navink transition-transform duration-150 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="text-ui text-ink sm:whitespace-nowrap">
                  <span className="font-bold">{row.label}:</span>{' '}
                  <span dir={row.ltr ? 'ltr' : undefined}>{row.value}</span>
                </span>
                <ChevronRight
                  className="ms-auto size-4 shrink-0 text-subtle opacity-0 transition-opacity duration-150 ease-out-soft group-hover:opacity-100 group-focus-visible:opacity-100 rtl:-scale-x-100"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </Tile>
      </div>
    </div>
  )
}

export default ContactPage
