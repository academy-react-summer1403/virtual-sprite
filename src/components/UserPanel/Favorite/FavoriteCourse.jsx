import React, { useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import del from "../../../assets/images/panel/delete.png";
import { ItemCourse } from "./ItemCourse";
const FavoriteCourse = () => {
  const [cardList, setCardList] = useState([
    {
      id: 1,
      dore: "نست جی اس",
      teacher: "استاد بحر",
      term: "حضوری",
      start: "1400 /12 /20 ",
      level: "پیشرفته",
      delet: del,
      img: dore,
    },
    {
      id: 2,
      dore: "انگولار",
      teacher: "استاد بحر",
      term: "حضوری",
      start: "1400 /12 /20 ",
      level: "پیشرفته",
      delet: del,
      img: dore,
    },
  ]);
  return (
    <>
      <div className="w-[100%]  h-[10%] mt-[1%]  m-auto flex justify-between leading-[50px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[10%] text-right">حذف </div>
        <div className="w-[18%]  text-center">سطح دوره </div>
        <div className="w-[16%]  text-center">تاریخ شروع</div>
        <div className="w-[14%]  text-center">نوع دوره </div>
        <div className="w-[16%] text-center">نام استاد</div>
        <div className="w-[13%] text-center">نام دوره</div>
        <div className="w-[13%]"></div>
      </div>
      <div className="w-[100%] h-[88%]">
        {cardList.map((item, index) => {
          return (
            <ItemCourse
              key={index}
              dore={item.dore}
              teacher={item.teacher}
              img={item.img}
              id={item.id}
              start={item.start}
              level={item.level}
              term={item.term}
              delet={item.delet}
            />
          );
        })}
      </div>
    </>
  );
};
export { FavoriteCourse };
