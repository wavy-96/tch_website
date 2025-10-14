import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('Contact API called')
  
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