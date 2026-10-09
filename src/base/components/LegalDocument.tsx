import Card from './Card'
import { legalContainer } from './containers'
import type { LegalContent } from '../content/types'

function LegalDocument({ content }: { content: LegalContent }) {
  return (
    <div className={legalContainer}>
      <Card>
        <h1 className="text-h2 font-bold text-ink sm:text-h1">{content.title}</h1>
        <p className="mt-4 text-[15px] leading-[1.95] text-body">{content.intro}</p>
        <ol className="mt-6 space-y-6">
          {content.sections.map((section, index) => (
            <li key={section.title}>
              <div className="mb-3 flex items-center gap-2.5">
                <span
                  className="inline-grid size-6 shrink-0 place-items-center rounded-full bg-numbg text-[12px] font-bold tabular-nums text-navink"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h2 className="text-h3 font-bold text-ink">{section.title}</h2>
              </div>
              <p className="text-[15px] leading-[1.95] text-body">{section.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 border-t border-line pt-4 text-label text-subtle">{content.updated}</p>
      </Card>
    </div>
  )
}

export default LegalDocument
