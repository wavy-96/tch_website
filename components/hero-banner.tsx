'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

interface HeroBannerProps {
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
  proof: string
}

export function HeroBanner({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta, 
  proof 
}: HeroBannerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-blue-navy">
      {/* 3D Background Effect */}
      <div className="absolute inset-0 perspective-1000">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-sky/20 to-primary-navy/40"
          animate={{
            rotateX: [0, 5, 0],
            rotateY: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-primary-lime/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-primary-blue/20 rounded-lg"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-hero md:text-7xl lg:text-8xl font-roboto font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button size="lg" className="w-full sm:w-auto">
              {primaryCta}
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-navy">
              {secondaryCta}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-small text-white/70"
          >
            {proof}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
