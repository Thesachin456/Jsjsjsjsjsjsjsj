import React from 'react'
import { Monitor, Users, Award, Clock, HeadphonesIcon, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Interactive Learning",
      description: "Engage with dynamic content, quizzes, and hands-on projects that make learning enjoyable and effective."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience and proven track records in their fields."
    },
    {
      icon: Award,
      title: "Certified Courses",
      description: "Earn recognized certificates upon completion that boost your resume and career prospects."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Study at your own pace with 24/7 access to course materials and lifetime access to content."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team and community forums."
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "Stay ahead with courses covering the most current technologies and industry best practices."
    }
  ]

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose 
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Rangreja</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make our platform the preferred choice for thousands of learners worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary text-lg px-8 py-4">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features