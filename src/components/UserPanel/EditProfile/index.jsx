import React from "react";
import { UserProfile } from "./UserProfile.jsx";
import { Security } from "./Security.jsx";
import { ImageProfile } from "./ImageProfile.jsx";
const EditProfile = () => {
  return (
    <div className="w-[95%] mb-[2%] m-auto mt-[1%] flex gap-[1%] ">
      <div className="w-[79%] h-[100%] rounded-[15px] bg-[#FBF6F6] shadow-[10px_10px_5px_0_#00000029] flex flex-col">
        <UserProfile />
      </div>
      <div className="w-[20%] h-[100%]">
        <ImageProfile />
        <Security />
      </div>
    </div>
  );
};

export default EditProfile;
