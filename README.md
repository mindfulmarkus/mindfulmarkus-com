# Mindful Markus Website

Modern, minimal yoga & wellness website for Markus in Koh Phangan.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **DNS:** Cloudflare
- **Language:** TypeScript

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      (Root layout)
│   ├── globals.css     (Global styles)
│   └── page.tsx        (Home/Coming soon)
└── components/         (Reusable components - to be built)

public/                (Static assets)
```

## Getting Started (Local Development)

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Color Palette

- **Primary:** Deep Green (#1B5E3F)
- **Secondary:** Terracotta (#C85A3A)
- **Accent:** Warm Off-white (#F5F1EB)
- **Neutral:** Cool Gray (#4A5568)

## Deployment

- Code pushed to GitHub → Vercel auto-deploys
- Domain: mindfulmarkus.com (Cloudflare DNS)
- Live at: https://mindfulmarkus.com

## Next Steps

1. Push code to GitHub
2. Connect custom domain (mindfulmarkus.com) in Vercel
3. Add DNS records in Cloudflare
4. Build full pages (Home, About, Offerings, Community, Reviews, Contact)
5. Add content & images
6. Deploy to production
