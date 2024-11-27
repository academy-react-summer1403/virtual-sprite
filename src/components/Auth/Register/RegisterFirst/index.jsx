import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { RegisterAPI } from "../../../../core/services/api/auth/auth";
import { ValidationStepOne } from "../../../../core/validations/RegisterValid";

const RegisterFirst = ({ setContent, setPhoneNumber }) => {
  const onSubmit = async (values) => {
    setPhoneNumber(values?.phoneNumber);
    const obj = { phoneNumber: values?.phoneNumber };
    const Postregister = await RegisterAPI(obj);
    if (Postregister.success == true) {
      setContent("SendSms");
    }
  };

  return (
    <div
      class="relative flex flex-col flex-wrap justify-center items-center 
             sm:flex-row sm:justify-center sm:gap-4 
             md:flex-row md:justify-center md: gap-4 
             lg:flex-row lg:justify-center lg:gap-4"
    >
      <div class="flex flex-row justify-between ">
        <div class="text-[#263238] flex flex-row justify-center items-center text-[32px] text-right">
          ساخت حساب کاربری
        </div>
      </div>
      <Formik
        initialValues={{ phoneNumber: "" }}
        onSubmit={onSubmit}
        validationSchema={ValidationStepOne}
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
            <span className="text-[#455A64]">حساب کاربری دارید؟ </span>
            <span
              onClick={() => setContent("login")}
              className="text-[#2196F3] cursor-pointer"
            >
              {" "}
              وارد شوید
            </span>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export { RegisterFirst };
