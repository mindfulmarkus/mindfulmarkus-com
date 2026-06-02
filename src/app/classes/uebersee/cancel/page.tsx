'use client'

import Link from 'next/link'
import { content } from '@/i18n/content'
import { useLang } from '@/i18n/LanguageProvider'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function CancelPage() {
  const { t } = useLang()
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[80svh] items-center bg-cream">
        <div className="container-x max-w-xl py-32 text-center">
          <h1 className="heading-serif text-4xl sm:text-5xl">{t(content.cancel.title)}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">{t(content.cancel.body)}</p>
          <Link href="/classes/uebersee" className="btn-clay mt-9">{t(content.cancel.cta)}</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
