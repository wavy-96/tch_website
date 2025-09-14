import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroGemini } from '@/components/hero-gemini'
import { AnimatedFeaturesSection } from '@/components/animated-features'
import { BrandsTrustUs } from '@/components/brands-trust-us'
import { PortfolioPreview } from '@/components/portfolio-preview'
import { PackagesSection } from '@/components/packages-section'
import { Testimonials } from '@/components/testimonials'

export default function HomePage() {
  return (
    <main className="min-h-screen">
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
