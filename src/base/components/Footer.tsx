import { Link } from 'react-router-dom'
import { common } from '../content/common'
import { localizePath } from '../i18n/paths'
import { useLocale } from '../i18n/useLocale'
import { useContent } from '../i18n/useContent'
import { innerContainer, wideContainer } from './containers'

function Footer() {
  const content = useContent(common)
  const locale = useLocale()

  const links = [
    { to: localizePath(locale, '/contact'), label: content.nav.contact },
    { to: localizePath(locale, '/terms'), label: content.footer.terms },
    { to: localizePath(locale, '/privacy'), label: content.footer.privacy },
  ]

  return (
    <footer>
      <div className={wideContainer}>
        <div className="mb-8 border-t border-line bg-card pt-5 pb-12 lg:mb-12 lg:pb-6">
          <div className={`${innerContainer} flex flex-wrap items-center justify-between gap-x-8 gap-y-4`}>
            <Link to={localizePath(locale, '/')}>
              <img src="/logo.jpeg" alt={content.ui.logoAlt} className="h-9 w-auto md:h-10" />
            </Link>
            <nav
              aria-label={content.footer.label}
              className="flex flex-wrap gap-x-12 gap-y-2 text-ui font-medium text-navink lg:gap-x-14"
            >
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="transition-colors hover:text-navhover underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
