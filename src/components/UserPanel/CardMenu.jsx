import React from "react";
const CardMenu =({name,img})=>{
    return(
        <div className="w-[95%] m-auto h-[10%] flex gap-[5%] hover:bg-[#6033FF] hover:text-[#EEE8FF] text-[#EEEEEE] mt-[5%] text-[18px] leading-[35px]   justify-end
         xs:w-[95%]  xs:m-auto  xs:h-[10%]  xs:flex  xs:gap-[5%]  xs:hover:bg-[#6033FF]  xs:hover:text-[#EEE8FF]  xs:text-[#EEEEEE]  xs:mt-[5%]  xs:text-[18px]  xs:leading-[35px]   xs:justify-end
        sm:w-[95%] sm:m-auto sm:h-[10%] sm:flex sm:gap-[5%] sm:hover:bg-[#6033FF] sm:hover:text-[#EEE8FF] sm:text-[#EEEEEE] sm:mt-[5%] sm:text-[18px] sm:leading-[35px]   sm:justify-end
        ">
        {name}
           <img src={img} className="w-[16%] h-[80%] mt-[2%]"></img>
           
        </div>
    )
}
export{CardMenu}