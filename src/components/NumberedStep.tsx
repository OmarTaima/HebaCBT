interface NumberedStepProps {
  index: number
  title: string
  description: string
  orientation?: 'vertical' | 'horizontal'
}

function NumberedStep({ index, title, description, orientation = 'vertical' }: NumberedStepProps) {
  if (orientation === 'horizontal') {
    return (
      <li className="relative text-center">
        <span className="mx-auto grid size-11 place-items-center rounded-full grad-teal text-ui font-bold text-white">
          {index}
        </span>
        <p className="mt-3 text-ui font-bold text-ink">{title}</p>
        <p className="mt-2 text-[13.5px] leading-[1.75] text-body">{description}</p>
      </li>
    )
  }

  return (
    <li className="rounded-row border border-tintline bg-tint p-4">
      <div className="flex items-center gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-full grad-teal text-[13px] font-bold tabular-nums text-white">
          {index}
        </span>
        <p className="text-ui font-bold text-ink">{title}</p>
      </div>
      <p className="mt-2 text-[13.5px] leading-[1.75] text-body">{description}</p>
    </li>
  )
}

export default NumberedStep
