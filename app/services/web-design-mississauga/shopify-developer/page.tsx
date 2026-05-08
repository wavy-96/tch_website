import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Shopify Developer in Mississauga & Toronto',
  description: 'Expert Shopify store development for Mississauga & GTA businesses. The Creative Horse has built 100+ websites including Shopify stores. Get a free consultation.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/services/web-design-mississauga/shopify-developer',
  },
  openGraph: {
    title: 'Shopify Developer in Mississauga & Toronto | The Creative Horse',
    description: 'Expert Shopify store development for Mississauga & GTA businesses. 100+ websites built. Get a free consultation.',
    url: 'https://thecreativehorse.ca/services/web-design-mississauga/shopify-developer',
    type: 'website',
  },
}

export default function ShopifyDeveloperPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide text-sm">Shopify Development — Mississauga & GTA</p>
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              Shopify Developer in Mississauga
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              We build professional Shopify stores for Mississauga and GTA businesses ready to sell online. Fast setup, mobile-optimized, and built to convert visitors into customers.
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
              What's Included in Your Shopify Store
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Every Shopify store we build for Mississauga businesses includes everything you need to start selling online from day one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Custom Shopify Theme', desc: 'A professionally designed store that reflects your brand and stands out from generic Shopify templates.' },
                { title: 'Mobile-First Design', desc: 'Most GTA shoppers browse on mobile. Your store will look and perform perfectly on every device.' },
                { title: 'Product Setup & Collections', desc: 'We set up all your products, collections, filters, and variants so your store is ready to sell from launch day.' },
                { title: 'Payment & Checkout Setup', desc: 'Shopify Payments, PayPal, and other payment gateways configured and tested for a smooth checkout experience.' },
                { title: 'SEO Optimization', desc: 'Every product page and collection optimized for local and national search so customers can find your store on Google.' },
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

      {/* Why Shopify */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-roboto font-bold text-primary-navy mb-6">
              Why Shopify is the Right Choice for GTA Businesses
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Shopify is the world's leading e-commerce platform — trusted by over 1 million businesses worldwide. For Mississauga and GTA businesses looking to sell online, it offers the perfect balance of ease of use, powerful features, and scalability.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Unlike custom-built e-commerce solutions, Shopify lets you manage your own store without needing a developer for every small change. Add products, run sales, and track orders yourself.
            </p>
            <p className="text-lg text-gray-600">
              And when you need help growing — adding new features, running ads, or optimizing for SEO — The Creative Horse is right here in Mississauga.
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
              We are a Mississauga-based agency that has built 100+ websites for small and medium businesses across the GTA. We know what works and what doesn't for local businesses selling online.
            </p>
            <p className="text-lg text-white/80 mb-10">
              We serve businesses in Mississauga, Toronto, Brampton, Oakville, Burlington, and across the GTA.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Your Shopify Store Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}