import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginAPI } from "../../../core/services/api/auth/auth";
import { Result } from "postcss";
// import exit from "@assets/images/login/exit.png";

const Login = ({ setContent, close }) => {
  // const goToRegister = (e) => {
  //   e.preventDefault();
  //   setContent("register");
  // };
  const loginUser = async (values) => {
    console.log("click login");
    const userObj = {
      phoneOrGmail: values.emailMob,
      password: values.password,
      rememberMe: true,
    };
    const user = await loginAPI(userObj);
    if (user.token) {
      if (user.message.includes("موفق")) {
        localStorage.setItem("token", user.token);
        console.log(user.token);
      }
    } else {
      close()
    }
    close()
  };

  const getProfileFunc = async () => {
    const user = await getProfile();
    console.log(user);
  };
  // useEffect(() => {
  // loginUser();
  // getProfileFunc();
  // }, []);
  const validationSchema = Yup.object({
    emailMob: Yup.string().required(
      "لطفا شماره موبایل یا ایمیل  را وارد نمایید"
    ),
    password: Yup.string().required("لطفا رمز عبور را وارد نمایید"),
  });
  return (
    <div>
      <Formik
        // initialValues={{
        //   acceptedTerms: true,
        // }}
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={loginUser}
      >
        {({ values }) => (
          <Form>
            <div
              class="relative flex flex-col flex-wrap justify-center items-center 
                     sm:flex-row sm:justify-center sm:gap-4 
                     md:flex-row md:justify-center md: gap-4 
                     lg:flex-row lg:justify-center lg:gap-4"
            >
              <div class="flex flex-row justify-between ">
                <div class="text-[#263238] flex flex-row justify-center items-center text-[32px] text-right">
                  ورود به حساب
                </div>
              </div>
              <Field
                class="w-[356px] h-[56px] mb-[15px] rounded-[50px] border-[1px] border-[#CFD8DC] pr-[25px] 
                 font-[yekanReg] 
                    text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
                name="emailMob"
                placeholder="ایمیل یا شماره موبایل"
              />
              <ErrorMessage
                name="emailMob"
                component="p"
                // style={{ color: "red" }}
                className="errorMessage absolute top-12 right-10 z-[10] text-[10px] my-20 font-[yekanReg]"
              />
              <Field
                class="w-[356px] h-[56px] mb-[15px] rounded-[30px] border-[1px] border-[#CFD8DC] pr-[25px] 
                      font-[yekanReg] text-[16px] 
                      focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]
                      "
                name="password"
                type="password"
                placeholder="رمز عبور"
              />
              <ErrorMessage
                name="password"
                component="p"
                // style={{ color: "red" }}
                class="errorMessage absolute top-32 right-10 z-[10] text-[10px] my-20 font-[yekanReg]"
              />
            </div>
            {/* <div class=""> */}
            <div class="w-[380px] my-[20px] container flex flex-nowrap justify-between">
              <div class="flex flex-row items-center gap-2 text-[14px] pr-4  ">
                <Field
                  type="checkbox"
                  name="acceptedTerms"
                  id="show"
                  className="checkBox"
                />
                <label htmlFor="show" class=" font-[yekanReg] text-[#455A64]">
                  من را به خاطر بسپار
                </label>
              </div>
              <div>
                {/* <NavLink to="#" >رمز عبور را فراموش کردم</NavLink> */}
                <div
                  onClick={() => setContent("register")}
                  class="text-[#2196F3] font-[yekanReg] cursor-pointer"
                >
                  رمز عبور را فراموش کردم
                </div>
              </div>
              {/* </div> */}
            </div>
            <div class="mt-[35px]  flex flex-row justify-center">
              <button
                type="submit"
                class="m-[15px] w-[208px] h-[56px] bg-[#2196F3] text-[rgba(255,255,255,1)] rounded-[80px]
                    drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]
                     border-none transition ease-in-out hover:scale-105 duration-[.3s] "
              >
                ورود
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
