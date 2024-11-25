import React, { useEffect, useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import del from "../../../assets/images/panel/delete.png";
import { ItemReserved } from "./ItemReserved";
import ReactPaginate from "react-paginate";
import {Deletereservecourse, Myreservecourse} from "../../../core/services/api/panel/MyReserve"
const ReservedCourses = () => {
  const [reserveList, setReserveList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [RowsOfPage, setRowsOfPage] = useState(5);
  const [totalCount,settotalcount]=useState(4);
  const getReserve = async () => {
    const result = await Myreservecourse();
    setTotalPages(Math.ceil(totalCount / RowsOfPage));
    console.log("hi",result);
    setReserveList(result);
  };
  console.log("obj",reserveList)
//   const handleDelete = async() => {
//     const del ={del:reserveList.courseId}
// console.log("hello",del)
//     const result = await Deletereservecourse(del);
//     console.log("hii",result)
//   };
const handleDelete = async () => {
  const id = {
    active: true,
    id:reserveList.courseId
  };
    const result= await Deletereservecourse(id);
    console.log("result", result);
};
 
  useEffect(() => {
    getReserve();
  }, [RowsOfPage, pageNumber]);

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };
  return (
    <div className="w-[95%] h-[580px] mb-[2%] m-auto mt-[1%]  bg-[#FBF6F6] shadow-[10px_10px_5px_0_#00000029] rounded-[15px]">
      <div className="w-[100%]  h-[9%]  m-auto flex  leading-[60px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[18%]  text-center"> حذف</div>
        <div className="w-[14%] text-center">وضعیت تایید </div>
        <div className="w-[14%] text-center">تاریخ شروع</div>
        <div className="w-[13%] text-center">نام ترم</div>
        <div className="w-[13%] text-center">نام استاد</div>
        <div className="w-[13%] text-center">نام دوره</div>
        <div className="w-[13%]"></div>
      </div>
      <div className="w-[100%] h-[80%] ">
        {reserveList.map((item, index) => {
          return (
            <ItemReserved
              key={index}
              dore={item.courseName}
              teacher={item.teacher}
              img={item.img}
              id={item.reserveId}
              start={item.reserverDate}
              term={item.term}
              selectt={item.selectt}
              handleDelete={handleDelete}
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
    </div>
  );
};

export default ReservedCourses;
