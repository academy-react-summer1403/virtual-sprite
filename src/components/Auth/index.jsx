import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = ({ opened, open, close }) => {
  const [content, setContent] = useState("login");

  return (
    // <div class="h-[400px] w-[400px] bg-white absolute top-[10px] left-[10px] z-50">
    <div class=" w-[400px]">
      {content === "login" ? (
        <Login setContent={setContent} />
      ) : content === "register" ? (
        <Register setContent={setContent} />
      ) : null}
    </div>
  );
};

export default Auth;