import type { Locale } from '../content/types'
import { useLocale } from './useLocale'

export function useContent<T extends Record<Locale, unknown>>(source: T): T[Locale] {
  const locale = useLocale()
  return source[locale]
}
