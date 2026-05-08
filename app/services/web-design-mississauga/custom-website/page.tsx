import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Custom Website Development in Mississauga & Toronto',
  description: 'Custom website development for Mississauga & GTA businesses that need something unique. The Creative Horse builds fast, scalable custom websites. Free consultation.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/services/web-design-mississauga/custom-website',
  },
  openGraph: {
    title: 'Custom Website Development in Mississauga & Toronto | The Creative Horse',
    description: 'Custom website development for Mississauga & GTA businesses. Fast, scalable, built to rank and convert.',
    url: 'https://thecreativehorse.ca/services/web-design-mississauga/custom-website',
    type: 'website',
  },
}

export default function CustomWebsitePage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide text-sm">Custom Development — Mississauga & GTA</p>
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              Custom Website Development in Mississauga
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              When templates and page builders are not enough, we build fully custom websites for Mississauga and GTA businesses that need something unique, fast, and built to scale.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 bg-blue-950">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-1">100+</p>
              <p className="text-blue-300 text-sm">Websites Built</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">4.9★</p>
              <p className="text-blue-300 text-sm">Google Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">Free</p>
              <p className="text-blue-300 text-sm">Revisions Until You're Happy</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-4 text-center">
              What We Build for Mississauga Businesses
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Every custom website we build is designed from scratch around your business goals, your brand, and your customers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Fully Custom Design', desc: 'No templates, no page builders. Every pixel is designed specifically for your Mississauga business and your target customers.' },
                { title: 'Built for Speed', desc: 'Custom-coded sites load significantly faster than template-based sites — giving you better Google rankings and higher conversion rates.' },
                { title: 'SEO Architecture', desc: 'Built from the ground up with proper URL structure, schema markup, canonical tags, and local SEO signals for the GTA market.' },
                { title: 'Scalable & Flexible', desc: 'As your Mississauga business grows, your website grows with it. No platform limitations, no monthly fees, no restrictions.' },
                { title: 'Custom Functionality', desc: 'Booking systems, custom forms, client portals, calculators, or any other feature your business needs — we build it.' },
                { title: 'Free Revisions', desc: 'We work until you are 100% satisfied. No extra charges for changes — your success is our priority.' },
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

      {/* When to Choose Custom */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-6">
              When Does Your Business Need a Custom Website?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              A custom website is the right choice when your business has unique requirements that off-the-shelf platforms cannot handle — or when you need maximum performance and flexibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-10">
              {[
                'You need custom booking, quoting, or calculator functionality',
                'Your business requires a client portal or member area',
                'You need a site that loads faster than your competitors',
                'You want full ownership with no monthly platform fees',
                'Your brand requires a completely unique visual experience',
                'You need to integrate with custom APIs or third-party systems',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  <p className="text-gray-700 text-sm">{item}</p>
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
              We are a Mississauga-based agency that has built 100+ websites for small and medium businesses across the GTA. From simple brochure sites to complex custom web applications — we have done it all.
            </p>
            <p className="text-lg text-white/80 mb-10">
              We serve businesses in Mississauga, Toronto, Brampton, Oakville, Burlington, and across the GTA.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Your Custom Website Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}