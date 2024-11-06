import React from "react";
const ItemCurses = ({ dore, term, end, start, mony, teacher, img }) => {
  return (
    <div className="w-[95%] h-[65px] bg-[#fff] mt-[1%] m-auto rounded-[25px] flex justify-between text-[#22445D] text-[17px] leading-[60px]">
      <div className="w-[14%] text-center">  {mony !=="" ? mony : ""}</div>
      <div className="w-[16%]  text-center ">{end !=="" ? end : ""}</div>
      <div className="w-[16%]  text-center ">{start !=="" ? start : ""}</div>
      <div className="w-[15%] text-center "> {term !=="" ? term : ""}</div>
      <div className="w-[14%] text-center "> {teacher !=="" ? teacher : ""}</div>
      <div className="w-[14%] text-center"> {dore !=="" ? dore : ""}</div>
      <div className="w-[12%]">
        <img
          src={img !=="" ? img : ""}
          className="w-[75%] h-[70%] m-auto mt-[6%] rounded-[15px]"
        ></img>
      </div>
    </div>
  );
};
export { ItemCurses };
