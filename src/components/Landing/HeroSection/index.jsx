import React from 'react'
import Search from '@common/Search'
import Statstic from './StatisticHolder'

const HeroSection = () => {
  return (
    <div className='bg'>
      <div className='flex flex-col gap-3 md:gap-12 lg:gap-16 md:mt-8'>
        {/* Responsive Typography */}
        <h2 className="text-base md:text-xl text-[#263238]">پلتفرم آموزش طراحی وب</h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl text-[#263238]">مرجع آموزش برنامه نویسی</h1>
        <h2 className="text-base md:text-xl text-[#263238]">مرجع آموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی آموزشی به زبان فارسی</h2>
      </div>

      <div className='w-[250px] mb-4 md:w-[400px] lg:w-[670px] mx-auto'> {/* Centering and responsive width */}
        <Search />
      </div>

      {/* Ensure Statstic takes full width on mobile, but allows flexibility on larger screens */}
      <Statstic />
    </div>
  )
}

export default HeroSection