'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SparklesCore } from '@/components/ui/sparkles'
import { LampContainer } from '@/components/ui/lamp'
import { 
  Globe, 
  Share2, 
  Target, 
  Palette, 
  Search,
  ArrowRight,
  CheckCircle,
  Bot,
  HelpCircle,
  BarChart3
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Mobile-first, SEO-optimized websites that work as hard as you do. Fast loading, conversion-driven, and built to impress.',
    features: [
      'Mobile-first responsive design',
      'SEO optimized for local search',
      'Fast loading times (< 3 seconds)',
      'Conversion tracking & analytics',
      'Content management system',
      'E-commerce integration'
    ],
    cta: 'Book a Call'
  },
  {
    icon: Bot,
    title: 'AI Voice Agents',
    description: 'AI voice agents that can handle your calls and inquiries, 10Xing your time to focus on other things.',
    features: [
      '24/7 automated call handling',
      'Natural language processing',
      'Lead qualification & routing',
      'Custom voice training',
      'Integration with CRM systems',
      'Real-time analytics & reporting'
    ],
    cta: 'Book a Call'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Content strategy and campaigns that connect with audiences, build trust, and inspire action across all platforms.',
    features: [
      'Content strategy & planning',
      'Community management',
      'Paid social media advertising',
      'Influencer partnerships',
      'Analytics & performance tracking',
      'Brand voice development'
    ],
    cta: 'Book a Call'
  },
  {
    icon: Target,
    title: 'Google Ads Management',
    description: 'ROI-driven campaigns designed to generate real leads and measurable growth for your business.',
    features: [
      'Keyword research & optimization',
      'Campaign setup & management',
      'Landing page testing',
      'Conversion tracking',
      'Budget optimization',
      'Performance reporting'
    ],
    cta: 'Book a Call'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Get found when it matters most. Local SEO strategies that drive organic traffic and qualified leads.',
    features: [
      'Local SEO optimization',
      'Technical SEO audits',
      'Content strategy',
      'Link building',
      'Rank tracking',
      'Google My Business optimization'
    ],
    cta: 'Book a Call'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'From logos to ad creatives, we design visuals that make your brand feel refined, modern, and premium.',
    features: [
      'Brand identity design',
      'Marketing materials',
      'Web graphics & UI elements',
      'Print design',
      'Social media graphics',
      'Presentation design'
    ],
    cta: 'Book a Call'
  },
  {
    icon: HelpCircle,
    title: 'Content Strategy',
    description: 'Strategic content that tells your story, engages your audience, and drives meaningful business results.',
    features: [
      'Content planning & calendar',
      'Brand storytelling',
      'Content creation & copywriting',
      'SEO-optimized content',
      'Multi-platform distribution',
      'Performance measurement'
    ],
    cta: 'Book a Call'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights and performance tracking to optimize your digital presence and maximize ROI.',
    features: [
      'Custom dashboard creation',
      'Performance tracking & analysis',
      'ROI measurement & reporting',
      'Conversion optimization',
      'A/B testing & experimentation',
      'Strategic recommendations'
    ],
    cta: 'Book a Call'
  }
]


export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 md:text-6xl font-roboto font-bold mb-6">
              Services
            </h1>
            <p className="text-body md:text-xl text-white/90 max-w-2xl mx-auto">
              We build websites, ads, and AI automations for your business optimized for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className="h-full group hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center lg:text-left">
                      <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4 group-hover:bg-primary-blue group-hover:scale-110 transition-all duration-300">
                        {React.createElement(service.icon, { className: "w-8 h-8 text-primary-blue group-hover:text-white transition-colors" })}
                      </div>
                      <CardTitle className="text-h2 font-roboto font-bold text-primary-navy">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-body text-gray-dark">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary-lime flex-shrink-0 mt-0.5" />
                            <span className="text-small text-gray-dark">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full lg:w-auto"
                        onClick={() => window.location.href = '/contact'}
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-1">
                  {service.title === 'Website Development' ? (
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <video
                        src="/Service/Website.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : service.title === 'AI Voice Agents' ? (
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <video
                        src="/Service/Voice Agents.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : service.title === 'Social Media Marketing' ? (
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <video
                        src="/Service/Social Media.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : service.title === 'Analytics & Reporting' ? (
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <video
                        src="/Service/Analytics.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : service.title === 'Graphic Design' ? (
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <video
                        src="/Service/Graphic Design.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : service.title === 'Content Strategy' ? (
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <video
                        src="/Service/Content.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : service.title === 'SEO Optimization' ? (
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <video
                        src="/Service/SEO.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : service.title === 'Google Ads Management' ? (
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <video
                        src="/Service/Google Ads.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <LampContainer className="aspect-video rounded-2xl">
                      <motion.div 
                        className="relative w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.02,
                          rotateY: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="relative z-50 text-center transform group-hover:scale-105 transition-transform duration-500">
                          <div className="relative">
                            {/* Service Icon */}
                            <>
                              {React.createElement(service.icon, { 
                                className: "w-24 h-24 text-white mx-auto mb-4 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500 relative z-10" 
                              })}
                              <motion.p 
                                initial={{ opacity: 0.5, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: 0.3,
                                  duration: 0.8,
                                  ease: "easeInOut",
                                }}
                                className="text-body text-white font-semibold drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                              >
                        {service.title} in Action
                              </motion.p>
                              
                              {/* Subtle accent line */}
                              <motion.div 
                                initial={{ opacity: 0, scaleX: 0 }}
                                whileInView={{ opacity: 0.8, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="w-16 h-1 bg-cyan-400 mx-auto mt-3 rounded-full group-hover:opacity-100 group-hover:w-20 transition-all duration-500" 
                              />
                            </>
                          )}
                          
                          {/* Icon glow effect - only for non-video services */}
                          {service.title !== 'Website Development' && service.title !== 'AI Voice Agents' && service.title !== 'Social Media Marketing' && service.title !== 'Analytics & Reporting' && service.title !== 'Graphic Design' && service.title !== 'Content Strategy' && service.title !== 'SEO Optimization' && service.title !== 'Google Ads Management' && (
                            <div className="absolute inset-0 w-24 h-24 mx-auto bg-cyan-400/40 rounded-full blur-xl scale-150 group-hover:scale-200 transition-all duration-500" />
                          )}
                    </div>
                  </div>
                    </motion.div>
                  </LampContainer>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
