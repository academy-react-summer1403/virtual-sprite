import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import exist from "../../../../assets/images/panel/exist.png";

const CardMenu = ({ name, img, navLink }) => {
  const navigate = useNavigate();
 
  return (
    <>
      <div
        onClick={() => navigate(navLink)}
        className="w-[95%] m-auto h-[70px] flex gap-[5%] hover:bg-[#158B68] hover:rounded-[45px] hover:text-[#ffff] text-[#158B68] mt-[5%] text-[16px] leading-[35px]   justify-end
         xs:w-[95%]  xs:m-auto  xs:h-[10%]  xs:flex  xs:gap-[5%]  xs:hover:bg-[#158B68] xs:hover:rounded-[45px] xs:hover:text-[#ffff]  xs:text-[#158B68]  xs:mt-[5%]  xs:text-[22px]  xs:leading-[35px]   xs:justify-end
        sm:w-[95%] sm:m-auto sm:h-[10%] sm:flex sm:gap-[5%] sm:hover:bg-[#158B68] sm:hover:rounded-[45px] sm:hover:text-[#ffff] sm:text-[#158B68] sm:mt-[5%] sm:text-[22px] sm:leading-[35px]   sm:justify-end cursor-pointer
        "
      >
        {name}
        <div className="w-[18%] h-[93%] rounded-[100%] bg-[#158B68] ">
          <img src={img} className="w-[35%] h-[43%] m-auto mt-[25%] "></img>
        </div>
      </div>
    </>
  );
};
export { CardMenu };
