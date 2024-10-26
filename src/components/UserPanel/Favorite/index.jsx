import React, { useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import del from "../../../assets/images/panel/delete.png";
import ReactPaginate from "react-paginate";
import { FavoriteCourse } from "./FavoriteCourse";
import { FavoriteArticle } from "./FavoriteArticle";
const Favorite = () => {
  const [top, settop] = useState(2);

  const updatetop = (id) => {
    settop(id);
  };

  const [totalPages, setTotalPages] = useState();
  const [pageNumber, setPageNumber] = useState();
  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };
  return (
    <div className="w-[95%] h-[600px] mb-[2%] m-auto mt-[1%]  border-[1px] border-[#E8E8E8] shadow-[10px_10px_5px_0_#00000029] rounded-[15px]">
      <div className="w-[85%] h-[9%] mt-[1%] border-[3px] cursor-pointer border-[#A4F6DE] m-auto rounded-t-[15px] text-center leading-[50px] flex text-[#22445D] text-[25px]">
        <div
          className={
            top == 1
              ? "w-[50%] h-[100%] bg-[#A4F6DE]"
              : "w-[50%] h-[100%] bg-[#ffff]"
          }
          onClick={() => {
            updatetop(1);
          }}
        >
          مقالات موردعلاقه من
        </div>
        <div
          className={
            top == 2
              ? "w-[50%] h-[100%] bg-[#A4F6DE]"
              : "w-[50%] h-[100%] bg-[#ffff]"
          }
          onClick={() => {
            updatetop(2);
          }}
        >
          دوره های موردعلاقه من
        </div>
      </div>
      <div className="w-[95%] h-[85%] m-auto bg-[#FBF6F6] rounded-[15px]">
        <div className={top == 2 ? "w-[100%] h-[90%]" : "hidden"}>
          <FavoriteCourse />
        </div>

        <div className={top == 1 ? "w-[100%] h-[90%]" : "hidden"}>
          <FavoriteArticle />
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
    </div>
  );
};
export { Favorite };
