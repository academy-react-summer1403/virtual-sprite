import React from 'react';
import up from '@assets/images/coursePagination/up.svg';
import down from '@assets/images/coursePagination/down.svg';
import { useState, useEffect } from 'react';
import { filterType } from '@core/services/api/courses/filterType.api';

const Type = ({ index }) => {
    const [filterCat, setFilterCat] = useState([]);
    const [openIndexes, setOpenIndexes] = useState(new Set());

    const getTypes = async () => {
        const result = await filterType();
        setFilterCat(result);
    };

    useEffect(() => {
        getTypes();
    }, []);

    const toggleAccordion = (index) => {
        const newOpenIndexes = new Set(openIndexes);
        if (newOpenIndexes.has(index)) {
            newOpenIndexes.delete(index);
        } else {
            newOpenIndexes.add(index);
        }
        setOpenIndexes(newOpenIndexes);
    };

    return (
        <>
            <div
                className='flex justify-between items-center cursor-pointer p-4 border-b border-gray-200'
                onClick={() => toggleAccordion(index)}>
                <h3 className='text-[16px] text-[#263238]'>تایپ دوره</h3>
                <span>
                    {openIndexes.has(index) ? <img src={up} alt="Collapse" /> : <img src={down} alt="Expand" />}
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openIndexes.has(index) ? 'max-h-40' : 'max-h-0'}`}>
                {openIndexes.has(index) && (
                    <div className='p-2'>
                        {filterCat.map((contentItem, contentIndex) => (
                            <div key={contentIndex} className='flex items-center mb-2'>
                                <input
                                    type="checkbox"
                                    id={contentItem.typeName}
                                    className='mx-2'
                                />
                                <label htmlFor={contentItem.typeName} className='text-[14px] text-[#455A64]'>
                                    {contentItem.typeName}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Type;