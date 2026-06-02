'use client'

import Link from 'next/link'
import { content } from '@/i18n/content'
import { useLang } from '@/i18n/LanguageProvider'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function SuccessPage() {
  const { t } = useLang()
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[80svh] items-center bg-sand">
        <div className="container-x max-w-xl py-32 text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-forest text-cream">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </div>
          <h1 className="heading-serif text-4xl sm:text-5xl">{t(content.success.title)}</h1>
          <p className="mt-5 text-lg leading-relaxed text-bark/75">{t(content.success.body)}</p>
          <Link href="/" className="btn-primary mt-9">{t(content.success.cta)}</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
