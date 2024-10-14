import React from 'react'
import CoursePage1 from './CoursePage1'
import grid from '@assets/images/coursePagination/grid.svg'
import row from '@assets/images/coursePagination/row.svg'
import Search from '@common/Search';



const CourseList1 = () => {
  return (
    <div className="container mx-auto p-8">
      <div className='courses-bg'>
        <div className='flex flex-col text-right px-10 max-w-prose' >
          <h2 className='text-[24px] text-[#2196F3] '>مهمه از کی یاد می گیری!!</h2>
          <h2 className='text-[40px] text-[#263238] break-words'>اموزش برنامه نویسی با بهترین ها</h2>
          <p className='text-[16px] text-[#455A64] ' >آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند. </p>
        </div>
      </div>

      <div className='w-full flex border border-pink-700'>
        <div className='w-[30%] h-[500px] border border-yellow-500 '></div>
        <div className='w-[70%] border border-blue-700 ' >
          <div className='w-full h-[56px] flex justify-center gap-3 mb-10 ' >
            <div className='bg-[#ECEFF1] h-full w-[10%] p-1 flex items-center justify-center gap-2 rounded-2xl ' >
              <img src={grid} className='h-[30px] w-[30px] ' />
              <img src={row} className='h-[30px] w-[30px] ' />
            </div>
            <div className=' w-[620px] shadow-xl rounded-2xl ' >
              <Search />
            </div>
          </div>
          <CoursePage1 />
        </div>
      </div>
    </div>
  )
}

export default CourseList1