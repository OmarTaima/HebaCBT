import { useContext } from 'react'
import type { Locale } from '../content/types'
import { LocaleContext } from './locale-context'

export function useLocale(): Locale {
  return useContext(LocaleContext)
}
