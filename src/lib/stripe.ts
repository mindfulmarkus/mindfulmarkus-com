import Stripe from 'stripe'

const key = process.env.STRIPE_SECRET_KEY

if (!key) {
  // Thrown lazily at request time, not at build time, so `next build` still works
  // even before keys are configured.
  console.warn('STRIPE_SECRET_KEY is not set — checkout will fail until it is.')
}

export const stripe = new Stripe(key ?? 'sk_missing', {
  apiVersion: '2024-06-20',
  typescript: true,
})
