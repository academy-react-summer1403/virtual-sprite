import React from "react";
import { MenuPanel } from "./MenuPanel";
import { LeftPanel } from "./LeftPanel";
const UserPanel = () => {
  return (
    <div className="w-[1535px] h-[730px] bg-[#E9E7FF] flex justify-around">
      <LeftPanel />
      <MenuPanel />
    </div>
  );
};
export { UserPanel };
