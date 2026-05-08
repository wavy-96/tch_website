import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Mississauga & Toronto',
  description: 'The Creative Horse is a Mississauga-based digital marketing agency offering web design, SEO, Google Ads, and social media for businesses across the GTA.',
  alternates: {
    canonical: 'https://thecreativehorse.ca',
  },
  openGraph: {
    title: 'Digital Marketing Agency in Mississauga & Toronto | The Creative Horse',
    description: 'The Creative Horse is a Mississauga-based digital marketing agency offering web design, SEO, Google Ads, and social media for businesses across the GTA.',
    url: 'https://thecreativehorse.ca',
    type: 'website',
  },
}
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroGemini } from '@/components/hero-gemini'
import { AnimatedFeaturesSection } from '@/components/animated-features'
import { BrandsTrustUs } from '@/components/brands-trust-us'
import { PortfolioPreview } from '@/components/portfolio-preview'
import { PackagesSection } from '@/components/packages-section'
import { Testimonials } from '@/components/testimonials'
export function generateStaticParams() {
  return []
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://thecreativehorse.ca',
  name: 'The Creative Horse',
  alternateName: 'The Creative Horse - Mississauga Web Design, SEO & Digital Marketing',
  description: 'Mississauga digital marketing agency offering web design, SEO, Google Ads, social media marketing, and AI automations for businesses across the GTA.',
  url: 'https://thecreativehorse.ca',
  telephone: '+16479178641',
  email: 'Contact@thecreativehorse.ca',
  image: 'https://thecreativehorse.ca/Logos/logo_ch.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6725 Millcreek Dr',
    addressLocality: 'Mississauga',
    addressRegion: 'ON',
    postalCode: 'L5N 5V3',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.5771,
    longitude: -79.7094,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Mississauga' },
    { '@type': 'City', name: 'Toronto' },
    { '@type': 'City', name: 'Brampton' },
    { '@type': 'City', name: 'Oakville' },
    { '@type': 'City', name: 'Burlington' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design Mississauga' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Mississauga' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design' } },
    ],
  },
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, Credit Card, E-Transfer',
}
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
      <TheCreativeHorseNavbar />
      
      <HeroGemini
        title="We are your unfair digital advantage."
        subtitle="Mississauga's digital marketing agency for web design, SEO, and Google Ads. Helping GTA businesses look bigger and grow faster."
        primaryCta="Get Started"
        proof=""
      />
      
      {/* Animated Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-roboto font-bold text-primary-navy mb-4">
              Our Services
            </h2>
            <p className="text-body text-gray-dark max-w-2xl mx-auto">
              We build solutions to revamp your presence and help grow your business.
            </p>
          </div>
          <AnimatedFeaturesSection />
        </div>
      </section>
      
      <BrandsTrustUs />
      
      <PortfolioPreview />
      
      <PackagesSection />
      
      <Testimonials />
      
     {/* Service Areas Section */}
     <section className="py-20 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold mb-6">
              Serving Mississauga, Toronto & the GTA
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Based in Mississauga, The Creative Horse is a digital marketing agency serving small and medium businesses across the Greater Toronto Area. We help local businesses look bigger, rank higher, and generate more leads online.
            </p>
            <p className="text-lg text-white/80 mb-12">
              Whether you are a plumber in Brampton, an accountant in Oakville, a restaurant in Etobicoke, or a contractor in Burlington — we have the local market knowledge and digital expertise to grow your business online.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { city: 'Mississauga', desc: 'Our Home Base' },
                { city: 'Toronto', desc: 'Downtown & GTA' },
                { city: 'Brampton', desc: 'Peel Region' },
                { city: 'Oakville', desc: 'Halton Region' },
                { city: 'Burlington', desc: 'Halton Region' },
                { city: 'Milton', desc: 'Halton Hills' },
                { city: 'Etobicoke', desc: 'West Toronto' },
                { city: 'Vaughan', desc: 'York Region' },
              ].map((area) => (
                <div key={area.city} className="p-4 border border-white/10 rounded-xl hover:border-blue-400 transition-colors">
                  <p className="font-semibold text-white">{area.city}</p>
                  <p className="text-white/50 text-sm">{area.desc}</p>
                </div>
              ))}
            </div>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section> 
      <Footer />
    </main>
  )
}
