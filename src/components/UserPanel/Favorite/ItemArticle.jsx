import React from "react";
const ItemArticle = ({ dore, start, delet, teacher, img }) => {
  return (
    <div className="w-[95%] h-[65px] bg-[#fff] mt-[1%] m-auto rounded-[25px] flex justify-between text-[#22445D] text-[17px] leading-[60px]">
      <div className="w-[2.5%] ml-[5%] h-[40%] mt-[1.5%]">
        <img src={delet} className="w-[100%] h-[100%]"></img>
      </div>
      <div className="w-[17%]  text-center ">{teacher} </div>
      <div className="w-[16%] text-center ">{start}</div>
      <div className="w-[15%] text-center">{dore}</div>
      <div className="w-[12%]">
        <img
          src={img}
          className="w-[75%] h-[70%] m-auto mt-[6%] rounded-[15px]"
        ></img>
      </div>
    </div>
  );
};
export { ItemArticle };
