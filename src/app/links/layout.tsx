import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Links',
  description:
    'Everything from mindfulmarkus in one place — the stillness in motion community, classes, Spotify playlists and more.',
  alternates: { canonical: '/links' },
  openGraph: {
    title: 'Links · mindfulmarkus',
    description:
      'Everything from mindfulmarkus in one place — community, classes, playlists and more.',
    url: 'https://mindfulmarkus.com/links',
  },
}

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return children
}
