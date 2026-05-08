import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost in Mississauga? (2026 Guide)',
  description: 'A complete breakdown of website design costs for Mississauga small businesses in 2026. From simple brochure sites to e-commerce stores — what to expect and how to avoid overpaying.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/blog/web-design-cost-mississauga',
  },
  openGraph: {
    title: 'How Much Does a Website Cost in Mississauga? (2026 Guide) | The Creative Horse',
    description: 'A complete breakdown of website design costs for Mississauga small businesses in 2026.',
    url: 'https://thecreativehorse.ca/blog/web-design-cost-mississauga',
    type: 'article',
  },
}

export default function WebDesignCostMississaugaPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">Web Design</span>
              <span className="text-xs text-white/50">May 2026</span>
              <span className="text-xs text-white/50">6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-roboto font-bold mb-6 leading-tight">
              How Much Does a Website Cost in Mississauga? (2026 Guide)
            </h1>
            <p className="text-xl text-white/80">
              A complete breakdown of website design costs for Mississauga small businesses — from simple brochure sites to full e-commerce stores.
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-20 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto prose prose-lg">

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              One of the most common questions we get from Mississauga small business owners is: "How much should I pay for a website?" The honest answer is — it depends. But that's not helpful, so let's break it down properly.
            </p>

            <h2 className="text-3xl font-roboto font-bold text-primary-navy mt-12 mb-6">
              Website Cost in Mississauga: The Quick Answer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For most small and medium businesses in Mississauga and the GTA, a professionally built website will cost between $1,500 and $10,000 depending on complexity. Here's a rough breakdown:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { type: 'Simple Brochure Website', range: '$1,500 - $3,000', desc: '5-8 pages, contact form, mobile-friendly. Good for trades, local services.' },
                { type: 'Business Website', range: '$3,000 - $6,000', desc: '10-20 pages, blog, lead forms, SEO setup. Good for most SMBs.' },
                { type: 'E-commerce Website', range: '$5,000 - $15,000', desc: 'Online store with product pages, cart, checkout. Shopify or custom.' },
                { type: 'Custom Web Application', range: '$10,000+', desc: 'Booking systems, client portals, custom functionality.' },
              ].map((item) => (
                <div key={item.type} className="p-5 border border-gray-100 rounded-xl">
                  <p className="font-semibold text-primary-navy mb-1">{item.type}</p>
                  <p className="text-blue-600 font-bold text-lg mb-2">{item.range}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-roboto font-bold text-primary-navy mt-12 mb-6">
              What Affects the Cost of a Website in Mississauga?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Several factors influence what you'll pay for a website in Mississauga and the GTA:
            </p>

            <div className="space-y-6 mb-10">
              {[
                { title: '1. Number of Pages', body: 'A 5-page website costs significantly less than a 30-page website. More pages means more design work, more copywriting, and more development time.' },
                { title: '2. Custom Design vs Template', body: 'A fully custom design built from scratch will cost more than a template-based site. However, custom sites perform better for SEO and conversions because they are built specifically for your business and your Mississauga customers.' },
                { title: '3. E-commerce Functionality', body: 'Adding an online store significantly increases complexity. You need product pages, a shopping cart, payment processing, inventory management, and security. Shopify websites in Mississauga typically start at $3,000-5,000 for a properly built store.' },
                { title: '4. SEO Setup', body: 'A website without proper SEO setup is essentially invisible on Google. Local SEO for Mississauga businesses — proper meta tags, schema markup, Google My Business integration, local keywords — should be included in any professionally built website.' },
                { title: '5. Content Writing', body: 'Many agencies charge extra for copywriting. At The Creative Horse, we work with you to make sure your website copy speaks directly to your Mississauga and GTA customers and is optimized for local search.' },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-primary-navy mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-roboto font-bold text-primary-navy mt-12 mb-6">
              Why Cheap Websites Cost More in the Long Run
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many Mississauga business owners make the mistake of going with the cheapest option they can find — $300 websites on Fiverr, DIY website builders, or offshore agencies charging rock-bottom prices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here's what typically happens: the site looks okay at first, but it loads slowly, ranks nowhere on Google, doesn't convert visitors into leads, and breaks within a year. Then you're paying again to fix it or rebuild it entirely.
            </p>
            <p className="text-gray-700 leading-relaxed mb-10">
              A properly built website for your Mississauga business is an investment that generates leads 24/7. A cheap website is an expense that generates nothing.
            </p>

            <h2 className="text-3xl font-roboto font-bold text-primary-navy mt-12 mb-6">
              Red Flags When Hiring a Web Designer in Mississauga
            </h2>
            <div className="space-y-3 mb-10">
              {[
                'No portfolio or case studies showing real results',
                'No mention of SEO in their proposal',
                'No discovery call to understand your business before quoting',
                'Very vague pricing with lots of hidden add-ons',
                'No post-launch support or maintenance plan',
                'They cannot explain how the site will generate leads',
              ].map((flag) => (
                <div key={flag} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <p className="text-gray-700 text-sm">{flag}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-roboto font-bold text-primary-navy mt-12 mb-6">
              What You Should Expect from a Mississauga Web Design Agency
            </h2>
            <div className="space-y-3 mb-10">
              {[
                'A discovery call to understand your business, customers, and goals',
                'A custom design that reflects your brand — not a generic template',
                'Mobile-first build that works perfectly on all devices',
                'Local SEO setup targeting Mississauga and GTA search terms',
                'Google Analytics and conversion tracking from day one',
                'Clear timeline and milestone-based delivery',
                'Post-launch support and training',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-roboto font-bold text-primary-navy mt-12 mb-6">
              How Much Does The Creative Horse Charge for Websites in Mississauga?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are a Mississauga-based digital agency that has built 100+ websites for small and medium businesses across the GTA. We do not have fixed pricing because every business is different — but we are known for providing premium quality at affordable rates for local businesses.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We offer free consultations where we learn about your business, your goals, and your budget — and give you an honest quote with no hidden fees.
            </p>

            {/* CTA */}
            <div className="bg-black text-white p-8 rounded-2xl mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Get a Free Website Quote for Your Mississauga Business</h3>
              <p className="text-white/80 mb-6">No pressure, no hidden fees. Just an honest conversation about what your business needs.</p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Your Free Quote
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-gray-50">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-blue-600 font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}