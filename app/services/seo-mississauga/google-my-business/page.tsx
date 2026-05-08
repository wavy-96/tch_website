import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Google My Business Optimization in Mississauga & Toronto',
  description: 'Get your Mississauga business into Google\'s top 3 map results. The Creative Horse optimizes GMB profiles for local businesses across the GTA. Free audit available.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/services/seo-mississauga/google-my-business',
  },
  openGraph: {
    title: 'Google My Business Optimization in Mississauga | The Creative Horse',
    description: 'Get your Mississauga business into Google\'s top 3 map results. GMB optimization for GTA local businesses.',
    url: 'https://thecreativehorse.ca/services/seo-mississauga/google-my-business',
    type: 'website',
  },
}

export default function GoogleMyBusinessPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide text-sm">GMB Optimization — Mississauga & GTA</p>
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              Google My Business Optimization in Mississauga
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              When someone in Mississauga searches for your service, Google shows 3 local businesses before anything else. We get you into those top 3 spots.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Free GMB Audit
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-10 bg-blue-950">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-1">300+</p>
              <p className="text-blue-300 text-sm">Leads Generated in 3 Months</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">4.9★</p>
              <p className="text-blue-300 text-sm">Google Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">Top 3</p>
              <p className="text-blue-300 text-sm">Local Pack Rankings Goal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why GMB Matters */}
      <section className="py-20 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-6">
              Why GMB is Your Most Powerful Local Marketing Tool
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              When a Mississauga customer searches "plumber near me" or "accountant in Mississauga", Google shows a map with 3 local businesses at the very top of the page — before any website results.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Those 3 spots get the majority of clicks. If your business is not in that local pack, you are invisible to customers who are ready to hire right now.
            </p>
            <p className="text-lg text-gray-600">
              A fully optimized Google My Business profile is the single fastest way for a Mississauga small business to start generating local leads organically.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4 text-center">
              Our GMB Optimization Process
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              We do a complete overhaul of your Google Business Profile to maximize your visibility in Mississauga and GTA local search results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Profile Audit & Setup', desc: 'We audit your existing GMB profile and fix every gap — incorrect categories, missing information, and NAP inconsistencies that hurt your ranking.' },
                { title: 'Category Optimization', desc: 'Choosing the right primary and secondary categories is critical. We select the exact categories that match how Mississauga customers search for your services.' },
                { title: 'Services & Description', desc: 'We write keyword-optimized service descriptions that tell Google exactly what you do and where you do it — Mississauga, Toronto, Brampton, and the GTA.' },
                { title: 'Photo Strategy', desc: 'Businesses with 10+ real photos get significantly more views and clicks. We guide you on exactly what photos to upload and how to name them for SEO.' },
                { title: 'Review Generation Strategy', desc: 'Reviews are the #1 ranking factor for local pack results. We set up a systematic process to generate a steady flow of 5-star Google reviews from your clients.' },
                { title: 'GMB Posts & Updates', desc: 'Regular GMB posts signal to Google that your business is active. We create and schedule weekly posts to keep your profile fresh and ranking.' },
              ].map((item) => (
                <div key={item.title} className="p-6 border border-gray-100 bg-white rounded-xl hover:border-blue-200 transition-colors">
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
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
              We are a Mississauga-based agency. We know the local market, the local competition, and what it takes to rank in the GTA local pack.
            </p>
            <p className="text-lg text-white/80 mb-6">
              Our GMB optimization work has helped accounting firms, plumbers, HVAC companies, and cleaning businesses in Mississauga and Toronto generate hundreds of qualified leads through Google Maps.
            </p>
            <p className="text-lg text-white/80 mb-10">
              We serve businesses in Mississauga, Toronto, Brampton, Oakville, Burlington, and across the GTA.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Your Free GMB Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}