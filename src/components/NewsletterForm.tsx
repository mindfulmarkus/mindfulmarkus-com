'use client'

import { useState } from 'react'
import { content } from '@/i18n/content'
import { useLang } from '@/i18n/LanguageProvider'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function NewsletterForm() {
  const { t } = useLang()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className="mx-auto mt-8 max-w-md text-cream">{t(content.newsletter.success)}</p>
  }

  return (
    <>
      <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t(content.newsletter.placeholder)}
          className="flex-1 rounded-full border border-cream/40 bg-cream/10 px-6 py-3.5 text-cream placeholder:text-cream/60 focus:outline-none focus:ring-2 focus:ring-cream/60"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-cream px-7 py-3.5 font-medium text-clay-dark transition-colors hover:bg-sand-light disabled:opacity-70"
        >
          {status === 'sending' ? t(content.newsletter.sending) : t(content.newsletter.button)}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-4 text-sm text-cream/90">{t(content.newsletter.error)}</p>
      )}
    </>
  )
}
