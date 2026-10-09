import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type ChipVariant = 'muted' | 'success' | 'outline' | 'onDark' | 'tag'

interface ChipProps {
  children: ReactNode
  variant?: ChipVariant
  icon?: LucideIcon
  className?: string
}

const variantClass: Record<ChipVariant, string> = {
  muted: 'rounded-full bg-pill text-onpill font-semibold ring-1 ring-inset ring-black/[0.04]',
  success:
    'rounded-full bg-chipbg text-chiptext font-bold ring-1 ring-inset ring-chiptext/20 shadow-[0_1px_2px_rgba(10,122,66,.10)]',
  outline: 'rounded-full bg-card text-body font-semibold ring-1 ring-inset ring-line-strong',
  onDark: 'rounded-full bg-card text-banner font-bold ring-1 ring-inset ring-white/30',
  tag: 'gap-2 border border-ed-rule px-3 py-1.5 font-semibold text-ed-body',
}

const padClass: Record<ChipVariant, string> = {
  muted: 'px-3.5 py-1.5 gap-1.5',
  success: 'px-3.5 py-1.5 gap-1.5',
  outline: 'px-4 py-1.5 gap-1.5',
  onDark: 'px-3.5 py-1.5 gap-1.5',
  tag: '',
}

function Chip({ children, variant = 'muted', icon: Icon, className }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center text-label sm:whitespace-nowrap ${padClass[variant]} ${variantClass[variant]}${className ? ` ${className}` : ''}`}
    >
      {variant === 'outline' || variant === 'tag' ? (
        <span
          className={
            variant === 'tag'
              ? 'size-1.5 shrink-0 bg-ed-teal'
              : 'size-1.5 shrink-0 rounded-full bg-gradient-to-br from-nav to-[#6ec9cf]'
          }
          aria-hidden="true"
        />
      ) : null}
      {Icon ? <Icon className="size-3.5 shrink-0 text-navink" aria-hidden="true" /> : null}
      {children}
    </span>
  )
}

export default Chip
