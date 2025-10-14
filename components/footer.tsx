'use client'

import { Mail, Phone, Instagram } from 'lucide-react'
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
      <div className="container-max px-4 md:px-8 lg:px-20 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Made with love text */}
          <p className="text-small text-white/90">
            Made with <span className="text-red-500">❤️</span> The Creative Horse
          </p>

          {/* Social Links */}
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

          {/* Copyright */}
          <p className="text-small text-white/60">
            © {currentYear} The Creative Horse
          </p>
        </div>
      </div>
    </footer>
  )
}
