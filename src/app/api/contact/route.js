import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { values } = await req.json();
  const { name, email, message, type, position } = values;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  // Choose recipient based on type
  const recipient =
    type === 'career'
      ? `${process.env.CAREER}, ${process.env.SECONDEMAIL}`
      : `${process.env.INFO}, ${process.env.SECONDEMAIL}`;

  const mailOptions = {
    from: `Karandesai.in Contact Form <${email}>`,
    to: recipient,
    subject:
      type === 'career'
        ? `Career Application - ${position || 'Unknown Position'}`
        : 'Contact Form Submission',
    text: `
Type: ${type}
Name: ${name}
Email: ${email}
${type === 'career' ? `Position: ${position}\n` : ''}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { msg: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
