import { IoSunnyOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import logo from "../../assets/images/panel/logo.png";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MenuPanel } from "./MenuPanel";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
const HeaderPanel =()=>{
    const [pagedashbord, setpagedashbord]= useState(0);
    function MenuCustomAnimation() {
        return (
         <Menu
            animate={{
              mount: { x: -10 },
              unmount: { x: 25 },
            }}
          >
            <MenuHandler>
           <button><IoIosMenu className="w-[25px] h-[25px] " /></button>  
            </MenuHandler>
            <MenuList>
              <MenuItem  className="lg:hidden md:hidden sm:block xs:block bg-gradient-to-b from-[#8B80F6] to-[#2F12B8] shadow-[10px_10px_5px_0_#00000029]  sm:w-[18rem] sm:h-[40rem] xs:h-[40rem]  xs:w-[18rem]">
              
              <MenuPanel/></MenuItem>

            </MenuList>
          </Menu>
        );
      };

    return(
<div className="w-[95%] h-[10%] border-b-[1px] border-b-[#DCDCDE] m-auto flex">
    <SlBasket  className="w-[3%] h-[35%] mt-[2%]"/>
    <IoSunnyOutline  className="w-[3%] h-[35%] mt-[2%]"/>
<div dir="rtl" className="w-[92%] h-[50%] flex mt-[2%]">
<div className="sm:w-[25px] sm:h-[25px]  xs:w-[25px] xs:h-[25px] sm:mt-[0.5%] sm:ml-[1%] xs:mt-[0.5%] xs:ml-[1%] border  lg:hidden md:hidden xs:block sm:block">{MenuCustomAnimation()}</div>
<img src={logo} className="w-[4%] h-[100%] "></img>
    <span className="text-[#263238] text-[20px]">هگزا اسکواد</span>
</div>
</div>
    )
}
export{HeaderPanel};