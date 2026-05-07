import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Web Design, SEO & Digital Marketing Services in Mississauga',
  description: 'From web design to Google Ads management, The Creative Horse offers full-service digital marketing for Mississauga, Toronto, Brampton, and GTA businesses.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/services',
  },
  openGraph: {
    title: 'Web Design, SEO & Digital Marketing Services in Mississauga | The Creative Horse',
    description: 'From web design to Google Ads management, The Creative Horse offers full-service digital marketing for Mississauga, Toronto, Brampton, and GTA businesses.',
    url: 'https://thecreativehorse.ca/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}