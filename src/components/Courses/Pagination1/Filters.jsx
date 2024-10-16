import React from 'react'
import filter from '@assets/images/coursePagination/filter.svg'
import trash from '@assets/images/coursePagination/delete.svg'
import up from '@assets/images/coursePagination/up.svg'
import down from '@assets/images/coursePagination/down.svg'
import { filterCategory } from '@core/services/api/courses/filterCategory.api';
import { useState } from 'react';
import { useEffect } from 'react';

const Filters = () => {
    const [titles, setTitles] = useState([
        { title: 'دسته بندی ها' },
        { title: 'سطح دوره' },
        { title: 'تایپ دوره' },
        { title: 'قیمت' },
        { title: 'اساتید دوره' },
    ]);
    const [filterCat, setFilterCat] = useState();
    const [openIndex, setOpenIndex] = useState(null);

    const getFilters = async () => {
        const result = await filterCategory();
        setFilterCat(result);
    };

    useEffect(() => {
        getFilters();
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className='w-[30%]  border border-yellow-500 '>
            <div className=' w-[80%] h-[779px] bg-[#FFFFFF] shadow-2xl rounded-2xl mx-auto flex flex-col items-center '>
                <div className=' w-[90%] bg-[#ECEFF1] h-[48px] my-3 rounded-2xl flex justify-between items-center' >
                    <div className='flex gap-1 items-center mx-2 ' >
                        <img src={filter} />
                        <h2 className=' text-[16px] text-[#263238] '>فیلتر</h2>
                    </div>
                    <img src={trash} className=' w-[32px] h-[32px] mx-2 cursor-pointer ' />
                </div>
                {titles.map((item, index) => (
                    <div key={index} className='flex flex-col w-full' >
                        <div
                            className='flex justify-between items-center  cursor-pointer p-4 border-b border-[#ECEFF1] '
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className='text-[16px] text-[#263238]'>{item.title}</h3>
                            <span>{openIndex === index ? (<img src={up} />) : (<img src={down} />)}</span>
                        </div>
                        {openIndex === index && (
                            <div className='p-2'>
                                {/* Render your API data here */}
                                {item.content.map((contentItem, contentIndex) => (
                                    <div key={contentIndex} className='text-[12px] text-[#263238]'>
                                        {contentItem}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filters