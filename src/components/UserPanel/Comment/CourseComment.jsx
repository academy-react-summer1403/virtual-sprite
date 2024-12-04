import React, { useEffect, useState } from "react";
import { ItemCourse } from "./ItemCourse";
import ReactPaginate from "react-paginate";
import { CommentCourseapi } from "../../../core/services/api/panel/Comments";

const CourseComment = () => {
  const [courseList, setCourseList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const rowsPerPage = 5;

  const fetchComments = async () => {
    try {
      const result = await CommentCourseapi();
      setCourseList(result?.myCommentsDtos || []);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const displayedData = courseList.slice(
    pageNumber * rowsPerPage,
    (pageNumber + 1) * rowsPerPage
  );

  const handlePageClick = (e) => {
    setPageNumber(e.selected);
  };

  return (
    <div className="course-comment">
      <div className="header w-full mt-1 flex justify-between items-center bg-[#A4F6DE] rounded-t-lg text-[#22445D] text-lg px-4 py-2">
        <div className="text-right w-[100px]"></div>
        <div className="text-center w-[150px]">تاریخ ارسال</div>
        <div className="text-center w-[100px]">تعداد پاسخ</div>
        <div className="text-center w-[120px]">عنوان نظر</div>
        <div className="text-center w-[120px]">نام دوره</div>
        <div style={{ width: "50px" }}></div>
      </div>

      <div className="content w-full h-[400px] flex flex-col gap-2 py-2">
        {displayedData.length > 0 ? (
          displayedData.map((item, index) => (
            <ItemCourse
              key={index}
              dore={item.courseTitle}
              comment={item.title}
              id={item.commentId}
              response={item.replyCount}
              status={item.status}
              send={item.insertDate}
              detail={item.detail}
            />
          ))
        ) : (
          <div className="text-center text-gray-500 mt-4">
            هیچ نظری یافت نشد.
          </div>
        )}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(courseList.length / rowsPerPage)}
        previousLabel="< "
        className="pagination flex gap-2 justify-center items-center mx-auto my-4"
        pageClassName="page-item px-4 py-2 flex items-center justify-center border rounded-full hover:border-[#158B68] hover:bg-[#BFF4E4] hover:text-[#158B68]"
        activeClassName="active-page text-[#158B68]"
        previousClassName="prev-next px-4 py-2 flex items-center justify-center border rounded-full hover:border-[#158B68] hover:bg-[#BFF4E4] hover:text-[#158B68]"
        nextClassName="prev-next px-4 py-2 flex items-center justify-center border rounded-full hover:border-[#158B68] hover:bg-[#BFF4E4] hover:text-[#158B68]"
      />
    </div>
  );
};

export { CourseComment };
