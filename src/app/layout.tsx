import type { Metadata } from 'next'
import { Cormorant, Montserrat } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/i18n/LanguageProvider'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const SITE = 'https://mindfulmarkus.com'
const DESC =
  'Move, breathe, be grounded. Mindful yoga online and in person — from Koh Phangan to a summer class series at Übersee am Chiemsee.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'mindfulmarkus — yoga & mindful living',
    template: '%s · mindfulmarkus',
  },
  description: DESC,
  keywords: [
    'yoga',
    'mindfulness',
    'meditation',
    'wellness',
    'Koh Phangan',
    'Übersee',
    'Chiemsee',
    'stillness in motion',
    'mindful living',
  ],
  authors: [{ name: 'Markus', url: SITE }],
  creator: 'mindfulmarkus',
  publisher: 'mindfulmarkus',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: 'mindfulmarkus',
    title: 'mindfulmarkus — yoga & mindful living',
    description: 'Move, breathe, be grounded. Mindful yoga online and in person.',
    locale: 'en_US',
    alternateLocale: 'de_DE',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'mindfulmarkus — stillness in motion' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mindfulmarkus — yoga & mindful living',
    description: 'Move, breathe, be grounded. Mindful yoga online and in person.',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Markus',
      jobTitle: 'Yoga Teacher & Mindfulness Guide',
      description:
        'Yoga teacher and mindfulness guide based on Koh Phangan, teaching online and in person.',
      url: SITE,
      image: `${SITE}/og.jpg`,
      worksFor: { '@id': `${SITE}/#org` },
      sameAs: [
        'https://www.instagram.com/mindfulmarkus/',
        'https://www.youtube.com/@mindfulmarkus',
        'https://www.skool.com/stillness-in-motion-5445',
        'https://open.spotify.com/user/1155546441',
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${SITE}/#org`,
      name: 'mindfulmarkus',
      alternateName: 'stillness in motion',
      slogan: 'stillness in motion',
      url: SITE,
      logo: `${SITE}/apple-icon.png`,
      image: `${SITE}/og.jpg`,
      description:
        'Mindful yoga and intentional living — online from anywhere, and in person between Koh Phangan and the Chiemsee.',
      founder: { '@id': `${SITE}/#person` },
      sameAs: [
        'https://www.instagram.com/mindfulmarkus/',
        'https://www.youtube.com/@mindfulmarkus',
        'https://www.skool.com/stillness-in-motion-5445',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'mindfulmarkus',
      description: DESC,
      inLanguage: ['en', 'de'],
      publisher: { '@id': `${SITE}/#org` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-ink antialiased font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
