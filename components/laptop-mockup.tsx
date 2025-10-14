'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface LaptopMockupProps {
  websiteImage: string
  alt: string
  className?: string
}

export function LaptopMockup({ websiteImage, alt, className = '' }: LaptopMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Laptop Frame */}
      <div className="relative mx-auto w-full max-w-[280px]">
        {/* Laptop Base */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-1 shadow-2xl">
          {/* Screen Bezel */}
          <div className="bg-black rounded-md p-0.5">
            {/* Screen */}
            <div className="relative bg-white rounded overflow-hidden aspect-[16/10]">
              {/* Website Screenshot */}
              <Image
                src={websiteImage}
                alt={alt}
                fill
                className="object-cover object-top"
                quality={90}
              />
              
              {/* Screen Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Laptop Keyboard Area */}
          <div className="mt-0.5 h-0.5 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
        </div>
        
        {/* Laptop Hinge Shadow */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gradient-to-b from-gray-600 to-transparent rounded-full opacity-30"></div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-lg blur-xl"></div>
      </div>
    </div>
  )
}

// Animated version with hover effects
export function AnimatedLaptopMockup({ websiteImage, alt, className = '' }: LaptopMockupProps) {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Laptop Frame */}
      <div className="relative mx-auto w-full max-w-[280px]">
        {/* Laptop Base */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-1 shadow-2xl">
          {/* Screen Bezel */}
          <div className="bg-black rounded-md p-0.5">
            {/* Screen */}
            <div className="relative bg-white rounded overflow-hidden aspect-[16/10]">
              {/* Website Screenshot */}
              <Image
                src={websiteImage}
                alt={alt}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                quality={90}
              />
              
              {/* Screen Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Laptop Keyboard Area */}
          <div className="mt-0.5 h-0.5 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
        </div>
        
        {/* Laptop Hinge Shadow */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gradient-to-b from-gray-600 to-transparent rounded-full opacity-30"></div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-lg blur-xl"></div>
      </div>
    </motion.div>
  )
}
