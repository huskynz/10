import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

async function verifyTurnstileToken(token: string) {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secret: import.meta.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });

  const data = await response.json();
  return data.success;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json();
    const { name, email, message, turnstileToken } = formData;

    // Verify turnstile token
    const isValid = await verifyTurnstileToken(turnstileToken);
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: 'Invalid captcha' }),
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: import.meta.env.CONTACT_SEND_EMAIL,
      to: import.meta.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500 }
    );
  }
};