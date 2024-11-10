import React, { useEffect, useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import del from "../../../assets/images/panel/delete.png";
import { FavoriteCourse } from "./FavoriteCourse";
import { FavoriteArticle } from "./FavoriteArticle";

const Favorite = () => {
  const [top, settop] = useState(2);

  const updatetop = (id) => {
    settop(id);
  };

  return (
    <div className="w-[95%] h-[600px] mb-[2%] m-auto mt-[1%]  border-[1px] border-[#E8E8E8] shadow-[10px_10px_5px_0_#00000029] rounded-[15px]">
      <div className="w-[85%] h-[9%] mt-[1%] border-[3px] cursor-pointer border-[#A4F6DE] m-auto rounded-t-[15px] text-center leading-[50px] flex text-[#22445D] text-[25px]">
        <div
          className={
            top == 1
              ? "w-[50%] h-[100%] bg-[#A4F6DE]"
              : "w-[50%] h-[100%] bg-[#ffff]"
          }
          onClick={() => {
            updatetop(1);
          }}
        >
          مقالات موردعلاقه من
        </div>
        <div
          className={
            top == 2
              ? "w-[50%] h-[100%] bg-[#A4F6DE]"
              : "w-[50%] h-[100%] bg-[#ffff]"
          }
          onClick={() => {
            updatetop(2);
          }}
        >
          دوره های موردعلاقه من
        </div>
      </div>
      <div className="w-[95%] h-[85%] m-auto bg-[#FBF6F6] rounded-[15px]">
        <div className={top == 2 ? "w-[100%] h-[90%]" : "hidden"}>
          <FavoriteCourse />
        </div>

        <div className={top == 1 ? "w-[100%] h-[90%]" : "hidden"}>
          <FavoriteArticle />
        </div>
      </div>
    </div>
  );
};
export { Favorite };
