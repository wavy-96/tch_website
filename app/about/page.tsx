import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Timeline } from '@/components/ui/timeline'
import { PointerHighlight } from '@/components/ui/pointer-highlight'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { ArrowRight, Target, Palette, Zap, TrendingUp } from 'lucide-react'

const locationData = [
  {
    id: 1,
    name: "India",
    designation: "Asia Operations",
    image: "/Logos/india_logo.jpg"
  },
  {
    id: 2,
    name: "United States",
    designation: "North America",
    image: "/Logos/usa_logo.jpg"
  },
  {
    id: 3,
    name: "Canada",
    designation: "North America",
    image: "/Logos/canada_logo.png"
  }
]

const timelineData = [
  {
    title: "2023",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-white">The Beginning</h4>
        <p className="text-white/90">
          Started with a simple mission: help small-medium businesses in Toronto, Mississauga, and across North America stand taller. Many SMBs were stuck with dated websites, generic ads, and scattered branding.
        </p>
      </div>
    )
  },
  {
    title: "2024",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-white">First Breakthrough</h4>
        <p className="text-white/90">
          Combined clean design, targeted campaigns, and AI automation into one seamless experience. Our first clients saw remarkable growth in their digital presence.
        </p>
      </div>
    )
  },
  {
    title: "2025",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-white">Expansion</h4>
        <p className="text-white/90">
          Expanded our services to include comprehensive brand identity, advanced automation, and data-driven marketing strategies. Built lasting partnerships with businesses across the GTA.
        </p>
      </div>
    )
  },
  {
    title: "Today",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-white">Innovation</h4>
        <p className="text-white/90">
          Launched AI-powered solutions and automation tools that help businesses scale efficiently. Became the go-to agency for businesses who refuse to stay small.
        </p>
      </div>
    )
  }
]

const approachSteps = [
  {
    icon: Target,
    title: 'Discover',
    description: 'Every project starts with listening—your goals, your market, your challenges.'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Clean, conversion-driven websites, ads, and creatives that position you as premium.'
  },
  {
    icon: Zap,
    title: 'Automate',
    description: 'AI-powered systems that save time and scale without extra effort.'
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Strategies designed to grow with you, not limit you.'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 md:text-6xl font-roboto font-bold mb-6">
              About
            </h1>
            <p className="text-body md:text-xl text-white/90 max-w-2xl mx-auto">
              The Creative Horse is a digital-first agency for businesses who refuse to stay small.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-roboto font-bold text-primary-navy mb-8">
              Mission
            </h2>
            <p className="text-body md:text-xl text-gray-dark max-w-2xl mx-auto">
              <PointerHighlight
                rectangleClassName="border-primary-blue"
                pointerClassName="text-primary-blue"
                containerClassName="inline-block"
              >
                <span className="text-primary-blue font-semibold">No jargon, no gimmicks</span>
              </PointerHighlight>
              —just strategies crafted to make your business look bigger and perform smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <Timeline data={timelineData} />

      {/* Global Presence */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-roboto font-bold text-primary-navy mb-4">
              Serving customers across North America and Asia
            </h2>
            <p className="text-body text-gray-dark max-w-2xl mx-auto">
              We work with businesses across multiple continents, bringing our expertise to clients worldwide.
            </p>
          </div>
          
          <div className="flex justify-center">
            <AnimatedTooltip items={locationData} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
