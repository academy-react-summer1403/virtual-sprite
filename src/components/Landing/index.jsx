import React from 'react'
import Header from '@app/Layouts/MainLayout/Navbar/Header'
import HeroSection from './HeroSection'
import Footer from '@app/Layouts/MainLayout/Footer/Footer'
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
      {/* <Footer /> */}
    </div>
  )
}

export default Landing