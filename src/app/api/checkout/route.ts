import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export const runtime = 'nodejs'

/**
 * Creates a Stripe Checkout Session for the June class registration.
 *
 * Configure with environment variables (see .env.example):
 *  - STRIPE_SECRET_KEY            your Stripe secret key (sk_test_... or sk_live_...)
 *  - STRIPE_CLASS_PRICE_ID        a Price ID from your Stripe dashboard (recommended)
 *  - NEXT_PUBLIC_SITE_URL         e.g. https://mindfulmarkus.com (used for redirect URLs)
 *
 * If STRIPE_CLASS_PRICE_ID is not set, a fallback inline price is used so you can
 * test the flow immediately — edit CLASS_PRICE_FALLBACK below or, better, create a
 * Product + Price in Stripe and set STRIPE_CLASS_PRICE_ID.
 */

// Fallback used only when STRIPE_CLASS_PRICE_ID is not provided.
const CLASS_PRICE_FALLBACK = {
  currency: 'eur',
  unit_amount: 2500, // €25.00 — placeholder, adjust to your real price
  name: 'Mindful Yoga at the Chiemsee — June class',
}

export async function POST(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Set STRIPE_SECRET_KEY.' },
        { status: 500 }
      )
    }

    const { lang } = (await request.json().catch(() => ({}))) as { lang?: string }
    const locale = lang === 'de' ? 'de' : 'en'

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ??
      request.headers.get('origin') ??
      'http://localhost:3000'

    const priceId = process.env.STRIPE_CLASS_PRICE_ID

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      locale: locale as 'de' | 'en',
      line_items: [
        priceId
          ? { price: priceId, quantity: 1 }
          : {
              quantity: 1,
              price_data: {
                currency: CLASS_PRICE_FALLBACK.currency,
                unit_amount: CLASS_PRICE_FALLBACK.unit_amount,
                product_data: { name: CLASS_PRICE_FALLBACK.name },
              },
            },
      ],
      // Collect attendee details so Markus knows who registered.
      phone_number_collection: { enabled: true },
      success_url: `${origin}/classes/uebersee/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/classes/uebersee/cancel`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: 'Unable to create checkout session.' }, { status: 500 })
  }
}
