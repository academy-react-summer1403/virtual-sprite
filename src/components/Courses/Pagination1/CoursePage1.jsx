import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseItem from '@components/Landing/CourseTop/CourseItem';
import { coursePagination } from '@core/services/api/courses/coursePagination.api';



const CoursePage1 = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const getCourses = async () => {
        const result = await coursePagination();
        setCourses(result.courseFilterDtos);
    };

    useEffect(() => {
        getCourses();
    }, []);

    // Calculate the current items to display  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages  
    const totalPages = Math.ceil(courses.length / itemsPerPage);

    // Handle page change  
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

    return (
        <div>
            <div className='flex flex-wrap gap-12 justify-center my-5 border border-pink-400 '>
                {currentItems.map((item) => (
                    <CourseItem
                        key={item.courseId}
                        img={item.tumbImageAddress}
                        title={item.title}
                        date={item.lastUpdate}
                        teacherName={item.teacherName}
                        cost={item.cost}
                        likeCount={item.likeCount}
                        isLiked={item.userIsLiked}
                    />
                ))}
            </div>
            <div className='flex justify-center my-8'>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className='mx-2 px-3 py-1 text-[18px] font-black rounded-full bg-[#ECEFF1] hover:bg-[#2196F3] hover:text-white '
                >
                    {"<"}
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-2 px-3 py-1 text-[14px] rounded-full ${currentPage === index + 1 ? 'bg-[#2196F3] text-white' : 'bg-transparent'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className='mx-2 px-3 py-1 text-[18px] font-black rounded-full bg-[#ECEFF1] hover:bg-[#2196F3] hover:text-white'
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default CoursePage1;