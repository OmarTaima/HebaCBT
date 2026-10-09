import LegalDocument from '../components/LegalDocument'
import { common } from '../content/common'
import { privacy } from '../content/privacy'
import { useContent } from '../i18n/useContent'
import { usePageTitle } from '../i18n/usePageTitle'

function PrivacyPage() {
  const content = useContent(privacy)
  const shared = useContent(common)
  usePageTitle(shared.titles.privacy)

  return <LegalDocument content={content} />
}

export default PrivacyPage
