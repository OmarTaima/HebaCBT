import type { Locale } from '../content/types'

const EN_PREFIX = '/en'

function stripPrefix(pathname: string): string {
  if (pathname === EN_PREFIX) return '/'
  if (pathname.startsWith(`${EN_PREFIX}/`)) return pathname.slice(EN_PREFIX.length)
  return pathname
}

export function localizePath(locale: Locale, path: string): string {
  const normalized = path === '/' || path === '' ? '/' : path.replace(/\/+$/, '')
  if (locale !== 'en') return normalized
  return normalized === '/' ? EN_PREFIX : `${EN_PREFIX}${normalized}`
}

export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(target, stripPrefix(pathname))
}
