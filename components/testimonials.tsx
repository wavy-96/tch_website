import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Chahat Verma',
    designation: 'Web Design & Digital Marketing Client',
    quote: 'Working with The Creative Horse has been an absolute pleasure. Their team demonstrated outstanding expertise in website management, ensuring our platform not only ran smoothly but was optimized for both performance and user experience. Highly recommend them for anyone looking to elevate their online identity with precision and style.',
    rating: 5,
  },
  {
    name: 'Tiya N',
    designation: 'Daycare Centre - Social Media & Website Client',
    quote: 'They helped me bring my vision of a daycare centre to life on social media. The website they made, the posts they created, the marketing materials they prepared were all well thought of and very much aligned with my thoughts. They go an extra mile to help achieve it. Recommendation: Absolutely Yes!',
    rating: 5,
  },
  {
    name: 'Naomi Stokes',
    designation: 'Marketing Client',
    quote: 'The Creative Horse team is passionate and committed towards equipping you with marketing tools tailored specifically for your organisation. Thank you for all your help and support on my projects. I would 100% recommend working with Creative Horse to help grow your business.',
    rating: 5,
  },
  {
    name: 'Abdulqadir Painter',
    designation: 'Accounting Website Client',
    quote: 'Creative Horse helped me build my accounting website. They were fast & great with communication. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Burhanuddin Lokhandwala',
    designation: 'Digital Marketing Client',
    quote: 'Highly recommend this agency! Their innovative strategies and creative campaigns have significantly boosted our brand visibility and engagement. The team is knowledgeable, responsive, and dedicated to delivering top-notch results. A go-to agency for any marketing needs!',
    rating: 5,
  },
  {
    name: 'Harshil Pithva',
    designation: 'Web Development Client',
    quote: 'They are best at what they do and their customer support is impeccable. They have been tremendously helpful in my project and worked very hard to deliver before the deadline. I really liked their enthusiasm on the project.',
    rating: 5,
  },
  {
    name: 'Imran Jeevunjee',
    designation: 'Web Development & Marketing Client',
    quote: 'This was by the best web development and marketing team that I have come across. They were professional, quick and offered an amazing turn key solution for all my digital needs.',
    rating: 5,
  },
  {
    name: 'Anamika Mishra',
    designation: 'Website Development Client',
    quote: 'I have worked with them for one of my projects and am so pleased with the professionalism and talent provided by The Creative Horse team. Very professional and on time, communicated in a timely manner and has amazing marketing ideas. I strongly recommend The Creative Horse.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max px-4 md:px-8 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-roboto font-bold text-primary-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-body text-gray-dark max-w-2xl mx-auto">
            Trusted by small and medium businesses across Mississauga, Toronto, and the GTA.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-primary-navy">4.9</span>
            <span className="text-gray-500 text-sm">13 Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 bg-white border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-primary-navy text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://g.page/r/thecreativehorse/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary-navy text-primary-navy px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-navy hover:text-white transition-colors"
          >
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}