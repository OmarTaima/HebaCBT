import type { ReactNode } from 'react'
import type { Locale } from '../content/types'
import { LocaleContext } from './locale-context'

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}
