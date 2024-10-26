import React from "react";
import ReactDOM from "react-dom";
import { Switch } from "@mantine/core";
const Security = () => {
  return (
    <div className="w-[100%] h-[220px] mt-[5%] bg-[#FBF6F6] rounded-[15px]  shadow-[10px_10px_5px_0_#00000029] flex flex-col">
      <div className="w-[100%] h-[23%] text-center text-[#22445D] leading-[50px] text-[20px] bg-[#A4F6DE] rounded-t-[15px] ">
        عکس پروفایل
      </div>
      <div
        dir="rtl"
        className=" w-[90%] m-auto text-[25px]  text-[#158B68] h-[30%] mt-[10%] flex"
      >
        <Switch defaultChecked label=" رمز ورود دومرحله‌ای" color="#158B68" />
      </div>
    </div>
  );
};
export { Security };
