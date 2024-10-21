import React from "react";
import { RangeOne } from "./Progress";
import { RangeTwo } from "./Progress";
import { RangeThree } from "./Progress";
const Cardstatus = () => {
  return (
    <>
      <div className="w-[100%] h-[24%] flex-col gap-[1%] m-auto">
        <div className="w-[100%] h-[50%] text-[#3F3F47] text-[18px] text-right leading-[40px]">
          دوره های من - پرداخت شده
        </div>
        <div dir="rtl" className="w-[100%] h-[48%] ">
          <RangeOne />
        </div>
      </div>
      <div className="w-[100%] h-[24%] flex-col gap-[1%] m-auto">
        <div className="w-[100%] h-[50%] text-[#3F3F47] text-[18px] text-right leading-[40px] ">
          دوره های تایید شده - پرداخت نشده
        </div>
        <div dir="rtl" className="w-[100%] h-[48%] ">
          <RangeTwo />
        </div>
      </div>
      <div className="w-[100%] h-[24%] flex-col gap-[1%] m-auto">
        <div className="w-[100%] h-[50%] text-[#3F3F47] text-[18px] text-right leading-[40px] ">
          دوره های موردعلاقه
        </div>
        <div dir="rtl" className="w-[100%] h-[48%] ">
          <RangeThree />
        </div>
      </div>
    </>
  );
};
export { Cardstatus };
