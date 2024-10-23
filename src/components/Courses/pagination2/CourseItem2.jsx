import React from 'react'
import lesson from '@assets/images/mainContent/topcourses/lesson.svg'
import calendar from '@assets/images/mainContent/topcourses/calendar.svg'
import clock from '@assets/images/mainContent/topcourses/clock.svg'
import noPhoto from '@assets/images/mainContent/topcourses/no.jpg'
import liked from '@assets/images/mainContent/topcourses/heart.svg'
import notLiked from '@assets/images/mainContent/topcourses/emptyHeart.svg'
import DateFormater from '@common/DateFormater'
import student from '@assets/images/coursePagination/student.svg';
import teacher from '@assets/images/coursePagination/teacher.svg';




const CourseItem2 = ({ teacherName, cost, likeCount, isLiked, img, title, date, describe }) => {
    img === null ? img = noPhoto : img = img



    return (
        <div class='flex flex-wrap justify-center w-[98%] gap-3 bg-[#ffffff]
        shadow-xl rounded-xl p-4 '>
            <div>
                <img src={img} class='w-[264px] h-[180px] rounded-xl' />
            </div>
            <div className=' flex flex-col gap-2 w-[70%] h-[190px] py-3 '>
                <h4 class='text-[#263238] text-[20px] text-right p-2'>{title}</h4>
                <p className='text-[#455A64] text-[14px] text-right p-2 ' >{describe}</p>

                <div class='flex items-center justify-between px-2 '>
                    <div class='flex items-center justify-center gap-4 bg-[#ECEFF1] px-4 py-2 rounded-full '>
                        <div class='flex items-center gap-1'>
                            <img src={teacher} class='w-[15px] h-[15px] ' />
                            <h6 class='text-[#263238] text-[14px]'>{teacherName}</h6>
                        </div>
                        <div class='flex items-center gap-1' >
                            <img src={student} class='w-[15px] h-[15px] ' />
                            <h6 class='text-[#263238] text-[13px]'>256 دانش‌آموز</h6>
                        </div>
                        <div class='flex items-center gap-1' >
                            <img src={lesson} class='w-[15px] h-[15px] ' />
                            <h6 class=' text-[14px]  text-[#263238]' >202 درس</h6>
                        </div>
                        <div class='flex items-center gap-1' >
                            <img src={clock} class='w-[15px] h-[15px] ' />
                            <h6 class=' text-[14px]  text-[#263238]' >14 ساعت</h6>
                        </div>
                        <div class='flex items-center gap-1' >
                            <img src={calendar} class='w-[15px] h-[15px] ' />
                            <h6 class=' text-[14px]  text-[#263238]' >
                                <DateFormater dateString={date} />
                            </h6>
                        </div>
                    </div>
                    <div class='text-[#2196F3] text-[20px] flex items-center gap-1'> {cost} <h4 class='text-[#263238] text-[14px]'>تومان</h4></div>
                </div>
                <div class='flex items-center justify-between p-2'>
                    <div class=' relative bottom-[160px] left-[275px] flex gap-1 bg-[#FFEBEE] p-2 rounded-full ' >
                        {isLiked === true ? (<img src={liked} />) : (<img src={notLiked} />)}
                        <h4 class='text-[#F44336] text-[14px]' >{likeCount}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem2