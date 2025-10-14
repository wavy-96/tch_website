'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from '@/components/ui/resizable-navbar'
import { Logo } from '@/components/logo'

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Services', link: '/services' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'About', link: '/about' },
]

export function TheCreativeHorseNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50">
      <NavBody className="!fixed !top-4 !left-4 !right-4 !z-50 hidden lg:flex">
        {/* Logo */}
        <Logo href="/" size="md" variant="blue" />

        {/* Navigation Items */}
        <NavItems 
          items={navItems} 
          onItemClick={() => setIsMobileMenuOpen(false)}
        />

        {/* CTA Button */}
        <NavbarButton 
          href="/contact"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-button text-cta font-roboto font-bold uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-blue text-white hover:bg-opacity-90 hover:shadow-lg h-12 px-8 py-4"
        >
          Contact
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="!fixed !top-4 !left-4 !right-4 !z-50 lg:hidden">
        <MobileNavHeader>
          {/* Mobile Logo */}
          <Logo href="/" size="md" variant="blue" />

          {/* Mobile Navigation Items - Show directly on mobile */}
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="px-2 py-1 text-xs font-medium text-white hover:text-primary-lime transition-colors uppercase whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Contact Button */}
            <NavbarButton 
              href="/contact" 
              className="px-3 py-1 text-xs bg-primary-blue text-white hover:bg-primary-blue/90 whitespace-nowrap"
            >
              Contact
            </NavbarButton>
          </div>
        </MobileNavHeader>
      </MobileNav>
    </Navbar>
  )
}
