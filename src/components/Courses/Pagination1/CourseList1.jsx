import React from 'react'
import CoursePage1 from './CoursePage1'
import CourseHead from './CourseHead';
import CourseOptions from './CourseOptions';
import Filters from './Filter/Filters';



const CourseList1 = () => {
  return (
    <div className="container mx-auto p-8">
      <CourseHead />
      <div className='w-full flex'>
        <Filters />
        <div className='w-[70%]' >
          <CourseOptions />
          <CoursePage1 />
        </div>
      </div>
    </div>
  )
}

export default CourseList1