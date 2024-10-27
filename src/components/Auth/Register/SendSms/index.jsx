import React from "react";
import { Formik, Form, Field } from "formik";
import exit from "@assets/images/exit.png";
import TelField from "../../TelField"
const SendSms = () => {
  return (
    <>
      <div class="mx-auto w-[420px] h-[483px] bg-white rounded-[24px] absolute top-[100px] inset-0">
        <div class="flex flex-row justify-between px-6 my-5">
          <div class="text-[#263238] flex flex-row justify-center items-center leading-[49.6px] text-[32px] text-right">
            کد تاییدیه
          </div>
          <div class="w-12 h-12 rounded-xl bg-slate-200 flex flex-row justify-center items-center">
            <img class="w-6 h-6" src={exit}></img>
          </div>
        </div>
        <div class=" text-[14px] px-10 my-9 text-right">
          <label>
            کد به شماره 0911 ارسال شد. در صورت اشتباه بودن شماره آن را
          </label>
          <span class="text-[#2196F3]">
            <a href="#"> تغییر دهید </a>
          </span>
        </div>
        <Formik>
          {() => (
            <Form>
              <div class="flex flex-row justify-evenly">
                <TelField name="n1" />
                <TelField name="n2" />
                <TelField name="n3" />
                <TelField name="n4" />
                <TelField name="n5" />
              </div>
              <div class=" text-[24px] ">
                <label>1:34</label>
              </div>
              <div class="mt-[35px]">
                <button
                  type="submit"
                  class="m-[15px] w-[208px] h-[56px] bg-[#2196F3] text-[rgba(255,255,255,1)] rounded-[80px]
                  drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]
                   border-none transition ease-in-out hover:scale-105 duration-[.3s]"
                >
                  ساخت حساب کاربری
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div></div>
        <div class="leading-[14px] mt-[20px]">
          کد ارسال نشد؟
          <span class="text-[#2196F3]">
            <a href="#">ارسال دوباره</a>
          </span>
        </div>
      </div>
    </>
  );
};


export default SendSms