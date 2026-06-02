'use client'

import Image from 'next/image'
import Link from 'next/link'
import { content } from '@/i18n/content'
import { useLang } from '@/i18n/LanguageProvider'

export default function SiteFooter() {
  const { t } = useLang()
  return (
    <footer className="bg-[#56624A] text-cream/85">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 font-serif text-3xl text-cream">
              <Image src="/logos/logo-mark-light.svg" alt="" width={500} height={500} className="h-9 w-9" />
              mindfulmarkus
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {t(content.footer.tagline)}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest2 text-sand-light">
              {t(content.footer.explore)}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#about" className="hover:text-cream">{t(content.footer.about)}</Link></li>
              <li><Link href="/#approach" className="hover:text-cream">{t(content.footer.approach)}</Link></li>
              <li><Link href="/#community" className="hover:text-cream">{t(content.footer.community)}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest2 text-sand-light">
              {t(content.footer.practice)}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://www.skool.com/mindfulmarkus" target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                  {t(content.footer.skool)}
                </a>
              </li>
              <li><Link href="/#inperson" className="hover:text-cream">{t(content.footer.juneClasses)}</Link></li>
              <li><Link href="/#offerings" className="hover:text-cream">{t(content.footer.onlineCourses)}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest2 text-sand-light">
              {t(content.footer.connect)}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://www.instagram.com/mindfulmarkus/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-cream">
                  <Image src="/icons/instagram.png" alt="" width={18} height={18} unoptimized className="opacity-80" />
                  {t(content.footer.instagram)}
                </a>
              </li>
              <li><a href="mailto:hello@mindfulmarkus.com" className="hover:text-cream">{t(content.footer.email)}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} mindfulmarkus · {t(content.footer.rights)}</p>
          <p>{t(content.footer.motto)}</p>
        </div>
      </div>
    </footer>
  )
}
