import React, { useState } from "react";
import { CourseComment } from "./CourseComment";
import { ArticleComment } from "./ArticleComment";
const Comment = () => {
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
          اخبار و مقالات
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
          دوره ها
        </div>
      </div>
      <div className="w-[95%] h-[85%] m-auto bg-[#FBF6F6] rounded-[15px]">
        <div className={top == 2 ? "w-[100%] h-[90%]" : "hidden"}>
          <CourseComment />
        </div>

        <div className={top == 1 ? "w-[100%] h-[90%]" : "hidden"}>
          <ArticleComment />
        </div>

   
      </div>
    </div>
  );
};
export { Comment };
