import { User } from 'lucide-react'
import Tile from '../components/Tile'
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
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <Tile variant="teal" className="lg:col-span-5">
          <h1 className="text-h2 font-bold text-white sm:text-h1 lg:text-display-sm">{content.title}</h1>
          <span aria-hidden="true" className="accent-rule-bright mt-4 block h-[4px] w-20 rounded-full" />
          <p className="mt-4 text-lead text-white">{content.subtitle}</p>
        </Tile>

        <Tile variant="light" className="lg:col-span-7">
          <span
            className="grid size-10 shrink-0 place-items-center rounded-full grad-teal text-white"
            aria-hidden="true"
          >
            <User className="size-5" />
          </span>
          <p className="mt-4 text-lead text-body">{content.body}</p>
          <div className="mt-8 flex flex-wrap justify-start">
            <WhatsAppButton href={ABOUT_WHATSAPP} variant="solid" label={content.whatsapp} />
          </div>
        </Tile>
      </div>
    </div>
  )
}

export default AboutPage
