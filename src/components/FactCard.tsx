import type { LucideIcon } from 'lucide-react'

interface FactCardProps {
  icon: LucideIcon
  title: string
  value: string
  className?: string
  layout?: 'stacked' | 'row'
}

function FactCard({ icon: Icon, title, value, className, layout = 'stacked' }: FactCardProps) {
  const suffix = className ? ` ${className}` : ''

  if (layout === 'row') {
    return (
      <li className={`flex items-center gap-4${suffix}`}>
        <span
          className="grid size-9 shrink-0 place-items-center rounded-well bg-tint text-navink"
          aria-hidden="true"
        >
          <Icon className="size-5" />
        </span>
        <p className="shrink-0 text-ui font-bold text-ink sm:w-[200px]">{title}</p>
        <p className="min-w-0 flex-1 break-words text-[15px] leading-[1.9] text-body">{value}</p>
      </li>
    )
  }

  return (
    <li className={`rounded-row border border-tintline bg-tint p-4 sm:p-5${suffix}`}>
      <div className="flex items-center gap-2.5">
        <span
          className="grid size-9 shrink-0 place-items-center rounded-well grad-teal text-white"
          aria-hidden="true"
        >
          <Icon className="size-5" />
        </span>
        <p className="text-ui font-bold leading-snug text-ink">{title}</p>
      </div>
      <p className="mt-2 max-w-[62ch] break-words text-[14px] leading-[1.75] text-body">{value}</p>
    </li>
  )
}

export default FactCard
