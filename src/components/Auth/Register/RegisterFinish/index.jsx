import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import exit from "../../../../assets/images/login/exit.png";
import { RegisterFinishAPI } from "../../../../core/services/api/auth/auth";
import { ValidationStepThree } from "../../../../core/validations/RegisterValid";
import { Notification } from "@mantine/core";

const RegisterFinish = ({ phoneNumber, setContent }) => {
  const onSubmit = async (values) => {
    const obj = {
      phoneNumber: phoneNumber,
      password: values?.password,
      gmail: values?.gmail,
    };

    const result = await RegisterFinishAPI(obj);
    console.log(result);
    if (result.success == true) {
      setContent("login");
    } else if (result.status > 200) {
      <Notification>
        <p>mcmnch</p>
      </Notification>;
    }
  };
  return (
    <>
      <div
        class="relative flex flex-col flex-wrap justify-center items-center 
             sm:flex-row sm:justify-center sm:gap-4 
             md:flex-row md:justify-center md: gap-4 
             lg:flex-row lg:justify-center lg:gap-4"
      >
        <div class="flex flex-row justify-between ">
          <div class="text-[#263238] flex flex-row justify-center items-center text-[32px] text-right">
            ورود به حساب کاربری
          </div>
        </div>
        <Formik
          initialValues={{ gmail: "", password: "" }}
          onSubmit={onSubmit}
          validationSchema={ValidationStepThree}
        >
          <Form>
            <div>
              <Field
                class="w-[356px] mr-[5%] h-[56px] mb-[15px] rounded-[50px] border-[1px] border-[#CFD8DC] pr-[25px] text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
                name="gmail"
                placeholder="ایمیل یا شماره موبایل"
              />
              <Field
                class="w-[356px]  mr-[5%] h-[56px] mb-[15px] rounded-[30px] border-[1px] border-[#CFD8DC] pr-[25px] text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
                name="password"
                placeholder="رمز عبور"
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

            <button
              type="submit"
              class="m-[15px] mr-[23%] w-[208px] h-[56px] bg-[#2196F3] text-[rgba(255,255,255,1)] rounded-[80px]
                        drop-shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-[35px]
                         border-none transition ease-in-out hover:scale-105 duration-[.3s]"
            >
              ورود به حساب کاربری
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegisterFinish;
