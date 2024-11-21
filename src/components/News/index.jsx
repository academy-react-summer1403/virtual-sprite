import React from "react";
import news from "../../assets/images/news/news.png";
import Search from "./Search";
import { Filter } from "./Filter";
import { ArticleItem } from "./ArticleItem";
import ReactPaginate from "react-paginate";
const News = () => {
  
  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };
  return (
    <div className="m-auto w-full">
      <img src={news}></img>
      <div className='className="w-full flex justify-center gap-3 mb-10'>
        <div className="w-[45%] h-[56px] border shadow-xl rounded-2xl cursor-pointer">
          <Search />
        </div>
        <div className="w-[37%] border h-[56px] shadow-xl rounded-2xl cursor-pointer flex justify-center gap-[2%] text-[#607D8B] text-[14px]">
          <Filter />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center my-5">
        <ArticleItem/>
                  {/* {currentItems.map((item) => (
                    <articleItem
                   
                    />
                  ))} */}
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

export default News;
