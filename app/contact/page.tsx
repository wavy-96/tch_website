import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us — Digital Marketing Agency in Mississauga',
  description: 'Get in touch with The Creative Horse. Serving Mississauga, Toronto, Brampton, Oakville, and the GTA. Call (647) 917-8641 or email us today.',
  alternates: {
    canonical: 'https://thecreativehorse.ca/contact',
  },
  openGraph: {
    title: 'Contact Us — Digital Marketing Agency in Mississauga | The Creative Horse',
    description: 'Get in touch with The Creative Horse. Serving Mississauga, Toronto, Brampton, Oakville, and the GTA.',
    url: 'https://thecreativehorse.ca/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactClient />
}