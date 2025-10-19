'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="section-padding bg-gradient-blue-navy text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-h1 md:text-6xl font-roboto font-bold mb-6">
            Your Free Audit Awaits.
          </h2>
          
            <p className="text-body md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              A clear plan to revamp your presence - and grow.
            </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-lime flex-shrink-0" />
              <span className="text-body text-white/90">Free website analysis</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-lime flex-shrink-0" />
              <span className="text-body text-white/90">Growth strategy roadmap</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-lime flex-shrink-0" />
              <span className="text-body text-white/90">24h response time</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary-navy hover:bg-gray-light w-full sm:w-auto"
              onClick={() => window.location.href = '/contact'}
            >
              Book a Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-navy w-full sm:w-auto"
              onClick={() => window.location.href = '/contact'}
            >
              Get Free Audit
            </Button>
          </div>

          <p className="text-small text-white/70 mt-6">
            No spam. No commitment. Just honest insights about your digital presence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
