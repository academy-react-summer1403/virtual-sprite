import React from "react";
import dore from "../../../assets/images/panel/dore.jpg";
const LastPeriod =()=>{
    return(
        <div className="w-[100%] h-[48%] border-[#D6D5F5] bg-[#FBF6F6] border-[2px] rounded-[15px] shadow-[10px_10px_5px_0_#00000029]">
            <div className="w-[100%] h-[30%] bg-[#3F40EA] rounded-t-[15px] text-[#ffff] font-normal text-[25px] border-b-[#D6D5F5] border-b-[2px] text-center leading-[55px]">
       آخرین دوره ثبت شده
      </div>
      <div className="w-[95%] h-[79%] mt-[1%] m-auto flex gap-[4%]">
  
  <div className="w-[60%] h-[60%] mt-[2%] flex flex-col justify-between text-right ">
      <span className="text-[25px] w-[100%] h-[30%] text-[#111437]">عنوان دوره</span>
      <div className="flex justify-between w-[100%] h-[30%]">
      <span className="text-[#8337EF] text-[18px]">300000 تومان</span>
      <span className="text-[#727086] text-[16px]">مدرس: نام استاد</span>
      </div>

  </div>
      <img src={dore} className="w-[30%] h-[70%] mt-[1%] rounded-[0.8em] ml-[2%]"></img>
  </div>
        </div>
    )
}
export{LastPeriod};