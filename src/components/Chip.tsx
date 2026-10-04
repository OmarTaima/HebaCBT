import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type ChipVariant = 'muted' | 'success' | 'outline'

interface ChipProps {
  children: ReactNode
  variant?: ChipVariant
  icon?: LucideIcon
  className?: string
}

const variantClass: Record<ChipVariant, string> = {
  muted: 'bg-pill text-onpill font-semibold',
  success: 'bg-chipbg text-chiptext font-bold',
  outline: 'bg-pill text-body font-semibold ring-1 ring-inset ring-line-strong',
}

const padClass: Record<ChipVariant, string> = {
  muted: 'px-3.5 py-1.5 gap-1.5',
  success: 'px-3.5 py-1.5 gap-1.5',
  outline: 'px-4 py-1.5',
}

function Chip({ children, variant = 'muted', icon: Icon, className }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full text-label sm:whitespace-nowrap ${padClass[variant]} ${variantClass[variant]}${className ? ` ${className}` : ''}`}
    >
      {Icon ? <Icon className="size-3.5 shrink-0 text-grayicon" aria-hidden="true" /> : null}
      {children}
    </span>
  )
}

export default Chip
