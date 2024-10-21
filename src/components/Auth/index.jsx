import React, { useState } from "react";
import Login from "./Login";
import { Modal, Button, MantineProvider, NavLink } from "@mantine/core";

import RegisterStep1 from "./Register/RegisterStep1";
import RegisterStep2 from "./Register/RegisterStep2";
import RegisterStep3 from "./Register/RegisterStep3";

// import Register from "./Register";
import RegisterFinish from "./Register/RegisterFinish";
import SendSms from "./Register/SendSms";
const Auth = ({ setAuthModal }) => {
  // const [content, setContent] = useState("login");
  // const [userData, setUserData] = useState([]);
  // if (setAuthModal) {
  //   return (
  //     <div
  //       class="w-screen h-screen bg-blur flex flex-row justify-center border-[1px] bg-gray-300"
  //       className="dirAuth"
  //     >
  //       <div class="border-[red] border-[1px] bg-gray-200">
  //         login
  //         <Login setAuthModal={setAuthModal} />
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div
  //       class="w-screen h-screen bg-blur flex flex-row justify-center border-[1px] bg-gray-300"
  //       className="dirAuth"
  //     >
  //       <div class="h-[100px] border-[red] border-[1px] bg-gray-200">
  //         {/* <RegisterStep1 /> */}
  //         register
  //       </div>
  //     </div>
  //   );
  // }
  const [opened, setOpened] = useState(false);
  const [content, setContent] = useState("login");
  return (
    <div class=" flex flex-row justify-center">
      <div>
        <Login />
      </div>
    </div> 
  );
};

export default Auth;
