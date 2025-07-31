import React from 'react'
import { Clock, Users, Star, ArrowRight, Code, Palette, BarChart, Smartphone } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB",
      icon: Code,
      duration: "12 weeks",
      students: "2,340",
      rating: 4.9,
      price: "₹12,999",
      originalPrice: "₹19,999",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      badge: "Bestseller"
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      description: "Create stunning user interfaces and experiences with Figma and Adobe XD",
      icon: Palette,
      duration: "8 weeks",
      students: "1,890",
      rating: 4.8,
      price: "₹9,999",
      originalPrice: "₹14,999",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      badge: "Popular"
    },
    {
      id: 3,
      title: "Data Science & Analytics",
      description: "Learn Python, Machine Learning, and data visualization techniques",
      icon: BarChart,
      duration: "16 weeks",
      students: "1,567",
      rating: 4.9,
      price: "₹15,999",
      originalPrice: "₹24,999",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      badge: "New"
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build iOS and Android apps with React Native and Flutter",
      icon: Smartphone,
      duration: "10 weeks",
      students: "1,234",
      rating: 4.7,
      price: "₹11,999",
      originalPrice: "₹17,999",
      image: "bg-gradient-to-br from-orange-400 to-orange-600",
      badge: "Trending"
    }
  ]

  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular 
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most popular courses designed by industry experts to help you achieve your career goals
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {courses.map((course) => {
            const IconComponent = course.icon
            return (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Course Image/Icon */}
                <div className={`${course.image} h-48 flex items-center justify-center relative`}>
                  <IconComponent className="w-16 h-16 text-white/90" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.badge === 'Bestseller' ? 'bg-yellow-400 text-yellow-900' :
                      course.badge === 'Popular' ? 'bg-green-400 text-green-900' :
                      course.badge === 'New' ? 'bg-blue-400 text-blue-900' :
                      'bg-orange-400 text-orange-900'
                    }`}>
                      {course.badge}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Meta */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} students
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses