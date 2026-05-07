"use client";

import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, ExternalLink, Eye } from 'lucide-react'
import { RealWebsiteScreenshot } from '@/components/real-website-screenshot'
import { LogoPortfolio } from '@/components/logo-portfolio'
import { AnimatedLaptopMockup } from '@/components/laptop-mockup'
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
    image: '/Website Portfolio/Paintax.1.png',
    results: ['40% increase in leads', 'Professional credibility', 'Mobile-optimized design']
  },
  {
    id: 2,
    title: 'Dr. Sany - Natural Remedies',
    category: 'Website',
    description: 'E-commerce platform for natural health remedies and wellness products with integrated shopping cart and payment processing.',
    websiteUrl: 'https://drsany.com/en-us',
    image: '/Website Portfolio/Dr Sany.png',
    results: ['Seamless shopping experience', 'Trust-building design', 'Mobile-first approach']
  },
  {
    id: 3,
    title: 'The Paper Plane Store',
    category: 'Website',
    description: 'Creative e-commerce platform showcasing unique paper products and stationery with elegant product presentation.',
    websiteUrl: 'https://thepaperplanestore.com/',
    image: '/Website Portfolio/Paperplane store.png',
    results: ['Enhanced product visibility', 'Improved user engagement', 'Brand differentiation']
  },
  {
    id: 4,
    title: 'Ahmad Law - Legal Services',
    category: 'Website',
    description: 'Professional legal services website providing comprehensive legal solutions with client-focused design and service showcase.',
    websiteUrl: '#',
    image: '/Website Portfolio/Ahmad Law.png',
    results: ['Professional credibility', 'Service clarity', 'Client trust building']
  },
  {
    id: 5,
    title: 'Pixel Perfect Maldives',
    category: 'Website',
    description: 'Luxury travel and photography services website showcasing premium Maldives experiences and professional photography.',
    websiteUrl: 'https://pixelperfectmaldives.com/',
    image: '/Website Portfolio/Pixel Maldives.png',
    results: ['Visual storytelling', 'Premium brand positioning', 'Booking optimization']
  },
  {
    id: 6,
    title: 'Brigient - Digital Solutions',
    category: 'Website',
    description: 'Digital marketing and technology solutions platform for modern businesses with service showcase and case studies.',
    websiteUrl: 'https://brigient.com/',
    image: '/Website Portfolio/Brigient.png',
    results: ['Service clarity', 'Lead generation', 'Technical expertise showcase']
  },
  {
    id: 7,
    title: 'Nyb Kazi - UX Designer Portfolio',
    category: 'Website',
    description: 'Professional UX Designer portfolio website showcasing creative design work and digital experiences.',
    websiteUrl: 'https://nybkazi.com/',
    image: '/Website Portfolio/NYB kAZI.png',
    results: ['Creative portfolio design', 'UX expertise showcase', 'Professional presentation']
  },
  {
    id: 9,
    title: 'One Arrow Consulting',
    category: 'Website',
    description: 'Strategic consulting services website with professional presentation and client success stories.',
    websiteUrl: 'https://onearrowconsulting.com/',
    image: '/Website Portfolio/One Arrow.png',
    results: ['Professional credibility', 'Clear service offering', 'Client trust building']
  },
  {
    id: 8,
    title: 'John Morelli - Professional Services',
    category: 'Website',
    description: 'Professional services website with clean design and comprehensive service portfolio showcasing expertise and client success.',
    websiteUrl: '#',
    image: '/Website Portfolio/John Morelli.png',
    results: ['Professional presentation', 'Service differentiation', 'Client confidence']
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
  },
  // Graphic Design items
  {
    id: 22,
    title: 'Mystique Scents - Brand Collection',
    category: 'Graphic Designing',
    description: 'Premium fragrance brand graphics with elegant design and sophisticated color palette',
    image: '/Graphic Designing/Mystiquescents-1001-1.png',
    results: ['Premium positioning', 'Brand elegance', 'Visual appeal']
  },
  {
    id: 23,
    title: 'Mystique Scents - Product Design',
    category: 'Graphic Designing',
    description: 'Sophisticated product graphics showcasing luxury fragrance branding',
    image: '/Graphic Designing/Mystiquescents-1001-3.png',
    results: ['Luxury branding', 'Product appeal', 'Design sophistication']
  },
  {
    id: 24,
    title: 'Mystique Scents - Brand Identity',
    category: 'Graphic Designing',
    description: 'Complete brand identity graphics with premium visual elements',
    image: '/Graphic Designing/Mystiquescents-1001-5.png',
    results: ['Brand consistency', 'Premium aesthetics', 'Visual identity']
  },
  {
    id: 25,
    title: 'Mystique Scents - Marketing Graphics',
    category: 'Graphic Designing',
    description: 'Marketing-focused graphics with compelling visual storytelling',
    image: '/Graphic Designing/Mystiquescents-1001-6.png',
    results: ['Marketing impact', 'Visual storytelling', 'Brand engagement']
  },
  {
    id: 26,
    title: 'Sober Scents - Brand Design',
    category: 'Graphic Designing',
    description: 'Clean and minimalist fragrance brand graphics with modern appeal',
    image: '/Graphic Designing/Soberscents-1406-02.png',
    results: ['Modern design', 'Clean aesthetics', 'Brand differentiation']
  },
  {
    id: 27,
    title: 'Sober Scents - Product Graphics',
    category: 'Graphic Designing',
    description: 'Professional product graphics with contemporary design elements',
    image: '/Graphic Designing/Soberscents-1606-01 (2).png',
    results: ['Professional appeal', 'Contemporary design', 'Product focus']
  },
  {
    id: 28,
    title: 'Sober Scents - Brand Collection',
    category: 'Graphic Designing',
    description: 'Comprehensive brand graphics with cohesive visual identity',
    image: '/Graphic Designing/Soberscents-1606-02.png',
    results: ['Brand cohesion', 'Visual consistency', 'Design excellence']
  },
  {
    id: 29,
    title: 'Creative Design - August Collection',
    category: 'Graphic Designing',
    description: 'Modern graphic design with bold colors and contemporary styling',
    image: '/Graphic Designing/Aug 16.png',
    results: ['Bold design', 'Color impact', 'Modern aesthetics']
  },
  {
    id: 30,
    title: 'Creative Design - Brand Graphics',
    category: 'Graphic Designing',
    description: 'Professional brand graphics with clean lines and modern typography',
    image: '/Graphic Designing/Aug 19.png',
    results: ['Professional design', 'Typography excellence', 'Clean aesthetics']
  },
  {
    id: 31,
    title: 'Creative Design - Visual Identity',
    category: 'Graphic Designing',
    description: 'Comprehensive visual identity graphics with strong brand presence',
    image: '/Graphic Designing/Aug 23.png',
    results: ['Strong branding', 'Visual impact', 'Identity design']
  },
  {
    id: 32,
    title: 'Creative Design - Marketing Graphics',
    category: 'Graphic Designing',
    description: 'Eye-catching marketing graphics with compelling visual elements',
    image: '/Graphic Designing/Aug 26.png',
    results: ['Marketing appeal', 'Visual impact', 'Design innovation']
  },
  {
    id: 33,
    title: 'Creative Design - Brand Collection',
    category: 'Graphic Designing',
    description: 'Complete brand collection with diverse design elements and styles',
    image: '/Graphic Designing/Aug 30.png',
    results: ['Design diversity', 'Brand versatility', 'Creative excellence']
  },
  {
    id: 34,
    title: 'Digital Graphics - Modern Design',
    category: 'Graphic Designing',
    description: 'Contemporary digital graphics with innovative design approach',
    image: '/Graphic Designing/6.png',
    results: ['Innovation', 'Digital excellence', 'Modern design']
  },
  {
    id: 35,
    title: 'Digital Graphics - Creative Solutions',
    category: 'Graphic Designing',
    description: 'Creative graphic solutions with unique visual perspectives',
    image: '/Graphic Designing/7.png',
    results: ['Creative solutions', 'Unique perspectives', 'Design innovation']
  },
  {
    id: 36,
    title: 'Digital Graphics - Brand Identity',
    category: 'Graphic Designing',
    description: 'Strong brand identity graphics with professional design standards',
    image: '/Graphic Designing/8.png',
    results: ['Professional standards', 'Brand strength', 'Design quality']
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

  const filteredItems = portfolioItems.filter(item => {
    if (activeCategory === 'Website') return item.category === 'Website'
    if (activeCategory === 'Graphic Designing') return item.category === 'Graphic Designing'
    if (activeCategory === 'Branding') return item.category === 'Branding'
    return item.category === activeCategory
  })

  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-roboto font-bold mb-4">
              Portfolio
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Our work speaks for itself
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'outline'}
                size="sm"
                className="rounded-full text-sm"
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
        <section className="py-12 bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                {/* Background - Graphic Design Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  {item.image ? (
                    // Clean Graphic Design Display
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={400}
                          className="object-contain max-h-80 max-w-80 group-hover:scale-110 transition-transform duration-300"
                          quality={95}
                          priority={index < 6}
                        />
                      </div>
                      
                      {/* Minimal overlay - only on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                      {/* Category Badge - minimal */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                          {item.category}
                        </span>
                      </div>

                      {/* Action Button - only on hover */}
                      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8 bg-white/90 hover:bg-white"
                          onClick={() => window.open(item.image, '_blank')}
                        >
                          <Eye className="w-3 h-3" />
                        </Button>
                      </div>
                    </>
                  ) : (
                    // Fallback
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                </div>
                
                {/* Content Section - Ultra Minimal */}
                <CardContent className="p-3">
                  <h3 className="text-base font-medium text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12 bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                {/* Background - Website Screenshot or Branding Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  {item.image ? (
                    item.category === 'Website' ? (
                      // Laptop Mockup Display for Website Screenshots
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                          <AnimatedLaptopMockup
                            websiteImage={item.image}
                            alt={item.title}
                            className="w-full h-full flex items-center justify-center"
                          />
                        </div>
                        
                        {/* Minimal overlay - only on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Category Badge - minimal */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                            {item.category}
                          </span>
                        </div>

                        {/* Action Button - only on hover */}
                        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-8 h-8 bg-white/90 hover:bg-white"
                            onClick={() => {
                              if (item.websiteUrl && item.websiteUrl !== '#') {
                                window.open(item.websiteUrl, '_blank')
                              }
                            }}
                          >
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </div>
                      </>
                    ) : (
                      // Clean Image Display for Branding/Other items
                      <>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className={`group-hover:scale-105 transition-transform duration-500 ${
                            item.category === 'Graphic Designing' ? 'object-contain' : 'object-cover'
                          }`}
                          quality={95}
                          priority={index < 6}
                        />
                        
                        {/* Background for Graphic Design items */}
                        {item.category === 'Graphic Designing' && (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10" />
                        )}
                        
                        {/* Minimal overlay - only on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Category Badge - minimal */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                            {item.category}
                          </span>
                        </div>

                        {/* Action Button - only on hover */}
                        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="w-8 h-8 bg-white/90 hover:bg-white"
                            onClick={() => {
                              if (item.category === 'Branding' || item.category === 'Graphic Designing') {
                                window.open(item.image, '_blank')
                              } else if (item.websiteUrl && item.websiteUrl !== '#') {
                                window.open(item.websiteUrl, '_blank')
                              }
                            }}
                          >
                            {(item.category === 'Branding' || item.category === 'Graphic Designing') ? <Eye className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                          </Button>
                        </div>
                      </>
                    )
                  ) : (
                    // Fallback for items without images
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
                
                {/* Content Section - Ultra Minimal */}
                <CardContent className="p-3">
                  <h3 className="text-base font-medium text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {item.description}
                  </p>
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
