import React, { useState, useEffect } from 'react';
import grid from '@assets/images/coursePagination/grid.svg';
import row from '@assets/images/coursePagination/row.svg';
import Search from '@common/Search';
import Sort from './Filter/Sort';
import CoursePage1 from './CoursePage1';


const CourseOptions = () => {


    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div className='w-full flex justify-center gap-3 mb-10'>
                <div className='bg-[#ECEFF1] h-[56px] w-[10%] p-1 flex items-center justify-center gap-2 rounded-2xl'>
                    <img src={grid} className='h-[30px] w-[30px]' alt="Grid View" />
                    <img src={row} className='h-[30px] w-[30px]' alt="Row View" />
                </div>
                <div className='w-[620px] h-[56px] shadow-xl rounded-2xl'>
                    <Search handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
                </div>
                <Sort />
            </div>
            <CoursePage1 searchQuery={searchQuery} />
        </>
    );
};

export default CourseOptions;