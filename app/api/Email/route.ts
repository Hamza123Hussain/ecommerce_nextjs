import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface EmailRequestBody {
  to: string
  subject: string
  text: string
}

export const POST = async (req: any) => {
  try {
    const payload = await req.json()

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your App Password
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: payload?.Email,
      cc: process.env.EMAIL, // Send a copy to yourself
      subject: payload?.Subject,
      text: payload?.Text,
    }
    const info = await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent', info }, { status: 200 })
  } catch (error) {
    // Send the email

    return NextResponse.json(
      { message: 'Error sending email', error },
      { status: 500 }
    )
  }
}
