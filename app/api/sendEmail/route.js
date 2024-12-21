import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !phone || !message) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Replace with your email service
      auth: {
        user: process.env.EMAIL_USER, // Add in `.env.local`
        pass: process.env.EMAIL_PASS, // Add in `.env.local`
      },
    });
    await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender's name and email
        to: process.env.EMAIL_USER, // Replace with your email address
        subject: `New Appointment Request from ${name}`,
        text: `
          You have received a new appointment request:
          
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
        html: `
          <p><strong>You have received a new appointment request:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
        `,
      });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}
