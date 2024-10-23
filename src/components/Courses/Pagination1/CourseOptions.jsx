import grid from '@assets/images/coursePagination/grid.svg';
import row from '@assets/images/coursePagination/row.svg';
import Search from '@common/Search';
import Sort from '../Filter/Sort';
import AllCourses from './AllCourses';
import { useState } from 'react';


const CourseOptions = () => {


    const [searchQuery, setSearchQuery] = useState('');
    const [displayComponent, setDisplayComponent] = useState('allCourses');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleGridClick = () => {
        setDisplayComponent('allCourses');
    };

    const handleRowClick = () => {
        setDisplayComponent('anotherComponent');
    };

    return (
        <>
            <div className='w-full flex justify-center gap-3 mb-10'>
                <div className='bg-[#ECEFF1] h-[56px] w-[10%] p-1 flex items-center justify-center gap-2 rounded-2xl'>
                    <img src={grid} className='h-[30px] w-[30px] cursor-pointer'
                        onClick={handleGridClick} />
                    <img src={row} className='h-[30px] w-[30px] cursor-pointer'
                        onClick={handleRowClick} />
                </div>
                <div className='w-[620px] h-[56px] shadow-xl rounded-2xl'>
                    <Search handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
                </div>
                <Sort />
            </div>
            {displayComponent === 'allCourses' && <AllCourses searchQuery={searchQuery} />}

        </>
    );
};

export default CourseOptions;