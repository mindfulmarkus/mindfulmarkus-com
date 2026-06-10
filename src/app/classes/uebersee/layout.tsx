import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mindful Yoga at the Chiemsee',
  description:
    'A small summer series of outdoor yoga classes in Übersee am Chiemsee — grounding movement, breath and stillness, in good company.',
  alternates: { canonical: '/classes/uebersee' },
  openGraph: {
    title: 'Mindful Yoga at the Chiemsee · mindfulmarkus',
    description:
      'A small summer series of outdoor yoga classes in Übersee am Chiemsee — grounding movement, breath and stillness.',
    url: 'https://mindfulmarkus.com/classes/uebersee',
  },
}

export default function UeberseeLayout({ children }: { children: React.ReactNode }) {
  return children
}
