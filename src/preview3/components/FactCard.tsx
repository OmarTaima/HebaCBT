import type { LucideIcon } from 'lucide-react'

interface FactCardProps {
  icon: LucideIcon
  title: string
  value: string
  className?: string
}

function FactCard({ icon: Icon, title, value, className }: FactCardProps) {
  return (
    <li className={`rounded-row border border-tintline bg-tint p-4 sm:p-5${className ? ` ${className}` : ''}`}>
      <div className="flex items-center gap-2.5">
        <span
          className="grid size-9 shrink-0 place-items-center rounded-well grad-teal text-white"
          aria-hidden="true"
        >
          <Icon className="size-5" />
        </span>
        <p className="text-ui font-bold leading-snug text-ink">{title}</p>
      </div>
      <p className="mt-2 max-w-[62ch] text-[14px] leading-[1.75] text-body break-words">{value}</p>
    </li>
  )
}

export default FactCard
