import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Deletereservecourse,
  Myreservecourse,
} from "../../../core/services/api/panel/MyReserve";
import { ItemReserved } from "./ItemReserved";

const ReservedCourses = () => {
  const [reserveList, setReserveList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const displayedData = reserveList.slice(
    pageNumber * rowsPerPage,
    (pageNumber + 1) * rowsPerPage
  );

  const handlePageClick = (e) => {
    setPageNumber(e.selected);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPageNumber(0);
  };

  const getReserve = async () => {
    const result = await Myreservecourse();
    setReserveList(result);
    console.log("hi", result);
  };

  const handleDelete = async (id) => {
    const obj = { id };
    const result = await Deletereservecourse(obj);
    console.log("result", result);
    getReserve();
  };

  useEffect(() => {
    getReserve();
  }, []);

  return (
    <div className="w-[95%] h-[580px] mb-[2%] m-auto mt-[1%]  bg-[#FBF6F6] shadow-[10px_10px_5px_0_#00000029] rounded-[15px]">
      <div className="w-[100%]  h-[9%]  m-auto flex  leading-[60px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[18%]  text-center"> حذف</div>
        <div className="w-[14%] text-center">وضعیت تایید </div>
        <div className="w-[14%] text-center">تاریخ شروع</div>
        <div className="w-[13%] text-center">نام ترم</div>
        <div className="w-[13%] text-center">نام استاد</div>
        <div className="w-[13%] text-center">نام دوره</div>
        <div className="w-[13%]">
          <select
            className="dataTable-select"
            id="sort-select"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={3}>1</option>
            <option value={4}>2</option>
            <option value={5}>3</option>
            <option value={6}>4</option>
            <option value={7}>5</option>
          </select>
          <label htmlFor="sort-select">مرتب سازی</label>
        </div>
      </div>
      <div className="w-[100%] h-[80%]">
        {displayedData.map((item, index) => {
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
              handleDelete={() => handleDelete(item.reserveId)}
            />
          );
        })}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(reserveList.length / rowsPerPage)}
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
