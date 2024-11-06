import React from "react";
const ItemInformation = ({ name, value }) => {
  return (
    <div
      dir="ltr"
      className="w-[30%] h-[20%] flex justify-between text-[20px] "
    >
      <span className="w-[53%] h-[100%] text-[#22445D] text-right">
        {value !=="" ? value : ""}
      </span>
      <span className="w-[47%] h-[100%] text-[#22445D] text-right ">
        {name}
      </span>
    </div>
  );
};
export { ItemInformation };
