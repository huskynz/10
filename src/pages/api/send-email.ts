import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);  // Use environment variable

export async function post({ request }) {
  // Parse the form data received from the request
  const formData = await request.formData();

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'contact@send.husky.nz',
      to: 'peter@husky.nz',
      subject: `Contact form submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Failed to send email', error }),
      { status: 500 }
    );
  }
}
