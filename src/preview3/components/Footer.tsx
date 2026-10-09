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
        <div className="relative mb-8 overflow-hidden rounded-tile bg-banner pt-6 pb-10 lg:mb-12">
          <span aria-hidden="true" className="accent-rule absolute inset-x-0 top-0 h-[3px] opacity-90" />
          <div className={`${innerContainer} flex flex-wrap items-center justify-between gap-x-8 gap-y-4`}>
            <Link to={localizePath(locale, '/')}>
              <span className="inline-flex rounded-row bg-card p-2">
                <img src="/logo.jpeg" alt={content.ui.logoAlt} className="h-9 w-auto md:h-10" />
              </span>
            </Link>
            <nav
              aria-label={content.footer.label}
              className="flex flex-wrap gap-x-12 gap-y-2 lg:gap-x-14"
            >
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-ui font-medium text-topbar decoration-topbar/60 underline-offset-4 transition-colors duration-150 ease-out-soft hover:text-white hover:underline"
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
