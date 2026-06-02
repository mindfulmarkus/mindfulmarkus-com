'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { content } from '@/i18n/content'
import { useLang } from '@/i18n/LanguageProvider'
import LanguageToggle from './LanguageToggle'

export default function SiteHeader() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/#offerings', label: t(content.nav.offerings) },
    { href: '/#approach', label: t(content.nav.approach) },
    { href: '/#about', label: t(content.nav.about) },
    { href: '/#inperson', label: t(content.nav.classes) },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(43,36,30,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" aria-label="mindfulmarkus" className="flex items-center gap-2.5">
          <Image
            src={scrolled ? '/logos/logo-mark-dark.svg' : '/logos/logo-mark-light.svg'}
            alt=""
            width={500}
            height={500}
            priority
            className="h-8 w-8"
          />
          <span className={`font-serif text-2xl tracking-wide transition-colors ${scrolled ? 'text-forest' : 'text-cream'}`}>
            mindfulmarkus
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors ${
                scrolled
                  ? 'text-ink/70 hover:text-forest'
                  : 'text-cream/80 hover:text-cream'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle dark={scrolled} />
          <a
            href="https://www.skool.com/mindfulmarkus"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              scrolled
                ? 'bg-sage text-forest-deep hover:bg-sage-light'
                : 'bg-cream/15 text-cream ring-1 ring-cream/40 backdrop-blur hover:bg-cream/25'
            }`}
          >
            {t(content.nav.joinOnline)}
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle dark={scrolled} />
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={scrolled ? 'text-forest' : 'text-cream'}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream md:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-ink/80"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://www.skool.com/mindfulmarkus"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-forest px-5 py-3 text-center text-cream"
            >
              {t(content.nav.joinOnline)}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
