import { Formik, Form, Field, ErrorMessage } from "formik";
import { EditInfo } from "../../../core/services/api/panel/EditProfile";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { UserInfo } from "../../../core/services/api/panel/EditProfile";
import { FetchProfile } from "../../../core/services/api/panel/Dashboard";
const UserProfile = () => {
  const [info, setInfo] = useState({});

  const getData = async () => {
    const result = await FetchProfile();
    setInfo(result);
  };
  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async (values) => {
    console.log("values onsubmit", values);
    const formdata = new FormData();
    formdata.append("LName", values.lName);
    formdata.append("FName", values.fName);
    formdata.append("UserAbout", values.UserAbout);
    formdata.append("LinkdinProfile", "https://www.linkedin.com");
    formdata.append("TelegramLink", "https://t.me");
    formdata.append("ReceiveMessageEvent", false);
    formdata.append("HomeAdderess", values.HomeAdderess);
    formdata.append("NationalCode", values.NationalCode);
    formdata.append("Gender", values.gender);
    formdata.append("BirthDay", values.BirthDay);
    formdata.append("Latitude", "0");
    formdata.append("Longitude", "0");

    const editapi = await EditInfo(formdata);
  };
  return (
    <>
      <div className="w-[100%] border h-[9%]  text-center text-[#22445D] leading-[60px] text-[22px] bg-[#A4F6DE] rounded-t-[15px] ">
        مشخصات کاربر
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          formFile: null,
          FName: info.fName ? info.fName : "",
          LName: info.lName ? info.lName : "",
          UserAbout: info.userAbout ? info.userAbout : "",
          NationalCode: info.nationalCode ? info.nationalCode : "",
          BirthDay: info.birthDay ? info.birthDay : "",
          HomeAdderess: info.homeAdderess ? info.homeAdderess : "",
          phoneNumber: info.phoneNumber ? info.phoneNumber : "",
          gender: info.gender ? info.gender : "",
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="w-[90%] mt-[1%] mb-[2%] m-auto flex flex-col text-[#158B68] ">
            <div className="w-[100%]  flex justify-between">
              <div className="w-[48%]">
                <label
                  htmlFor="LName"
                  className=" block mb-1 text-right text-[19px] font-medium  dark:text-white"
                >
                  نام
                </label>
                <Field
                  type="text"
                  name="LName"
                  className=" border outline-none border-[#158B68]  text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>

              <div className="w-[48%]">
                <label
                  htmlFor="FName"
                  className="block text-right mb-1 text-[19px] font-medium  dark:text-white"
                >
                  نام خانوادگی
                </label>
                <Field
                  type="text"
                  name="FName"
                  className="border border-[#158B68] outline-none text-sm rounded-lg  block w-full p-2.5 "
                />
              </div>
            </div>
            <label
              htmlFor="phoneNumber"
              className=" block mb-1 mt-2 text-right text-[19px] font-medium  dark:text-white"
            >
              شماره همراه
            </label>
            <Field
              type="text"
              name="phoneNumber"
              className="border border-[#158B68] outline-none text-sm rounded-lg   w-full p-2.5 "
            />
            <div className="w-[100%] mt-[1%]  flex justify-between">
              <div className="w-[48%]">
                <label
                  htmlFor="NationalCode"
                  className=" block mb-1 text-right text-[19px] font-medium  dark:text-white"
                >
                  شماره ملی
                </label>
                <Field
                  type="text"
                  name="NationalCode"
                  className="border border-[#158B68] outline-none text-sm rounded-lg   w-full p-2.5 "
                />
              </div>

              <div className="w-[48%]">
                <label
                  htmlFor="BirthDay"
                  className="block text-right mb-1 text-[19px] font-medium  dark:text-white"
                >
                  تاریخ تولد
                </label>
                <Field
                  type="text"
                  name="BirthDay"
                  className="border border-[#158B68] outline-none text-sm rounded-lg block w-full p-2.5 "
                />
              </div>
            </div>
            <label
              htmlFor="UserAbout"
              className=" block mb-1 mt-2 text-right text-[19px] font-medium  dark:text-white"
            >
              درباره من
            </label>
            <Field
              type="text"
              name="UserAbout"
              className="border border-[#158B68] outline-none text-sm rounded-lg  block  w-full p-2.5 "
            />
            <div className="w-[100%] flex justify-between">
              <div className="w-[39%]">
                <label
                  htmlFor="Gender"
                  className=" block mb-1 mt-2 text-right text-[19px] font-medium  dark:text-white"
                >
                  جنسیت
                </label>
                <select
                  name="Gender"
                  dir="rtl"
                  className="border border-[#158B68]  text-[19px] rounded-lg bg-[#fff] block  w-full p-2.5 "
                >
                  <option value="man">مرد</option>
                  <option value="woman">زن</option>
                </select>
              </div>
              <div className="w-[59%]">
                <label
                  htmlFor="gmail"
                  className=" block mb-1 mt-2 text-right text-[19px] font-medium  dark:text-white"
                >
                  ایمیل
                </label>
                <Field
                  type="text"
                  name="gmail"
                  className=" border border-[#158B68] outline-none text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>
            </div>
            <label
              htmlFor="HomeAdderess"
              className=" block mb-1 mt-2 text-right ttext-[19px] font-medium  dark:text-white"
            >
              آدرس
            </label>
            <Field
              type="text"
              name="HomeAdderess"
              className="border border-[#158B68] outline-none text-sm rounded-lg  block  w-full p-2.5 "
            />
            <div className="w-[100%]  flex justify-between">
              <div className="w-[48%]">
                <label
                  htmlFor="TelegramLink"
                  className=" block mb-2 text-right text-[19px] font-medium  dark:text-white"
                >
                  لینک تلگرام
                </label>
                <Field
                  type="text"
                  name="TelegramLink"
                  className="border border-[#158B68] outline-none text-sm rounded-lg  block  w-full p-2.5 "
                />
              </div>

              <div className="w-[48%]">
                <label
                  htmlFor="LinkdinProfile"
                  className="block text-right mb-1 text-[19px] font-medium  dark:text-white"
                >
                  پروفایل لینکدین
                </label>
                <Field
                  type="text"
                  name="LinkdinProfile"
                  className="border border-[#158B68] outline-none text-sm rounded-lg  block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="w-[100%] mt-[2%] flex justify-between">
              <button
                type="submit"
                // onClick={onSubmit}
                className="w-[100%]  rounded-[10px] text-[#fff] text-[23px] text-center leading-[50px] cursor-pointer bg-[#158B68]"
              >
                ثبت تغییرات
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export { UserProfile };
