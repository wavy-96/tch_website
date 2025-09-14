/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				blue: '#007BFF',
  				navy: '#0A1F44',
  				sky: '#00CFFF',
  				lime: '#A3FF12',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			gray: {
  				dark: '#333333',
  				light: '#F5F7FA'
  			},
  			white: '#FFFFFF',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			roboto: [
  				'Roboto',
  				'Arial',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'Arial',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			hero: [
  				'60px',
  				{
  					lineHeight: '1.1',
  					fontWeight: '700'
  				}
  			],
  			h1: [
  				'48px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			],
  			h2: [
  				'40px',
  				{
  					lineHeight: '1.3',
  					fontWeight: '600'
  				}
  			],
  			h3: [
  				'28px',
  				{
  					lineHeight: '1.4',
  					fontWeight: '500'
  				}
  			],
  			body: [
  				'18px',
  				{
  					lineHeight: '1.6',
  					fontWeight: '400'
  				}
  			],
  			small: [
  				'14px',
  				{
  					lineHeight: '1.5',
  					fontWeight: '400'
  				}
  			],
  			cta: [
  				'18px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			]
  		},
  		backgroundImage: {
  			'gradient-blue-navy': 'linear-gradient(135deg, #00CFFF 0%, #0A1F44 100%)',
  			'gradient-blue-lime': 'linear-gradient(90deg, #007BFF 0%, #A3FF12 100%)'
  		},
  		boxShadow: {
  			card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  			subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
  		},
  		borderRadius: {
  			card: '8px',
  			button: '6px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			section: '80px',
  			component: '32px'
  		},
  		maxWidth: {
  			container: '1440px',
  			content: '1200px'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.5s ease-out',
  			'bounce-gentle': 'bounceGentle 2s infinite',
  			'marquee': 'marquee 35s linear infinite',
  			'marquee-reverse': 'marqueeReverse 35s linear infinite',
  			'move': 'move 3s ease-in-out infinite',
  			'pulse-glow': 'pulseGlow 2s ease-in-out infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			bounceGentle: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-5px)'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			marqueeReverse: {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			},
  			move: {
  				'0%, 100%': {
  					transform: 'translateY(0px) scaleY(1)',
  					opacity: '0.8'
  				},
  				'50%': {
  					transform: 'translateY(-15px) scaleY(1.2)',
  					opacity: '1'
  				}
  			},
  			pulseGlow: {
  				'0%, 100%': {
  					opacity: '0.6',
  					transform: 'scaleY(1)'
  				},
  				'50%': {
  					opacity: '1',
  					transform: 'scaleY(1.1)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
