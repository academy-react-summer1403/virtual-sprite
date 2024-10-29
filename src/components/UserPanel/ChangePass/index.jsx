import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import picpass from "../../../assets/images/panel/picpass.png";
const ChangePass = () => {
  return (
    <div className="w-[95%] h-[600px] mb-[2%] m-auto mt-[1%]  border-[1px] bg-[#FBF6F6] border-[#E8E8E8] shadow-[10px_10px_5px_0_#00000029] rounded-[15px]">
      <div className="w-[100%] border h-[9%]  text-center text-[#22445D] leading-[60px] text-[22px] bg-[#A4F6DE] rounded-t-[15px] ">
        تغییر رمز عبور
      </div>
      <Formik initialValues={{ repassword: "", password: "", newpassword: "" }}>
        <Form>
          <div className="w-[100%] h-[28rem] flex justify-between">
            <img
              src={picpass}
              className="w-[40%] h-[26rem] m-auto mt-[2%]"
            ></img>
            <div className="w-[38%] h-[100%] mt-[2%] mb-[2%]  m-auto flex flex-col justify-between text-[#158B68] ">
              <div className="w-[100%] h-[20%] m-auto ">
                <label
                  htmlFor="password"
                  className=" block mb-2 text-right text-[20px] font-medium  dark:text-white"
                >
                  رمز عبور فعلی
                </label>
                <Field
                  type="text"
                  name="password"
                  className="border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>
              <div className="w-[100%] h-[20%]  m-auto">
                <label
                  htmlFor="newpassword"
                  className=" block mb-2 text-right text-[20px] font-medium  dark:text-white"
                >
                  رمز عبور جدید
                </label>
                <Field
                  type="text"
                  name="newpassword"
                  className="border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>
              <div className="w-[100%] h-[20%] m-auto">
                <label
                  htmlFor="repassword"
                  className=" block mb-2 text-right text-[20px] font-medium  dark:text-white"
                >
                  تکرار رمز عبور جدید
                </label>
                <Field
                  type="text"
                  name="repassword"
                  className="border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>
              <div className="w-[100%] h-[10%] m-auto rounded-[10px] text-[#fff] text-[23px] text-center leading-[50px] cursor-pointer bg-[#158B68]">
                تایید
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePass;
