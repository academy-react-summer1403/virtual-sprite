import React from "react";
import { Information } from "./Information";
import { Status } from "./Status";
const Pishkhan = () => {
  return (
    <div className="w-[95%] h-[85%] m-auto mt-[1%] flex flex-col justify-between">
      <div className="w-[100%] h-[30%] border-[#D6D5F5] border-[2px] rounded-[15px] mt-[2%] shadow-[10px_10px_5px_0_#00000029]">
        <Information />
      </div>
      <div className="w-[100%] h-[62%] flex">
        <Status />
      </div>
    </div>
  );
};
export { Pishkhan };
