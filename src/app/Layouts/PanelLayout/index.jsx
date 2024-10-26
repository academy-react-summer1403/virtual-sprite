import React from "react";
import { Outlet } from "react-router-dom";
import { MenuPanel } from "../PanelLayout/MenuPanel/index.jsx";
import { HeaderPanel } from "./MenuPanel/HeaderMenu.jsx";
import { MantineProvider } from "@mantine/core";

const PanelLayout = () => {
  return (
    <MantineProvider>
    <div
      dir="ltr"
      className="w-[1535px] h-[900px] m-auto  flex justify-around
        sm:w-[1535px] sm:h-[900px] sm:m-auto  sm:flex sm:justify-around
        xs:w-[1535px] xs:h-[900px] xs:m-auto   xs:flex xs:justify-around
        "
    >
      <div className="w-[77%] h-auto  m-auto mt-[1%] bg-[#ffff] rounded-[0.9em] border-[1px] shadow-[10px_10px_5px_0_#00000029]">
        <HeaderPanel />
        <Outlet />
      </div>
      <div
        className="lg:w-[20%] lg:h-[100%] md:w-[20%] md:h-[100%] sm:w-[100%] sm:h-[100%] xs:w-[100%] xs:h-[100%] 
    lg:block md:block sm:hidden xs:hidden lg:bg-[#A4F6DE] shadow-[10px_10px_5px_0_#00000029] xs:bg-[#A4F6DE]
          md:bg-[#A4F6DE]  sm:bg-[#A4F6DE]"
      >
        <MenuPanel />
      </div>
    </div>
    </MantineProvider>
  );
};

export { PanelLayout };