import React from "react";
import del from "../../../assets/images/panel/delete.png";
const ItemReserved = ({
  dore,
  term,
  start,
  selectt,
  teacher,
  img,
  handleDelete,
}) => {
  return (
    <div className="w-[95%] h-[65px] bg-[#fff] mt-[1%] m-auto rounded-[25px] flex justify-between text-[#22445D] text-[17px] leading-[60px]">
      <div
        onClick={handleDelete}
        className="w-[14%] border-[1px] border-transparent"
      >
        <img
          className="w-[20%] cursor-pointer h-[37%] ml-[41%] mt-[11%]"
          src={del}
        ></img>
      </div>
      <div className="w-[16%]  text-center ">{selectt}</div>
      <div className="w-[16%]  text-center ">{start} </div>
      <div className="w-[15%] text-center ">{term}</div>
      <div className="w-[14%] text-center ">{teacher}</div>
      <div className="w-[14%] text-center truncate">{dore}</div>
      <div className="w-[12%]">
        <img
          src={img}
          className="w-[75%] h-[70%] m-auto mt-[6%] rounded-[15px]"
        ></img>
      </div>
    </div>
  );
};
export { ItemReserved };
