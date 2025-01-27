import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { values } = await req.json();
  const { name, email, message } = values;
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email provider
    auth: {
      user: process.env.EMAIL, // your email address
      pass: process.env.PASS, // your email password or app-specific password
    },
  });

  // Set up email options
  const mailOptions = {
    from: email, // sender's email
    to: process.env.REMAIL, // recipient's email
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.status.json(
      {
        message: 'Email sent successfully!',
      },
      { status: 500 }
    );

    // await connectMongoDB();

    return NextResponse.json({ msg: 'Project saved successfully' });
  } catch (error) {
    console.error('Error saving project:', error);
    return NextResponse.json(
      { error: 'Error saving project' },
      { status: 500 }
    );
  }
}
