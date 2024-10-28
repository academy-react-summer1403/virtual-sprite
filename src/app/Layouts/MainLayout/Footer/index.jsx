import React from 'react'
import hexa from '@assets/images/footer/hexa.png'
import icons from '@assets/images/footer/icons.png'
import c from '@assets/images/footer/c.png'

const Footer = () => {
  return (
    <div className='w-full bg-[#252641] dark:bg-[#22262b] flex flex-col items-center justify-center gap-4 p-4 md:p-6 lg:p-8'>
      <div className='w-full md:max-w-[33%] flex flex-col items-center my-5 gap-6'>
        <div className="flex gap-1 items-center ">
          <h2 className='text-white text-[18px] font-bold'>Virtual Sprite</h2>
          <img src={hexa} className='w-[43px] h-[30px]' alt="Hexagon logo" />
        </div>
        <p className='text-white text-[16px] text-center'>هدف ما سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز به مراجعه حضوری در کل فرایند ثبت</p>

        <p className='text-white text-[14px] mt-3 text-center'>برای دریافت اخبار از طریق ایمیل ثبت نام کنید</p>
        <form className="w-full mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <input type="search" id="default-search" className="block w-full p-4 text-sm text-[#607D8B] text-left rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Example@gmail.com" required />
            <button type="submit" className="absolute start-2.5 bottom-2 bg-[#2196F3] text-white rounded-full font-medium text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">خبرم کن</button>
          </div>
        </form>
        <div className='w-full flex flex-col md:flex-row justify-around text-center'>
          <h3 className='text-white/[60%] text-[15px] '>دوره های اموزشی</h3>
          <h3 className='text-white/[60%] text-[15px] border-[1px] border-x-white/[60%] border-y-transparent px-12'>درباره ما</h3>
          <h3 className='text-white/[60%] text-[15px] '>قوانین و مقررات</h3>
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between items-center mb-5 p-5 rounded-lg bg-[#00000033]/[20%]'>
        <div className='flex gap-3'>
          <img src={c} className='w-[20px] h-[20px]' alt="Copyright icon" />
          <p className='text-white text-[12px]'>تمام حقوق مادی و معنوی این مجموعه متعلق به Virtual Sprite میباشد</p>
        </div>
        <img src={icons} className='w-[224px] h-[32px] md:w-[160px] md:h-[24px]' alt="Icons" />
      </div>
    </div>
  )
}

export default Footer