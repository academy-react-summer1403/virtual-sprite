import React, { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterAPI } from "../../../../core/services/api/auth/auth";
const RegisterFirst=({ step, setPhoneNumber,setContent })=>{
    const onSubmit = async (values) => {
        setPhoneNumber(values?.phoneNumber);
        const obj = { phoneNumber: values?.phoneNumber };
        const Postregister = await RegisterAPI(obj);
        console.log("hi",Postregister)
        if (Postregister.success == true) {
          step();
        }
      };
    
    return(
        <div>
        <Formik
          initialValues={{ phoneNumber: "" }}
          onSubmit={onSubmit}
        
        >
          <Form>
          <Field
                class="w-[356px] h-[56px] mb-[15px] rounded-[50px] border-[1px] border-[#CFD8DC] pr-[25px] 
                 font-[yekanReg] 
                    text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
                name="phoneNumber"
                placeholder="ایمیل یا شماره موبایل"
              />
              <ErrorMessage
                name="phoneNumber"
                component="p"
                // style={{ color: "red" }}
                className="errorMessage absolute top-12 right-10 z-[10] text-[10px] my-20 font-[yekanReg]"
              />
                                       <div class="mt-[35px]  flex flex-row justify-center">
              <button
                type="submit"
                class="m-[15px] w-[208px] h-[56px] bg-[#2196F3] text-[rgba(255,255,255,1)] rounded-[80px]
                    drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]  font-[yekanReg]
                     border-none transition ease-in-out hover:scale-105 duration-[.3s] "
              >
               دریافت کد تایید
              </button>
            </div>
            <div className="flex w-[50%] m-auto mt-[1%]  font-[yekanReg] font-normal ">
<span className="text-[#455A64]">حساب کاربری دارید؟  </span>
<span onClick={() => setContent("login")} className="text-[#2196F3] cursor-pointer">  وارد شوید</span>
              </div>
              </Form>
      </Formik>
    </div>
    )
}
export {RegisterFirst};