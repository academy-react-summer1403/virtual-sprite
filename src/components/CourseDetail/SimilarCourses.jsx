import CourseItem from "../Landing/CourseTop/CourseItem";
import { courseDetail } from "@core/services/api/courses/courseDetail.api.js";
import Title from "../Landing/Title/Title";
import right from "@assets/images/mainContent/teachers/right.svg";
import left from "@assets/images/mainContent/teachers/left.svg";
import { useState, useEffect } from "react";

const SimilarCourses = () => {
  const chunkSlides = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };
  const [topCourses, setTopCourses] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await courseDetail();
      setTopCourses(result.courseFilterDtos);
    };
    fetchCourses();
  }, []);

  const slides = chunkSlides(topCourses, itemsPerSlide);
  const maxSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Title title={"دوره‌های مشابه"} />
      <div className="flex items-center">
        <img
          src={right}
          onClick={prevSlide}
          disabled={slides.length <= 1}
          className=" cursor-pointer"
        />
        <div className="flex overflow-hidden w-full">
          <div className="flex transition-transform duration-300">
            {slides[currentSlide]?.map((item) => (
              <div key={item.courseId} className="flex-shrink-0 w-1/4 p-2">
                <CourseItem
                  img={item.tumbImageAddress}
                  title={item.title}
                  date={item.lastUpdate}
                  teacherName={item.teacherName}
                  cost={item.cost}
                  likeCount={item.likeCount}
                  isLiked={item.userIsLiked}
                />
              </div>
            ))}
          </div>
        </div>
        <img
          src={left}
          onClick={nextSlide}
          disabled={slides.length <= 1}
          className=" cursor-pointer"
        />
      </div>
      {/* Dots for pagination */}
      {/* <div className="flex justify-center mt-2">
        {Array.from({ length: maxSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}
      {/* <div className="flex justify-between relative bottom-[450px]">
                

                
            </div> */}
    </div>
  );
};

export default SimilarCourses;
