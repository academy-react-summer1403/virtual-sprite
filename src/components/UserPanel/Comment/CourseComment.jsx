import React, { useEffect, useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import detail from "../../../assets/images/panel/detail.png";
import { ItemCourse } from "./ItemCourse";
import ReactPaginate from "react-paginate";
import { CommentCourseapi } from "../../../core/services/api/panel/Comments";
const CourseComment = () => {
  const [courseList, setCourseList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [RowsOfPage, setRowsOfPage] = useState(5);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalCount, settotalcount] = useState(4);

  const Commentapi = async () => {
    const result = await CommentCourseapi();
    console.log("comment", result);
    setTotalPages(Math.ceil(result?.totalCount / RowsOfPage));
    setCourseList(result.myCommentsDtos);
  };
  useEffect(() => {
    Commentapi();
  }, [RowsOfPage, pageNumber]);

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };
  return (
    <>
      <div className="w-[100%]  h-[10%] mt-[1%]  m-auto flex justify-between leading-[50px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[10%] text-right">جزئیات </div>
        {/* <div className="w-[18%]  text-center">وضعیت </div> */}
        <div className="w-[25%]  text-center">تاریخ ارسال </div>
        <div className="w-[14%]  text-center">تعداد پاسخ </div>
        <div className="w-[16%] text-center">عنوان نظر </div>
        <div className="w-[13%] text-center">نام دوره</div>
        <div className="w-[13%]"></div>
      </div>
      <div className="w-[100%] h-[88%]">
        {courseList.map((item, index) => {
          return (
            <ItemCourse
              key={index}
              dore={item.courseTitle}
              comment={item.title}
              // img={item.img}
              id={item.commentId}
              response={item.replyCount}
              status={item.status}
              send={item.insertDate}
              detail={item.detail}
            />
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel="< "
        renderOnZeroPageCount={null}
        className=" h-[3rem] w-[77%] flex gap-1 m-auto justify-center "
        pageClassName=" h-[2.5rem] w-[2.1rem]  hover:border-[1px] hover:border-[#158B68] pt-[0.4rem] text-center hover:rounded-[100%] hover:bg-[#BFF4E4] hover:text-[#158B68]"
        activeClassName="text-[#158B68]"
        previousClassName=" h-[2.5rem] w-[2.1rem] hover:border-[1px] hover:border-[#158B68] pt-[0.4rem] text-center hover:rounded-[100%] hover:bg-[#BFF4E4] hover:text-[#158B68]"
        nextClassName=" h-[2.5rem] w-[2.1rem] hover:border-[1px] hover:border-[#158B68] pt-[0.4rem] text-center  hover:rounded-[100%] hover:bg-[#BFF4E4] hover:text-[#158B68]"
      />
    </>
  );
};
export { CourseComment };
