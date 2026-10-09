import { MessageSquare } from 'lucide-react'
import { common } from '../content/common'
import { useContent } from '../i18n/useContent'

type WhatsAppVariant = 'solid' | 'outline' | 'light' | 'onGreen'

interface WhatsAppButtonProps {
  href: string
  variant: WhatsAppVariant
  label: string
  className?: string
}

const baseClass =
  'group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-bold transition-all duration-150 ease-out-soft active:scale-[.97] sm:w-auto'

const variantClass: Record<WhatsAppVariant, string> = {
  solid: 'bg-wa text-ongreen shadow-wa hover:brightness-105 hover:shadow-wa-hover focus-visible:outline-2 focus-visible:outline-ongreen',
  outline:
    'border border-nav/25 bg-card text-navink ring-1 ring-inset ring-nav/10 hover:-translate-y-px hover:border-nav/45 hover:bg-tealwash hover:shadow-hover focus-visible:outline-navink',
  light: 'bg-card text-banner hover:-translate-y-px hover:shadow-hover focus-visible:outline-white',
  onGreen: 'bg-card text-banner hover:-translate-y-px hover:shadow-hover focus-visible:outline-ongreen',
}

const iconClass: Record<WhatsAppVariant, string> = {
  solid: '',
  outline: 'text-navink',
  light: 'text-banner',
  onGreen: 'text-banner',
}

function WhatsAppButton({ href, variant, label, className }: WhatsAppButtonProps) {
  const { ui } = useContent(common)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${variantClass[variant]}${className ? ` ${className}` : ''}`}
    >
      <MessageSquare
        className={`size-4.5 shrink-0 transition-transform duration-150 group-hover:scale-110 sm:size-5 ${iconClass[variant]}`}
        aria-hidden="true"
      />
      <span>{label}</span>
      <span className="sr-only">{ui.newTab}</span>
    </a>
  )
}

export default WhatsAppButton
