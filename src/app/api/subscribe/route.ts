import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

// ----------------------------------------------------------------------------
// Newsletter signup → Kit (ConvertKit)
// ----------------------------------------------------------------------------
// Required env vars (add to .env.local — never commit real keys):
//   KIT_API_KEY   your Kit (ConvertKit) v3 API key
//   KIT_FORM_ID   the numeric id of the Kit form subscribers are added to
//
// The form id is in the Kit dashboard URL when editing a form, e.g.
//   app.kit.com/forms/designers/1234567/edit  ->  KIT_FORM_ID=1234567
// ----------------------------------------------------------------------------

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
    }

    const apiKey = process.env.KIT_API_KEY
    const formId = process.env.KIT_FORM_ID

    if (!apiKey || !formId) {
      return NextResponse.json({ error: 'not_configured' }, { status: 500 })
    }

    const res = await fetch(`https://api.kit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: apiKey, email }),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'subscribe_failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 })
  }
}
