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

export const metadata: Metadata = {
  title: 'mindfulmarkus — yoga & mindful living',
  description:
    'Move, breathe, be grounded. Mindful yoga online and in person — from Koh Phangan to a summer class series at Übersee am Chiemsee.',
  keywords: 'yoga, mindfulness, wellness, Koh Phangan, Übersee, Chiemsee, meditation',
  openGraph: {
    title: 'mindfulmarkus — yoga & mindful living',
    description: 'Move, breathe, be grounded. Mindful yoga online and in person.',
    url: 'https://mindfulmarkus.com',
    siteName: 'mindfulmarkus',
    locale: 'en_US',
    type: 'website',
  },
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-cream text-ink antialiased font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
