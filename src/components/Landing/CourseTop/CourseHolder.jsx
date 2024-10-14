import React from 'react'
import CourseItem from './CourseItem'
import { useState } from 'react';
import { useEffect } from 'react';
import { getTopCourses } from '@core/services/api/courses/courseTop.api.js';
import Btn from '../../common/Btn';
import Title from '../Title/Title';
import { useNavigate } from 'react-router-dom';

const CourseHolder = () => {

    const navigate = useNavigate();

    const [topCourses, setTopCourses] = useState();

    const getCourses = async () => {
        const result = await getTopCourses();
        setTopCourses(result);
    }

    useEffect(() => {
        getCourses()
    }, [])

    return (
        <div >
            <Title title={"دوره‌های اموزشی "} />
            <div class='flex gap-12 justify-center my-5' >
                {topCourses?.map((item) => (
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
            <div className='inline' onClick={() => navigate('/courselist1')} >
                <Btn insideText={"مشاهده همه"} />
            </div>
        </div>
    )
}

export default CourseHolder