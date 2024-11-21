import React, { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import exit from "@assets/images/login/exit.png";
import { RegisterFirst } from "./RegisterFirst";
import SendSms from "./SendSms/index";
import RegisterFinish from "./RegisterFinish/index"
const Register = ({setContent}) => {
  const [phoneNumber,setPhoneNumber]=useState();
  const [step, setStep] = useState(1);
  const stepCounter = () => {
      setStep(step + 1);
    };
    const navigator = useNavigate();
    const gotoleft = () => {
        if (step == 1) {
            return (
                navigator("/")

            );
        }
        else {

            setStep((step) => (step - 1));

        };

    };
  return (
   <div>
    <Formik>
      <Form>
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
            <div>
            {step == 1 ? (
        <RegisterFirst step={stepCounter} setPhoneNumber={setPhoneNumber} setContent={setContent} />
      ) : step == 2 ? (
        <SendSms 
        
          step={stepCounter} phoneNumber={phoneNumber}
          
        />
      ) : step == 3 ? (
        <RegisterFinish 
     
          step={stepCounter} phoneNumber={phoneNumber}
        />
      ) : null}
            </div>

              </div>
      </Form>
    </Formik>
   </div>
  );
};

export default Register;
