import row from '@assets/images/coursePagination/row.svg';
import grid from '@assets/images/coursePagination/grid.svg';
import Search from '@common/Search';
import Sort from '../Filter/Sort';
import { useState } from 'react';
import CourseGrid from './CourseGrid';
import CourseRow from '../pagination2/CourseRow';

const CourseOptions = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [displayComponent, setDisplayComponent] = useState('CourseGrid');
    const [activeImage, setActiveImage] = useState('grid');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleGridClick = () => {
        setDisplayComponent('CourseGrid');
        setActiveImage('grid');
    };

    const handleRowClick = () => {
        setDisplayComponent('CourseRow');
        setActiveImage('row');
    };

    const activeImageStyle = 'h-[30px] w-[30px] rounded-full cursor-pointer bg-white';
    const inactiveImageStyle = 'h-[30px] w-[30px] cursor-pointer';

    return (
        <div className='w-full'>
            <div className='w-full flex justify-center gap-3 mb-10'>
                <div className='bg-[#ECEFF1] h-[56px] w-[10%] p-1 flex items-center justify-center gap-2 rounded-2xl'>
                    <img src={grid} className={activeImage === 'grid' ? activeImageStyle : inactiveImageStyle} onClick={handleGridClick} />
                    <img src={row} className={activeImage === 'row' ? activeImageStyle : inactiveImageStyle} onClick={handleRowClick} />
                </div>
                <div className='w-[620px] h-[56px] shadow-xl rounded-2xl'>
                    <Search handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
                </div>
                <Sort />
            </div>
            {displayComponent === 'CourseGrid' && <CourseGrid searchQuery={searchQuery} />}
            {displayComponent === 'CourseRow' && <CourseRow searchQuery={searchQuery} />}
        </div>
    );
};

export default CourseOptions;