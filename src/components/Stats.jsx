import React from 'react'
import { Users, BookOpen, Award, Globe } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Active Students",
      description: "Learning and growing with us"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Quality Courses",
      description: "Across various domains"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      description: "Students achieving their goals"
    },
    {
      icon: Globe,
      number: "100+",
      label: "Countries",
      description: "Students from around the world"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers with Rangreja
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-primary-100 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-primary-200 text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats