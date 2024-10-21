import React, { useState } from "react";
import carbar from "../../assets/images/panel/picc.png";
import pass from "../../assets/images/panel/pass.png";
import exist from "../../assets/images/panel/exist.png";
import comment from "../../assets/images/panel/comment.png";
import favorite from "../../assets/images/panel/favorite.png";
import pishkhan from "../../assets/images/panel/pishkhan.png";
import videoo from "../../assets/images/panel/videoo.png";
import profile from "../../assets/images/panel/profile.png";
import { HiOutlineHome } from "react-icons/hi2";
import { CardMenu } from "./CardMenu";
const MenuPanel = () => {
  const [cardmenu, setcardmenu] = useState([
    { id: 1, name: "پیشخوان", img:"pishkhan" },
    { id: 2, name: "ویرایش پروفایل", img:"profile" },
    { id: 3, name: "دوره های من", img:"videoo" },
    { id: 4, name: "مورد علاقه ها", img:"favorite" },
    { id: 5, name: "نظرات من", img:"comment" },
    { id: 6, name: "تغییر رمز", img:"pass" },
    { id: 7, name: " خروج از حساب", img:"exist" },
  ]);
  return (
    <div className="w-[20%] h-[95%] m-auto mt-[1%] rounded-[0.9em] bg-gradient-to-b from-[#8B80F6] to-[#2F12B8] shadow-[10px_10px_5px_0_#00000029]">
      <div
        dir="rtl"
        className="w-[90%] h-[5%] m-auto mt-[3%]"
      >
        <HiOutlineHome
          style={{ color: "#ffff" }}
          className="w-[17%] h-[90%] opacity-70"
        />
      </div>
      <div className="w-[90%] h-[30%] border-b-[1px] border-b-[#A196F6] m-auto flex flex-col">
        <div className="w-[60%] h-[80%] rounded-[100%] m-auto mt-[0] border-b-[6px] border-b-[#D0CEFF] border-r-[6px] border-r-[#D0CEFF] ">
          {" "}
          <img src={carbar} className="w-[100%] h-[100%] rounded-[100%] "></img>
        </div>
        <span className="text-center text-[22px] text-[#EDEDED] mb-[4%]">
          لیلا کریمی
        </span>
      </div>
      <div className="w-[90%] h-[60%] m-auto mb-[3%]">
        {cardmenu.map((item, index) => {
          return (
            <CardMenu
              key={index}
              name={item.name}
              img={item.img}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export { MenuPanel };
