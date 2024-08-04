import EmailTemplate from '@/components/Email/EmailTemplate'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
export const POST = async (req: Request) => {
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

    // Generate the HTML content for the email
    const htmlContent = EmailTemplate({
      id: payload?.id || '',
      Fullname: payload?.Fullname || '',
      userName: payload?.Name || '',
      userEmail: payload?.Email || '',
      cart: payload?.cart || [],
      total: payload?.total || 0,
      address: payload?.address || '',
      paymentMethod: payload?.paymentMethod || '',
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: payload?.Email || '',
      cc: process.env.EMAIL, // Send a copy to yourself
      subject: payload?.Subject || 'No Subject',
      html: htmlContent,
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent', info }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error) // Log the error for debugging
    return NextResponse.json(
      { message: 'Error sending email', error },
      { status: 500 }
    )
  }
}
