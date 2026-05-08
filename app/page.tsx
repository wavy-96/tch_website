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
        subtitle="Build websites, ads, and AI automations customized for your business."
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
      
      <Footer />
    </main>
  )
}
