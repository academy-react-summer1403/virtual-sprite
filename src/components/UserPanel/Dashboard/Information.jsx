import React, { useEffect, useState } from "react";
import { ItemInformation } from "./ItemInformation";
import { useNavigate } from "react-router-dom";
import { FetchProfile } from "../../../core/services/api/panel/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { handlepanel } from "../../../redux/PanelSlice";
const Information = () => {
  const [info, setInfo] = useState({});

  const getData = async () => {
    const result = await FetchProfile();
    setInfo(result);
   
  };
  useEffect(() => {
    getData();
  }, []);


  const name = [
    { id: 1, name: "نام   ", value: info?.fName ? info?.fName : "" },
    { id: 2, name: ":تاریخ تولد", value: info?.birthDay ? info?.birthDay : "" },
    { id: 3, name: ":نام خانوادگی ", value: info?.lName ? info?.lName : "" },
    { id: 4, name: ":ایمیل", value: info?.gmail ? info?.gmail : "" },
    {
      id: 5,
      name: ":کدملی",
      value: info?.NationalCode ? info?.NationalCode : "",
    },
  ];

  const navigator = useNavigate();
  const gotoedit = () => {
    return navigator("/panel/editprofile");
  };
  return (
    <div
      dir="rtl"
      className="w-[98%] m-auto h-[80%] relative mt-[1%] flex flex-row flex-wrap gap-[2%] "
    >
      {name.map((item, index) => {
        return (
          <ItemInformation
            key={index}
            name={item.name}
            id={item.id}
            value={item.value}
          />
        );
      })}
      <div
        onClick={gotoedit}
        className="w-[20%] h-[40%] bg-[#12926C] text-[#ffff] absolute bottom-[-20%] border-[#A4F6DE]  text-center font-normal text-[25px] cursor-pointer leading-[45px] rounded-tr-[15px] rounded-bl-[15px] border-[2px] left-[-1.1%]"
      >
        ویرایش
      </div>
    </div>
  );
};
export { Information };
