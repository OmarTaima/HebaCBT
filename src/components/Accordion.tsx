import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { AccordionItem } from '../content/types'

interface AccordionHeaderToggle {
  icon: LucideIcon
  title: string
}

type AccordionTone = 'light' | 'onDark'

type AccordionLayout = 'list' | 'grid'

interface AccordionProps {
  items?: AccordionItem[]
  headerToggle?: AccordionHeaderToggle
  defaultOpenIds?: string[]
  allowMultiple?: boolean
  tone?: AccordionTone
  layout?: AccordionLayout
  children?: ReactNode
}

function Accordion({
  items = [],
  headerToggle,
  defaultOpenIds = [],
  allowMultiple = false,
  tone = 'light',
  layout = 'list',
  children,
}: AccordionProps) {
  const uid = useId()
  const [headerOpen, setHeaderOpen] = useState(true)
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds)

  const onDark = tone === 'onDark'
  const isGrid = layout === 'grid'

  const bodyId = `${uid}body`
  const headerButtonId = `${uid}header`

  const toggleRow = (id: string) => {
    setOpenIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id)
      if (allowMultiple) return [...current, id]
      return [id]
    })
  }

  const HeaderIcon = headerToggle?.icon

  const headingClass = onDark ? 'text-h3 font-bold text-white' : 'text-h3 font-bold text-ink'
  const headerButtonClass = `mb-1 -mx-2 flex min-h-11 w-full items-center gap-2.5 rounded-lg px-2 py-1 text-start transition-colors duration-150 ease-out-soft ${
    onDark ? 'hover:bg-white/10' : 'hover:bg-hoverwash'
  }`
  const headerIconClass = onDark ? 'text-white' : 'text-navink'
  const headerChevronClass = `size-5 shrink-0 transition-[transform,color] duration-200 ease-out-soft ${
    headerOpen
      ? onDark
        ? 'rotate-180 text-white'
        : 'rotate-180 text-navink'
      : onDark
        ? 'text-white/60'
        : 'text-subtle'
  }`
  const separatorClass = onDark ? 'border-b border-white/15 last:border-b-0' : 'border-b border-line last:border-b-0'
  const rowWrapClass = (isOpen: boolean) => {
    if (!isGrid) return separatorClass
    if (onDark) {
      return `flex flex-col rounded-row border bg-white/[0.07] transition-colors duration-150 ease-out-soft hover:border-white/35 ${
        isOpen ? 'border-white/40' : 'border-white/15'
      }`
    }
    return `flex flex-col rounded-row border bg-surface transition-colors duration-150 ease-out-soft hover:border-nav/30 ${
      isOpen ? 'border-nav/35' : 'border-line'
    }`
  }
  const rowButtonClass = (isOpen: boolean) => {
    const shape = isGrid ? 'rounded-row px-3.5 py-3' : 'rounded-lg px-3 py-3.5'
    const toneClass = onDark
      ? `hover:bg-white/10 ${isOpen ? 'text-white' : 'text-white/85'}`
      : `${isGrid ? 'hover:bg-tealwash' : 'hover:bg-hoverwash'} hover:text-navink ${
          isOpen ? 'text-navink' : 'text-ink'
        }`
    return `flex min-h-11 w-full ${isOpen ? '' : 'flex-1'} items-center gap-3 text-start text-ui font-semibold transition-colors duration-150 ease-out-soft ${shape} ${toneClass}`
  }
  const badgeClass = (isOpen: boolean) => {
    const base = 'grid size-7 shrink-0 place-items-center rounded-full text-[12.5px] font-bold tabular-nums'
    if (onDark) return `${base} ${isOpen ? 'bg-white text-banner' : 'bg-white/15 text-white'}`
    return `${base} ${isOpen ? 'bg-navink text-white' : 'bg-numbg text-navink'}`
  }
  const rowChevronClass = (isOpen: boolean) =>
    `size-4 shrink-0 transition-[transform,color] duration-200 ease-out-soft ${
      isOpen
        ? onDark
          ? 'rotate-180 text-white'
          : 'rotate-180 text-navink'
        : onDark
          ? 'text-white/60'
          : 'text-subtle'
    }`
  const regionClass = (isOpen: boolean) =>
    `transition-opacity duration-200 ease-out-soft ${isOpen ? 'opacity-100' : 'opacity-0'} ${
      isGrid ? 'px-3.5 pt-1 pb-3.5' : 'pb-4'
    }`
  const panelClass = isGrid
    ? onDark
      ? 'rounded-well bg-white/10 px-3.5 py-3 text-[13.5px] leading-[1.8] text-white/85'
      : 'rounded-well bg-tint px-3.5 py-3 text-[13.5px] leading-[1.8] text-body'
    : onDark
      ? 'rounded-row bg-white/[0.07] px-4 py-3 text-[14px] leading-[1.85] text-white/85'
      : 'rounded-row bg-surface px-4 py-3 text-[14px] leading-[1.85] text-body'
  const itemsClass = isGrid ? 'grid gap-2.5 @[30rem]:grid-cols-2' : undefined

  return (
    <div className="@container">
      {headerToggle && HeaderIcon ? (
        <h2 className={headingClass}>
          <button
            type="button"
            id={headerButtonId}
            aria-expanded={headerOpen}
            aria-controls={bodyId}
            onClick={() => setHeaderOpen((open) => !open)}
            className={headerButtonClass}
          >
            <HeaderIcon className={`size-5 shrink-0 ${headerIconClass}`} aria-hidden="true" />
            <span className="flex-1">{headerToggle.title}</span>
            <ChevronDown className={headerChevronClass} aria-hidden="true" />
          </button>
        </h2>
      ) : null}

      <div
        id={bodyId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out-soft ${headerOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="pt-4" inert={!headerOpen}>
            {items.length > 0 ? (
              <ul className={itemsClass}>
                {items.map((item, index) => {
                  const isOpen = openIds.includes(item.id)
                  const rowButtonId = `${uid}row-${item.id}`
                  const rowPanelId = `${uid}panel-${item.id}`

                  return (
                    <li key={item.id} className={rowWrapClass(isOpen)}>
                      <button
                        type="button"
                        id={rowButtonId}
                        aria-expanded={isOpen}
                        aria-controls={rowPanelId}
                        onClick={() => toggleRow(item.id)}
                        className={rowButtonClass(isOpen)}
                      >
                        {isGrid ? (
                          <span className={badgeClass(isOpen)} aria-hidden="true">
                            {index + 1}
                          </span>
                        ) : null}
                        <span className="flex-1">{item.title}</span>
                        <ChevronDown className={rowChevronClass(isOpen)} aria-hidden="true" />
                      </button>
                      <div
                        id={rowPanelId}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out-soft ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                      >
                        <div className="overflow-hidden">
                          <div
                            role="region"
                            aria-labelledby={rowButtonId}
                            inert={!isOpen}
                            className={regionClass(isOpen)}
                          >
                            <div className={panelClass}>{item.content}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
