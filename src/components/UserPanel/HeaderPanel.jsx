import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import logo from "../../assets/images/panel/logo.png"
const HeaderPanel =()=>{
    return(
<div className="w-[95%] h-[10%] border-b-[1px] border-b-[#DCDCDE] m-auto flex">
    <SlBasket  className="w-[3%] h-[35%] mt-[2%]"/>
    <IoSunnyOutline  className="w-[3%] h-[35%] mt-[2%]"/>
<div dir="rtl" className="w-[92%] h-[50%] flex mt-[2%]">
<img src={logo} className="w-[4%] h-[100%] "></img>
    <span className="text-[#263238] text-[20px]">هگزا اسکواد</span>
</div>
</div>
    )
}
export{HeaderPanel};