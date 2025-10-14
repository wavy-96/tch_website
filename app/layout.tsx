import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Creative Horse - Premium Digital Agency for SMBs',
  description: 'Premium websites, ads, and AI automations for small–medium businesses in Toronto, Mississauga, and across North America. Look bigger, sell smarter.',
  keywords: 'digital agency, website development, social media marketing, Google Ads, SEO, Toronto, Mississauga, SMB',
  authors: [{ name: 'The Creative Horse' }],
  creator: 'The Creative Horse',
  publisher: 'The Creative Horse',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thecreativehorse.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://thecreativehorse.ca',
    title: 'The Creative Horse - Premium Digital Agency for SMBs',
    description: 'Premium websites, ads, and AI automations for small–medium businesses in Toronto, Mississauga, and across North America.',
    siteName: 'The Creative Horse',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Creative Horse - Premium Digital Agency for SMBs',
    description: 'Premium websites, ads, and AI automations for small–medium businesses in Toronto, Mississauga, and across North America.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress browser extension runtime errors
              window.addEventListener('error', function(e) {
                if (e.message && e.message.includes('runtime.lastError')) {
                  e.preventDefault();
                  return false;
                }
              });
            `,
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
