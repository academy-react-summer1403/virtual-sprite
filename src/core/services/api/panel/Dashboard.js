import instance from "../../interceptor/index.js";
export const FetchProfile = async () => {
    try {
      const result = await instance.get("/SharePanel/GetProfileInfo");
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };