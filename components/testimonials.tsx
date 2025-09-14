import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

const testimonials = [
  {
    quote: "The Creative Horse elevated our brand and turned attention into real leads. Their attention to detail and innovative approach completely transformed our digital presence.",
    name: "Sarah Chen",
    designation: "Business Owner at Toronto Business",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop&crop=face"
  },
  {
    quote: "Clean design, clear strategy, and results we can measure. They made our small business look like an industry leader with their premium approach.",
    name: "Michael Rodriguez",
    designation: "E-commerce Founder at Online Store",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
  },
  {
    quote: "They made our small business look like an industry leader. The AI automation they set up saves us hours every week and drives real results.",
    name: "Emily Watson",
    designation: "Marketing Director at Local Agency",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=face"
  },
  {
    quote: "The AI automation they set up saves us hours every week. Their strategic approach and technical expertise have been game-changing for our operations.",
    name: "James Kim",
    designation: "Operations Manager at Tech Startup",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face"
  },
  {
    quote: "Working with The Creative Horse was a game-changer. They understood our vision and brought it to life with stunning design and smart strategy.",
    name: "Lisa Thompson",
    designation: "CEO at GTA Marketing Firm",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop&crop=face"
  }
]

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-roboto font-bold text-primary-navy mb-4">
            Success Stories
          </h2>
          <p className="text-body text-gray-dark max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses we helped say about us.
          </p>
        </div>

        <AnimatedTestimonials 
          testimonials={testimonials} 
          autoplay={true}
        />
      </div>
    </section>
  )
}
