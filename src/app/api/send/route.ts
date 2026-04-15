import process from 'node:process'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import EmailTemplate from '@/components/EmailTemplate'

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json()
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured.' },
        { status: 500 },
      )
    }

    const resend = new Resend(resendApiKey)

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['vlas20421@gmail.com'],
      subject: `Portfolio inquiry: ${subject}`,
      react: EmailTemplate({ email, subject, message }),
      text: `New message from ${email}\nSubject: ${subject}\n\n${message}`,
    })

    return NextResponse.json(data)
  }
  catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unexpected error',
      },
      { status: 500 },
    )
  }
}
