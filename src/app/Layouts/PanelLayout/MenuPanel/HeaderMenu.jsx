import { IoSunnyOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import logo from "../../../../assets/images/panel/logo.png";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MenuPanel } from "./index.jsx";
const HeaderPanel = () => {

  return (
    <div className="w-[100%] h-[60px] bg-[#A4F6DE] border-b-[1px] border-b-[#DCDCDE] rounded-t-[0.9em] flex">
      {/* <SlBasket className="w-[3%] h-[35%] mt-[2%]" />
      <IoSunnyOutline className="w-[3%] h-[35%] mt-[2%]" /> */}
      <div dir="rtl" className="w-[98%] h-[50%] flex mt-[1%] ">
        <div className="lg:hidden md:hidden sm:block xs:block pl-[2%]"></div>

        <img src={logo} className="w-[4%] h-[100%]  "></img>
        <span className="text-[#22445D] text-[20px] w-[12%] h-[100%] ">
          virtual-sprite
        </span>
      </div>
    </div>
  );
};
export { HeaderPanel };
