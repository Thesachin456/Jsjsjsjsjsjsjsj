import React, { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay Updated with Rangreja
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Get the latest course updates, industry insights, and exclusive offers delivered straight to your inbox
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-white font-medium">Thank you for subscribing!</span>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Weekly Updates</h3>
              <p className="text-primary-200 text-sm">Get the latest course releases and platform updates</p>
            </div>
            <div>
              <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Exclusive Offers</h3>
              <p className="text-primary-200 text-sm">Access to subscriber-only discounts and promotions</p>
            </div>
            <div>
              <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Insights</h3>
              <p className="text-primary-200 text-sm">Latest trends and insights from industry experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter