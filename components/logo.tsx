import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  className?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'white' | 'blue'
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20'
}

const imageSizes = {
  sm: 48,
  md: 64,
  lg: 80
}

export function Logo({ className = '', href = '/', size = 'md', variant = 'blue' }: LogoProps) {
  const logoElement = (
    <div className={`${sizeClasses[size]} flex items-center justify-center ${className}`}>
      <Image
        src="/logo_ch.png"
        alt="The Creative Horse Logo"
        width={imageSizes[size]}
        height={imageSizes[size]}
        className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:scale-105 object-contain"
        priority
      />
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="relative z-20 mr-4 flex items-center px-2 py-1 text-sm font-normal text-black dark:text-white">
        {logoElement}
      </Link>
    )
  }

  return logoElement
}
