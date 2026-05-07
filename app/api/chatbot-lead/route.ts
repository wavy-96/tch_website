import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create a transporter using Gmail (reuse the same config as contact form)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, businessName, businessType, message, source } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Log the lead submission
    console.log('Chatbot lead submission received:', { 
      name, 
      email, 
      phone, 
      businessName,
      businessType,
      message,
      source: source || 'Chatbot',
      timestamp: new Date().toISOString()
    })

    // Send email notification using Gmail
    try {
      const mailOptions = {
        from: `"The Creative Horse Website" <${process.env.GMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL || 'Contact@thecreativehorse.ca',
        replyTo: email,
        subject: `🤖 New Chatbot Lead: ${name}${businessName ? ` - ${businessName}` : ''}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #007BFF 0%, #00CFFF 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #007BFF; display: block; margin-bottom: 5px; }
                .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0; }
                .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007BFF; margin-top: 10px; }
                .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 14px; }
                .source-badge { display: inline-block; background: #007BFF; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; margin-left: 10px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🤖 New Lead from Chatbot!</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Source: Website Chatbot</p>
                </div>
                <div class="content">
                  <p style="font-size: 16px; margin-bottom: 20px;">A visitor has provided their information through the chatbot:</p>
                  
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
                  
                  ${businessName ? `
                  <div class="field">
                    <span class="label">🏢 Business Name:</span>
                    <div class="value">${businessName}</div>
                  </div>
                  ` : ''}
                  
                  ${businessType ? `
                  <div class="field">
                    <span class="label">🏷️ Business Type:</span>
                    <div class="value">${businessType}</div>
                  </div>
                  ` : ''}
                  
                  ${message ? `
                  <div class="field">
                    <span class="label">💬 Message:</span>
                    <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                  ` : ''}
                  
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
                  <p>This lead was collected from The Creative Horse website chatbot.</p>
                  <p style="margin: 5px 0;">© ${new Date().getFullYear()} The Creative Horse. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      }
      
      await transporter.sendMail(mailOptions)
      console.log('Chatbot lead email sent successfully via Gmail')
    } catch (emailError) {
      console.error('Error sending chatbot lead email:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { message: 'Thank you! We\'ve received your information and will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing chatbot lead:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

