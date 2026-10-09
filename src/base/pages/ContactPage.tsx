import { Globe, Mail, MessageSquare } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Card from '../components/Card'
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
      <Card>
        <h1 className="text-start text-h2 font-bold text-ink sm:text-h1">{content.title}</h1>
        <div className="mt-6 grid gap-3">
          {rows.map((row) => (
            <a
              key={row.label}
              href={row.href}
              className="flex items-center gap-3 rounded-row border border-line px-4 py-4 transition hover:border-nav/40 hover:bg-hoverwash sm:px-5"
            >
              <row.icon className="size-5 shrink-0 text-navink" aria-hidden="true" />
              <span className="text-ui text-ink sm:whitespace-nowrap">
                <span className="font-bold">{row.label}:</span>{' '}
                <span dir={row.ltr ? 'ltr' : undefined}>{row.value}</span>
              </span>
            </a>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default ContactPage
