import { createContext } from 'react'
import type { Locale } from '../content/types'

export const LocaleContext = createContext<Locale>('ar')
