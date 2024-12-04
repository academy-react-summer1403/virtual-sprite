import React, { useState } from "react";
import Login from "./Login";
import RegisterFinish from "./Register/RegisterFinish";
import SendSms from "./Register/SendSms/index";
import { RegisterFirst } from "./Register/RegisterFirst";
import VerfiyCode from "./Login/VerfiyCode";

const Auth = ({ opened, open, close }) => {
  const [content, setContent] = useState("login");
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    // <div class="h-[400px] w-[400px] bg-white absolute top-[10px] left-[10px] z-50">
    <div class=" w-[400px]">
      {content === "login" ? (
        <Login setContent={setContent} close={close}  phoneNumber={phoneNumber}/>
      ) : content === "verifycode" ? (
        <VerfiyCode
        phoneNumber={phoneNumber}
          setContent={setContent}
          close={close}
        />
      
      ) : content === "RegisterFirst" ? (
        <RegisterFirst
          setPhoneNumber={setPhoneNumber}
          setContent={setContent}
        />
      ) : content === "SendSms" ? (
        <SendSms setContent={setContent} phoneNumber={phoneNumber} />
      ) : content === "RegisterFinish" ? (
        <RegisterFinish phoneNumber={phoneNumber} setContent={setContent} />
      ) : null}
    </div>
  );
};

export default Auth;
