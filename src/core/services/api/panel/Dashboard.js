import instance from "../../interceptor/index.js";
export const FetchProfile = async () => {
    try {
        const token =localStorage.getItem('token')
      const result = await instance.get("/SharePanel/GetProfileInfo",{
        headers:{
            Authorization:"Bearer " + token,
        }
      });
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };