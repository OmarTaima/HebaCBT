import Chip from './Chip'

interface SectionHeadingProps {
  eyebrow: string
  title: string
}

function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div>
      <Chip variant="outline">{eyebrow}</Chip>
      <h2 className="mt-4 text-h3 font-bold text-ink sm:text-h2">{title}</h2>
    </div>
  )
}

export default SectionHeading
