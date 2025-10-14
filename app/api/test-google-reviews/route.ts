import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || process.env.Google_Place_API_New
    const PLACE_ID = process.env.GOOGLE_PLACE_ID || process.env.Google_Place_ID || process.env.Google_Place_id
    
    // Debug logging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('API Key exists:', !!GOOGLE_PLACES_API_KEY)
      console.log('Place ID exists:', !!PLACE_ID)
    }
    
    if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
      return NextResponse.json({
        error: 'Missing configuration',
        hasApiKey: !!GOOGLE_PLACES_API_KEY,
        hasPlaceId: !!PLACE_ID,
        placeIdValue: PLACE_ID
      }, { status: 500 })
    }

    // Test API call
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,name,rating&key=${GOOGLE_PLACES_API_KEY}`
    )

    const data = await response.json()
    
    return NextResponse.json({
      status: data.status,
      error: data.error_message || null,
      hasReviews: !!data.result?.reviews,
      reviewCount: data.result?.reviews?.length || 0,
      placeName: data.result?.name || 'Unknown',
      rawResponse: data
    })

  } catch (error) {
    console.error('Test error:', error)
    return NextResponse.json({
      error: 'Test failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
