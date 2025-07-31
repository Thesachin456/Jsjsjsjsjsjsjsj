import React from 'react'
import { CheckCircle, Target, Eye, Heart } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To democratize quality education and make learning accessible to everyone, everywhere."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To become the world's leading platform for transformative online education and skill development."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Excellence, Innovation, Accessibility, and Student Success are at the core of everything we do."
    }
  ]

  const achievements = [
    "50,000+ Happy Students",
    "200+ Expert Instructors",
    "500+ Comprehensive Courses",
    "95% Course Completion Rate",
    "24/7 Student Support",
    "Industry-Recognized Certificates"
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About 
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Rangreja
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded with a passion for education and technology, Rangreja has been at the forefront 
              of online learning innovation. We believe that quality education should be accessible to 
              everyone, regardless of their location or background.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform combines cutting-edge technology with pedagogical excellence to deliver 
              learning experiences that are not just educational, but transformational. We're committed 
              to helping our students achieve their goals and unlock their full potential.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About