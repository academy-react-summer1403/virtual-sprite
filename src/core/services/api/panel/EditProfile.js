import instance from "../../interceptor/index.js";
export const EditInfo = async (formdata) => {
    try {
      const result = await instance.put("/SharePanel/UpdateProfileInfo",formdata);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };