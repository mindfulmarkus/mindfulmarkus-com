'use client'

import Image from 'next/image'
import Link from 'next/link'
import { content } from '@/i18n/content'
import { useLang } from '@/i18n/LanguageProvider'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import NewsletterForm from '@/components/NewsletterForm'

const galleryImages = [
  '/images/gallery-01.jpg',
  '/images/gallery-02.jpg',
  '/images/gallery-03.jpg',
  '/images/gallery-04.jpg',
  '/images/gallery-05.jpg',
  '/images/gallery-06.jpg',
  '/images/gallery-07.jpg',
  '/images/gallery-08.jpg',
  '/images/gallery-09.jpg',
  '/images/gallery-10.jpg',
  '/images/gallery-11.jpg',
]

export default function Home() {
  const { t } = useLang()

  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        {/* ============ HERO ============ */}
        <section className="relative flex min-h-[100svh] items-end">
          <Image
            src="/images/hero-home.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/30 to-bark/40" />
          <div className="container-x relative z-10 pb-20 pt-32 sm:pb-28">
            <div className="max-w-2xl animate-fade-up">
              <span className="eyebrow text-clay-light">{t(content.hero.eyebrow)}</span>
              <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.02] text-cream sm:text-6xl md:text-7xl">
                {t(content.hero.titleLine1)}{' '}
                <span className="italic text-sage-light">{t(content.hero.titleAccent)}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
                {t(content.hero.subtitle)}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.skool.com/stillness-in-motion-5445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clay"
                >
                  {t(content.hero.ctaPrimary)}
                </a>
                <Link href="/#inperson" className="btn bg-cream/15 text-cream ring-1 ring-cream/40 backdrop-blur hover:bg-cream/25">
                  {t(content.hero.ctaSecondary)}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INTRO ============ */}
        <section className="bg-cream py-24 sm:py-32">
          <div className="container-x">
            <p className="mx-auto max-w-3xl text-center font-serif text-2xl leading-snug text-forest sm:text-3xl">
              {t(content.intro.body)}
            </p>
          </div>
        </section>

        {/* ============ OFFERINGS ============ */}
        <section id="offerings" className="bg-parchment py-24 sm:py-32">
          <div className="container-x">
            <div className="mb-14 text-center">
              <span className="eyebrow">{t(content.offerings.eyebrow)}</span>
              <h2 className="mt-3 heading-serif text-4xl sm:text-5xl">{t(content.offerings.title)}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { img: '/images/offering-community.jpg', data: content.offerings.items.community, href: 'https://www.skool.com/stillness-in-motion-5445', live: true },
                { img: '/images/offering-live-classes.jpg', data: content.offerings.items.liveClasses, href: '/#inperson', live: false },
                { img: '/images/offering-digital.jpg', data: content.offerings.items.digital, href: '/#inperson', live: false },
                { img: '/images/offering-private.jpg', data: content.offerings.items.private, href: '/#inperson', live: false },
              ].map((card, i) => (
                <article
                  key={i}
                  className={`group flex flex-col overflow-hidden rounded-xl2 bg-cream shadow-card transition-transform duration-300 ${card.live ? 'hover:-translate-y-1' : ''}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className={`object-cover transition-transform duration-700 ${card.live ? 'group-hover:scale-105' : 'opacity-90'}`}
                    />
                    {!card.live && (
                      <span className="absolute right-3 top-3 rounded-full bg-bark/55 px-3 py-1 text-xs font-medium tracking-wide text-cream backdrop-blur">
                        {t(content.offerings.comingSoon)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="heading-serif text-xl">{t(card.data.title)}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{t(card.data.body)}</p>
                    {card.live ? (
                      <a href={card.href} target="_blank" rel="noopener noreferrer" className="link-underline mt-6 self-start">
                        {t(card.data.cta)} →
                      </a>
                    ) : (
                      <Link href={card.href} className="mt-6 self-start text-sm font-medium text-sage-dark hover:text-forest">
                        {t(card.data.cta)} →
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ VIDEO / FLEXIBILITY ============ */}
        <section className="bg-cream py-24 sm:py-32">
          <div className="container-x grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 shadow-card">
              <Image src="/images/section-flexibility.jpg" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-bark/25">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 text-forest shadow-soft">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor"><path d="M0 1.7C0 .9.9.4 1.6.8l16.8 9.3c.7.4.7 1.4 0 1.8L1.6 21.2c-.7.4-1.6-.1-1.6-.9V1.7Z" /></svg>
                </div>
              </div>
              <span className="absolute bottom-4 left-4 rounded-full bg-bark/50 px-3 py-1 text-xs text-cream backdrop-blur">
                {t(content.video.caption)}
              </span>
            </div>
            <div>
              <span className="eyebrow">{t(content.video.eyebrow)}</span>
              <h2 className="mt-3 heading-serif text-4xl sm:text-5xl">{t(content.video.title)}</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">{t(content.video.body)}</p>
              <a href="https://www.skool.com/stillness-in-motion-5445" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                {t(content.video.cta)}
              </a>
            </div>
          </div>
        </section>

        {/* ============ IN PERSON ============ */}
        <section id="inperson" className="bg-sage py-24 sm:py-32">
          <div className="container-x grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="eyebrow text-clay-dark">{t(content.inperson.eyebrow)}</span>
                <span className="rounded-full bg-forest-deep/15 px-3 py-1 text-xs font-medium tracking-wide text-forest-deep">
                  {t(content.inperson.badge)}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-4xl font-medium text-forest-deep sm:text-5xl">{t(content.inperson.title)}</h2>
              <p className="mt-6 text-lg leading-relaxed text-forest-deep/85">{t(content.inperson.body)}</p>
              <a href="https://www.skool.com/stillness-in-motion-5445" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">{t(content.inperson.cta)}</a>
            </div>
            <div className="relative order-first aspect-square overflow-hidden rounded-xl2 shadow-soft md:order-last">
              <Image src="/images/section-inperson.jpg" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* ============ JOURNEY ============ */}
        <section className="bg-cream py-24 sm:py-32">
          <div className="container-x">
            <div className="mb-14 text-center">
              <span className="eyebrow">{t(content.journey.eyebrow)}</span>
              <h2 className="mt-3 heading-serif text-4xl sm:text-5xl">{t(content.journey.title)}</h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                { n: '01', s: content.journey.steps.one },
                { n: '02', s: content.journey.steps.two },
                { n: '03', s: content.journey.steps.three },
              ].map((step) => (
                <div key={step.n} className="text-center">
                  <span className="font-serif text-5xl text-clay/40">{step.n}</span>
                  <h3 className="mt-4 heading-serif text-2xl">{t(step.s.title)}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink/70">{t(step.s.body)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ APPROACH ============ */}
        <section id="approach" className="bg-sand py-24 sm:py-32">
          <div className="container-x max-w-3xl text-center">
            <span className="eyebrow">{t(content.approach.eyebrow)}</span>
            <h2 className="mt-3 heading-serif text-4xl sm:text-5xl">{t(content.approach.title)}</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-bark/80">
              <p className="font-serif text-2xl text-forest">{t(content.approach.p1)}</p>
              <p>{t(content.approach.p2)}</p>
              <p>{t(content.approach.p3)}</p>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="bg-cream py-24 sm:py-32">
          <div className="container-x grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 shadow-card">
              <Image src="/images/about-markus.jpg" alt="Markus" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <span className="eyebrow">{t(content.about.eyebrow)}</span>
              <h2 className="mt-3 heading-serif text-4xl sm:text-5xl">{t(content.about.title)}</h2>
              <p className="mt-2 text-sm uppercase tracking-widest2 text-clay">{t(content.about.role)}</p>
              <p className="mt-6 leading-relaxed text-ink/75">{t(content.about.bio)}</p>
              <h3 className="mt-8 font-serif text-xl text-forest">{t(content.about.teachingTitle)}</h3>
              <p className="mt-3 leading-relaxed text-ink/75">{t(content.about.teachingBody)}</p>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="bg-parchment py-24 sm:py-32">
          <div className="container-x">
            <div className="mb-14 text-center">
              <span className="eyebrow">{t(content.testimonials.eyebrow)}</span>
              <h2 className="mt-3 heading-serif text-4xl sm:text-5xl">{t(content.testimonials.title)}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {content.testimonials.items.map((item, i) => (
                <figure key={i} className="flex flex-col rounded-xl2 bg-cream p-8 shadow-card">
                  <span className="font-serif text-5xl leading-none text-clay/40">“</span>
                  <blockquote className="mt-2 flex-1 text-base italic leading-relaxed text-ink/80">
                    {t(item.quote)}
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-medium text-clay">{t(item.name)}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============ COMMUNITY GALLERY ============ */}
        <section id="community" className="bg-cream py-24 sm:py-32">
          <div className="container-x">
            <div className="mb-12 text-center">
              <span className="eyebrow">{t(content.community.eyebrow)}</span>
              <h2 className="mt-3 heading-serif text-4xl sm:text-5xl">{t(content.community.title)}</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {galleryImages.map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src={src} alt="" fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-ink/70">
              {t(content.community.follow)}{' '}
              <a href="https://instagram.com/mindfulmarkus" target="_blank" rel="noopener noreferrer" className="link-underline">@mindfulmarkus</a>{' '}
              {t(content.community.followSuffix)}
            </p>
          </div>
        </section>

        {/* ============ TOOLS ============ */}
        <section id="tools" className="bg-forest-deep py-24 text-cream sm:py-32">
          <div className="container-x">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="eyebrow text-sage-light">{t(content.tools.eyebrow)}</span>
              <h2 className="mt-3 font-serif text-4xl font-medium text-cream sm:text-5xl">{t(content.tools.title)}</h2>
              <p className="mt-5 text-cream/75">{t(content.tools.intro)}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { data: content.tools.items.abundance, href: 'https://abundance.mindfulmarkus.com', live: true },
                { data: content.tools.items.scroll, href: null, live: false },
                { data: content.tools.items.more, href: null, live: false },
              ].map((tool, i) => (
                <article
                  key={i}
                  className="flex flex-col rounded-xl2 bg-cream/5 p-7 ring-1 ring-cream/10 backdrop-blur"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-2xl text-cream">{t(tool.data.title)}</h3>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium tracking-wide ${
                        tool.live ? 'bg-sage-light/20 text-sage-light' : 'bg-cream/10 text-cream/60'
                      }`}
                    >
                      {t(tool.data.badge)}
                    </span>
                  </div>
                  <p className="mt-2 font-serif text-sm italic text-sage-light">{t(tool.data.tagline)}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/75">{t(tool.data.body)}</p>
                  {tool.live && tool.href ? (
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 self-start rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-forest-deep transition-colors hover:bg-sand-light"
                    >
                      {t(tool.data.cta)} →
                    </a>
                  ) : (
                    <span className="mt-6 self-start text-sm font-medium text-cream/50">{t(tool.data.cta)}</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ NEWSLETTER ============ */}
        <section id="newsletter" className="bg-clay py-24 text-cream sm:py-28">
          <div className="container-x max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">{t(content.newsletter.title)}</h2>
            <p className="mt-4 text-cream/85">{t(content.newsletter.body)}</p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
