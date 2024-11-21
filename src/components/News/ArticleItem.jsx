import React from "react";
import eyes from "../../assets/images/news/eyes.png";
import calander from "../../assets/images/news/calander.png";
const ArticleItem =()=>{
    return(
        <div class="flex flex-col  gap-1 bg-[#ffffff] dark:bg-[#22262b] cursor-pointer shadow-xl rounded-xl p-4 ">
               <img  class="w-[264px] h-[180px] rounded-xl" />
               <h4  class="text-[#263238] dark:text-[#f1f2f4] text-[18px] text-right p-2">
       
      </h4>
<span class="text-[#455A64] dark:text-[#f1f2f4] text-[14px] text-right p-2">bjnbkbn</span>
<div className=" w-[60%] h-[25px]  flex">
    <div className="w-[50%] h-[100%] flex gap-[3%]">
        <img src={eyes} className="w-[17%] h-[17px] mt-[1%]"></img>
        <div className="text-[#2196F3] h-[25px] text-[14px]">22 بازدید</div>
    </div>
    <div className="w-[50%] h-[100%] flex gap-[3%]">
        <img src={calander} className="w-[17%] h-[17px] mt-[1%]"></img>
        <div className="text-[#2196F3] h-[25px] text-[14px]">1402/7/2 </div>
    </div>
</div>
        </div>
    )
}
export{ArticleItem}