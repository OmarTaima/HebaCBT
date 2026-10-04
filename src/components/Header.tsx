import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { common } from '../content/common'
import { localizePath, switchLocalePath } from '../i18n/paths'
import { useLocale } from '../i18n/useLocale'
import { useContent } from '../i18n/useContent'
import { innerContainer, wideContainer } from './containers'
import LangSwitcher from './LangSwitcher'
import TopBar from './TopBar'

interface NavEntry {
  to: string
  label: string
  end: boolean
}

function Header() {
  const content = useContent(common)
  const locale = useLocale()
  const location = useLocation()
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [openPath, setOpenPath] = useState(location.pathname)

  if (openPath !== location.pathname) {
    setOpenPath(location.pathname)
    setOpen(false)
  }

  const homeHref = localizePath(locale, '/')
  const entries: NavEntry[] = [
    { to: homeHref, label: content.nav.home, end: true },
    { to: localizePath(locale, '/about'), label: content.nav.about, end: false },
    { to: localizePath(locale, '/contact'), label: content.nav.contact, end: false },
  ]

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      triggerRef.current?.focus()
    }

    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [open])

  const linkClass = (isActive: boolean) =>
    [
      'relative rounded-lg px-3 py-2 text-lead font-medium text-navink transition-colors hover:text-navhover',
      isActive
        ? 'font-semibold text-navhover after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-navhover'
        : '',
    ]
      .filter(Boolean)
      .join(' ')

  const stackLinkClass =
    'flex min-h-11 items-center rounded-lg px-4 py-3 text-lead font-medium text-navink hover:bg-hoverwash'

  return (
    <header className="sticky top-0 z-40 bg-cream shadow-[0_6px_18px_-12px_rgba(17,17,17,0.25)]">
      <div className={wideContainer}>
        <div ref={rootRef} className="relative border-b border-line bg-card">
          <TopBar />
          <div className={innerContainer}>
            <div className="flex h-16 items-center justify-between md:h-20">
              <Link to={homeHref}>
                <img
                  src="/logo.jpeg"
                  alt={content.ui.logoAlt}
                  className="h-10 w-auto md:h-14"
                />
              </Link>

              <nav className="hidden items-center gap-1 lg:flex" aria-label={content.ui.mainNav}>
                {entries.map((entry) => (
                  <NavLink
                    key={entry.to}
                    to={entry.to}
                    end={entry.end}
                    className={({ isActive }) => linkClass(isActive)}
                  >
                    {entry.label}
                  </NavLink>
                ))}
              </nav>

              <div className="hidden lg:block">
                <LangSwitcher />
              </div>

              <button
                ref={triggerRef}
                type="button"
                aria-expanded={open}
                aria-controls={open ? 'mobile-menu' : undefined}
                aria-label={open ? content.ui.closeMenu : content.ui.openMenu}
                onClick={() => setOpen((value) => !value)}
                className="grid size-11 place-items-center rounded-lg text-navink hover:bg-hoverwash lg:hidden"
              >
                {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {open ? (
            <div
              id="mobile-menu"
              className="absolute inset-x-0 top-full z-40 border-t border-line bg-card p-3 shadow-pop lg:hidden"
            >
              <nav aria-label={content.ui.mobileNav} className="flex flex-col">
                {entries.map((entry) => (
                  <NavLink
                    key={entry.to}
                    to={entry.to}
                    end={entry.end}
                    className={({ isActive }) => `${stackLinkClass}${isActive ? ' font-semibold text-navhover' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {entry.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-2 flex flex-col border-t border-line pt-2">
                <Link
                  to={switchLocalePath(location.pathname, 'ar')}
                  aria-current={locale === 'ar' ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                  className={`${stackLinkClass} ${locale === 'ar' ? 'font-semibold text-navhover' : ''}`}
                >
                  {content.ui.arabic}
                </Link>
                <Link
                  to={switchLocalePath(location.pathname, 'en')}
                  aria-current={locale === 'en' ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                  className={`${stackLinkClass} ${locale === 'en' ? 'font-semibold text-navhover' : ''}`}
                >
                  {content.ui.english}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Header
