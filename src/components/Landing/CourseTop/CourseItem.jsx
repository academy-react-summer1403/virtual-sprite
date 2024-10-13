import React from 'react'
import lesson from '@assets/images/mainContent/topcourses/lesson.svg'
import calendar from '@assets/images/mainContent/topcourses/calendar.svg'
import clock from '@assets/images/mainContent/topcourses/clock.svg'
import noPhoto from '@assets/images/mainContent/topcourses/no.jpg'
import liked from '@assets/images/mainContent/topcourses/heart.svg'
import notLiked from '@assets/images/mainContent/topcourses/emptyHeart.svg'
import moment from 'moment-jalaali';
import DateFormater from '@common/DateFormater'





const CourseItem = ({ teacherName, cost, likeCount, isLiked, img, title, date }) => {




  return (
    <div class='flex flex-col  gap-1 bg-[#ffffff] border-2 shadow-xl rounded-xl p-3 '>
      {img === null ? (<img src={noPhoto} class='w-[264px] h-[180px] ' />) :
        (<img src={img} class='w-[264px] h-[180px] ' />)}
      <h4 class='text-[#263238] text-[18px] text-right p-2'>{title}</h4>

      <div class='flex items-center justify-between bg-[#ECEFF1] p-2 rounded-full '>
        <div class='flex items-center ' >
          <img src={lesson} class='w-[15px] h-[15px] ' />
          <h6 class=' text-[12px]  text-[#263238]' >202 درس</h6>
        </div>
        <div class='flex items-center ' >
          <img src={clock} class='w-[15px] h-[15px] ' />
          <h6 class=' text-[12px]  text-[#263238]' >14 ساعت</h6>
        </div>
        <div class='flex items-center ' >
          <img src={calendar} class='w-[15px] h-[15px] ' />
          <h6 class=' text-[12px]  text-[#263238]' >
            <DateFormater dateString={date} />
          </h6>
        </div>
      </div>
      <div class='flex items-center justify-between p-2'>
        <div class='text-[#263238] text-[16px] flex items-center gap-1'> مدرس : <h4 class='text-[#263238] text-[14px]'>{teacherName}</h4></div>
        <h4 class='text-[#263238] text-[13px]'>256 دانش‌آموز</h4>
      </div>
      <div class='flex items-center justify-between p-2'>
        <div class='flex items-center gap-1 bg-[#FFEBEE] p-2 rounded-full ' >
          {isLiked === true ? (<img src={liked} />) : (<img src={notLiked} />)}
          <h4 class='text-[#F44336] text-[14px] ' >{likeCount}</h4>
        </div>
        <div class='text-[#2196F3] text-[16px] flex items-center gap-1'> {cost} <h4 class='text-[#263238] text-[12px]'>تومان</h4></div>
      </div>
    </div>
  )
}

export default CourseItem