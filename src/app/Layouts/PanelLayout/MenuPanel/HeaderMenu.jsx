import { IoSunnyOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import logo from "../../../../assets/images/panel/logo.png";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MenuPanel } from "./index.jsx";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
const HeaderPanel = () => {
  function HambergerMenu() {
    const [opened, { open, close }] = useDisclosure(false);
  
    return (
      <>
        <Drawer opened={opened} onClose={close} dir="ltr" className="lg:hidden md:hidden sm:block xs:block bg-[#A4F6DE] sm:w-[10rem] sm:h-[40rem] xs:h-[40rem]  xs:w-[5rem]">
         <MenuPanel className="bg-[#158B68]"/>
        </Drawer>
  
        <Button onClick={open}><IoIosMenu/></Button>
      </>
    );
  }
  return (
    <div className="w-[100%] h-[60px] bg-[#A4F6DE] border-b-[1px] border-b-[#DCDCDE] rounded-t-[0.9em] flex">
      {/* <SlBasket className="w-[3%] h-[35%] mt-[2%]" />
      <IoSunnyOutline className="w-[3%] h-[35%] mt-[2%]" /> */}
      <div dir="rtl" className="w-[98%] h-[50%] flex mt-[1%] ">
        <div className="lg:hidden md:hidden sm:block xs:block pl-[2%]">{HambergerMenu()}</div>

        <img src={logo} className="w-[4%] h-[100%]  "></img>
        <span className="text-[#22445D] text-[20px] w-[12%] h-[100%] ">
          virtual-sprite
        </span>
      </div>
    </div>
  );
};
export { HeaderPanel };
