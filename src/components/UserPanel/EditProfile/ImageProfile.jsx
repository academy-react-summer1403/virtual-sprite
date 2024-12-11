import React, { useState } from "react";
import picc from "../../../assets/images/panel/picc.png";
import { FileInput } from "@mantine/core";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { handlepanel } from "../../../redux/PanelSlice";
import {
  SelectImg,
  uploadImage,
  UserInfo,
} from "../../../core/services/api/panel/EditProfile";

const ImageProfile = () => {
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState();

  const token = localStorage.getItem("token");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("فایل انتخاب کنید");
      return;
    }

    const formData = new FormData();
    formData.append("formFile", selectedFile);

    try {
      const result = await uploadImage(formData);
      console.log("result upload", result);

      if (result.success === true) {
        const response = await UserInfo();
        // setImage(response.currentPictureAddress);
        console.log("result get info", response);
        if (
          // response.currentPictureAddress.includes(
          //   "https://classapi.sepehracademy.ir"
          // )
          result.success === true
        ) {
          const images = response.userImage;
          const latestImg = images[images.length - 1];
          const profileFormData = new FormData();
          profileFormData.append("ImageId", latestImg.id);
          const res = await SelectImg(profileFormData);
          console.log("result select image", res);

          if (res.success === true) {
            dispatch(handlepanel(latestImg));
          }
        }
      }
    } catch (error) {
      console.error("خطا", error);
    }
  };

  return (
    <Formik>
      <Form>
        <div className="w-[100%] h-[230px] bg-[#FBF6F6] rounded-[15px]  shadow-[10px_10px_5px_0_#00000029] flex flex-col">
          <div className="w-[100%] h-[23%] text-center text-[#22445D] leading-[50px] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
            عکس پروفایل
          </div>

          <img
            src={image}
            className="w-[80px] h-[80px] m-auto rounded-[100%] border"
          />
          <input
            type="file"
            accept="image/*"
            className="mt-[10px]"
            onChange={handleFileChange}
          />
          <button
            className=" cursor-pointer mt-[1%] bg-[#A4F6DE] w-[70%] h-[20%] m-auto"
            onClick={handleSubmit}
          >
            آپلود
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export { ImageProfile };
