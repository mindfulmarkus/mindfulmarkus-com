'use client'

import { useLang } from '@/i18n/LanguageProvider'

export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang()

  const base =
    'px-2 py-0.5 rounded-full text-xs font-medium tracking-wide transition-colors'
  const activeCls = dark ? 'bg-sage text-forest-deep' : 'bg-cream text-forest'
  const idleCls = dark ? 'text-ink/50 hover:text-forest' : 'text-cream/70 hover:text-cream'

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full p-0.5 ring-1 ${
        dark ? 'ring-ink/15' : 'ring-cream/40'
      }`}
      role="group"
      aria-label="Language"
    >
      <button
        onClick={() => setLang('en')}
        className={`${base} ${lang === 'en' ? activeCls : idleCls}`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => setLang('de')}
        className={`${base} ${lang === 'de' ? activeCls : idleCls}`}
        aria-pressed={lang === 'de'}
      >
        DE
      </button>
    </div>
  )
}
