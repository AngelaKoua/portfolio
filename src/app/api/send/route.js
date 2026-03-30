import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ 
      error: "Missing RESEND_API_KEY. Please add it to your environment variables." 
    }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.FROM_EMAIL;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail || "onboarding@resend.dev",
      to: ["angelakoua5@gmail.com"], // Sending ONLY to your verified email
      subject: `New Contact Form Submission: ${subject}`,
      react: (
        <>
          <h1>{subject}</h1>
          <p>You have a new message from your portfolio contact form.</p>
          <hr />
          <p><strong>From:</strong> {email}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    console.log("Email Sent Successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
