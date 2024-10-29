import React, { useState } from "react";
import hexa from "@assets/images/header/hexa.svg";
import Btn from "@components/common/Btn";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import { Modal, Button, Text } from "@mantine/core";
import Auth from "@components/Auth";
import { useDisclosure } from "@mantine/hooks";
import Login from "@components/Auth/Login";
import exit from "@assets/images/login/exit.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [opened, { open, close }] = useDisclosure(false);
  const isHomePage = location.pathname === "/";
  const headerBgClass = isHomePage ? "bg-[#e3f2fd]" : "bg-transparent";

  // State to control mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={` w-full mx-auto flex justify-between items-center dark:bg-[#2c333a] ${headerBgClass} pt-5 px-4 md:px-8 lg:px-16`}
    >
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
        className="hidden md:flex gap-1 items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={hexa} className="w-[43px] h-[30px]" alt="Logo" />
        <h2 className="text-[#263238] dark:text-[#f1f2f4] text-[19px] font-bold">
          Virtual Sprite
        </h2>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 items-center">
        <li>
          <NavLink
            to="/courselist1"
            className={({ isActive }) =>
              `${
                isActive ? "gradient-border" : ""
              } text-[#263238] dark:text-[#f1f2f4] text-[16px] transition duration-300 hover:text-[#2196F3]`
            }
          >
            دوره ها
          </NavLink>
        </li>
        <li className="text-[#263238] dark:text-[#f1f2f4] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]">
          اساتید
        </li>
        <li className="text-[#263238] dark:text-[#f1f2f4] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]">
          ارتباط با ما
        </li>
        <li className="text-[#263238] dark:text-[#f1f2f4] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]">
          اخبار مقالات
        </li>
      </ul>

      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#263238] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[75px] right-0 bg-white shadow-lg rounded-lg z-50 w-48 md:hidden">
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <NavLink
                to="/courselist1"
                className={({ isActive }) =>
                  `${
                    isActive ? "gradient-border" : ""
                  } text-[#263238] text-[16px] transition duration-300 hover:text-[#2196F3]`
                }
              >
                دوره ها
              </NavLink>
            </li>
            <li className="py-2">
              <span className="text-[#263238] text-[16px]  transition duration-300 cursor-pointer hover:text-[#2196F3]">
                اساتید
              </span>
            </li>
            <li className="py-2">
              <span className="text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]">
                ارتباط با ما
              </span>
            </li>
            <li className="py-2">
              <span className="text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]">
                اخبار مقالات
              </span>
            </li>
          </ul>
        </div>
      )}
      <div class="flex gap-0 ml-4">
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
        <DarkMode />
        <Button
          class="bg-[#2196F3] text-white text-[16px] px-4 py-2 rounded-full my-3"
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
