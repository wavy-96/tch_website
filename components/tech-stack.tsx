'use client'

import { motion } from 'framer-motion'

const techStack = [
  {
    name: 'Amazon',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <text x="10" y="35" fontSize="28" fontWeight="bold" fill="#FF9900">amazon</text>
        <path d="M10 40 L30 20 L35 25 L15 45 Z" fill="#FF9900"/>
      </svg>
    )
  },
  {
    name: 'WordPress',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <circle cx="20" cy="20" r="15" fill="#464646"/>
        <text x="20" y="25" fontSize="16" fill="white" textAnchor="middle">W</text>
        <text x="45" y="35" fontSize="20" fontWeight="bold" fill="#464646">WordPress</text>
      </svg>
    )
  },
  {
    name: 'Shopify',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <rect x="10" y="15" width="20" height="20" rx="3" fill="#96BF48"/>
        <text x="15" y="28" fontSize="16" fill="white" textAnchor="middle">S</text>
        <text x="40" y="35" fontSize="20" fontWeight="bold" fill="#96BF48">shopify</text>
      </svg>
    )
  },
  {
    name: 'WooCommerce',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <rect x="10" y="15" width="20" height="20" rx="10" fill="#7F54B3"/>
        <text x="20" y="28" fontSize="16" fill="white" textAnchor="middle">W</text>
        <text x="40" y="35" fontSize="18" fontWeight="bold" fill="#7F54B3">WooCOMMERCE</text>
      </svg>
    )
  },
  {
    name: 'Laravel',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <path d="M10 20 L25 10 L30 15 L15 25 Z" fill="#FF2D20"/>
        <text x="40" y="35" fontSize="20" fontWeight="bold" fill="#FF2D20">Laravel</text>
      </svg>
    )
  },
  {
    name: 'Vue.js',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <polygon points="20,10 30,10 25,20" fill="#4FC08D"/>
        <polygon points="25,20 35,20 30,30" fill="#35495E"/>
        <text x="45" y="35" fontSize="20" fontWeight="bold" fill="#4FC08D">Vue.js</text>
      </svg>
    )
  },
  {
    name: 'React',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <circle cx="20" cy="20" r="3" fill="#61DAFB"/>
        <ellipse cx="20" cy="20" rx="8" ry="3" fill="none" stroke="#61DAFB" strokeWidth="2"/>
        <ellipse cx="20" cy="20" rx="8" ry="3" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 20 20)"/>
        <ellipse cx="20" cy="20" rx="8" ry="3" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 20 20)"/>
        <text x="40" y="35" fontSize="20" fontWeight="bold" fill="#61DAFB">React</text>
      </svg>
    )
  },
  {
    name: 'HTML5',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <path d="M10 10 L30 10 L28 25 L20 30 L12 25 Z" fill="#E34F26"/>
        <text x="20" y="22" fontSize="16" fill="white" textAnchor="middle">5</text>
        <text x="35" y="35" fontSize="18" fontWeight="bold" fill="#E34F26">HTML5</text>
      </svg>
    )
  },
  {
    name: 'CSS3',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <path d="M10 10 L30 10 L28 25 L20 30 L12 25 Z" fill="#1572B6"/>
        <text x="20" y="22" fontSize="16" fill="white" textAnchor="middle">3</text>
        <text x="35" y="35" fontSize="18" fontWeight="bold" fill="#1572B6">CSS3</text>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <path d="M10 10 L30 10 L28 25 L20 30 L12 25 Z" fill="#F7DF1E"/>
        <text x="20" y="22" fontSize="14" fill="black" textAnchor="middle">JS</text>
        <text x="35" y="35" fontSize="18" fontWeight="bold" fill="#F7DF1E">JavaScript</text>
      </svg>
    )
  },
  {
    name: 'NuxtJS',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <polygon points="15,10 25,10 20,20 15,10" fill="#00DC82"/>
        <polygon points="20,20 30,20 25,30 20,20" fill="#00DC82"/>
        <text x="40" y="35" fontSize="20" fontWeight="bold" fill="#00DC82">NUXTJS</text>
      </svg>
    )
  },
  {
    name: 'ChatGPT',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <rect x="10" y="15" width="20" height="20" rx="10" fill="#10A37F"/>
        <text x="20" y="28" fontSize="16" fill="white" textAnchor="middle">C</text>
        <text x="40" y="35" fontSize="20" fontWeight="bold" fill="#10A37F">ChatGPT</text>
      </svg>
    )
  },
  {
    name: 'Perplexity',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <circle cx="20" cy="20" r="15" fill="#000000"/>
        <text x="20" y="26" fontSize="16" fill="white" textAnchor="middle">P</text>
        <text x="45" y="35" fontSize="20" fontWeight="bold" fill="#000000">Perplexity</text>
      </svg>
    )
  },
  {
    name: 'N8N',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <rect x="10" y="15" width="20" height="20" rx="3" fill="#EA4B71"/>
        <text x="20" y="28" fontSize="16" fill="white" textAnchor="middle">N8</text>
        <text x="40" y="35" fontSize="20" fontWeight="bold" fill="#EA4B71">N8N</text>
      </svg>
    )
  },
  {
    name: 'Figma',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <rect x="10" y="15" width="20" height="20" rx="3" fill="#F24E1E"/>
        <text x="20" y="28" fontSize="16" fill="white" textAnchor="middle">F</text>
        <text x="40" y="35" fontSize="20" fontWeight="bold" fill="#F24E1E">Figma</text>
      </svg>
    )
  },
  {
    name: 'Adobe Creative Suite',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <rect x="10" y="15" width="20" height="20" rx="3" fill="#FF0000"/>
        <text x="20" y="28" fontSize="14" fill="white" textAnchor="middle">A</text>
        <text x="40" y="35" fontSize="18" fontWeight="bold" fill="#FF0000">Adobe</text>
      </svg>
    )
  },
  {
    name: 'Canva',
    logo: (
      <svg viewBox="0 0 200 60" className="h-12 w-auto">
        <rect x="10" y="15" width="20" height="20" rx="3" fill="#00C4CC"/>
        <text x="20" y="28" fontSize="16" fill="white" textAnchor="middle">C</text>
        <text x="40" y="35" fontSize="20" fontWeight="bold" fill="#00C4CC">Canva</text>
      </svg>
    )
  }
]

export function TechStack() {
  return (
    <section className="py-16 bg-white">
      <div className="container-max">
        <div className="relative overflow-hidden">
          {/* Scrolling container */}
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {techStack.map((tech, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center h-16 w-auto bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm border border-gray-100 hover:shadow-md hover:bg-white transition-all duration-300">
                  {tech.logo}
                </div>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {techStack.map((tech, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center h-16 w-auto bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm border border-gray-100 hover:shadow-md hover:bg-white transition-all duration-300">
                  {tech.logo}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}
