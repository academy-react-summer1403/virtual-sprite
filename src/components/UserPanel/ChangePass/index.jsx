import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import picpass from "../../../assets/images/panel/picpass.png";
import { ChangePassapi } from "../../../core/services/api/panel/ChangePass";
const ChangePass = () => {
  const onSubmit = async (values) => {
    const obj = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };

    const passapi = await ChangePassapi(obj);
    console.log(passapi);
  };
  return (
    <div className="w-[95%] h-[600px] mb-[2%] m-auto mt-[1%]  border-[1px] bg-[#FBF6F6] border-[#E8E8E8] shadow-[10px_10px_5px_0_#00000029] rounded-[15px]">
      <div className="w-[100%] border h-[9%]  text-center text-[#22445D] leading-[60px] text-[22px] bg-[#A4F6DE] rounded-t-[15px] ">
        تغییر رمز عبور
      </div>
      <Formik
        initialValues={{ oldPassword: "", newPassword: "" }}
        onSubmit={(values) => onSubmit(values)}
      >
        <Form>
          <div className="w-[100%] h-[28rem] flex ">
            <img
              src={picpass}
              className="w-[40%] h-[100%] m-auto mt-[2%]"
            ></img>
            <div className="w-[38%] h-[28rem] mt-[2%] mb-[2%]  m-auto flex flex-col justify-between text-[#158B68] ">
              <div className="w-[100%] h-[20%] m-auto ">
                <label
                  htmlFor="oldPassword"
                  className=" block mb-2 text-right text-[20px] font-medium  dark:text-white"
                >
                  رمز عبور فعلی
                </label>
                <Field
                  type="text"
                  name="oldPassword"
                  className="border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>
              <div className="w-[100%] h-[20%]  m-auto">
                <label
                  htmlFor="newPassword"
                  className=" block mb-2 text-right text-[20px] font-medium  dark:text-white"
                >
                  رمز عبور جدید
                </label>
                <Field
                  type="text"
                  name="newPassword"
                  className="border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>

              <button
                type="submit"
                className="w-[100%] h-[10%] m-auto rounded-[10px] text-[#fff] text-[23px] text-center leading-[25px] cursor-pointer bg-[#158B68]"
              >
                تایید
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePass;
