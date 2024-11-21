import http from "../../interceptor";
import instance from "../../interceptor";
export const loginAPI = async (user) => {
  try {
    const response = await http.post("/sign/login", user);
    return response;
  } catch (error) {
    return false;
  }
};

export const RegisterAPI = async (obj) => {
  try {
    const response = await instance.post("/Sign/SendVerifyMessage",obj);
    return response;
  } catch (error) {
    return false;
  }
};

export const SmsAPI = async (obj) => {
  try {
    const response = await instance.post("/Sign/VerifyMessage",obj);
    return response;
  } catch (error) {
    return false;
  }
};

export const RegisterFinishAPI = async (obj) => {
  try {
    const response = await instance.post("/Sign/Register",obj);
    return response;
  } catch (error) {
    return false;
  }
};
