import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginAPI } from "../../../core/services/api/auth/auth";

const Login = () => {
  
  const loginUser = async (values) => {
    console.log("click login")
    const userObj = {
      phoneOrGmail: values.emailMob,
      password: values.password,
      rememberMe: true,
    };
    const user = await loginAPI(userObj);
    if (user.token) {
      console.log(user.token);
      closeModalWithJS();
    } else {
      alert(user.message);
    }

    setItem("token", user.token);
  };
  const getProfileFunc = async () => {
    const user = await getProfile();
    console.log(user);
  };
  const validationSchema = Yup.object({
    emailMob: Yup.string().required("*"),
    password: Yup.string().required("*"),
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
            <div>
              <Field
                class="w-[356px] h-[56px] mb-[15px] rounded-[50px] border-[1px] border-[#CFD8DC] pr-[25px] 
                      text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]
                      relative"
                name="emailMob"
                placeholder="ایمیل یا شماره موبایل"
              />
              <ErrorMessage
                name="emailMob"
                component="p"
                style={{ color: "red" }}
                class="absolute top-[160px] right-[5px]"
              />
              <Field
                class="w-[356px] h-[56px] mb-[15px] rounded-[30px] border-[1px] border-[#CFD8DC] pr-[25px] 
                      text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]
                      relative"
                name="password"
                placeholder="رمز عبور"
              />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: "red" }}
                class="absolute bottom-[220px] right-[5px]"
              />
            </div>
            <div class="px-8">
              <div class="container mx-auto flex flex-nowrap justify-between">
                <div>
                  <Field
                    type="checkbox"
                    name="acceptedTerms"
                    id="show"
                    className="checkBox"
                  />
                  <label htmlFor="show"> من را به خاطر بسپار </label>
                </div>
                <div>
                  {/* <NavLink to="#" >رمز عبور را فراموش کردم</NavLink> */}
                  <a href="#" class="text-[#2196F3]">
                    رمز عبور را فراموش کردم
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-[35px]  flex flex-row justify-center">
              <button
                type="submit"
                class="m-[15px] w-[208px] h-[56px] bg-[#2196F3] text-[rgba(255,255,255,1)] rounded-[80px]
                    drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]
                     border-none transition ease-in-out hover:scale-105 duration-[.3s] "
              >
                دریافت کد تایید
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
