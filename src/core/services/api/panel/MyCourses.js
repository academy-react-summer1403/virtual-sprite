import instance from "../../interceptor/index.js";
export const MyCoursesapi = async () => {
    try {
      const result = await instance.get("/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=");
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };
