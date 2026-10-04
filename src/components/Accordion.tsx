import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { AccordionItem } from '../content/types'

interface AccordionHeaderToggle {
  icon: LucideIcon
  title: string
}

interface AccordionProps {
  items?: AccordionItem[]
  headerToggle?: AccordionHeaderToggle
  defaultOpenIds?: string[]
  allowMultiple?: boolean
  children?: ReactNode
}

function Accordion({
  items = [],
  headerToggle,
  defaultOpenIds = [],
  allowMultiple = false,
  children,
}: AccordionProps) {
  const uid = useId()
  const [headerOpen, setHeaderOpen] = useState(true)
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds)

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

  return (
    <div>
      {headerToggle && HeaderIcon ? (
        <h2 className="text-h3 font-bold text-ink">
          <button
            type="button"
            id={headerButtonId}
            aria-expanded={headerOpen}
            aria-controls={bodyId}
            onClick={() => setHeaderOpen((open) => !open)}
            className="flex w-full items-center gap-2.5 py-1 text-start"
          >
            <HeaderIcon className="size-5 shrink-0 text-navink" aria-hidden="true" />
            <span className="flex-1">{headerToggle.title}</span>
            <ChevronDown
              className={`size-5 shrink-0 text-subtle transition-transform ${headerOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        </h2>
      ) : null}

      <div
        id={bodyId}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${headerOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="pt-4" inert={!headerOpen}>
            {items.map((item) => {
              const isOpen = openIds.includes(item.id)
              const rowButtonId = `${uid}row-${item.id}`
              const rowPanelId = `${uid}panel-${item.id}`

              return (
                <div key={item.id} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    id={rowButtonId}
                    aria-expanded={isOpen}
                    aria-controls={rowPanelId}
                    onClick={() => toggleRow(item.id)}
                    className="flex w-full items-center gap-3 py-3.5 text-start text-ui font-semibold text-ink transition-colors hover:text-navink"
                  >
                    <span className="flex-1">{item.title}</span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-subtle transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={rowPanelId}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <div
                        role="region"
                        aria-labelledby={rowButtonId}
                        inert={!isOpen}
                        className="pb-4 ps-8 text-[14px] leading-[1.85] text-body"
                      >
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
