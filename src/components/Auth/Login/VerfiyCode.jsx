import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import exit from "../../../assets/images/login/exit.png";
import { VerifyMessageAPI } from "../../../core/services/api/auth/auth";

const VerfiyCode = ({ userobj, setContent, close }) => {
  const [Code, setCode] = useState();
  const handleCode = (e) => {
    setCode(e.target.value);
  };
  const onSubmit = async () => {
    const obj = {};

    // console.log(obj);
    const logintwo = await VerifyMessageAPI(Code, obj);
    console.log(logintwo);
    if (logintwo.token) {
      if (logintwo.message.includes("موفق")) {
        localStorage.setItem("token", logintwo.token);
        console.log(logintwo.token);
      }
    } else {
      close();
    }
    close();
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
            کدتایید
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
          <Form>
            <Field
              class="w-[356px] h-[56px] mb-[15px] rounded-[50px] border-[1px] border-[#CFD8DC] pr-[25px] mr-[5%]
                 font-[yekanReg] 
                    text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
              name="Code"
              placeholder="کدتایید"
              value={Code}
              onChange={handleCode}
            />
            {/* <div class=" text-[24px] ">
                <label>1:34</label>
              </div> */}

            <button
              onClick={onSubmit}
              type="submit"
              class=" w-[208px] h-[56px] bg-[#2196F3] text-[rgba(255,255,255,1)] rounded-[80px]
                  drop-shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-[35px]  mr-[23%]
                   border-none transition ease-in-out hover:scale-105 duration-[.3s]"
            >
              وارد شوید
            </button>
          </Form>
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

export default VerfiyCode;
