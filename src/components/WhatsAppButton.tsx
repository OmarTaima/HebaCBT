import { MessageSquare } from 'lucide-react'
import { common } from '../content/common'
import { useContent } from '../i18n/useContent'

type WhatsAppVariant = 'solid' | 'outline'

interface WhatsAppButtonProps {
  href: string
  variant: WhatsAppVariant
  label: string
  className?: string
}

const baseClass =
  'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-bold transition active:scale-[.98] sm:w-auto'

const variantClass: Record<WhatsAppVariant, string> = {
  solid: 'bg-wa text-white shadow-wa hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-navink',
  outline: 'border border-line-strong bg-card text-ink hover:bg-hoverwash',
}

const iconClass: Record<WhatsAppVariant, string> = {
  solid: 'text-white',
  outline: 'text-navink',
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
      <MessageSquare className={`size-4.5 shrink-0 sm:size-5 ${iconClass[variant]}`} aria-hidden="true" />
      <span>{label}</span>
      <span className="sr-only">{ui.newTab}</span>
    </a>
  )
}

export default WhatsAppButton
