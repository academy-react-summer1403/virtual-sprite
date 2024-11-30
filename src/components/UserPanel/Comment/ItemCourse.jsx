import React from "react";
const ItemCourse = ({ dore, send, status, response, comment, img }) => {
  return (
    <div className="w-[95%] h-[65px] bg-[#fff] mt-[1%] m-auto rounded-[25px] flex justify-between text-[#22445D] text-[17px] leading-[60px]">
      <div className="w-[2.5%] ml-[5%] h-[10%] mt-[2.5%]">
        {/* <img  className="w-[100%] h-[100%]"></img> */}
      </div>
      {/* <div className="w-[17%]  text-center "> </div> */}
      <div className="w-[25%] text-center border ">{send}</div>
      <div className="w-[17%]  text-center ">{response} </div>
      <div className="w-[16%] text-center ">{comment}</div>
      <div className="w-[15%] text-center">{dore}</div>
      <div className="w-[10%]">
        <img
          src={img}
          className="w-[75%] h-[70%] m-auto mt-[6%] rounded-[15px]"
        ></img>
      </div>
    </div>
  );
};
export { ItemCourse };
