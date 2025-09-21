'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink, X } from 'lucide-react'
import { RealWebsiteScreenshot } from '@/components/real-website-screenshot'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'PainTax - Accounting Services',
    category: 'Website',
    description: 'Professional accounting website helping immigrants and small businesses with tax services',
    websiteUrl: 'https://paintax.ca/'
  },
  {
    id: 2,
    title: 'Dr. Sany - Natural Remedies',
    category: 'Website',
    description: 'E-commerce website for natural health remedies and wellness products',
    websiteUrl: 'https://drsany.com/en-us'
  },
  {
    id: 3,
    title: 'The Paper Plane Store',
    category: 'Website',
    description: 'Creative e-commerce platform for unique paper products and stationery',
    websiteUrl: 'https://thepaperplanestore.com/'
  },
  {
    id: 4,
    title: 'Track Accounting',
    category: 'Website',
    description: 'Professional accounting and bookkeeping services website',
    websiteUrl: 'https://trackaccounting.ca/'
  },
  {
    id: 5,
    title: 'Pixel Perfect Maldives',
    category: 'Website',
    description: 'Luxury travel and photography services in the Maldives',
    websiteUrl: 'https://pixelperfectmaldives.com/'
  },
  {
    id: 6,
    title: 'Brigient - Digital Solutions',
    category: 'Website',
    description: 'Digital marketing and technology solutions for modern businesses',
    websiteUrl: 'https://brigient.com/'
  },
  // Logo items
  {
    id: 7,
    title: 'Pixel Perfect Maldives',
    category: 'Logos',
    description: 'Luxury travel and photography branding with elegant, sophisticated design',
    image: '/Logos/Logo- Pixel Perfect Maldives (1).pdf.png',
    results: ['Premium positioning', 'Visual storytelling', 'Brand differentiation']
  },
  {
    id: 8,
    title: 'Pack Spectrum - Tax Accountant',
    category: 'Logos',
    description: 'Professional tax accounting logo with modern design and trustworthy appeal',
    image: '/Logos/ALL LOGOS (1).png',
    results: ['Professional credibility', 'Trust-building design', 'Tax industry appeal']
  },
  {
    id: 9,
    title: 'Marie Hogan',
    category: 'Logos',
    description: 'Elegant personal branding with sophisticated design elements',
    image: '/Logos/ALL LOGOS (2).png',
    results: ['Personal brand strength', 'Elegant presentation', 'Professional appeal']
  },
  {
    id: 10,
    title: 'Hummin Bird Interactive',
    category: 'Logos',
    description: 'Interactive technology logo with dynamic design and modern aesthetics',
    image: '/Logos/ALL LOGOS (3).png',
    results: ['Tech-forward design', 'Interactive appeal', 'Modern positioning']
  },
  {
    id: 11,
    title: 'Sphere - A Media Agency',
    category: 'Logos',
    description: 'Creative media agency logo with bold design and creative energy',
    image: '/Logos/ALL LOGOS (4).png',
    results: ['Creative energy', 'Media industry focus', 'Bold brand presence']
  },
  // Branding items (moved from Photography)
  {
    id: 12,
    title: 'Foreign - Streetwear Jewelry Brand',
    category: 'Branding',
    description: 'Professional brand photography for streetwear jewelry collection',
    image: '/Photography/Generated Image September 07, 2025 - 11_26PM.jpeg',
    results: ['Professional branding', 'Visual storytelling', 'Brand differentiation']
  },
  {
    id: 13,
    title: 'Foreign - Product Showcase',
    category: 'Branding',
    description: 'High-quality product photography highlighting jewelry details and craftsmanship',
    image: '/Photography/Generated Image September 07, 2025 - 11_32PM.jpeg',
    results: ['Product appeal', 'Detail highlighting', 'Professional presentation']
  },
  {
    id: 14,
    title: 'Foreign - Lifestyle Photography',
    category: 'Branding',
    description: 'Lifestyle brand photography showcasing jewelry in authentic streetwear context',
    image: '/Photography/Generated Image September 07, 2025 - 11_40PM.jpeg',
    results: ['Lifestyle integration', 'Brand authenticity', 'Visual appeal']
  },
  {
    id: 15,
    title: 'Foreign - Brand Storytelling',
    category: 'Branding',
    description: 'Narrative-driven photography that tells the brand story through visual elements',
    image: '/Photography/Generated Image September 08, 2025 - 1_29AM.png',
    results: ['Brand narrative', 'Emotional connection', 'Storytelling impact']
  },
  {
    id: 16,
    title: 'Foreign - Creative Direction',
    category: 'Branding',
    description: 'Artistic photography with creative direction and unique visual perspectives',
    image: '/Photography/Generated Image September 08, 2025 - 1_34AM.png',
    results: ['Creative vision', 'Artistic appeal', 'Unique perspective']
  },
  {
    id: 17,
    title: 'Foreign - Brand Identity',
    category: 'Branding',
    description: 'Comprehensive brand photography establishing visual identity and market presence',
    image: '/Photography/Generated Image September 08, 2025 - 1_37AM.png',
    results: ['Brand identity', 'Market positioning', 'Visual consistency']
  }
]

const categories = ['Website', 'Graphic Designing', 'Logos', 'Branding']

export function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState('Website')
  const [selectedLogo, setSelectedLogo] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === 'Website' ? item.category === 'Website' : 
    activeCategory === 'Logos' ? item.category === 'Logos' :
    activeCategory === 'Branding' ? item.category === 'Branding' :
    item.category === activeCategory
  )

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-roboto font-bold text-primary-navy mb-4">
            See It Yourself : Our Latest Work
          </h2>
          <p className="text-body text-gray-dark max-w-2xl mx-auto mb-8">
            From real estate to e-commerce, our work helps brands stand out and sell more.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'outline'}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                {/* Background - Website Screenshot or Logo Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  {item.category === 'Logos' ? (
                    // Logo Display
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain max-h-40 max-w-40 group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                      </div>
                      {/* Logo Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-small font-medium backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                      
                      {/* Click to Enlarge Button */}
                      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="icon" 
                          variant="secondary" 
                          className="w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm"
                          onClick={() => setSelectedLogo(item)}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </>
                  ) : item.category === 'Branding' ? (
                    // Branding Display
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                      </div>
                      {/* Branding Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-small font-medium backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* View Image Button */}
                      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm"
                          onClick={() => item.image && window.open(item.image, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </>
                  ) : (
                    // Website Screenshot Display
                    <>
                      {/* Fallback background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                      
                      {/* Website Screenshot */}
                      <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                        {item.websiteUrl && (
                          <RealWebsiteScreenshot
                            url={item.websiteUrl}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      
                      {/* Overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-small font-medium backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                      
                      {/* External Link Button */}
                      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="icon" 
                          variant="secondary" 
                          className="w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm"
                          onClick={() => item.websiteUrl && window.open(item.websiteUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Content Section */}
                <CardContent className="p-6">
                  <h3 className="text-h3 font-roboto font-semibold text-primary-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body text-gray-dark">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href={`/portfolio?category=${activeCategory.toLowerCase().replace(' ', '-')}`}>
            <Button size="lg" variant="secondary">
              View Our Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Logo Modal */}
      <AnimatePresence>
        {selectedLogo && selectedLogo.category === 'Logos' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedLogo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLogo(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Logo Display */}
              <div className="text-center">
                <div className="relative h-80 w-full mb-6 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                  {selectedLogo.image && (
                    <Image
                      src={selectedLogo.image}
                      alt={selectedLogo.title}
                      width={300}
                      height={300}
                      className="object-contain max-h-72 max-w-72"
                    />
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-primary-navy mb-3">
                  {selectedLogo.title}
                </h3>
                <p className="text-gray-dark mb-6 max-w-md mx-auto">
                  {selectedLogo.description}
                </p>
                
                {/* Results */}
                {selectedLogo.results && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary-navy mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedLogo.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
