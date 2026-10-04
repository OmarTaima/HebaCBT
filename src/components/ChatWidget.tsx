import { MessageCircle } from 'lucide-react'
import { common } from '../content/common'
import { useContent } from '../i18n/useContent'

function ChatWidget() {
  const { ui } = useContent(common)

  return (
    <aside
      aria-label={ui.chatLabel}
      className="fixed right-5 bottom-5 z-50 flex items-center gap-2 rtl:flex-row-reverse"
    >
      <span className="hidden rounded-full bg-card px-4 py-2 text-label font-semibold text-ink shadow-pop sm:inline-flex">
        {ui.chatName}
      </span>
      <a
        href="https://wa.me/201140433907"
        target="_blank"
        rel="noopener noreferrer"
        className="grid size-12 place-items-center rounded-full bg-chat text-white shadow-pop transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-navink"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="sr-only">{ui.chatLabel}</span>
        <span className="sr-only">{ui.newTab}</span>
      </a>
    </aside>
  )
}

export default ChatWidget
