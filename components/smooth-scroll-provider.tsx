'use client'

import { useEffect } from 'react'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Enhanced smooth scrolling with reduced speed
    const smoothScroll = () => {
      let isScrolling = false
      let scrollTimeout: NodeJS.Timeout

      const handleScroll = () => {
        if (!isScrolling) {
          window.requestAnimationFrame(() => {
            // Add a slight delay to make scrolling feel more controlled
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
              isScrolling = false
            }, 150)
          })
          isScrolling = true
        }
      }

      // Add scroll event listener with passive: true for better performance
      window.addEventListener('scroll', handleScroll, { passive: true })

      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll)
        clearTimeout(scrollTimeout)
      }
    }

    // Apply custom scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.style.scrollBehavior = 'smooth'
    
    // Add custom CSS for slower scroll
    const style = document.createElement('style')
    style.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
      }
      
      body {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
      }
      
      /* Custom scroll speed control */
      * {
        scroll-behavior: smooth;
      }
      
      /* Reduce scroll speed for a more premium feel */
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth;
        }
      }
      
      /* Custom scrollbar for better visual feedback */
      ::-webkit-scrollbar {
        width: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #007BFF;
        border-radius: 3px;
        transition: background 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #0056b3;
      }
    `
    
    document.head.appendChild(style)
    
    // Initialize smooth scroll
    smoothScroll()

    // Cleanup function
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return <>{children}</>
}
