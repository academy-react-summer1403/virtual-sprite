import React, { useState, useEffect } from 'react';
import filter from '@assets/images/coursePagination/filter.svg';
import trash from '@assets/images/coursePagination/delete.svg';
import Grouping from './grouping';
import Level from './Level';
import Type from './Type';
import Teachers from './Teachers';

const Filters = () => {


    return (
        <div className='w-[30%]'>
            <div className='w-[80%] h-[779px] p-4 bg-white shadow-2xl rounded-2xl mx-auto flex flex-col items-center'>
                <div className='w-[90%] bg-gray-200 h-[48px] my-3 rounded-2xl flex justify-between items-center'>
                    <div className='flex gap-1 items-center mx-2'>
                        <img src={filter} alt="Filter" />
                        <h2 className='text-[16px] text-[#263238]'>فیلتر</h2>
                    </div>
                    <img src={trash} className='w-[32px] h-[32px] mx-2 cursor-pointer' alt="Delete" />
                </div>
                <div className='flex flex-col w-full'>
                    <Grouping />
                    <Level />
                    <Type/>
                    <Teachers/>
                </div>
            </div>
        </div>
    );
};

export default Filters;