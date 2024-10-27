import React, { useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import del from "../../../assets/images/panel/delete.png";
import { ItemReserved } from "./ItemReserved";
import ReactPaginate from "react-paginate";
const ReservedCourses = () => {
  const [cardList, setCardList] = useState([
    {
      id: 1,
      dore: "نست جی اس",
      teacher: "استاد بحر",
      term: "بهار",
      start: "1400 /12 /20 ",
      selectt: "تایید شده",
      del: del,
      img: dore,
    },
    {
      id: 2,
      dore: "انگولار",
      teacher: "استاد بحر",
      term: "تابستان",
      start: "1400 /12 /20 ",
      selectt: "تایید شده",
      del: del,
      img: dore,
    },
  ]);
  const [totalPages, setTotalPages] = useState();
  const [pageNumber, setPageNumber] = useState();
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
        {cardList.map((item, index) => {
          return (
            <ItemReserved
              key={index}
              dore={item.dore}
              teacher={item.teacher}
              img={item.img}
              id={item.id}
              start={item.start}
              del={item.del}
              term={item.term}
              selectt={item.selectt}
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
    </div>
  );
};

export default ReservedCourses;
