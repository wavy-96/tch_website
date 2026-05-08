import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Google Ads Management in Mississauga & Toronto',
  description: 'ROI-focused Google Ads management for Mississauga & GTA businesses. The Creative Horse runs campaigns that generate real leads, not just clicks. Free consultation.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/services/google-ads-mississauga',
  },
  openGraph: {
    title: 'Google Ads Management in Mississauga & Toronto | The Creative Horse',
    description: 'ROI-focused Google Ads management for Mississauga & GTA businesses. Campaigns that generate real leads, not just clicks.',
    url: 'https://thecreativehorse.ca/services/google-ads-mississauga',
    type: 'website',
  },
}

export default function GoogleAdsMississaugaPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide text-sm">Google Ads — Mississauga & GTA</p>
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              Google Ads Management in Mississauga
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Stop wasting money on clicks that don't convert. We run ROI-focused Google Ads campaigns for Mississauga and GTA businesses that generate real leads and measurable growth.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Free Campaign Audit
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
              <p className="text-blue-300 text-sm">Leads Generated for GTA Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">4.9★</p>
              <p className="text-blue-300 text-sm">Google Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">100%</p>
              <p className="text-blue-300 text-sm">Focus on ROI Not Just Clicks</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4 text-center">
              What's Included in Our Google Ads Management
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              We handle everything from campaign setup to ongoing optimization so you can focus on running your Mississauga business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Keyword Research & Strategy', desc: 'We find the exact search terms your Mississauga and GTA customers use when they are ready to buy — and target only those.' },
                { title: 'Campaign Setup & Structure', desc: 'Properly structured campaigns with tightly themed ad groups that maximize your Quality Score and lower your cost per click.' },
                { title: 'Ad Copywriting', desc: 'Compelling ads that speak directly to GTA customers and give them a clear reason to choose you over the competition.' },
                { title: 'Landing Page Optimization', desc: 'A great ad means nothing if the page it sends people to does not convert. We optimize your landing pages for maximum lead generation.' },
                { title: 'Conversion Tracking', desc: 'We set up proper tracking so you know exactly which keywords, ads, and campaigns are generating real leads and phone calls.' },
                { title: 'Monthly Reporting', desc: 'Clear reports showing your spend, clicks, leads, and cost per lead — no jargon, just the numbers that matter to your business.' },
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

      {/* Who We Help */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4">
              Google Ads for Mississauga Local Businesses
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              We specialize in Google Ads for local service businesses across Mississauga and the GTA. If a customer searches for your service in Mississauga, we make sure they find you first.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Plumbers & HVAC', 'Accounting Firms', 'Cleaning Services', 'Law Firms', 'Contractors', 'Restaurants', 'Retail Stores', 'Medical Clinics'].map((industry) => (
                <div key={industry} className="p-4 bg-white rounded-xl border border-gray-100">
                  <p className="font-semibold text-primary-navy text-sm">{industry}</p>
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
              Most agencies charge a percentage of your ad spend — meaning they make more money when you spend more, not when you get better results. We do not operate that way.
            </p>
            <p className="text-lg text-white/80 mb-6">
              We are a Mississauga-based agency that treats your ad budget like it is our own. Every dollar is optimized for leads, not vanity metrics like impressions and clicks.
            </p>
            <p className="text-lg text-white/80 mb-10">
              We serve businesses in Mississauga, Toronto, Brampton, Oakville, Burlington, and across the GTA.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Free Campaign Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}