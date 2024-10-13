import React from 'react'
import dore from '@assets/images/mainContent/teachers/dore.svg'
import nobody from '@assets/images/mainContent/topcourses/no.jpg'




const TeacherItem = ({ img, teacherName, courses , index }) => {
    img === null ? img = nobody : img = img
    teacherName === null ? teacherName = "Unknown" : teacherName = teacherName

    return (
        <div className={` flex flex-col gap-3 w-[20%] h-[390px] rounded-md relative transition-transform duration-300 ease-in-out ${index % 2 === 0 ? 'translate-y-5' : '-translate-y-5'}`}>
            <img src={img} class='w-[296px] h-[300px] rounded-2xl ' />
            <h4 class='text-[#263238] text-[20px]'>{teacherName}</h4>
            <h4 class='text-[#455A64] text-[16px] '>برنامه نویسی تحت فرانت و بکند</h4>
            <div class='flex items-center w-[28%] p-2 relative bottom-[360px] right-2 bg-[#ffffff] rounded-3xl ' >
                <img src={dore} class=' w-[16px] h-[16px] ' />
                <h4 class='text-[#2196F3] text-[14px] '> {courses} دوره</h4>
            </div>
        </div>
    )
}

export default TeacherItem