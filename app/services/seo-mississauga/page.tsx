import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'SEO Services in Mississauga & Toronto',
  description: 'The Creative Horse delivers 300+ leads in 3 months for Mississauga businesses. Local SEO, technical SEO, and GMB optimization for GTA small businesses.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/services/seo-mississauga',
  },
  openGraph: {
    title: 'SEO Services in Mississauga & Toronto | The Creative Horse',
    description: 'The Creative Horse delivers 300+ leads in 3 months for Mississauga businesses. Local SEO, technical SEO, and GMB optimization for GTA small businesses.',
    url: 'https://thecreativehorse.ca/services/seo-mississauga',
    type: 'website',
  },
}

export default function SEOMississaugaPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide text-sm">SEO Services — Mississauga & GTA</p>
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              SEO Services in Mississauga
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              We generated 300+ leads in 3 months for local Mississauga businesses through SEO. Get found on Google by the customers who are already searching for you.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Free SEO Audit
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
              <p className="text-4xl font-bold text-white mb-1">100%</p>
              <p className="text-blue-300 text-sm">Local GTA Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We've Helped */}
      <section className="py-20 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4">
              SEO Results for Mississauga Local Businesses
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              We have delivered measurable SEO results for local businesses across the GTA including accounting firms, plumbers, HVAC companies, and cleaning businesses.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Accounting Firms', 'Plumbers', 'HVAC Companies', 'Cleaning Businesses'].map((industry) => (
                <div key={industry} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-semibold text-primary-navy">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4 text-center">
              Our SEO Services for GTA Businesses
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              We focus on what actually moves the needle for small and medium businesses in Mississauga and Toronto.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Local SEO Mississauga', desc: 'Rank in Google\'s local pack when customers in Mississauga, Toronto, and the GTA search for your services.', link: '/services/seo-mississauga/local-seo' },
                { title: 'Google My Business Optimization', desc: 'Your GMB profile is your most powerful local ranking tool. We optimize it to get you into the top 3 map results.', link: '/services/seo-mississauga/google-my-business' },
                { title: 'Technical SEO Audits', desc: 'Fix the hidden issues that are silently killing your rankings — canonical errors, page speed, schema markup, and more.' },
                { title: 'Content & Keyword Strategy', desc: 'We identify exactly what your Mississauga customers are searching for and build content that ranks for those terms.' },
                { title: 'Link Building', desc: 'Build authority with high-quality local backlinks from GTA businesses, directories, and industry publications.' },
                { title: 'Monthly Reporting', desc: 'Clear, jargon-free reports showing exactly where you rank, how much traffic you\'re getting, and how many leads SEO is generating.' },
              ].map((item) => (
                <div key={item.title} className="p-6 border border-gray-100 bg-white rounded-xl hover:border-blue-200 transition-colors">
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.desc}</p>
                  {item.link && (
                    <a href={item.link} className="text-blue-600 font-semibold hover:underline text-sm">Learn More →</a>
                  )}
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
              We are a Mississauga-based agency that specializes in helping local GTA businesses rank on Google. We do not lock you into long contracts or charge for results we cannot deliver.
            </p>
            <p className="text-lg text-white/80 mb-6">
              Our SEO work has helped accounting firms, plumbers, HVAC companies, and cleaning businesses in Mississauga and Toronto generate hundreds of qualified leads through organic search.
            </p>
            <p className="text-lg text-white/80 mb-10">
              We serve businesses in Mississauga, Toronto, Brampton, Oakville, Burlington, and across the GTA.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Your Free SEO Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}