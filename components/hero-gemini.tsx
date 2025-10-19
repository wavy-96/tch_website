'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

interface HeroGeminiProps {
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta?: string
  proof: string
}

export function HeroGemini({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta, 
  proof 
}: HeroGeminiProps) {
  const [mounted, setMounted] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const ref = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll()
  
  // Map scroll progress to path lengths - animation completes ultra-fast as user scrolls down
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.05], [0, 1.2])
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.05], [0, 1.2])
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.05], [0, 1.2])
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.05], [0, 1.2])
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.05], [0, 1.2])

  const pathLengths = [
    pathLengthFirst,
    pathLengthSecond,
    pathLengthThird,
    pathLengthFourth,
    pathLengthFifth,
  ]

  useEffect(() => {
    setMounted(true)
    
    // Monitor scroll progress to determine when animation is complete
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Consider animation complete when user has scrolled a tiny amount
      if (latest >= 0.03 && !animationComplete) {
        setAnimationComplete(true)
      } else if (latest < 0.03 && animationComplete) {
        setAnimationComplete(false)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [scrollYProgress, animationComplete])

  if (!mounted) return null

  return (
    <section 
      ref={ref}
      className="relative h-screen overflow-hidden bg-gradient-blue-navy"
    >
      {/* Google Gemini Effect as Background */}
      <div className="absolute inset-0 z-0">
        <GoogleGeminiEffect
          pathLengths={pathLengths}
          title=""
          description=""
          className="opacity-40"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Top Section - Title and Subtitle */}
        <div className="flex-1 flex items-center justify-center">
          <div className="container-max text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              {/* Title with Text Generate Effect */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-hero md:text-7xl lg:text-8xl font-roboto font-bold text-white mb-6 leading-tight relative z-20"
              >
                <TextGenerateEffect
                  words={title}
                  className=""
                  duration={1.0}
                />
              </motion.h1>
              
              {/* Subtitle with Text Generate Effect */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="text-body md:text-xl text-white/90 max-w-2xl mx-auto relative z-20"
              >
                <TextGenerateEffect
                  words={subtitle}
                  className=""
                  duration={0.8}
                />
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Middle Section - CTA Button positioned in center of effect */}
        <div className="flex items-center justify-center" style={{ paddingBottom: '120px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-20"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => window.location.href = '/contact'}
            >
              {primaryCta}
            </Button>
          </motion.div>
        </div>

        {/* Bottom Section - Proof */}
        <div className="flex items-end justify-center pb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-small text-white/70 relative z-20"
          >
            {proof}
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator - always visible to encourage scrolling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
