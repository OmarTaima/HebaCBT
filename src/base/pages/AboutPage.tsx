import { User } from 'lucide-react'
import Card from '../components/Card'
import WhatsAppButton from '../components/WhatsAppButton'
import { plainContainer } from '../components/containers'
import { about } from '../content/about'
import { common } from '../content/common'
import { useContent } from '../i18n/useContent'
import { usePageTitle } from '../i18n/usePageTitle'

const ABOUT_WHATSAPP = 'https://wa.me/201140433907'

function AboutPage() {
  const content = useContent(about)
  const shared = useContent(common)
  usePageTitle(shared.titles.about)

  return (
    <div className={plainContainer}>
      <Card>
        <h1 className="text-h2 font-bold text-ink sm:text-h1">{content.title}</h1>
        <div className="mt-4 flex items-center gap-3">
          <span
            className="grid size-10 shrink-0 place-items-center rounded-full bg-pill text-grayicon"
            aria-hidden="true"
          >
            <User className="size-5" />
          </span>
          <p className="text-[15px] leading-[1.95] text-body">{content.subtitle}</p>
        </div>
        <p className="mt-3 text-[15px] leading-[1.95] text-body">{content.body}</p>
        <div className="mt-8 flex flex-wrap justify-start">
          <WhatsAppButton href={ABOUT_WHATSAPP} variant="outline" label={content.whatsapp} />
        </div>
      </Card>
    </div>
  )
}

export default AboutPage
