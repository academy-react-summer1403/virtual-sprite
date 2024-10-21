import React from "react";
const ItemInformation=({name,explane})=>{
    return(
        <div dir="ltr" className="w-[30%] h-[20%] flex justify-between text-[20px] ">
        <span className="w-[53%] h-[100%] text-[#4229C5] text-right">{explane}</span>
            <span className="w-[47%] h-[100%] text-[#78777D] text-right ">{name}</span>
        </div>
    )
}
export{ItemInformation}