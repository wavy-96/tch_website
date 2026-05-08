import type { Metadata } from 'next'
import { TheCreativeHorseNavbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Marketing Blog — Tips for Mississauga & GTA Businesses',
  description: 'Digital marketing tips, SEO advice, and web design insights for small businesses in Mississauga, Toronto, and the GTA from The Creative Horse.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/blog',
  },
  openGraph: {
    title: 'Digital Marketing Blog | The Creative Horse',
    description: 'Digital marketing tips, SEO advice, and web design insights for small businesses in Mississauga, Toronto, and the GTA.',
    url: 'https://thecreativehorse.ca/blog',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'web-design-cost-mississauga',
    title: 'How Much Does a Website Cost in Mississauga? (2025 Guide)',
    excerpt: 'A complete breakdown of website design costs for Mississauga small businesses — from simple brochure sites to full e-commerce stores. What to expect and how to avoid overpaying.',
    date: 'May 2026',
    category: 'Web Design',
    readTime: '6 min read',
  },
  {
    slug: 'digital-marketing-agency-toronto',
    title: 'How to Choose a Digital Marketing Agency in Toronto & Mississauga',
    excerpt: 'Not all digital agencies are equal. Here is what Mississauga and Toronto small business owners need to look for — and the red flags that should send you running.',
    date: 'May 2026',
    category: 'Digital Marketing',
    readTime: '7 min read',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <TheCreativeHorseNavbar />

      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide text-sm">Blog</p>
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              Digital Marketing Insights for GTA Businesses
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Practical tips on web design, SEO, and digital marketing for small businesses in Mississauga, Toronto, and the GTA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-max px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="p-6 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-primary-navy mb-3 leading-snug">{post.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <span className="text-blue-600 text-sm font-semibold">Read More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}