import Chip from './Chip'

type SectionHeadingVariant = 'default' | 'editorial'

interface SectionHeadingProps {
  title: string
  eyebrow?: string
  variant?: SectionHeadingVariant
  index?: string
  onDark?: boolean
}

function SectionHeading({ title, eyebrow, variant = 'default', index, onDark }: SectionHeadingProps) {
  if (variant === 'editorial') {
    return (
      <div>
        {index ? (
          <p className="ed-eyebrow" aria-hidden="true">
            <span className={`font-bold ${onDark ? 'text-ed-aqua' : 'text-ed-teal'}`}>{index}</span>
          </p>
        ) : null}
        <h2 className={`mt-2 text-band-title font-bold ${onDark ? 'text-white' : 'text-ed-ink-text'}`}>{title}</h2>
      </div>
    )
  }

  return (
    <div>
      {eyebrow ? <Chip variant="outline">{eyebrow}</Chip> : null}
      <div className="mt-4 flex items-center gap-4">
        <h2 className="text-h3 font-bold text-ink sm:text-h2">{title}</h2>
        <span aria-hidden="true" className="accent-rule hidden h-[3px] flex-1 rounded-full opacity-70 sm:block" />
      </div>
    </div>
  )
}

export default SectionHeading
