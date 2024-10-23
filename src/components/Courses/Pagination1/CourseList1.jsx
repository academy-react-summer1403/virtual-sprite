import React from 'react'
import CourseHead from './CourseHead';
import CourseOptions from './CourseOptions';
import Filters from '../Filter';



const CourseList1 = () => {
  return (
    <div className="container mx-auto p-8">
      <CourseHead />
      <div className='w-full flex'>
        <Filters />
        <div className='w-[70%]' >
          <CourseOptions />
        </div>
      </div>
    </div>
  )
}

export default CourseList1