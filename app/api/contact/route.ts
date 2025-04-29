import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject, phone } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const emailSubject = subject || `New Contact Form Submission from ${name}`;
    const phoneDisplay = (typeof phone === 'string' && phone.trim() !== '') ? phone : "-";
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneDisplay}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    const data = await resend.emails.send({
      from: "no-reply@flawlessdiy.co.uk",
      to: ["victor@flawlessdiy.co.uk"],
      subject: emailSubject,
      reply_to: email,
      html,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
