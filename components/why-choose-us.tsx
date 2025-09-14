'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Brain, 
  Zap, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react'

const differentiators = [
  {
    icon: Brain,
    title: 'AI + Human Strategy',
    description: 'Automation where it matters, creative where it counts.',
    details: 'We combine cutting-edge AI tools with human creativity to deliver strategies that are both efficient and effective.'
  },
  {
    icon: Zap,
    title: 'Built for Speed & Scale',
    description: 'From launch to growth—no wasted motion.',
    details: 'Our streamlined processes ensure quick delivery without compromising quality, designed to grow with your business.'
  },
  {
    icon: CheckCircle,
    title: 'Proof Over Promises',
    description: '15+ sites shipped; campaigns that turn clicks into customers.',
    details: 'We deliver measurable results with transparent reporting and proven strategies that drive real business growth.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-roboto font-bold text-primary-navy mb-4">
            Small Business. Big Advantage.
          </h2>
          <p className="text-body text-gray-dark max-w-3xl mx-auto mb-8">
            We blend world-class design with AI-powered marketing so SMBs can look and perform like industry leaders. Clean builds, clear strategy, and automation that scales - without the enterprise price tag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-blue-lime rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-h3 font-roboto font-semibold text-primary-navy mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-body text-gray-dark mb-4 font-medium">
                    {item.description}
                  </p>
                  
                  <p className="text-small text-gray-dark">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary-navy rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl md:text-5xl font-roboto font-bold text-primary-lime mb-2">
                15+
              </div>
              <div className="text-body text-white/80">
                Websites Delivered
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-roboto font-bold text-primary-lime mb-2">
                100%
              </div>
              <div className="text-body text-white/80">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-roboto font-bold text-primary-lime mb-2">
                24h
              </div>
              <div className="text-body text-white/80">
                Response Time
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-body text-white/90 mb-6">
              "Clarity beats clutter. We believe in lean storytelling, premium visuals, and systems that last. No jargon, no gimmicks—just strategies crafted to make your business look bigger and perform smarter."
            </p>
            <Button size="lg" className="bg-white text-primary-navy hover:bg-gray-light">
              Get a Free Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
