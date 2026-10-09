import { useLayoutEffect, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { common } from '../content/common'
import type { Locale } from '../content/types'
import { LocaleProvider } from '../i18n/LocaleProvider'
import ChatWidget from './ChatWidget'
import Footer from './Footer'
import Header from './Header'

interface LocaleLayoutProps {
  locale: Locale
}

function LocaleLayout({ locale }: LocaleLayoutProps) {
  const location = useLocation()
  const { ui } = common[locale]

  useLayoutEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])

  return (
    <LocaleProvider locale={locale}>
      <div className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:start-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2 focus:text-lead focus:text-navink focus:shadow-pop"
        >
          {ui.skipToContent}
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 py-6 outline-none lg:py-10">
          <Outlet />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </LocaleProvider>
  )
}

export default LocaleLayout
