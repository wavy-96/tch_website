'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  Share2, 
  Target, 
  Palette, 
  Search,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Conversion-focused, fast, and elegant. Your 24/7 salesperson.',
    features: ['Mobile-first design', 'SEO optimized', 'Fast loading', 'Conversion tracking']
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Daily storytelling that builds community and drives action.',
    features: ['Content strategy', 'Community management', 'Paid social ads', 'Analytics & reporting']
  },
  {
    icon: Target,
    title: 'Google Ads Management',
    description: 'Smart targeting, real leads, measurable ROI.',
    features: ['Campaign optimization', 'Keyword research', 'Landing page testing', 'ROI tracking']
  },
  {
    icon: Palette,
    title: 'Graphic Designing',
    description: 'Clean, modern visuals that make your brand feel premium.',
    features: ['Brand identity', 'Marketing materials', 'Web graphics', 'Print design']
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Be found where customers search in Toronto, Mississauga, and the GTA.',
    features: ['Local SEO', 'Technical optimization', 'Content strategy', 'Rank tracking']
  }
]

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-roboto font-bold text-primary-navy mb-4">
            Our Services
          </h2>
          <p className="text-body text-gray-dark max-w-2xl mx-auto mb-8">
            From websites to ads, from creative design to automation - our services are built to revamp your presence and scale your business.
          </p>
          <Button variant="secondary" size="lg">
            Explore Our Services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary-blue group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-h3 font-roboto font-semibold text-primary-navy">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-body text-gray-dark">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-small text-gray-dark">
                        <div className="w-2 h-2 bg-primary-lime rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="tertiary" 
                    className="w-full group-hover:bg-primary-blue group-hover:text-white transition-all duration-300"
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
