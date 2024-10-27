import React from "react";
import picc from "../../../assets/images/panel/picc.png";
import { Form, Formik } from "formik";
const ImageProfile = () => {
  return (
    <Formik>
      <Form>
        <div className="w-[100%] h-[230px] bg-[#FBF6F6] rounded-[15px]  shadow-[10px_10px_5px_0_#00000029] flex flex-col">
          <div className="w-[100%] h-[23%] text-center text-[#22445D] leading-[50px] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
            عکس پروفایل
          </div>
          <img
            src={picc}
            className="mt-[3%] rounded-[100%] w-[49%] h-[47%] m-auto"
          ></img>
          <botton className="text-center cursor-pointer text-[15px] h-[17%] w-[55%] leading-[32px] m-auto bg-[#12926C] text-[#ffff] rounded-[15px]">
            ویرایش عکس
          </botton>
        </div>
      </Form>
    </Formik>
  );
};
export { ImageProfile };
