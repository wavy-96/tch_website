"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { X, ExternalLink, Eye } from 'lucide-react';

const logoItems = [
  {
    id: 1,
    title: 'Anytime Tots',
    category: 'Graphic Designing',
    description: 'Childcare and early education branding with playful, friendly design elements.',
    image: '/Logos/Anytime Tots (7).png',
    results: ['Brand recognition', 'Child-friendly appeal', 'Professional credibility']
  },
  {
    id: 2,
    title: 'Pixel Perfect Maldives',
    category: 'Graphic Designing',
    description: 'Luxury travel and photography branding with elegant, sophisticated design.',
    image: '/Logos/Logo- Pixel Perfect Maldives (1).pdf.png',
    results: ['Premium positioning', 'Visual storytelling', 'Brand differentiation']
  },
  {
    id: 3,
    title: 'Pack Spectrum - Tax Accountant',
    category: 'Graphic Designing',
    description: 'Professional tax accounting logo with modern design and trustworthy appeal.',
    image: '/Logos/ALL LOGOS (1).png',
    results: ['Professional credibility', 'Trust-building design', 'Tax industry appeal']
  },
  {
    id: 4,
    title: 'Marie Hogan',
    category: 'Graphic Designing',
    description: 'Elegant personal branding with sophisticated design elements.',
    image: '/Logos/ALL LOGOS (2).png',
    results: ['Personal brand strength', 'Elegant presentation', 'Professional appeal']
  },
  {
    id: 5,
    title: 'Hummin Bird Interactive',
    category: 'Graphic Designing',
    description: 'Interactive technology logo with dynamic design and modern aesthetics.',
    image: '/Logos/ALL LOGOS (3).png',
    results: ['Tech-forward design', 'Interactive appeal', 'Modern positioning']
  },
  {
    id: 6,
    title: 'Sphere - A Media Agency',
    category: 'Graphic Designing',
    description: 'Creative media agency logo with bold design and creative energy.',
    image: '/Logos/ALL LOGOS (4).png',
    results: ['Creative energy', 'Media industry focus', 'Bold brand presence']
  },
  {
    id: 7,
    title: 'Creative Brand 5',
    category: 'Graphic Designing',
    description: 'Elegant logo design with sophisticated color palette and refined typography.',
    image: '/Logos/ALL LOGOS (5).png',
    results: ['Sophisticated appeal', 'Premium positioning', 'Elegant design']
  },
  {
    id: 8,
    title: 'Creative Brand 6',
    category: 'Graphic Designing',
    description: 'Creative abstract logo with unique visual elements and artistic flair.',
    image: '/Logos/ALL LOGOS (6).png',
    results: ['Creative expression', 'Unique identity', 'Artistic appeal']
  },
  {
    id: 9,
    title: 'Creative Brand 7',
    category: 'Graphic Designing',
    description: 'Professional corporate logo with clean lines and business-focused design.',
    image: '/Logos/ALL LOGOS (7).png',
    results: ['Corporate credibility', 'Professional image', 'Business appeal']
  },
  {
    id: 10,
    title: 'Creative Brand 8',
    category: 'Graphic Designing',
    description: 'Innovative logo design with tech-forward elements and modern aesthetics.',
    image: '/Logos/ALL LOGOS (8).png',
    results: ['Tech innovation', 'Modern appeal', 'Future-focused design']
  },
  {
    id: 11,
    title: 'Creative Brand 9',
    category: 'Graphic Designing',
    description: 'Bold typography-focused logo with strong visual hierarchy and impact.',
    image: '/Logos/ALL LOGOS (9).png',
    results: ['Typography excellence', 'Visual impact', 'Brand strength']
  },
  {
    id: 12,
    title: 'Creative Brand 10',
    category: 'Graphic Designing',
    description: 'Versatile logo design adaptable across multiple applications and platforms.',
    image: '/Logos/ALL LOGOS (10).png',
    results: ['Versatile application', 'Multi-platform ready', 'Adaptable design']
  }
];

export function LogoPortfolio() {
  const [selectedLogo, setSelectedLogo] = useState<typeof logoItems[0] | null>(null);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                {/* Background - Logo Image */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Logo Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-small font-medium backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* External Link Button */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm"
                      onClick={() => setSelectedLogo(item)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* View Project Button */}
                  <div className="absolute bottom-16 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      className="w-full bg-white/90 text-primary-navy hover:bg-white backdrop-blur-sm"
                      onClick={() => setSelectedLogo(item)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6">
                  <h3 className="text-h3 font-roboto font-semibold text-primary-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body text-gray-dark mb-4">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-roboto font-semibold text-small text-primary-navy">
                      Results:
                    </h4>
                    <ul className="space-y-1">
                      {item.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-small text-gray-dark flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Logo Modal */}
      <AnimatePresence>
        {selectedLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedLogo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLogo(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Logo Display */}
              <div className="text-center">
                <div className="relative h-80 w-full mb-6 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={selectedLogo.image}
                    alt={selectedLogo.title}
                    width={300}
                    height={300}
                    className="object-contain max-h-72 max-w-72"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-primary-navy mb-3">
                  {selectedLogo.title}
                </h3>
                <p className="text-gray-dark mb-6 max-w-md mx-auto">
                  {selectedLogo.description}
                </p>
                
                {/* Results */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary-navy mb-3">Key Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedLogo.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
