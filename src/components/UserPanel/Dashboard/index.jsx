import React, { useEffect, useState } from "react";
import { Information } from "./Information";
import { Status } from "./Status";
import { LastPeriod } from "./LastPeriod";
import { Offer } from "./Offer";

const Dashboard = () => {

  return (
    <div className="w-[95%] h-[600px] m-auto mb-[2%] mt-[1%] flex flex-col justify-between">
      <div className="w-[100%] h-[31%] border-[#A4F6DE] bg-[#FBF6F6] border-[2px] rounded-[15px] shadow-[10px_10px_5px_0_#00000029]">
        <Information />
      </div>
      <div className="w-[100%] h-[65%] flex justify-between">
        <Status />  
        <div className="w-[49%] h-[100%] flex flex-col justify-between">
        <LastPeriod/>
        <Offer/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard