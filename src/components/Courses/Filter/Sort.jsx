import React from 'react'
import up from '@assets/images/coursePagination/up.svg';
import down from '@assets/images/coursePagination/down.svg';
import sort from '@assets/images/coursePagination/sort.svg';
import { useState } from 'react';

const Sort = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [sortingOrder, setSortingOrder] = useState(''); // Add state for sorting order  

    const toggleAccordion = () => {
        setIsOpen(prev => !prev);
    };

    const handleSortingChange = (event) => {
        setSortingOrder(event.target.value); // Update state when radio button is clicked  
    };




    return (


        <div className='bg-[#FFFFFF] shadow-xl rounded-2xl' >
            <div
                className='flex justify-between gap-3 items-center cursor-pointer p-4 border-b border-gray-200 '
                onClick={toggleAccordion}>
                <img src={sort} alt="Sort" />
                <h3 className='text-[16px] text-[#263238] '>مرتب سازی بر اساس</h3>
                <span>
                    {isOpen ? <img src={up} alt="Collapse" /> : <img src={down} alt="Expand" />}
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <div className={`p-2 ${isOpen ? 'block' : 'hidden'}`}>
                    <div className='flex items-center mb-2 '>
                        <input
                            type="radio"
                            id="ascending"
                            name="sorting" // Common name for grouping  
                            value="ascending" // Set value for identifying the selection  
                            checked={sortingOrder === 'ascending'} // Check if this is the selected option  
                            onChange={handleSortingChange} // Handle change  
                            className='mx-2 '
                        />
                        <label htmlFor="ascending" className='text-[14px] text-[#455A64]'>
                            صعودی
                        </label>
                    </div>
                    <div className='flex items-center mb-2'>
                        <input
                            type="radio"
                            id="descending"
                            name="sorting" // Common name for grouping  
                            value="descending" // Set value for identifying the selection  
                            checked={sortingOrder === 'descending'} // Check if this is the selected option  
                            onChange={handleSortingChange} // Handle change  
                            className='mx-2'
                        />
                        <label htmlFor="descending" className='text-[14px] text-[#455A64]'>
                            نزولی
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sort