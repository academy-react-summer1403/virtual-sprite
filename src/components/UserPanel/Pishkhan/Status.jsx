import React, { useState } from "react";
import { Cardstatus } from "./CardStatus";
const Status = () => {
  return (
    <div className="w-[49%] h-[100%] border-[#D6D5F5] border-[2px] rounded-[15px] shadow-[10px_10px_5px_0_#00000029] bg-[#FBF6F6]">
      <div className="w-[100%] h-[15%] bg-[#3F40EA] rounded-t-[15px] text-[#ffff] font-normal text-[25px] border-b-[#D6D5F5] border-b-[2px] text-center leading-[55px]">
        وضعیت دوره های من
      </div>
      <div className="w-[95%] h-[79%] mt-[6%]">
        <Cardstatus />
      </div>
    </div>
  );
};
export { Status };
