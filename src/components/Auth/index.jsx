import React from "react";
import Login from "@components/Auth/Login";
const Auth = () => {
  return (
    <div class="h-[400px] w-[400px] bg-white absolute top-[10px] left-[10px] z-50">
      {/* <input type="text" name="emailMob" />
            <input type="text" name="password"  /> */}
      <Login />
    </div>
  );
};

export default Auth;
