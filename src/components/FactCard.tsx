import type { LucideIcon } from 'lucide-react'

interface FactCardProps {
  icon: LucideIcon
  title: string
  value: string
}

function FactCard({ icon: Icon, title, value }: FactCardProps) {
  return (
    <li className="rounded-row border border-line bg-card p-4 sm:p-5">
      <div className="flex items-center gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-numbg text-navink" aria-hidden="true">
          <Icon className="size-4" />
        </span>
        <p className="text-ui font-bold leading-snug text-ink">{title}</p>
      </div>
      <p className="mt-2 text-[14px] leading-[1.75] text-body">{value}</p>
    </li>
  )
}

export default FactCard
