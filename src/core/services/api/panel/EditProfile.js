import instance from "../../interceptor/index.js";
export const UserInfo = async () => {
    try {
      const result = await instance.get(`/SharePanel/GetProfileInfo`);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };