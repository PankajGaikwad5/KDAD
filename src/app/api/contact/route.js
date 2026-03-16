import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  let name, email, message, type, position, file;
  try {
    const formData = await req.formData();
    name = formData.get('name');
    email = formData.get('email');
    message = formData.get('message');
    type = formData.get('type');
    position = formData.get('position');
    file = formData.get('file');
  } catch (e) {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
  }

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

  if (file && typeof file === 'object' && file.name) {
    const buffer = Buffer.from(await file.arrayBuffer());
    mailOptions.attachments = [
      {
        filename: file.name,
        content: buffer,
        contentType: file.type,
      },
    ];
  }

  try {
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { msg: 'Email sent successfully!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
