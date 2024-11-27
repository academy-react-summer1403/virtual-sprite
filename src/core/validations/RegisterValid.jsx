import * as Yup from "yup";
import React from "react";

export const ValidationStepOne = Yup.object().shape({
//   phoneNumber: yup.string().required(
//     "لطفا شماره موبایل یا ایمیل  را وارد نمایید"
//   ),
  phoneNumber: Yup
    .string()
    .matches(/[0-11]/)
    .required("لطفا پر کنید"),
});
export const ValidationStepTwo = Yup.object().shape({
//   verifyCode: yup.string().required(
//     "لطفا شماره موبایل یا ایمیل  را وارد نمایید"
//   ),
  verifyCode: Yup
    .string()
    .matches(5, "must be number")
    .required("لطفا پر کنید"),
});
export const ValidationStepThree = Yup.object().shape({
  gmail: Yup.string().required("لطفا شماره موبایل یا ایمیل  را وارد نمایید"),
  password: Yup.string().required("لطفا رمز عبور را وارد نمایید"),
});
