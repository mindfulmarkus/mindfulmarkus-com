'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { Lang, T } from './content'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  /** Resolve a { en, de } text node to the active language. */
  t: (node: T) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'mm-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // Restore saved preference on mount.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null
    if (saved === 'en' || saved === 'de') setLangState(saved)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    window.localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.lang = l
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === 'en' ? 'de' : 'en')
  }, [lang, setLang])

  const t = useCallback((node: T) => node[lang], [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
