import Chip from './Chip'

interface SectionHeadingProps {
  eyebrow: string
  title: string
}

function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div>
      <Chip variant="outline">{eyebrow}</Chip>
      <div className="mt-4 flex items-center gap-4">
        <h2 className="text-h3 font-bold text-ink sm:text-h2">{title}</h2>
        <span aria-hidden="true" className="accent-rule hidden h-[3px] flex-1 rounded-full opacity-70 sm:block" />
      </div>
    </div>
  )
}

export default SectionHeading
