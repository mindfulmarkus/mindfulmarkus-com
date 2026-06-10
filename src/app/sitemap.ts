import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mindfulmarkus.com'
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/links`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/classes/uebersee`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
