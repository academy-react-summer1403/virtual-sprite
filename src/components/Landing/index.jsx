import React from 'react'
import HeroSection from './HeroSection'
import CourseCategory from './CourseCategory/CourseCategory'
import TeacherHolder from './Teachers/TeacherHolder'
import ServiceHolder from './services/ServiceHolder'
import NewsHolder from './News/NewsHolder'
import CourseHolder from './CourseTop/CourseHolder'

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <ServiceHolder/>
      <CourseHolder/>
      <CourseCategory/>
      <TeacherHolder/>
      <NewsHolder/>
    </div>
  )
}

export default Landing