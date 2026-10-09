import Tile from './Tile'
import { legalContainer } from './containers'
import type { LegalContent } from '../content/types'

function LegalDocument({ content }: { content: LegalContent }) {
  return (
    <div className={legalContainer}>
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <Tile variant="teal" className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <h1 className="text-h2 font-bold text-white sm:text-h1 lg:text-display-sm">{content.title}</h1>
          <span aria-hidden="true" className="accent-rule-bright mt-4 block h-[4px] w-20 rounded-full" />
        </Tile>

        <Tile variant="light" className="lg:col-span-8">
          <p className="max-w-[76ch] text-lead text-body">{content.intro}</p>
          <ol className="mt-6 space-y-6">
            {content.sections.map((section, index) => (
              <li key={section.title}>
                <div className="mb-3 flex items-center gap-2.5">
                  <span
                    className="inline-grid size-6 shrink-0 place-items-center rounded-full grad-teal text-[12px] font-bold tabular-nums text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h2 className="text-h3 font-bold text-ink">{section.title}</h2>
                </div>
                <p className="max-w-[76ch] text-body">{section.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 inline-flex rounded-row bg-tint px-3 py-2 text-label text-body ring-1 ring-inset ring-tintline">
            {content.updated}
          </p>
        </Tile>
      </div>
    </div>
  )
}

export default LegalDocument
