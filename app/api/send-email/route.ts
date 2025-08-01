import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Clinica <info@clinica.pk>', // Must match verified domain
      to: 'nizam9671@gmail.com',         // Your real email
      subject: body.subject || 'Booking Request',
      html: `<p>${body.message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
