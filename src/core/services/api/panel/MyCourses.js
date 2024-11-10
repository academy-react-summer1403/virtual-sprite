import instance from "../../interceptor/index.js";
export const MyCoursesapi = async (
  PageNumber=1,
  RowsOfPage=10, 
) => {
 
    try {
      const result = await instance.get(`/SharePanel/GetMyCourses?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}`);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };
