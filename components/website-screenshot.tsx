'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface WebsiteScreenshotProps {
  url: string
  alt: string
  className?: string
  fallbackImage?: string
}

export function WebsiteScreenshot({ 
  url, 
  alt, 
  className = "w-full h-full object-cover",
  fallbackImage = "/api/placeholder/600/400"
}: WebsiteScreenshotProps) {
  const [imageUrl, setImageUrl] = useState(fallbackImage)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Try to use a free screenshot service first
    const generateScreenshotUrl = (websiteUrl: string) => {
      // Using a free screenshot service (no API key required)
      // This service provides basic screenshots but may have limitations
      return `https://api.screenshotmachine.com/v5/capture?key=demo&url=${encodeURIComponent(websiteUrl)}&dimension=1200x800&format=png&cacheLimit=0&timeout=10000`
    }

    const screenshotUrl = generateScreenshotUrl(url)
    
    // Try the free service first
    const img = new window.Image()
    img.onload = () => {
      setImageUrl(screenshotUrl)
      setIsLoading(false)
    }
    img.onerror = () => {
      // If free service fails, create a more realistic website preview
      const domain = url.replace(/^https?:\/\//, '').replace(/\/$/, '')
      
      // Create a more realistic browser-like preview
      setImageUrl(`data:image/svg+xml,${encodeURIComponent(`
        <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="header" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
            </linearGradient>
          </defs>
          
          <!-- Background -->
          <rect width="100%" height="100%" fill="url(#bg)"/>
          
          <!-- Browser Header -->
          <rect x="0" y="0" width="100%" height="60" fill="url(#header)"/>
          
          <!-- Browser Controls -->
          <circle cx="20" cy="30" r="6" fill="#ef4444"/>
          <circle cx="40" cy="30" r="6" fill="#f59e0b"/>
          <circle cx="60" cy="30" r="6" fill="#10b981"/>
          
          <!-- Address Bar -->
          <rect x="100" y="20" width="800" height="20" rx="10" fill="white" opacity="0.9"/>
          <text x="110" y="33" fill="#374151" font-family="Arial, sans-serif" font-size="12">${domain}</text>
          
          <!-- Website Content Area -->
          <rect x="20" y="80" width="1160" height="700" fill="white" stroke="#e5e7eb" stroke-width="1"/>
          
          <!-- Website Title -->
          <text x="600" y="150" text-anchor="middle" fill="#1f2937" font-family="Arial, sans-serif" font-size="32" font-weight="bold">${domain}</text>
          
          <!-- Content Blocks -->
          <rect x="60" y="200" width="300" height="40" fill="#f3f4f6" rx="4"/>
          <rect x="60" y="260" width="500" height="20" fill="#e5e7eb" rx="2"/>
          <rect x="60" y="290" width="400" height="20" fill="#e5e7eb" rx="2"/>
          <rect x="60" y="320" width="350" height="20" fill="#e5e7eb" rx="2"/>
          
          <rect x="60" y="380" width="200" height="60" fill="#3b82f6" rx="4"/>
          <text x="160" y="415" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Button</text>
          
          <rect x="300" y="380" width="200" height="60" fill="#10b981" rx="4"/>
          <text x="400" y="415" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Action</text>
          
          <!-- Footer -->
          <rect x="20" y="720" width="1160" height="60" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1"/>
          <text x="600" y="750" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">© 2024 ${domain}</text>
        </svg>
      `)}`)
      setIsLoading(false)
    }
    
    img.src = screenshotUrl
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
          <div className="text-gray-500">Loading...</div>
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
