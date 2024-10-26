import React from 'react';
import CourseHead from './CourseHead';
import Filters from '../Filter';
import row from '@assets/images/coursePagination/row.svg';
import grid from '@assets/images/coursePagination/grid.svg';
import Search from '@common/Search';
import Sort from '../Filter/Sort';
import CourseRow from '../pagination2/CourseRow';
import CourseItem from '@components/Landing/CourseTop/CourseItem';
import { coursePagination } from '@core/services/api/courses/coursePagination.api';
import right from '@assets/images/coursePagination/right.png';
import left from '@assets/images/coursePagination/left.png';
import { useState, useEffect } from 'react';
import { coursePaginationDynamic } from '@core/services/api/courses/coursePagination.api';

const CourseList1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayComponent, setDisplayComponent] = useState('CourseGrid');
  const [activeImage, setActiveImage] = useState('grid');
  const [courses, setCourses] = useState([]);
  const [type, setType] = useState(null);  // Changed initial value to null  
  const [level, setLevel] = useState(null); // Changed initial value to null  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const getCourses = async () => {
    const result = await coursePagination();
    setCourses(result.courseFilterDtos);
  };

  const getCoursesDynamic = async () => {
    const params = {
      CourseTypeId: type,
      courseLevelId: level
    }
    const result = await coursePaginationDynamic(params);
    setCourses(result.courseFilterDtos);
  };

  // Fetch courses on initial render  
  useEffect(() => {
    getCourses();
  }, []);

  // Fetch courses dynamically based on filters  
  useEffect(() => {
    // If type or level is cleared, fetch courses again  
    if (type === null && level === null) {
      getCourses(); // Fetch all courses  
    } else {
      getCoursesDynamic();
    }
  }, [type, level]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
    <div className="container mx-auto p-8">
      <CourseHead />
      <div className='w-full flex'>
        <Filters setType={setType} setLevel={setLevel} />
        <div className='w-[70%]' >
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
            {displayComponent === 'CourseGrid' && (
              <div className='w-full px-3'>
                <div className='flex flex-wrap gap-10 justify-center my-5'>
                  {currentItems.map((item) => (
                    <CourseItem
                      key={item.courseId}
                      img={item.tumbImageAddress}
                      title={item.title}
                      date={item.lastUpdate}
                      teacherName={item.teacherName}
                      cost={item.cost}
                      likeCount={item.likeCount}
                      isLiked={item.userIsLiked} />
                  ))}
                </div>
                <div className='flex justify-center my-8'>
                  <button onClick={handlePreviousPage} disabled={currentPage === 1} className='mx-2 px-0 py-0 rounded-full ' >
                    <img src={right} />
                  </button>
                  {Array.from({ length: totalPages },
                    (_, index) => (
                      <button key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-2 w-[32px] h-[32px] text-center px-3 py-1 text-[14px] rounded-full ${currentPage === index + 1 ? 'bg-[#2196F3] text-white' : 'bg-transparent'}`}>
                        {index + 1}
                      </button>
                    ))}
                  <button onClick={handleNextPage} disabled={currentPage === totalPages} className='mx-2 px-0 py-0 rounded-full ' >
                    <img src={left} />
                  </button>
                </div>
              </div>
            )}
            {displayComponent === 'CourseRow' && <CourseRow searchQuery={searchQuery} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseList1;