import React, { useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import detail from "../../../assets/images/panel/detail.png";
import { ItemCourse } from "./ItemCourse";
const CourseComment = () => {
  const [cardList, setCardList] = useState([
    {
      id: 1,
      dore: "نست جی اس",
      comment: " بسیار عالی",
      send: "1400 /12 /20 ",
      status: "تایید شده",
      response: "3",
      detail: detail,
      img: dore,
    },
    {
      id: 2,
      dore: "نست جی اس",
      comment: " بسیار عالی",
      send: "1400 /7 /20 ",
      status: "تایید شده",
      response: "1",
      detail: detail,
      img: dore,
    },
  ]);
  return (
    <>
      <div className="w-[100%]  h-[10%] mt-[1%]  m-auto flex justify-between leading-[50px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[10%] text-right">جزئیات </div>
        <div className="w-[18%]  text-center">وضعیت </div>
        <div className="w-[16%]  text-center">تاریخ ارسال </div>
        <div className="w-[14%]  text-center">تعداد پاسخ </div>
        <div className="w-[16%] text-center">عنوان نظر </div>
        <div className="w-[13%] text-center">نام دوره</div>
        <div className="w-[13%]"></div>
      </div>
      <div className="w-[100%] h-[88%]">
        {cardList.map((item, index) => {
          return (
            <ItemCourse
              key={index}
              dore={item.dore}
              comment={item.comment}
              img={item.img}
              id={item.id}
              response={item.response}
              status={item.status}
              send={item.send}
              detail={item.detail}
            />
          );
        })}
      </div>
    </>
  );
};
export { CourseComment };
