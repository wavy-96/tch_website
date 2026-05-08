import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Web Design Services in Mississauga & Toronto',
  description: 'The Creative Horse has built 100+ websites for Mississauga & GTA businesses. Affordable, fast, and conversion-focused web design. Get a free consultation today.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/services/web-design-mississauga',
  },
  openGraph: {
    title: 'Web Design Services in Mississauga & Toronto | The Creative Horse',
    description: 'The Creative Horse has built 100+ websites for Mississauga & GTA businesses. Affordable, fast, and conversion-focused web design.',
    url: 'https://thecreativehorse.ca/services/web-design-mississauga',
    type: 'website',
  },
}

export default function WebDesignMississaugaPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide text-sm">Web Design — Mississauga & GTA</p>
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              Web Design Services in Mississauga
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              We have built 100+ websites for small and medium businesses across Mississauga, Toronto, and the GTA. Affordable, fast, and built to generate real leads.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-10 bg-blue-950">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-1">100+</p>
              <p className="text-blue-300 text-sm">Websites Built</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">300+</p>
              <p className="text-blue-300 text-sm">Leads Generated for Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">4.9★</p>
              <p className="text-blue-300 text-sm">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4 text-center">
              What's Included in Every Website We Build
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Every website we deliver to our Mississauga and GTA clients includes these as standard — not as expensive add-ons.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Mobile-First Design', desc: 'Over 60% of GTA users browse on mobile. Every site we build looks and performs perfectly on all devices.' },
                { title: 'Local SEO Setup', desc: 'Built from the ground up to rank in Mississauga and Toronto local search results from day one.' },
                { title: 'Fast Load Times', desc: 'We build sites that load in under 3 seconds — because slow sites lose customers and Google rankings.' },
                { title: 'Conversion-Focused Pages', desc: 'Every page is designed with one goal: turning Mississauga visitors into enquiries and paying customers.' },
                { title: 'Free Revisions', desc: 'We work until you are 100% happy. No nickel-and-diming on changes — your satisfaction is non-negotiable.' },
                { title: 'Analytics & Tracking', desc: 'Google Analytics and conversion tracking set up from day one so you know exactly where your leads come from.' },
              ].map((item) => (
                <div key={item.title} className="p-6 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Websites */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4 text-center">
              Types of Websites We Build in Mississauga
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Whether you need a Shopify store, a WordPress site, or a fully custom build — we have done it all for GTA businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Shopify Websites', desc: 'E-commerce stores built on Shopify for Mississauga businesses ready to sell online. Fast setup, easy to manage.', link: '/services/web-design-mississauga/shopify-developer' },
                { title: 'WordPress Websites', desc: 'Flexible, SEO-friendly WordPress sites that you can manage yourself without needing a developer every time.', link: '/services/web-design-mississauga/wordpress-website' },
                { title: 'Custom Websites', desc: 'Fully custom-built websites for businesses that need something unique, fast, and built to scale.', link: '/services/web-design-mississauga/custom-website' },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-white border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <a href={item.link} className="text-blue-600 font-semibold hover:underline text-sm">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold mb-6">
              We Only Grow If You Grow
            </h2>
            <p className="text-lg text-white/80 mb-6">
              We are a Mississauga-based agency that works exclusively with small and medium businesses. We know what it takes to compete in the GTA market because we live and work here too.
            </p>
            <p className="text-lg text-white/80 mb-6">
              Unlike large agencies where you are just another account number, at The Creative Horse you work directly with our team. We treat every client like a partner — because your success is our success.
            </p>
            <p className="text-lg text-white/80 mb-10">
              We serve businesses in Mississauga, Toronto, Brampton, Oakville, Burlington, and across the GTA.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Your Project — Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}