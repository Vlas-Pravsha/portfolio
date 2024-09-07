import EmailTemplate from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();
    
    const data = await resend.emails.send({
      from: 'Your Website <onboarding@resend.dev>',
      to: ['vlas20421@gmail.com'],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({  email, subject, message }),
      text: `New message from ${email}\nSubject: ${subject}\n\n${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}