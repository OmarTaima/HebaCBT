interface NumberedStepProps {
  index: number
  title: string
  description: string
}

function NumberedStep({ index, title, description }: NumberedStepProps) {
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
