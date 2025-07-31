import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Developer",
      company: "TCS",
      image: "bg-gradient-to-br from-pink-400 to-pink-600",
      rating: 5,
      text: "Rangreja completely transformed my career. The web development course was comprehensive and the instructors were incredibly supportive. I landed my dream job within 3 months of completion!"
    },
    {
      id: 2,
      name: "Rohit Kumar",
      role: "Data Scientist",
      company: "Flipkart",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      rating: 5,
      text: "The data science program at Rangreja is outstanding. The practical projects and real-world applications helped me transition from a different field into data science successfully."
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "UX Designer",
      company: "Zomato",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      rating: 5,
      text: "I love how interactive and engaging the courses are. The UI/UX design course gave me all the skills I needed to start my design career. The portfolio projects were especially valuable."
    },
    {
      id: 4,
      name: "Vikash Singh",
      role: "Mobile Developer",
      company: "Paytm",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      rating: 5,
      text: "The mobile app development course was exactly what I needed. The hands-on approach and industry-relevant projects helped me build a strong portfolio and secure a great position."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our 
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say about their learning journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.image} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Ready to start your success story?</p>
          <button className="btn-primary text-lg px-8 py-4">
            Join Thousands of Successful Students
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials