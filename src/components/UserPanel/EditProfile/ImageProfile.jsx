import React, { useState } from "react";
import picc from "../../../assets/images/panel/picc.png";
import { FileInput } from "@mantine/core";
import { Field, Form, Formik } from "formik";
import { SelectImg } from "../../../core/services/api/panel/EditProfile";
const ImageProfile = () => {
  const [image,setImage] =useState('')
 const handleImage =(e)=>{
  console.log(e.target.files)
  setImage(e.target.files[0])
 };
  const handleApi=()=>{
    const formData = new FormData()
    formData.append('image',image)
    const selectapi = SelectImg(formData)
    if (selectapi) {
      alert("تصویر با موفقیت انتخاب شد");
    } else {
      alert(" عملیات ناموفق   ");
    }
    console.log("select", selectapi);
  }
  return (
    <Formik>
      <Form>
        <div className="w-[100%] h-[230px] bg-[#FBF6F6] rounded-[15px]  shadow-[10px_10px_5px_0_#00000029] flex flex-col">
          <div className="w-[100%] h-[23%] text-center text-[#22445D] leading-[50px] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
            عکس پروفایل
          </div>
          <img></img>
          <Field type="file" name="file" onchange={handleImage} />
          <button
            onClick={handleApi}
            className=" cursor-pointer mt-[3%] bg-[#A4F6DE] w-[70%] h-[20%] m-auto "
          >ویرایش عکس</button>
        </div>
      </Form>
    </Formik>
  );
};
export { ImageProfile };
