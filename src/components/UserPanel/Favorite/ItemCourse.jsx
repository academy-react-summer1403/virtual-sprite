import React from "react";
import del from "../../../assets/images/panel/delete.png";
import {
  Deletefavoritecourse,
} from "../../../core/services/api/panel/Myfevorite";
const ItemCourse = ({ dore, term, level, start, teacher,img,id,get}) => {
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("CourseFavoriteId",id);
    const result = await Deletefavoritecourse(formData);
    console.log("result", result);
    get();
  };
  return (
    <div className="w-[95%] h-[65px] bg-[#fff] mt-[1%] m-auto rounded-[25px] flex justify-between text-[#22445D] text-[17px] leading-[60px]">
      <div className="w-[2.5%] ml-[5%] h-[40%] mt-[1.5%]">
        <img src={del} className="w-[100%] h-[100%] cursor-pointer" onClick={handleDelete}></img>
      </div>
      <div className="w-[18%]   text-center truncate">{level}</div>
      <div className="w-[17%]  text-center truncate">{start} </div>
      <div className="w-[16%] text-center truncate">{term}</div>
      <div className="w-[16%] text-center truncate">{teacher}</div>
      <div className="w-[15%] text-center truncate">{dore}</div>
      <div className="w-[12%]">
        <img
          src={img}
          className="w-[75%] h-[70%] m-auto mt-[6%] rounded-[15px]"
        ></img>
      </div>
    </div>
  );
};
export { ItemCourse };
