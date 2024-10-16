import React from 'react'
import grid from '@assets/images/coursePagination/grid.svg'
import row from '@assets/images/coursePagination/row.svg'
import Search from '@common/Search';

const CourseOptions = () => {
    return (
        <div className='w-full h-[56px] flex justify-center gap-3 mb-10 ' >
            <div className='bg-[#ECEFF1] h-full w-[10%] p-1 flex items-center justify-center gap-2 rounded-2xl ' >
                <img src={grid} className='h-[30px] w-[30px] ' />
                <img src={row} className='h-[30px] w-[30px] ' />
            </div>
            <div className=' w-[620px] shadow-xl rounded-2xl ' >
                <Search />
            </div>
        </div>
    )
}

export default CourseOptions