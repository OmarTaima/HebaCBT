import LegalDocument from '../components/LegalDocument'
import { common } from '../content/common'
import { terms } from '../content/terms'
import { useContent } from '../i18n/useContent'
import { usePageTitle } from '../i18n/usePageTitle'

function TermsPage() {
  const content = useContent(terms)
  const shared = useContent(common)
  usePageTitle(shared.titles.terms)

  return <LegalDocument content={content} />
}

export default TermsPage
