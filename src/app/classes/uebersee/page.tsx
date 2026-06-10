'use client'

import Image from 'next/image'
import Link from 'next/link'
import { content } from '@/i18n/content'
import { useLang } from '@/i18n/LanguageProvider'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import RegisterButton from '@/components/RegisterButton'

export default function UeberseeClassPage() {
  const { t } = useLang()
  const c = content.classPage

  const detailRows = [
    { label: c.labels.when, value: c.values.when },
    { label: c.labels.time, value: c.values.time },
    { label: c.labels.where, value: c.values.where },
    { label: c.labels.level, value: c.values.level },
    { label: c.labels.capacity, value: c.values.capacity },
    { label: c.labels.price, value: c.values.price },
    { label: c.labels.bring, value: c.values.bring },
  ]

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70svh] items-end">
          <Image src="/images/class-uebersee-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/35 to-bark/45" />
          <div className="container-x relative z-10 pb-16 pt-32">
            <Link href="/" className="text-sm text-cream/80 hover:text-cream">← {t(c.back)}</Link>
            <span className="eyebrow mt-6 block text-clay-light">{t(c.eyebrow)}</span>
            <h1 className="mt-3 max-w-2xl font-serif text-5xl font-medium leading-[1.05] text-cream sm:text-6xl">
              {t(c.title)}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">{t(c.subtitle)}</p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-cream py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            {/* Details */}
            <div>
              <h2 className="heading-serif text-3xl">{t(c.detailsTitle)}</h2>
              <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                {detailRows.map((row, i) => (
                  <div key={i} className="grid grid-cols-[8rem_1fr] gap-4 py-4 sm:grid-cols-[10rem_1fr]">
                    <dt className="text-sm uppercase tracking-wide text-clay">{t(row.label)}</dt>
                    <dd className="text-ink/80">{t(row.value)}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="mt-12 heading-serif text-2xl">{t(c.includesTitle)}</h3>
              <ul className="mt-5 space-y-3">
                {c.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-clay" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Register card */}
            <aside className="rounded-xl2 bg-parchment p-8 shadow-card lg:sticky lg:top-24">
              <h2 className="heading-serif text-2xl">{t(c.registerTitle)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{t(c.registerBody)}</p>

              <div className="mt-6 rounded-xl bg-cream p-5 text-center">
                <p className="font-serif text-3xl text-forest">{t(c.values.price)}</p>
              </div>

              <RegisterButton className="btn-clay mt-6 w-full" />

              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-ink/50">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M6 0a3.5 3.5 0 0 0-3.5 3.5V5H2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H9.5V3.5A3.5 3.5 0 0 0 6 0Zm2 5H4V3.5a2 2 0 1 1 4 0V5Z" /></svg>
                {t(c.securedBy)}
              </p>

              <p className="mt-6 text-center text-sm text-ink/60">
                {t(c.questions)}{' '}
                <a href="mailto:hello@mindfulmarkus.com" className="link-underline">hello@mindfulmarkus.com</a>
              </p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
