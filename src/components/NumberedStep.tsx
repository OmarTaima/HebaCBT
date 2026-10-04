interface NumberedStepProps {
  index: number
  title: string
  description: string
}

function NumberedStep({ index, title, description }: NumberedStepProps) {
  return (
    <li className="rounded-row border border-line-strong bg-card p-4">
      <div className="flex items-center gap-2.5">
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-numbg text-[13px] font-bold tabular-nums text-navink">
          {index}
        </span>
        <p className="text-ui font-bold text-ink">{title}</p>
      </div>
      <p className="mt-2 text-[13.5px] leading-[1.75] text-subtle">{description}</p>
    </li>
  )
}

export default NumberedStep
