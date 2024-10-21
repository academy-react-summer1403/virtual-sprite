import React from "react";
const CardMenu =({name,img})=>{
    return(
        <div className="w-[95%] m-auto h-[10%] flex gap-[5%] hover:bg-[#6033FF] hover:text-[#EEE8FF] text-[#EEEEEE] mt-[5%] text-[18px] leading-[35px]   justify-end ">
        {name}
           <img src={img} className="w-[16%] h-[80%] mt-[2%]"></img>
           
        </div>
    )
}
export{CardMenu}