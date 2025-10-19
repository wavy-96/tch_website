import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
  },
})

export async function POST(request: NextRequest) {
  console.log('Contact API called')
  console.log('Environment variables check:')
  console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER)
  console.log('GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD)
  console.log('CONTACT_EMAIL exists:', !!process.env.CONTACT_EMAIL)
  console.log('GMAIL_USER value:', process.env.GMAIL_USER)
  console.log('GMAIL_APP_PASSWORD value:', process.env.GMAIL_APP_PASSWORD ? '***SET***' : 'NOT SET')
  
  try {
    // Get the raw text first
    const text = await request.text()
    console.log('Raw request text:', text)
    
    let body
    try {
      body = JSON.parse(text)
      console.log('Parsed JSON:', body)
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      return NextResponse.json(
        { error: 'Invalid JSON format' },
        { status: 400 }
      )
    }
    
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Log the form submission
    console.log('Contact form submission received:', { 
      name, 
      email, 
      phone, 
      service, 
      message,
      timestamp: new Date().toISOString()
    })

    // Send email notification using Gmail
    try {
      const mailOptions = {
        from: `"The Creative Horse Website" <${process.env.GMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL || 'Contact@thecreativehorse.ca',
        replyTo: email, // Allows you to reply directly to the customer
        subject: `🎉 New Lead: ${name} - ${service || 'General Inquiry'}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #007BFF; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #007BFF; display: block; margin-bottom: 5px; }
                .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0; }
                .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007BFF; margin-top: 10px; }
                .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🎉 New Lead from The Creative Horse Website!</h1>
                </div>
                <div class="content">
                  <p style="font-size: 16px; margin-bottom: 20px;">You have received a new contact form submission:</p>
                  
                  <div class="field">
                    <span class="label">👤 Name:</span>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="field">
                    <span class="label">📧 Email:</span>
                    <div class="value"><a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></div>
                  </div>
                  
                  ${phone ? `
                  <div class="field">
                    <span class="label">📱 Phone:</span>
                    <div class="value"><a href="tel:${phone}" style="color: #007BFF; text-decoration: none;">${phone}</a></div>
                  </div>
                  ` : ''}
                  
                  ${service ? `
                  <div class="field">
                    <span class="label">🎯 Service Interested In:</span>
                    <div class="value">${service}</div>
                  </div>
                  ` : ''}
                  
                  <div class="field">
                    <span class="label">💬 Message:</span>
                    <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                  
                  <div style="margin-top: 30px; padding: 15px; background: #e8f4ff; border-radius: 4px; text-align: center;">
                    <p style="margin: 0; color: #007BFF; font-weight: bold;">⏰ Submitted on: ${new Date().toLocaleString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric', 
                      hour: '2-digit', 
                      minute: '2-digit'
                    })}</p>
                  </div>
                </div>
                <div class="footer">
                  <p>This email was sent from The Creative Horse website contact form.</p>
                  <p style="margin: 5px 0;">© ${new Date().getFullYear()} The Creative Horse. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      }
      
      await transporter.sendMail(mailOptions)
      console.log('Email sent successfully via Gmail')
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      // Don't fail the request if email fails - we still want to log it
    }

    return NextResponse.json(
      { message: 'Message received successfully! We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}