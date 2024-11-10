import instance from "../../interceptor/index.js";
export const Myreservecourse = async () => {
    try {
      const result = await instance.get("/SharePanel/GetMyCoursesReserve");
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };