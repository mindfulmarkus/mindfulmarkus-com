'use client'

import { useState } from 'react'
import { content } from '@/i18n/content'
import { useLang } from '@/i18n/LanguageProvider'

export default function RegisterButton({ className = '' }: { className?: string }) {
  const { t, lang } = useLang()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleClick() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang }),
      })
      if (!res.ok) throw new Error('checkout failed')
      const data = (await res.json()) as { url?: string }
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('no url')
      }
    } catch {
      setError(t(content.classPage.errorGeneric))
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={handleClick} disabled={loading} className={`${className} disabled:opacity-60`}>
        {loading ? t(content.classPage.loading) : t(content.classPage.registerButton)}
      </button>
      {error && <p className="mt-3 text-center text-sm text-clay-dark">{error}</p>}
    </div>
  )
}
