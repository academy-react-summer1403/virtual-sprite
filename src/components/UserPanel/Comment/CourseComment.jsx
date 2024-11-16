import React, { useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import detail from "../../../assets/images/panel/detail.png";
import { ItemCourse } from "./ItemCourse";
import ReactPaginate from "react-paginate";
import {CommentCourseapi} from "../../../core/services/api/panel/Comments"
const CourseComment = () => {
  const [info, setInfo] = useState({});
  const Commentapi =async ()=>{
    const result =await CommentCourseapi();
    setInfo(result);
  }
  const [cardList, setCardList] = useState([
    {
      id: 1,
      dore: "نست جی اس",
      comment: " بسیار عالی",
      send: "1400 /12 /20 ",
      status: "تایید شده",
      response: "3",
      detail: detail,
      img: dore,
    },
    {
      id: 2,
      dore: "نست جی اس",
      comment: " بسیار عالی",
      send: "1400 /7 /20 ",
      status: "تایید شده",
      response: "1",
      detail: detail,
      img: dore,
    },
  ]);
  
  const [totalPages, setTotalPages] = useState();
  const [pageNumber, setPageNumber] = useState();
  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };
  return (
    <>
      <div className="w-[100%]  h-[10%] mt-[1%]  m-auto flex justify-between leading-[50px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[10%] text-right">جزئیات </div>
        <div className="w-[18%]  text-center">وضعیت </div>
        <div className="w-[16%]  text-center">تاریخ ارسال </div>
        <div className="w-[14%]  text-center">تعداد پاسخ </div>
        <div className="w-[16%] text-center">عنوان نظر </div>
        <div className="w-[13%] text-center">نام دوره</div>
        <div className="w-[13%]"></div>
      </div>
      <div className="w-[100%] h-[88%]">
        {cardList.map((item, index) => {
          return (
            <ItemCourse
              key={index}
              dore={item.dore}
              comment={item.comment}
              img={item.img}
              id={item.id}
              response={item.response}
              status={item.status}
              send={item.send}
              detail={item.detail}
            />
          );
        })}
      </div>
      <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
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
