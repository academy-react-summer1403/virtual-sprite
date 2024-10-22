import React from "react";
import { MenuPanel } from "./MenuPanel";
import { LeftPanel } from "./LeftPanel";
const UserPanel = () => {
  return (
    <div className="w-[1535px] h-[730px] m-auto bg-[#E9E7FF] flex justify-around
    sm:w-[1535px] sm:h-[730px] sm:m-auto sm:bg-[#E9E7FF] sm:flex sm:justify-around
    xs:w-[1535px] xs:h-[730px] xs:m-auto xs:bg-[#E9E7FF] xs:flex xs:justify-around
    ">
      <LeftPanel />
      <div className="lg:w-[20%] lg:h-[95%] md:w-[20%] md:h-[95%] sm:w-[100%] sm:h-[100%] xs:w-[100%] xs:h-[100%] 
    lg:block md:block sm:hidden xs:hidden
    lg:m-auto lg:mt-[1%] lg:rounded-[0.9em] lg:bg-gradient-to-b lg:from-[#8B80F6] lg:to-[#2F12B8] lg:shadow-[10px_10px_5px_0_#00000029]
    xs:m-auto xs:mt-[1%] xs:rounded-[0.9em] xs:bg-gradient-to-b xs:from-[#8B80F6] xs:to-[#2F12B8] xs:shadow-[10px_10px_5px_0_#00000029]
     md:m-auto  md:mt-[1%]  md:rounded-[0.9em]  md:bg-gradient-to-b  md:from-[#8B80F6]  md:to-[#2F12B8]  md:shadow-[10px_10px_5px_0_#00000029]
     sm:m-auto sm:mt-[1%] sm:rounded-[0.9em] sm:bg-gradient-to-b sm:from-[#8B80F6] sm:to-[#2F12B8] sm:shadow-[10px_10px_5px_0_#00000029]">
      <MenuPanel />
      </div>
    </div>
  );
};
export { UserPanel };
