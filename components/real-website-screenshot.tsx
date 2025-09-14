'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface RealWebsiteScreenshotProps {
  url: string
  alt: string
  className?: string
}

export function RealWebsiteScreenshot({ 
  url, 
  alt, 
  className = "w-full h-full object-cover"
}: RealWebsiteScreenshotProps) {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const generateScreenshot = async () => {
      try {
        // Try multiple screenshot services
        const services = [
          // Service 1: ScreenshotAPI (free tier available)
          `https://api.screenshotapi.net/screenshot?token=YOUR_TOKEN&url=${encodeURIComponent(url)}&width=1200&height=800&device=desktop&format=png&full_page=false`,
          
          // Service 2: URL2PNG (free tier available)
          `https://api.url2png.com/v6/YOUR_API_KEY/YOUR_SITE_ID/png/?url=${encodeURIComponent(url)}&viewport=1200x800&unique=1`,
          
          // Service 3: ScreenshotOne (free tier available)
          `https://api.screenshotone.com/take?access_key=YOUR_ACCESS_KEY&url=${encodeURIComponent(url)}&viewport_width=1200&viewport_height=800&device_scale_factor=1&format=png&image_quality=80&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=true&block_trackers=true&delay=3&timeout=30`,
          
          // Service 4: Free alternative using a proxy
          `https://cors-anywhere.herokuapp.com/https://api.screenshotmachine.com/v5/capture?key=demo&url=${encodeURIComponent(url)}&dimension=1200x800&format=png&cacheLimit=0&timeout=10000`
        ]

        // For now, let's create a realistic website mockup
        const domain = url.replace(/^https?:\/\//, '').replace(/\/$/, '')
        
        // Create a more realistic browser mockup
        const mockupSvg = `
          <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#f8fafc;stop-opacity:1" />
              </linearGradient>
              <linearGradient id="header" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
              </filter>
            </defs>
            
            <!-- Browser Window -->
            <rect x="0" y="0" width="1200" height="800" fill="url(#bg)" filter="url(#shadow)"/>
            
            <!-- Browser Header -->
            <rect x="0" y="0" width="1200" height="40" fill="url(#header)"/>
            
            <!-- Browser Controls -->
            <circle cx="15" cy="20" r="4" fill="#ef4444"/>
            <circle cx="30" cy="20" r="4" fill="#f59e0b"/>
            <circle cx="45" cy="20" r="4" fill="#10b981"/>
            
            <!-- Address Bar -->
            <rect x="70" y="12" width="600" height="16" rx="8" fill="white" opacity="0.9"/>
            <text x="80" y="23" fill="#374151" font-family="Arial, sans-serif" font-size="10">${domain}</text>
            
            <!-- Website Content -->
            <rect x="20" y="60" width="1160" height="720" fill="white" stroke="#e5e7eb" stroke-width="1"/>
            
            <!-- Navigation Bar -->
            <rect x="40" y="80" width="1120" height="50" fill="#f8fafc"/>
            <text x="60" y="105" fill="#1f2937" font-family="Arial, sans-serif" font-size="16" font-weight="bold">${domain}</text>
            <text x="200" y="105" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">Home</text>
            <text x="250" y="105" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">About</text>
            <text x="300" y="105" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">Services</text>
            <text x="360" y="105" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">Contact</text>
            
            <!-- Hero Section -->
            <rect x="40" y="150" width="1120" height="200" fill="#3b82f6" opacity="0.1"/>
            <text x="600" y="200" text-anchor="middle" fill="#1f2937" font-family="Arial, sans-serif" font-size="28" font-weight="bold">Welcome to ${domain}</text>
            <text x="600" y="230" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="14">Professional services for your business needs</text>
            <rect x="500" y="250" width="120" height="40" fill="#3b82f6" rx="6"/>
            <text x="560" y="270" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Get Started</text>
            
            <!-- Content Blocks -->
            <rect x="60" y="380" width="300" height="120" fill="#f3f4f6" rx="8"/>
            <text x="80" y="400" fill="#1f2937" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Service 1</text>
            <text x="80" y="420" fill="#6b7280" font-family="Arial, sans-serif" font-size="11">Professional solutions</text>
            <text x="80" y="440" fill="#6b7280" font-family="Arial, sans-serif" font-size="11">for your business</text>
            
            <rect x="400" y="380" width="300" height="120" fill="#f3f4f6" rx="8"/>
            <text x="420" y="400" fill="#1f2937" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Service 2</text>
            <text x="420" y="420" fill="#6b7280" font-family="Arial, sans-serif" font-size="11">Expert guidance</text>
            <text x="420" y="440" fill="#6b7280" font-family="Arial, sans-serif" font-size="11">and support</text>
            
            <rect x="740" y="380" width="300" height="120" fill="#f3f4f6" rx="8"/>
            <text x="760" y="400" fill="#1f2937" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Service 3</text>
            <text x="760" y="420" fill="#6b7280" font-family="Arial, sans-serif" font-size="11">Quality results</text>
            <text x="760" y="440" fill="#6b7280" font-family="Arial, sans-serif" font-size="11">guaranteed</text>
            
            <!-- Footer -->
            <rect x="40" y="720" width="1120" height="50" fill="#f9fafb"/>
            <text x="60" y="740" fill="#6b7280" font-family="Arial, sans-serif" font-size="10">© 2024 ${domain}. All rights reserved.</text>
            <text x="1000" y="740" fill="#6b7280" font-family="Arial, sans-serif" font-size="10">Privacy Policy | Terms of Service</text>
          </svg>
        `
        
        setImageUrl(`data:image/svg+xml,${encodeURIComponent(mockupSvg)}`)
        setIsLoading(false)
        
      } catch (error) {
        console.error('Error generating screenshot:', error)
        setHasError(true)
        setIsLoading(false)
      }
    }

    generateScreenshot()
  }, [url])

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🌐</div>
          <div className="text-sm">Website Preview</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-500">Loading website preview...</div>
        </div>
      )}
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
