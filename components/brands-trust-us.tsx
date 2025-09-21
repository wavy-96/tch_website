'use client'

import Image from 'next/image'

const brandLogos = [
  { name: 'Gus Taco', logo: '/Logos/Gus Taco Logo.png' },
  { name: 'Dspot', logo: '/Logos/Dspot-logo1.webp' },
  { name: 'Paper Plane', logo: '/Logos/Paper Plane Logo.svg' },
  { name: 'Trans Globe', logo: '/Logos/Trans Globe Logo.svg' },
  { name: 'Asal-E-Musaffa', logo: '/Logos/Asal-E-Musaffa- Logo.svg' },
  { name: 'Canadian Flyers', logo: '/Logos/canadian flyers international logo (1) (1).jpg' },
  { name: 'Pixel Perfect Maldives', logo: '/Logos/Logo- Pixel Perfect Maldives (1).pdf.png' },
  { name: 'Client 1', logo: '/Logos/ALL LOGOS (1).png' },
  { name: 'Client 2', logo: '/Logos/ALL LOGOS (2).png' },
  { name: 'Client 3', logo: '/Logos/ALL LOGOS (3).png' },
  { name: 'Client 4', logo: '/Logos/ALL LOGOS (4).png' },
  { name: 'Client 5', logo: '/Logos/ALL LOGOS (5).png' },
  { name: 'Client 6', logo: '/Logos/ALL LOGOS (6).png' },
  { name: 'Client 7', logo: '/Logos/ALL LOGOS (7).png' },
  { name: 'Client 8', logo: '/Logos/ALL LOGOS (8).png' },
  { name: 'Client 9', logo: '/Logos/ALL LOGOS (9).png' },
  { name: 'Client 10', logo: '/Logos/ALL LOGOS (10).png' },
]

export function BrandsTrustUs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-max px-4 md:px-8 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Brands That Trust Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to work with industry leaders who trust us with their digital presence
          </p>
        </div>

        {/* Scrolling Logos - Two rows with opposite directions */}
        <div className="relative overflow-hidden space-y-6">
          {/* Gradient overlays for both rows */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          {/* Top row - scrolling left to right */}
          <div className="flex animate-marquee">
            {/* First set of logos for top row */}
            {brandLogos.slice(0, 9).map((brand, index) => (
              <div
                key={`top-first-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-gray-200 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                  <div className={`${['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 'h-28 w-40' : 'h-20 w-32'} flex items-center justify-center relative`}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 200 : 150}
                      height={['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 100 : 75}
                      className={`object-contain ${['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 'max-h-28' : 'max-h-20'} w-auto group-hover:scale-110 transition-transform duration-300`}
                      onError={(e) => {
                        console.error(`Failed to load logo: ${brand.logo}`);
                        // Show fallback text
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded logo: ${brand.logo}`);
                      }}
                    />
                    {/* Fallback text for failed images */}
                    <div className="hidden absolute inset-0 items-center justify-center text-xs text-gray-500 font-medium text-center px-2">
                      {brand.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop - top row */}
            {brandLogos.slice(0, 9).map((brand, index) => (
              <div
                key={`top-second-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-gray-200 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                  <div className={`${['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 'h-28 w-40' : 'h-20 w-32'} flex items-center justify-center relative`}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 200 : 150}
                      height={['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 100 : 75}
                      className={`object-contain ${['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 'max-h-28' : 'max-h-20'} w-auto group-hover:scale-110 transition-transform duration-300`}
                      onError={(e) => {
                        console.error(`Failed to load logo: ${brand.logo}`);
                        // Show fallback text
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded logo: ${brand.logo}`);
                      }}
                    />
                    {/* Fallback text for failed images */}
                    <div className="hidden absolute inset-0 items-center justify-center text-xs text-gray-500 font-medium text-center px-2">
                      {brand.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom row - scrolling right to left */}
          <div className="flex animate-marquee-reverse">
            {/* First set of logos for bottom row */}
            {brandLogos.slice(9, 17).map((brand, index) => (
              <div
                key={`bottom-first-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-gray-200 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                  <div className={`${['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 'h-28 w-40' : 'h-20 w-32'} flex items-center justify-center relative`}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 200 : 150}
                      height={['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 100 : 75}
                      className={`object-contain ${['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 'max-h-28' : 'max-h-20'} w-auto group-hover:scale-110 transition-transform duration-300`}
                      onError={(e) => {
                        console.error(`Failed to load logo: ${brand.logo}`);
                        // Show fallback text
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded logo: ${brand.logo}`);
                      }}
                    />
                    {/* Fallback text for failed images */}
                    <div className="hidden absolute inset-0 items-center justify-center text-xs text-gray-500 font-medium text-center px-2">
                      {brand.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop - bottom row */}
            {brandLogos.slice(9, 17).map((brand, index) => (
              <div
                key={`bottom-second-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-gray-200 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                  <div className={`${['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 'h-28 w-40' : 'h-20 w-32'} flex items-center justify-center relative`}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 200 : 150}
                      height={['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 100 : 75}
                      className={`object-contain ${['Paper Plane', 'Trans Globe', 'Asal-E-Musaffa'].includes(brand.name) ? 'max-h-28' : 'max-h-20'} w-auto group-hover:scale-110 transition-transform duration-300`}
                      onError={(e) => {
                        console.error(`Failed to load logo: ${brand.logo}`);
                        // Show fallback text
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded logo: ${brand.logo}`);
                      }}
                    />
                    {/* Fallback text for failed images */}
                    <div className="hidden absolute inset-0 items-center justify-center text-xs text-gray-500 font-medium text-center px-2">
                      {brand.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
