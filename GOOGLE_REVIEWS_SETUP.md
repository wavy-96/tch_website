# Google Reviews Integration Setup Guide

## 🌟 How to Connect Google Reviews to Your Testimonials

### Step 1: Get Google Places API Key

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create or Select Project:**
   - Create a new project or select existing one
   - Name it "The Creative Horse Website"

3. **Enable Google Places API:**
   - Go to "APIs & Services" → "Library"
   - Search for "Places API"
   - Click "Enable"

4. **Create API Key:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key

### Step 2: Find Your Business Place ID

1. **Use Google's Place ID Finder:**
   - Visit: https://developers.google.com/maps/documentation/places/web-service/place-id
   - Search for "The Creative Horse" or your business name
   - Copy the Place ID

### Step 3: Configure Environment Variables

1. **Create .env.local file in your project root:**
```bash
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

2. **For Netlify deployment, add these in Netlify:**
   - Go to your site dashboard
   - Site Settings → Environment variables
   - Add both variables

### Step 4: Test the Integration

1. **Local testing:**
   - Restart your development server
   - Visit your testimonials section
   - Check if Google Reviews are loading

2. **Production testing:**
   - Deploy to Netlify
   - Check your live site testimonials

## 🔧 Features Included

✅ **Automatic Google Reviews Fetching**
✅ **Fallback to Static Testimonials**
✅ **Real-time Review Updates**
✅ **Star Ratings Display**
✅ **Customer Profile Photos**
✅ **Mobile Responsive**

## 📋 Troubleshooting

### If Google Reviews Don't Load:
1. Check API key is correct
2. Verify Place ID is correct
3. Ensure Places API is enabled
4. Check API quotas and billing

### Fallback System:
- If Google Reviews fail to load, the system automatically shows your static testimonials
- No downtime or broken testimonials section

## 💰 Cost Information

- **Google Places API:** Free tier includes 1,000 requests/month
- **Additional requests:** $0.017 per request
- **Typical usage:** Very low cost for testimonials

## 🔒 Security Notes

- API keys are stored as environment variables
- Never commit API keys to your repository
- Use Netlify's environment variables for production
