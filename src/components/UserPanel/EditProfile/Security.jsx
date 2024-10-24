import React from "react";
import ReactDOM from 'react-dom';
import { Toggle, Stack } from 'rsuite';
const Security =()=>{
    return(
        <div className="w-[100%] h-[38%] mt-[5%] bg-[#FBF6F6] rounded-[15px]  shadow-[10px_10px_5px_0_#00000029] flex flex-col">
            <div className="w-[100%] h-[23%] text-center text-[#ffff] leading-[60px] text-[22px] bg-[#3F40EA] rounded-t-[15px] ">عکس پروفایل</div>
          <div dir="rtl" className="w-[90%] m-auto h-[30%] mt-[10%] flex" >
          <Stack spacing={10} childrenRenderMode="clone" >
          <Toggle defaultChecked color="blue" size="md">
    </Toggle>
    </Stack>
  <span className=" text-[18px] w-[70%] h-[100%] text-[#4229C5] leading-[64px] mr-[3%]">  رمز ورود دومرحله‌ای</span> 
            </div>  
        </div>
    ) 
}
export{Security}