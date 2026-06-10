import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://mindfulmarkus.com/sitemap.xml',
    host: 'https://mindfulmarkus.com',
  }
}
