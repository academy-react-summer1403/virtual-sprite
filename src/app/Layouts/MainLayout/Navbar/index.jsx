// import sabad from "@assets/images/header/sabad.png"
import hexa from "@assets/images/header/hexa.svg";
import Btn from "@components/common/Btn";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Modal, Button } from "@mantine/core";
import React, { useState } from "react";
import Auth from "@components/Auth";
import { useDisclosure } from "@mantine/hooks";
import Login from "@components/Auth/Login";
// import Auth from '@components/Auth'
const Header = () => {
  const navigate = useNavigate();
  const [authModal, setAuthModal] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [showDiv, setShowDiv] = useState(false);
  const handleClick = () => {
    setShowDiv(true); // زمانی که دکمه کلیک شود، مقدار true به state می‌دهیم
  };
  return (
    <div class="container mx-auto flex justify-between items-center bg-transparent pt-5 ">
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
        {/*      <img src={sabad} class=" h-20 w-20" /> 
        <Modal
          title="عنوان"
          className="dirAuth"
          opened={opened} 
          onClose={close}
          withCloseButton={true}
          radius={24}
        >
          <Auth />
        </Modal> 
        <Button
          onClick={() => {
            setAuthModal(true);
          }}
        >
          ورود
        </Button>  <Btn 
           onClick={() => {
         setAuthModal(true);
          } } insideText={"ورود به حساب"}/> */}

        <button onClick={handleClick}>ورود</button>
        {showDiv && (
          <Auth />
          //  <div class="h-[400px] w-[400px] bg-white absolute top-[10px] left-[10px] z-50">
          //      <input type="text" name="emailMob" />
          //     <input type="text" name="password"  />
          //   <Login />
          //    </div>
        )}
        {/* {authModal === true && <Auth setAuthModal={setAuthModal} />} */}
      </div>
    </div>
  );
};

export default Header;
