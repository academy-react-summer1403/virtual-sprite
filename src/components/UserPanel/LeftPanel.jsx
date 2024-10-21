import React from "react";
import { HeaderPanel } from "./HeaderPanel";
import { Pishkhan } from "./Pishkhan/Pishkhan";
const LeftPanel =()=>{
    return(
<div className="w-[77%] h-[95%] m-auto mt-[1%] bg-[#ffff] rounded-[0.9em] shadow-[10px_10px_5px_0_#00000029]">
    <HeaderPanel/>
    <Pishkhan/>
</div>
    )
}
export{LeftPanel};