import React, { useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import del from "../../../assets/images/panel/delete.png";
import { ItemArticle } from "./ItemArticle";
const FavoriteArticle = () => {
  const [cardList, setCardList] = useState([
    {
      id: 1,
      dore: "دوره آموزش جامع",
      teacher: "استاد بحر",
      start: "1400 /12 /20 ",
      delet: del,
      img: dore,
    },
    {
      id: 2,
      dore: "دوره آموزش جامع",
      teacher: "استاد بحر",
      start: "1400 /12 /20 ",
      delet: del,
      img: dore,
    },
  ]);
  return (
    <>
      <div className="w-[100%]  h-[10%] mt-[1%]  m-auto flex justify-between leading-[50px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[10%] text-right">حذف </div>
        <div className="w-[14%]  text-center">نویسنده </div>
        <div className="w-[16%] text-center">زمان انتشار </div>
        <div className="w-[13%] text-center">عنوان </div>
        <div className="w-[13%]"></div>
      </div>
      <div className="w-[100%] h-[88%]">
        {cardList.map((item, index) => {
          return (
            <ItemArticle
              key={index}
              dore={item.dore}
              teacher={item.teacher}
              img={item.img}
              id={item.id}
              start={item.start}
              delet={item.delet}
            />
          );
        })}
      </div>
    </>
  );
};
export { FavoriteArticle };
