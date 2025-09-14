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
import { ContactModal } from '@/components/contact-modal'

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
      <NavBody>
        {/* Logo */}
        <Logo href="/" size="md" variant="blue" />

        {/* Navigation Items */}
        <NavItems 
          items={navItems} 
          onItemClick={() => setIsMobileMenuOpen(false)}
        />

        {/* CTA Button */}
        <ContactModal />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <Logo href="/" size="md" variant="blue" />

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="block w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-blue transition-colors uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <ContactModal />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
