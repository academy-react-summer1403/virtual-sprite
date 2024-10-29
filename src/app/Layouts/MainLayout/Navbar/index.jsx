import sabad from "@assets/images/header/sabad.png";
import hexa from "@assets/images/header/hexa.svg";
import Btn from "@components/common/Btn";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Modal, Button, Text } from "@mantine/core";
import React, { useState } from "react";
import Auth from "@components/Auth";
import { useDisclosure } from "@mantine/hooks";
import Login from "@components/Auth/Login";
import exit from "@assets/images/login/exit.png";

const Header = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div class=" mx-auto flex justify-between items-center bg-transparent pt-5 ">
      <Modal
        className="absolute right-0 font-[yekanHeavy]"
        // title={
        //   <Text class="font-[yekanBold] text-[32px] text-[#263238] mt-[5px] mr-5">
        //     ورود به حساب
        //   </Text>
        // }
        opened={opened}
        onClose={close}
        withCloseButton={true}
        radius={24}
        closeButtonProps={{
          icon: <img class="absolute left-5" src={exit} />,
        }}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
      >
        <Auth opened={opened} open={open} close={close} />
      </Modal>

      <div
        class="flex gap-1 mr-20 items-center cursor-pointer "
        onClick={() => navigate("/")}
      >
        <img src={hexa} class="w-[43px] h-[30px]" />
        <h2 class="text-[#263238] text-[19px] font-bold ">Virtual Sprite</h2>
      </div>
      <ul class="flex gap-10 items-center ">
        <li>
          <NavLink
            to="/courselist1"
            className={({ isActive }) => `${isActive && "gradient-border"}
                    text-[#263238] text-[16px] transition duration-300 hover:text-[#2196F3]`}
          >
            دوره ها
          </NavLink>
        </li>
        <li className="text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]">
          اساتید
        </li>
        <li className="text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]">
          ارتباط با ما
        </li>
        <li className="text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]">
          اخبار مقالات
        </li>
      </ul>
      <div class="flex gap-4 ml-20">
        {/* <img src={sabad} class=" h-20 w-20" />  */}
        {/* <Btn 
           onClick={() => {
            open();
          }} insideText={"ورود به حساب"}/>  */}
        {/* {showDiv && ( */}
        {/* <Auth /> */}
        {/*   <div class="h-[400px] w-[400px] bg-white absolute top-[10px] left-[10px] z-50"> */}
        {/*      <input type="text" name="emailMob" /> */}
        {/*      <input type="text" name="password"  /> */}
        {/*   <Login /> */}
        {/*    </div> */}
        {/* )} */}
        {/* {authModal === true && <Auth setAuthModal={setAuthModal} />} */}
        <Button
          onClick={() => {
            open();
          }}
        >
          ورود به حساب
        </Button>
      </div>
    </div>
  );
};

export default Header;
