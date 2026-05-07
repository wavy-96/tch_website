import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio — Web Design & Branding Work in the GTA',
  description: 'See how The Creative Horse has helped Mississauga and Toronto businesses with websites, branding, and digital marketing. Real clients, real results.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/portfolio',
  },
  openGraph: {
    title: 'Portfolio — Web Design & Branding Work in the GTA | The Creative Horse',
    description: 'See how The Creative Horse has helped Mississauga and Toronto businesses with websites, branding, and digital marketing.',
    url: 'https://thecreativehorse.ca/portfolio',
    type: 'website',
  },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}