import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
const UserProfile = () => {
  return (
    <>
      <div className="w-[100%] border h-[9%]  text-center text-[#22445D] leading-[60px] text-[22px] bg-[#A4F6DE] rounded-t-[15px] ">
        مشخصات کاربر
      </div>
      <Formik
        initialValues={{
          lName: "",
          fName: "",
          address: "",
          telegram: "",
          linkdin: "",
          phoneNumber: "",
          code: "",
          status: "",
          gmail: "",
          date: "",
          gender: "",
        }}
      >
        <Form>
          <div className="w-[90%] mt-[1%] mb-[2%] m-auto flex flex-col text-[#158B68] ">
            <div className="w-[100%]  flex justify-between">
              <div className="w-[48%]">
                <label
                  htmlFor="lName"
                  className=" block mb-2 text-right text-[22px] font-medium  dark:text-white"
                >
                  نام
                </label>
                <Field
                  type="text"
                  name="lName"
                  className="border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>

              <div className="w-[48%]">
                <label
                  htmlFor="fName"
                  className="block text-right mb-1 text-[22px] font-medium  dark:text-white"
                >
                  نام خانوادگی
                </label>
                <Field
                  type="text"
                  name="fName"
                  className="border border-[#158B68]  text-sm rounded-lg  block w-full p-2.5 "
                />
              </div>
            </div>
            <label
              htmlFor="phoneNumber"
              className=" block mb-1 mt-2 text-right text-[22px] font-medium  dark:text-white"
            >
              شماره همراه
            </label>
            <Field
              type="text"
              name="phoneNumber"
              className="border border-[#158B68]  text-sm rounded-lg   w-full p-2.5 "
            />
            <div className="w-[100%] mt-[1%]  flex justify-between">
              <div className="w-[48%]">
                <label
                  htmlFor="code"
                  className=" block mb-1 text-right text-[22px] font-medium  dark:text-white"
                >
                  شماره ملی
                </label>
                <Field
                  type="text"
                  name="code"
                  className="border border-[#158B68]  text-sm rounded-lg   w-full p-2.5 "
                />
              </div>

              <div className="w-[48%]">
                <label
                  htmlFor="date"
                  className="block text-right mb-1 text-[22px] font-medium  dark:text-white"
                >
                  تاریخ تولد
                </label>
                <Field
                  type="text"
                  name="date"
                  className="border border-[#158B68] text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
            </div>
            <label
              htmlFor="status"
              className=" block mb-1 mt-2 text-right text-[22px] font-medium  dark:text-white"
            >
              درباره من
            </label>
            <Field
              type="text"
              name="status"
              className="border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
            />
            <div className="w-[100%] flex justify-between">
              <div className="w-[39%]">
                <label
                  htmlFor="gender"
                  className=" block mb-1 mt-2 text-right text-[22px] font-medium  dark:text-white"
                >
                  جنسیت
                </label>
                <select
                  dir="rtl"
                  className="border border-[#158B68]  text-[20px] rounded-lg bg-[#fff] block  w-full p-2.5 "
                >
                  <option value="man">مرد</option>
                  <option value="woman">زن</option>
                </select>
              </div>
              <div className="w-[59%]">
                <label
                  htmlFor="gmail"
                  className=" block mb-1 mt-2 text-right text-[22px] font-medium  dark:text-white"
                >
                  ایمیل
                </label>
                <Field
                  type="text"
                  name="gmail"
                  className=" border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>
            </div>
            <label
              htmlFor="address"
              className=" block mb-1 mt-2 text-right text-[22px] font-medium  dark:text-white"
            >
              آدرس
            </label>
            <Field
              type="text"
              name="address"
              className="border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
            />
            <div className="w-[100%]  flex justify-between">
              <div className="w-[48%]">
                <label
                  htmlFor="telegram"
                  className=" block mb-2 text-right text-[22px] font-medium  dark:text-white"
                >
                  لینک تلگرام
                </label>
                <Field
                  type="text"
                  name="telegram"
                  className="border border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>

              <div className="w-[48%]">
                <label
                  htmlFor="linkdin"
                  className="block text-right mb-1 text-[22px] font-medium  dark:text-white"
                >
                  پروفایل لینکدین
                </label>
                <Field
                  type="text"
                  name="linkdin"
                  className="border border-[#158B68]  text-sm rounded-lg  block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="w-[100%] mt-[2%] flex justify-between">
              <botton className="w-[100%] h-[100%] rounded-[10px] text-[#fff] text-[23px] text-center leading-[50px] cursor-pointer bg-[#158B68]">
                ثبت تغییرات
              </botton>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export { UserProfile };
