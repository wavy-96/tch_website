import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Google Places API configuration
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || process.env.Google_Place_API_New
    const PLACE_ID = process.env.GOOGLE_PLACE_ID || process.env.Google_Place_ID || process.env.Google_Place_id // Your business Place ID
    
    if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
      return NextResponse.json(
        { error: 'Google Places API configuration missing' },
        { status: 500 }
      )
    }

    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,name,rating&key=${GOOGLE_PLACES_API_KEY}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch Google Reviews')
    }

    const data = await response.json()

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`)
    }

    // Transform Google Reviews to match your testimonial format
    const reviews = data.result.reviews?.map((review: any) => ({
      quote: review.text,
      name: review.author_name,
      designation: 'Verified Google Review',
      src: review.profile_photo_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face',
      rating: review.rating,
      time: review.time,
      author_url: review.author_url,
      relative_time_description: review.relative_time_description
    })) || []

    return NextResponse.json({ reviews })

  } catch (error) {
    console.error('Error fetching Google Reviews:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}
