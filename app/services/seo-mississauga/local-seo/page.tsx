import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Local SEO Services in Mississauga & Toronto',
  description: 'Rank #1 in Mississauga local search results. The Creative Horse delivers local SEO for GTA small businesses — 300+ leads generated in 3 months. Free audit.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/services/seo-mississauga/local-seo',
  },
  openGraph: {
    title: 'Local SEO Services in Mississauga & Toronto | The Creative Horse',
    description: 'Rank #1 in Mississauga local search results. Local SEO for GTA small businesses — 300+ leads generated in 3 months.',
    url: 'https://thecreativehorse.ca/services/seo-mississauga/local-seo',
    type: 'website',
  },
}

export default function LocalSEOPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide text-sm">Local SEO — Mississauga & GTA</p>
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              Local SEO Services in Mississauga
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Get found by Mississauga and GTA customers who are actively searching for your services right now. We generated 300+ leads in 3 months for local businesses through local SEO.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Free Local SEO Audit
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
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
              <p className="text-4xl font-bold text-white mb-1">GTA</p>
              <p className="text-blue-300 text-sm">Local Market Specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Local SEO */}
      <section className="py-20 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-6">
              What is Local SEO and Why Does Your Mississauga Business Need It?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Local SEO is the process of optimizing your online presence so your business appears at the top of Google when customers in Mississauga, Toronto, Brampton, or Oakville search for your services.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Unlike traditional SEO that targets broad national keywords, local SEO focuses on location-based searches like "plumber in Mississauga" or "accountant near me" — searches made by customers who are ready to hire right now.
            </p>
            <p className="text-lg text-gray-600">
              For small and medium businesses in the GTA, local SEO is the highest ROI marketing investment you can make. It generates leads 24/7 without ongoing ad spend.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4 text-center">
              Our Local SEO Services for GTA Businesses
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              A complete local SEO strategy designed specifically for Mississauga and GTA small businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Google My Business Optimization', desc: 'Your GMB profile is the foundation of local SEO. We fully optimize it to rank in the top 3 map results for your Mississauga service area.' },
                { title: 'Local Keyword Research', desc: 'We identify the exact searches your Mississauga and GTA customers make and build a strategy to rank for every one of them.' },
                { title: 'On-Page Local SEO', desc: 'We optimize every page of your website with local signals — city names, neighbourhoods, service areas — that Google uses to rank local businesses.' },
                { title: 'Local Citations & Directories', desc: 'We build consistent NAP listings across all major Canadian and GTA directories — Yellow Pages, Yelp, Bing Places, and more.' },
                { title: 'Review Management', desc: 'We set up a system to generate a steady flow of Google reviews — the #1 factor in local pack rankings.' },
                { title: 'Local Link Building', desc: 'We build backlinks from other Mississauga and GTA businesses, local news sites, and industry directories to boost your local authority.' },
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

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4">
              Local SEO for Mississauga Industries
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              We have delivered local SEO results for these industries across Mississauga and the GTA.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Accounting Firms', 'Plumbers', 'HVAC Companies', 'Cleaning Businesses', 'Law Firms', 'Contractors', 'Medical Clinics', 'Restaurants'].map((industry) => (
                <div key={industry} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
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
              We are a Mississauga-based agency that lives and works in the same market as your customers. We know the GTA, we know the competition, and we know what it takes to rank locally.
            </p>
            <p className="text-lg text-white/80 mb-10">
              We serve businesses in Mississauga, Toronto, Brampton, Oakville, Burlington, Etobicoke, and across the GTA.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Your Free Local SEO Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}