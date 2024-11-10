import React, { useEffect, useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import { ItemCurses } from "./ItemCourses";
import ReactPaginate from "react-paginate";
import { MyCoursesapi } from "../../../core/services/api/panel/MyCourses";
const MyCourses = () => {
  const [courseList, setCourseList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [RowsOfPage, setRowsOfPage] = useState(5);

  const getCourseList = async () => {
    const courses = await MyCoursesapi(pageNumber, RowsOfPage);
    setTotalPages(Math.ceil(courses?.totalCount / RowsOfPage));
    setCourseList(courses.listOfMyCourses);
  };

  useEffect(() => {
    getCourseList();
  }, [RowsOfPage, pageNumber]);

  
  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };
  return (
    <div className="w-[95%] h-[580px] mb-[2%] m-auto mt-[1%]  bg-[#FBF6F6] shadow-[10px_10px_5px_0_#00000029] rounded-[15px]">
      <div className="w-[100%]  h-[9%]  m-auto flex  leading-[60px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[18%]  text-center">وضعیت پرداخت</div>
        <div className="w-[14%] text-center">تاریخ پایان</div>
        <div className="w-[14%] text-center">تاریخ شروع</div>
        <div className="w-[13%] text-center">نام ترم</div>
        <div className="w-[13%] text-center">نام استاد</div>
        <div className="w-[13%] text-center">نام دوره</div>
        <div className="w-[13%]"></div>
      </div>
      <div className="w-[100%] h-[80%] ">
        {courseList?.map((item, index) => {
          return (
            <ItemCurses
              id={item.courseId}
              dore={item.termName}
              teacher={item.fullName}
              img={item.tumbImageAddress}
              start={item.statusName}
              end={item.lastUpdate}
              term={item.typeName }
              mony={item.paymentStatus}
              key={index}
            />
          
          );
       
        })}
      </div>
     
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="< "
          renderOnZeroPageCount={null}
          className=" h-[3rem] w-[77%] flex gap-1 m-auto justify-center "
          pageClassName=" h-[2.5rem] w-[2.1rem]  hover:border-[1px] hover:border-[#158B68] pt-[0.4rem] text-center hover:rounded-[100%] hover:bg-[#BFF4E4] hover:text-[#158B68]"
          activeClassName="text-[#158B68]"
          previousClassName=" h-[2.5rem] w-[2.1rem] hover:border-[1px] hover:border-[#158B68] pt-[0.4rem] text-center hover:rounded-[100%] hover:bg-[#BFF4E4] hover:text-[#158B68]"
          nextClassName=" h-[2.5rem] w-[2.1rem] hover:border-[1px] hover:border-[#158B68] pt-[0.4rem] text-center  hover:rounded-[100%] hover:bg-[#BFF4E4] hover:text-[#158B68]"
        />
   
    </div>
  );
};

export default MyCourses;
