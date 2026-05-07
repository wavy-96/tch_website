'use client'

import { Mail, Phone, Instagram, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

const socialLinks = [
  { name: 'Email', href: 'mailto:Contact@thecreativehorse.ca', icon: Mail },
  { name: 'Phone', href: 'tel:+16479178641', icon: Phone },
  { name: 'Instagram', href: '#', icon: Instagram },
]

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-black text-white">

      {/* NAP Section */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 md:px-8 lg:px-20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

            <div>
              <p className="text-white font-semibold text-sm mb-1">The Creative Horse</p>
              <p className="text-white/60 text-sm">Digital Marketing Agency</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="tel:+16479178641" className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (647) 917-8641
              </a>
              <a href="mailto:Contact@thecreativehorse.ca" className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                Contact@thecreativehorse.ca
              </a>
            </div>

            <div className="flex items-start justify-center md:justify-end gap-2">
              <MapPin className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
              <address className="not-italic text-white/60 text-sm">
                6725 Millcreek Dr<br />
                Mississauga, ON L5N 5V3<br />
                Canada
              </address>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 md:px-8 lg:px-20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">

            <p className="text-small text-white/90">
              Made with <span className="text-red-500">❤️</span> The Creative Horse
            </p>

            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center hover:text-primary-blue transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="text-small text-white/60">
              © {currentYear} The Creative Horse
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}
