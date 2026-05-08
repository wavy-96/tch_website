import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'WordPress Website Design in Mississauga & Toronto',
  description: 'Professional WordPress website design for Mississauga & GTA businesses. The Creative Horse builds fast, SEO-optimized WordPress sites you can manage yourself.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/services/web-design-mississauga/wordpress-website',
  },
  openGraph: {
    title: 'WordPress Website Design in Mississauga & Toronto | The Creative Horse',
    description: 'Professional WordPress website design for Mississauga & GTA businesses. Fast, SEO-optimized, easy to manage.',
    url: 'https://thecreativehorse.ca/services/web-design-mississauga/wordpress-website',
    type: 'website',
  },
}

export default function WordPressWebsitePage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide text-sm">WordPress Design — Mississauga & GTA</p>
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              WordPress Website Design in Mississauga
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              We build professional WordPress websites for Mississauga and GTA businesses that are fast, SEO-optimized, and easy for you to manage without needing a developer.
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
              What's Included in Your WordPress Website
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Every WordPress site we build for Mississauga businesses is delivered complete and ready to grow your business from day one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Custom WordPress Design', desc: 'A unique design built for your brand — not a generic template. Your Mississauga business deserves to stand out online.' },
                { title: 'Mobile-First & Fast', desc: 'Built to load in under 3 seconds on all devices. Fast sites rank higher on Google and convert more visitors.' },
                { title: 'SEO-Ready Structure', desc: 'Proper heading structure, schema markup, local SEO setup, and technical optimization built in from the start.' },
                { title: 'Easy Content Management', desc: 'Update your own pages, blog posts, and images without touching any code. WordPress makes it simple.' },
                { title: 'Security & Backups', desc: 'SSL certificate, security hardening, and automated backups so your Mississauga business website is always protected.' },
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

      {/* Why WordPress */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-6">
              Why WordPress is Perfect for Mississauga Small Businesses
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              WordPress powers over 40% of all websites on the internet. For Mississauga and GTA small businesses, it offers the perfect combination of flexibility, ease of use, and SEO power.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Unlike page builders or website template services, a professionally built WordPress site gives you full control over your content, design, and SEO — without being locked into a monthly platform fee.
            </p>
            <p className="text-lg text-gray-600">
              And because WordPress is so widely used, it is easy to find help, plugins, and developers if you ever need to expand your site in the future.
            </p>
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
              We are a Mississauga-based agency that has built 100+ websites for small and medium businesses across the GTA. We specialize in affordable, high-quality WordPress websites that generate real leads.
            </p>
            <p className="text-lg text-white/80 mb-10">
              We serve businesses in Mississauga, Toronto, Brampton, Oakville, Burlington, and across the GTA.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Your WordPress Website Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}