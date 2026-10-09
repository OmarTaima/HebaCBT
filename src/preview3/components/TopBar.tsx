import { Phone } from 'lucide-react'
import { common } from '../content/common'
import { useContent } from '../i18n/useContent'
import { innerContainer } from './containers'

function TopBar() {
  const { topBar } = useContent(common)

  return (
    <div className="bg-ink">
      <div className={`${innerContainer} flex items-center justify-center gap-2 py-2.5 text-[15px] font-bold text-topbar`}>
        <Phone className="size-4" aria-hidden="true" />
        <a
          href={`tel:${topBar.phone}`}
          dir="ltr"
          className="transition-opacity duration-150 hover:opacity-85"
        >
          {topBar.phone}
        </a>
      </div>
    </div>
  )
}

export default TopBar
