import React, { useState } from "react";
import { Cardstatus } from "./CardStatus";
const Status = () => {
  return (
    <div className="w-[48%] h-[100%] border-[#D6D5F5] border-[2px] rounded-[15px] shadow-[10px_10px_5px_0_#00000029]">
      <div className="w-[100%] h-[20%] text-[#3F3F47] font-normal text-[25px] border-b-[#D6D5F5] border-b-[2px] text-center leading-[60px]">
        وضعیت دوره های من
      </div>
      <div className="w-[95%] h-[79%] mt-[1%]">
        <Cardstatus />
      </div>
    </div>
  );
};
export { Status };
