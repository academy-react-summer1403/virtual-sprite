import React from 'react';
import up from '@assets/images/coursePagination/up.svg';
import down from '@assets/images/coursePagination/down.svg';
import { useState, useEffect } from 'react';
import { getAllTeachers } from '@core/services/api/teachers/teachers.api';

const Teachers = ({ index }) => {
    const [teachers, setTeachers] = useState([]);
    const [openIndexes, setOpenIndexes] = useState(new Set());

    const getTeachers = async () => {
        const result = await getAllTeachers();
        setTeachers(result);
    };

    useEffect(() => {
        getTeachers();
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
                <h3 className='text-[16px] text-[#263238]'>اساتید دوره</h3>
                <span>
                    {openIndexes.has(index) ? <img src={up} alt="Collapse" /> : <img src={down} alt="Expand" />}
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openIndexes.has(index) ? 'max-h-40' : 'max-h-0'}`}>
                {openIndexes.has(index) && (
                    <div className='p-2'>
                        {teachers.map((contentItem, contentIndex) => (
                            <div key={contentIndex} className='flex items-center mb-2'>
                                <input type="checkbox"
                                    id={contentItem.typeName}
                                    className='mx-2'
                                />
                                {contentItem.fullName === null ? null :
                                    <label htmlFor={contentItem.typeName}
                                        className='text-[14px] text-[#455A64]'>
                                        {contentItem.fullName}
                                    </label>}
                            </div>
                        ))}
                    </div>
                )}
            </div >
        </>
    );
};

export default Teachers;