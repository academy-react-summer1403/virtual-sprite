import React, { useState } from "react";
import carbar from "../../../../assets/images/panel/picc.png";
import pass from "../../../../assets/images/panel/pass.png";
import exist from "../../../../assets/images/panel/exist.png";
import comment from "../../../../assets/images/panel/comment.png";
import favorite from "../../../../assets/images/panel/favorite.png";
import pishkhan from "../../../../assets/images/panel/pishkhan.png";
import videoo from "../../../../assets/images/panel/videoo.png";
import profile from "../../../../assets/images/panel/profile.png";
import buy from "../../../../assets/images/panel/buy.png";
import { HiOutlineHome } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { CardMenu } from "./CardMenu";
import { useNavigate } from "react-router-dom";
const MenuPanel = () => {
  const menu = [
    { id: 1, name: "پیشخوان", img: pishkhan, navLink: "dashboard" },
    { id: 2, name: "ویرایش پروفایل", img: profile, navLink: "editprofile" },
    { id: 3, name: "دوره های من", img: videoo, navLink: "mycourses" },
    { id: 4, name: "دوره های رزرو", img: buy, navLink: "reserved" },
    { id: 5, name: "مورد علاقه ها", img: favorite, navLink: "favorite" },
    { id: 6, name: "نظرات من", img: comment, navLink: "comment" },
    { id: 7, name: "تغییر رمز", img: pass, navLink: "changepass" },
  ];
  const navigator = useNavigate();
  const gotolayout = () => {
    return navigator("/");
  };
  const navigate = useNavigate();
  const Back = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div
        dir="rtl"
        onClick={gotolayout}
        className="lg:w-[90%] lg:h-[30px] lg:m-auto lg:mt-[3%] md:w-[90%] md:h-[5%] md:m-auto md:mt-[3%]
        sm:w-[90%] sm:h-[5%] sm:m-auto sm:mt-[3%] xs:w-[90%] xs:h-[5%] xs:m-auto xs:mt-[3%] cursor-pointer"
      >
        <HiOutlineHome
          style={{ color: "#158B68" }}
          className="w-[17%] h-[90%] opacity-70 sm:w-[17%] sm:h-[90%] sm:opacity-70 xs:w-[17%] xs:h-[90%] xs:opacity-70"
        />
      </div>
      <div
        className="w-[90%] h-[180px] border-b-[1px] border-b-[#158B68] m-auto flex flex-col
      sm:w-[90%] sm:h-[180px] sm:border-b-[1px] sm:border-b-[#158B68] sm:m-auto sm:flex sm:flex-col
      xs:w-[90%] xs:h-[180px] xs:border-b-[1px] xs:border-b-[#158B68] xs:m-auto xs:flex xs:flex-col
      "
      >
        <div
          className="w-[60%] h-[80%] rounded-[100%] m-auto mt-[0] border-b-[6px] border-b-[#158B68] border-r-[6px] border-r-[#158B68] 
        xs:w-[60%] xs:h-[80%] xs:rounded-[100%] xs:m-auto xs:mt-[0] xs:border-b-[6px] xs:border-b-[#158B68] xs:border-r-[6px] xs:border-r-[#158B68]
        sm:w-[60%] sm:h-[80%] sm:rounded-[100%] sm:m-auto sm:mt-[0] sm:border-b-[6px] sm:border-b-[#158B68] sm:border-r-[6px] sm:border-r-[#158B68]
        "
        >
          <img src={carbar} className="w-[100%] h-[100%] rounded-[100%] "></img>
        </div>
        <span className="text-center text-[22px] sm:text-[25px] xs:text-[25px] text-[#158B68] mb-[4%]">
          لیلا کریمی
        </span>
      </div>
      <div className="w-[90%] h-[420px] m-auto mb-[2%]">
        {menu.map((item, index) => {
          return (
            <CardMenu
              key={index}
              name={item.name}
              img={item.img}
              id={item.id}
              navLink={item.navLink}
            />
          );
        })}
        <div
          onClick={Back}
          className="w-[95%] m-auto h-[70px] flex gap-[5%] hover:bg-[#158B68] hover:rounded-[45px] hover:text-[#ffff] text-[#158B68] mt-[5%] text-[16px] leading-[35px]   justify-end
         xs:w-[95%]  xs:m-auto  xs:h-[10%]  xs:flex  xs:gap-[5%]  xs:hover:bg-[#158B68] xs:hover:rounded-[45px] xs:hover:text-[#ffff]  xs:text-[#158B68]  xs:mt-[5%]  xs:text-[22px]  xs:leading-[35px]   xs:justify-end
        sm:w-[95%] sm:m-auto sm:h-[10%] sm:flex sm:gap-[5%] sm:hover:bg-[#158B68] sm:hover:rounded-[45px] sm:hover:text-[#ffff] sm:text-[#158B68] sm:mt-[5%] sm:text-[22px] sm:leading-[35px]   sm:justify-end cursor-pointer
        "
        >
          خروج از حساب
          <div className="w-[18%] h-[93%] rounded-[100%] bg-[#158B68] ">
            <img src={exist} className="w-[35%] h-[43%] m-auto mt-[25%] "></img>
          </div>
        </div>
      </div>
    </>
  );
};
export { MenuPanel };
