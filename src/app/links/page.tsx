'use client'

import Image from 'next/image'
import Link from 'next/link'
import { content } from '@/i18n/content'
import { useLang } from '@/i18n/LanguageProvider'
import LanguageToggle from '@/components/LanguageToggle'

// ----------------------------------------------------------------------------
// Own-brand link hub (replaces Linktree).
// Edit the arrays below. Replace placeholder Spotify/podcast URLs and the
// thumbnail images (drop files in /public/images and update the `image` paths).
// `kind`: 'featured' = big image card · 'primary'/'soft'/'ghost' = buttons.
// ----------------------------------------------------------------------------

const tt = (en: string, de: string) => ({ en, de })

// --- social icons (inline SVG so no extra files needed) ---
const Icons = {
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.7c1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4a2.5 2.5 0 0 0 1.7-1.7C23 15.2 23 12 23 12ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  ),
  spotify: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.62.62 0 0 1-.86.21c-2.35-1.44-5.3-1.76-8.79-.96a.62.62 0 1 1-.28-1.22c3.8-.87 7.08-.5 9.72 1.11.3.18.39.58.21.86Zm1.23-2.74a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 1 1-.45-1.49c3.63-1.1 8.15-.56 11.23 1.33.37.23.49.71.26 1.07Zm.1-2.85C14.81 8.96 9.4 8.78 6.3 9.72a.93.93 0 1 1-.54-1.78c3.56-1.08 9.53-.87 13.29 1.36a.93.93 0 1 1-.95 1.6Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  ),
}

const socials = [
  { icon: Icons.instagram, href: 'https://www.instagram.com/mindfulmarkus/', label: 'Instagram' },
  { icon: Icons.youtube, href: 'https://www.youtube.com/@mindfulmarkus', label: 'YouTube' },
  { icon: Icons.spotify, href: 'https://open.spotify.com/user/1155546441', label: 'Spotify' },
  { icon: Icons.mail, href: 'mailto:sayhi@mindfulmarkus.com', label: 'Email' },
]

// Big hero card
const featured = {
  label: tt('stillness in motion', 'stillness in motion'),
  sub: tt('My grounding online yoga space', 'Mein erdender Online-Yoga-Raum'),
  href: 'https://www.skool.com/stillness-in-motion-5445',
  image: '/images/links-featured.jpg',
}

// Stacked links (image is optional → renders a thumbnail row)
const links: {
  label: { en: string; de: string }
  sub: { en: string; de: string }
  href: string
  external: boolean
  kind: 'soft' | 'ghost'
  image?: string
}[] = [
  {
    label: tt('June classes · Chiemsee', 'Juni-Kurse · Chiemsee'),
    sub: tt('Coming soon — get notified', 'Demnächst — benachrichtigt werden'),
    href: '/#inperson',
    external: false,
    kind: 'soft',
  },
  {
    label: tt('Slow Somatic Morning', 'Slow Somatic Morning'),
    sub: tt('Spotify playlist', 'Spotify-Playlist'),
    href: 'https://open.spotify.com/playlist/3187IL3tKCuQzuymqJ52zb',
    external: true,
    kind: 'ghost',
    image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84152fb4e4d8161f4ded6fa97a',
  },
  {
    label: tt('Somatic Yang', 'Somatic Yang'),
    sub: tt('Spotify playlist', 'Spotify-Playlist'),
    href: 'https://open.spotify.com/playlist/2CrupcYg39OZfHgOqBHGK1',
    external: true,
    kind: 'ghost',
    image: 'https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da841387ffe90aa9cf0c62ac1e22',
  },
  {
    label: tt('Embodied Vinyasa', 'Embodied Vinyasa'),
    sub: tt('Spotify playlist', 'Spotify-Playlist'),
    href: 'https://open.spotify.com/playlist/4LbCZFiKHJH1wvzBPdqiz1',
    external: true,
    kind: 'ghost',
    image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84221fe97148409d3a3c9e0836',
  },
  {
    label: tt('Arrive', 'Arrive'),
    sub: tt('Spotify playlist', 'Spotify-Playlist'),
    href: 'https://open.spotify.com/playlist/2z7AyBelr05wWVCAGO670H',
    external: true,
    kind: 'ghost',
    image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84e01412864d09b232ad6da431',
  },
  {
    label: tt('Free meditation', 'Kostenlose Meditation'),
    sub: tt('Join the newsletter', 'Newsletter abonnieren'),
    href: '/#newsletter',
    external: false,
    kind: 'ghost',
  },
  {
    label: tt('Visit the website', 'Zur Website'),
    sub: tt('mindfulmarkus.com', 'mindfulmarkus.com'),
    href: '/',
    external: false,
    kind: 'ghost',
  },
]

const cls: Record<string, string> = {
  soft: 'bg-sage text-forest-deep hover:bg-sage-light',
  ghost: 'bg-cream text-forest ring-1 ring-forest/15 hover:ring-forest/30',
}

export default function LinksPage() {
  const { t } = useLang()

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-sand">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <Image src="/images/links-bg.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sand/75 via-sand/90 to-sand" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-md flex-col items-center px-6 py-10">
        <div className="mb-4 flex w-full justify-end">
          <LanguageToggle dark />
        </div>

        <Image src="/logos/logo-mark-dark.svg" alt="" width={500} height={500} className="h-16 w-16" />
        <h1 className="mt-4 font-serif text-3xl text-forest">mindfulmarkus</h1>
        <p className="mt-2 max-w-xs text-center text-sm leading-relaxed text-ink/70">
          {t(content.hero.eyebrow)} · {t(content.footer.rights)}
        </p>

        {/* social icon row */}
        <div className="mt-5 flex items-center gap-5 text-forest">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="opacity-80 transition-opacity hover:opacity-100">
              {s.icon}
            </a>
          ))}
        </div>

        {/* featured card */}
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 w-full overflow-hidden rounded-3xl bg-sage p-2 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src={featured.image} alt="" fill sizes="(max-width:480px) 100vw, 420px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="px-3 py-3 text-center">
            <p className="font-medium text-forest-deep">{t(featured.label)}</p>
            <p className="text-xs text-forest-deep/70">{t(featured.sub)}</p>
          </div>
        </a>

        {/* link list */}
        <div className="mt-3 flex w-full flex-col gap-3">
          {links.map((l, i) => {
            const inner = (
              <span className="flex items-center gap-3">
                {l.image && (
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl">
                    <Image src={l.image} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                )}
                <span className={l.image ? 'text-left' : 'mx-auto text-center'}>
                  <span className="block text-sm font-medium leading-tight">{t(l.label)}</span>
                  <span className="block text-xs leading-tight opacity-70">{t(l.sub)}</span>
                </span>
              </span>
            )
            const base = `w-full rounded-2xl px-4 py-3 transition-all duration-300 active:scale-[0.98] ${cls[l.kind]}`
            return l.external ? (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className={base}>{inner}</a>
            ) : (
              <Link key={i} href={l.href} className={base}>{inner}</Link>
            )
          })}
        </div>

        <p className="mt-auto pt-10 text-center text-xs text-ink/45">
          © {new Date().getFullYear()} mindfulmarkus · {t(content.footer.motto)}
        </p>
      </div>
    </main>
  )
}
