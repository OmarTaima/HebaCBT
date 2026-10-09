import { useEffect, useId, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import { common } from '../content/common'
import type { Locale } from '../content/types'
import { switchLocalePath } from '../i18n/paths'
import { useLocale } from '../i18n/useLocale'
import { useContent } from '../i18n/useContent'

interface LanguageOption {
  code: Locale
  label: string
}

function LangSwitcher() {
  const content = useContent(common)
  const locale = useLocale()
  const navigate = useNavigate()
  const location = useLocation()
  const menuId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  const options: LanguageOption[] = [
    { code: 'ar', label: content.ui.arabic },
    { code: 'en', label: content.ui.english },
  ]

  const current = options.find((option) => option.code === locale) ?? options[0]

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

  const select = (code: Locale) => {
    setOpen(false)
    navigate(switchLocalePath(location.pathname, code))
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-lead font-medium text-navink hover:text-navhover"
      >
        <span>{current.label}</span>
        <ChevronDown
          className={`size-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
        <span className="sr-only">{content.ui.languageMenu}</span>
      </button>

      {open ? (
        <div
          id={menuId}
          aria-label={content.ui.languageMenu}
          className="absolute end-0 top-full z-50 mt-2 min-w-[176px] rounded-row border border-line bg-card p-1 shadow-pop"
        >
          {options.map((option) => {
            const active = option.code === locale
            return (
              <button
                key={option.code}
                type="button"
                aria-current={active ? 'true' : undefined}
                onClick={() => select(option.code)}
                className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-ui text-start hover:bg-hoverwash"
              >
                <span>{option.label}</span>
                {active ? <CheckCircle2 className="size-4 shrink-0 text-navink" aria-hidden="true" /> : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default LangSwitcher
