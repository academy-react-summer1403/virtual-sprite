import React from "react";
import { Formik, Form, Field } from "formik";
import exit from "@assets/images/exit.png";
const RegisterFinish = () => {
  return (
    <>
      <div class="mx-auto w-[420px] h-[490px] bg-white rounded-[24px] absolute top-[100px] inset-0">
        <div class="flex flex-row justify-between px-6 my-5">
          <div class="text-[#263238] flex flex-row justify-center items-center leading-[49.6px] text-[32px] text-right">
            ورود به حساب
          </div>
          <div class="w-12 h-12 rounded-xl bg-slate-200 flex flex-row justify-center items-center">
            <img class="w-6 h-6" src={exit}></img>
          </div>
        </div>
        <Formik
          initialValues={{
            acceptedTerms: false,
          }}
        >
          {({ values }) => (
            <Form>
              <div>
                <Field
                  class="w-[356px] h-[56px] mb-[15px] rounded-[50px] border-[1px] border-[#CFD8DC] pr-[25px] text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
                  name="emailMob"
                  placeholder="ایمیل یا شماره موبایل"
                />
                <Field
                  class="w-[356px] h-[56px] mb-[15px] rounded-[30px] border-[1px] border-[#CFD8DC] pr-[25px] text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
                  name="password"
                  placeholder="رمز عبور"
                />
                <Field
                  class="w-[356px] h-[56px] mb-[15px] rounded-[30px] border-[1px] border-[#CFD8DC] pr-[25px] text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
                  name="password"
                  placeholder="تکرار رمز عبور"
                />
              </div>
              <div class="px-8">
                <div class="container mx-auto flex flex-nowrap justify-start">
                  <Field
                    type="checkbox"
                    name="acceptedTerms"
                    id="show"
                    className="checkBox"
                  />
                  <label htmlFor="show"> من را به خاطر بسپار </label>
                </div>
              </div>
              <div class="mt-[35px]">
                <button
                  type="submit"
                  class="m-[15px] w-[208px] h-[56px] bg-[#2196F3] text-[rgba(255,255,255,1)] rounded-[80px]
                        drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]
                         border-none transition ease-in-out hover:scale-105 duration-[.3s]"
                >
                  دریافت کد تایید
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterFinish;
