import React, { useEffect, useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import { ItemCourse } from "./ItemCourse";
import {
  Deletefavoritecourse,
  MyFevoritecourse,
} from "../../../core/services/api/panel/Myfevorite";
import ReactPaginate from "react-paginate";
const FavoriteCourse = () => {
  const [courseList, setCourseList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [RowsOfPage, setRowsOfPage] = useState(5);
  const [rowsPerPage, setRowsPerPage] = useState(5); 
  const getFavoritecourse = async () => {
    const courses = await MyFevoritecourse();
    setTotalPages(Math.ceil(courses?.totalCount / RowsOfPage));
    setCourseList(courses.favoriteCourseDto);
  };

  useEffect(() => {
    getFavoritecourse();
  }, [RowsOfPage, pageNumber]);
  
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("CourseFavoriteId", id);
    const result = await Deletefavoritecourse(formData);
    console.log("result", result);
    getFavoritecourse();
  };

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };
  const handlePerPage = (e) => {
   
    setRowsPerPage(parseInt(e.target.value)); // تغییر تعداد رکوردها
    setPageNumber(1); // ریست کردن به صفحه اول
  };
  return (
    <>
      <div className="w-[100%]  h-[10%] mt-[1%]  m-auto flex justify-between leading-[50px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[10%] text-right">حذف </div>
        <div className="w-[18%]  text-center">سطح دوره </div>
        <div className="w-[16%]  text-center">آخرین به روزرسانی </div>
        <div className="w-[14%]  text-center">نوع دوره </div>
        <div className="w-[16%] text-center">نام استاد</div>
        <div className="w-[13%] text-center">نام دوره</div>
        <div className="w-[13%]">
       
            <select
              className="dataTable-select"
              type="select"
              id="sort-select"
              value={rowsPerPage}
              onChange={handlePerPage}
            >
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </select>
            <label for="sort-select">مرتب سازی</label>
        </div>
      </div>
      <div className="w-[100%] h-[88%] ">
        {courseList.map((item, index) => {
          return (
            <ItemCourse
              key={index}
              dore={item.courseTitle}
              teacher={item.teacheName}
              img={item.tumbImageAddress}
              id={item.favoriteId}
              start={item.lastUpdate}
              level={item.levelName}
              term={item.typeName}
              handleDelete={() => handleDelete(item.favoriteId)}
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
    </>
  );
};
export { FavoriteCourse };
