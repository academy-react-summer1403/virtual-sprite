import React, { useEffect, useState } from 'react';
import TeacherItem from './TeacherItem'
import Title from '../Title/Title'
import { getAllTeachers } from '@core/services/api/teachers/teachers.api';
import right from '@assets/images/mainContent/teachers/right.svg'
import left from '@assets/images/mainContent/teachers/left.svg'
import deactiveDot from '@assets/images/mainContent/teachers/deactiveDot.svg'
import activeDot from '@assets/images/mainContent/teachers/activeDot.svg';





const TeacherHolder = () => {
    const [teachers, setTeachers] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerSlide = 4; // Number of items per slide  

    const getTeachers = async () => {
        const result = await getAllTeachers()
        setTeachers(result)
    }

    useEffect(() => {
        getTeachers()
    }, [])

    const chunkSlides = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const groupedSlides = chunkSlides(teachers, itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % groupedSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + groupedSlides.length) % groupedSlides.length);
    };
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <div className="my-8 bg-[#E3F2FD]">
                <Title title={"اساتید برتر "} />
                <div className="flex justify-center gap-10 mt-4 p-3 transition duration-700">
                    {groupedSlides.length > 0 ? (
                        groupedSlides[currentSlide].map((slide, index) => (
                            <TeacherItem
                                index={index}
                                key={slide.teacherId}
                                img={slide.pictureAddress}
                                teacherName={slide.fullName}
                                courses={slide.courseCounts}
                            />
                        ))
                    ) : (
                        <p>Loading slides...</p>
                    )}
                </div>
                <div className="flex justify-center py-16">
                    {groupedSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`rounded-full mx-1 p-[6px]  ${currentSlide === index ? 'bg-[#2196F3] border-4 border-[#FFFFFF] ' : 'bg-[#FFFFFF] border-4 border-[#2196F3]'}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-between relative bottom-[450px]">
                <img src={right}
                    onClick={prevSlide} disabled={groupedSlides.length <= 1}
                    className=" cursor-pointer" />

                <img src={left}
                    onClick={nextSlide} disabled={groupedSlides.length <= 1}
                    className=" cursor-pointer" />
            </div>
        </>
    );
};

export default TeacherHolder;