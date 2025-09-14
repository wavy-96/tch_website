"use client";

import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, ExternalLink, Eye } from 'lucide-react'
import { RealWebsiteScreenshot } from '@/components/real-website-screenshot'
import { LogoPortfolio } from '@/components/logo-portfolio'
import { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

const portfolioItems = [
  {
    id: 1,
    title: 'PainTax - Accounting Services',
    category: 'Website',
    description: 'Professional accounting website helping immigrants and small businesses with comprehensive tax services and financial guidance.',
    websiteUrl: 'https://paintax.ca/',
    results: ['40% increase in leads', 'Professional credibility', 'Mobile-optimized design']
  },
  {
    id: 2,
    title: 'Dr. Sany - Natural Remedies',
    category: 'Website',
    description: 'E-commerce platform for natural health remedies and wellness products with integrated shopping cart and payment processing.',
    websiteUrl: 'https://drsany.com/en-us',
    results: ['Seamless shopping experience', 'Trust-building design', 'Mobile-first approach']
  },
  {
    id: 3,
    title: 'The Paper Plane Store',
    category: 'Website',
    description: 'Creative e-commerce platform showcasing unique paper products and stationery with elegant product presentation.',
    websiteUrl: 'https://thepaperplanestore.com/',
    results: ['Enhanced product visibility', 'Improved user engagement', 'Brand differentiation']
  },
  {
    id: 4,
    title: 'Track Accounting',
    category: 'Website',
    description: 'Professional accounting and bookkeeping services website with client portal and service showcase.',
    websiteUrl: 'https://trackaccounting.ca/',
    results: ['Client portal integration', 'Service clarity', 'Professional credibility']
  },
  {
    id: 5,
    title: 'Pixel Perfect Maldives',
    category: 'Website',
    description: 'Luxury travel and photography services website showcasing premium Maldives experiences and professional photography.',
    websiteUrl: 'https://pixelperfectmaldives.com/',
    results: ['Visual storytelling', 'Premium brand positioning', 'Booking optimization']
  },
  {
    id: 6,
    title: 'Brigient - Digital Solutions',
    category: 'Website',
    description: 'Digital marketing and technology solutions platform for modern businesses with service showcase and case studies.',
    websiteUrl: 'https://brigient.com/',
    results: ['Service clarity', 'Lead generation', 'Technical expertise showcase']
  },
  {
    id: 7,
    title: 'One Arrow Consulting',
    category: 'Website',
    description: 'Strategic consulting services website with professional presentation and client success stories.',
    websiteUrl: 'https://onearrowconsulting.com/',
    results: ['Professional credibility', 'Clear service offering', 'Client trust building']
  },
  {
    id: 8,
    title: 'Octane Logistics',
    category: 'Website',
    description: 'Logistics and supply chain management website with service portfolio and operational excellence showcase.',
    websiteUrl: 'https://octanelogistics.co/',
    results: ['Service differentiation', 'Operational transparency', 'Client confidence']
  },
  // Branding items (moved from Photography)
  {
    id: 10,
    title: 'Foreign - Streetwear Jewelry Brand',
    category: 'Branding',
    description: 'Professional brand photography for streetwear jewelry collection',
    image: '/Photography/Generated Image September 07, 2025 - 11_26PM.jpeg',
    results: ['Professional branding', 'Visual storytelling', 'Brand differentiation']
  },
  {
    id: 11,
    title: 'Foreign - Product Showcase',
    category: 'Branding',
    description: 'High-quality product photography highlighting jewelry details and craftsmanship',
    image: '/Photography/Generated Image September 07, 2025 - 11_32PM.jpeg',
    results: ['Product appeal', 'Detail highlighting', 'Professional presentation']
  },
  {
    id: 12,
    title: 'Foreign - Lifestyle Photography',
    category: 'Branding',
    description: 'Lifestyle brand photography showcasing jewelry in authentic streetwear context',
    image: '/Photography/Generated Image September 07, 2025 - 11_40PM.jpeg',
    results: ['Lifestyle integration', 'Brand authenticity', 'Visual appeal']
  },
  {
    id: 13,
    title: 'Foreign - Brand Storytelling',
    category: 'Branding',
    description: 'Narrative-driven photography that tells the brand story through visual elements',
    image: '/Photography/Generated Image September 08, 2025 - 1_29AM.png',
    results: ['Brand narrative', 'Emotional connection', 'Storytelling impact']
  },
  {
    id: 14,
    title: 'Foreign - Creative Direction',
    category: 'Branding',
    description: 'Artistic photography with creative direction and unique visual perspectives',
    image: '/Photography/Generated Image September 08, 2025 - 1_34AM.png',
    results: ['Creative vision', 'Artistic appeal', 'Unique perspective']
  },
  {
    id: 15,
    title: 'Foreign - Brand Identity',
    category: 'Branding',
    description: 'Comprehensive brand photography establishing visual identity and market presence',
    image: '/Photography/Generated Image September 08, 2025 - 1_37AM.png',
    results: ['Brand identity', 'Market positioning', 'Visual consistency']
  },
  {
    id: 16,
    title: 'Foreign - Jewelry Collection',
    category: 'Branding',
    description: 'Detailed jewelry photography showcasing intricate designs and premium materials',
    image: '/Photography/Generated Image September 07, 2025 - 11_26PM (1).jpeg',
    results: ['Detail precision', 'Material highlighting', 'Premium positioning']
  },
  {
    id: 17,
    title: 'Foreign - Streetwear Aesthetic',
    category: 'Branding',
    description: 'Urban streetwear photography capturing the authentic brand aesthetic and culture',
    image: '/Photography/Generated Image September 07, 2025 - 11_46PM.jpeg',
    results: ['Urban authenticity', 'Cultural relevance', 'Brand alignment']
  },
  {
    id: 18,
    title: 'Foreign - Brand Campaign',
    category: 'Branding',
    description: 'Comprehensive brand campaign photography with cohesive visual storytelling',
    image: '/Photography/Generated Image September 07, 2025 - 11_53PM.jpeg',
    results: ['Campaign cohesion', 'Brand consistency', 'Visual impact']
  },
  {
    id: 19,
    title: 'Foreign - Product Details',
    category: 'Branding',
    description: 'Close-up product photography highlighting fine details and craftsmanship quality',
    image: '/Photography/Generated Image September 08, 2025 - 1_37AM (1).png',
    results: ['Craftsmanship showcase', 'Quality emphasis', 'Detail focus']
  },
  {
    id: 20,
    title: 'Foreign - Brand Vision',
    category: 'Branding',
    description: 'Conceptual brand photography expressing the brand vision and creative direction',
    image: '/Photography/Generated Image September 08, 2025 - 12_27AM.jpeg',
    results: ['Conceptual clarity', 'Vision expression', 'Creative direction']
  },
  {
    id: 21,
    title: 'Foreign - Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity photography establishing market presence and visual recognition',
    image: '/Photography/ChatGPT Image Sep 8, 2025, 12_56_06 AM.png',
    results: ['Brand recognition', 'Market presence', 'Visual identity']
  }
]

const categories = ['Website', 'Graphic Designing', 'Branding']

function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState('Website')
  const searchParams = useSearchParams()

  // Handle URL parameter to pre-select category
  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      // Map URL parameter to category name
      const categoryMap: { [key: string]: string } = {
        'website': 'Website',
        'branding': 'Branding',
        'graphic-designing': 'Graphic Designing'
      }
      const mappedCategory = categoryMap[category.toLowerCase()]
      if (mappedCategory) {
        setActiveCategory(mappedCategory)
      }
    }
  }, [searchParams])

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === 'Website' ? item.category === 'Website' : 
    item.category === activeCategory
  )

  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 md:text-6xl font-roboto font-bold mb-6">
              Portfolio
            </h1>
            <p className="text-body md:text-xl text-white/90 max-w-2xl mx-auto">
              Proof over promises. Here's how we've helped businesses transform their presence online.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
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
      </section>

      {/* Portfolio Content */}
      {activeCategory === 'Graphic Designing' ? (
        <LogoPortfolio />
      ) : (
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                {/* Background - Website Screenshot or Branding Image */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  {item.category === 'Branding' && item.image ? (
                    // Branding Photography Display
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
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
                          onClick={() => window.open(item.image, '_blank')}
                        >
                          <Eye className="w-4 h-4" />
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
                        <RealWebsiteScreenshot
                          url={item.websiteUrl || ''}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
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
                      
                      {/* View Project Button */}
                      <div className="absolute bottom-16 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="sm" 
                          className="w-full bg-white/90 text-primary-navy hover:bg-white backdrop-blur-sm"
                          onClick={() => item.websiteUrl && window.open(item.websiteUrl, '_blank')}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Project
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
                  <p className="text-body text-gray-dark mb-4">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-roboto font-semibold text-small text-primary-navy">
                      Results:
                    </h4>
                    <ul className="space-y-1">
                      {item.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-small text-gray-dark flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        </section>
      )}


      <Footer />
    </main>
  )
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioContent />
    </Suspense>
  )
}
