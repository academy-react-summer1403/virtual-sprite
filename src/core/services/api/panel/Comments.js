
import instance from "../../interceptor/index.js";
export const CommentCourseapi = async () => {
    try {
      const result = await instance.get("/SharePanel/GetMyCoursesComments");
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };
  export const CommentArticleapi = async () => {
    try {
      const result = await instance.get("/SharePanel/GetMyNewsComments");
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };