import instance from "../../interceptor/index.js";
export const ChangePassapi = async (obj) => {
    try {
      const result = await instance.post("/SharePanel/ChangePassword",obj);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };