import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import { Chatbot } from '@/components/chatbot'

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
  metadataBase: new URL('https://thecreativehorse.ca'),
  title: {
    default: 'Digital Marketing Agency in Mississauga & Toronto | The Creative Horse',
    template: '%s | The Creative Horse',
  },
  description: 'Mississauga digital marketing agency helping GTA businesses grow with web design, SEO, Google Ads, and social media marketing.',
  keywords: 'digital marketing agency Mississauga, web design Toronto, SEO Mississauga, Google Ads GTA, social media marketing Mississauga',
  authors: [{ name: 'The Creative Horse' }],
  creator: 'The Creative Horse',
  publisher: 'The Creative Horse',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'The Creative Horse',
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
          <Chatbot />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}