import instance from "../../interceptor";
export const AddComment = async (formdata) => {
    try {
      const result = await instance.post("/Course/AddCommentCourse",formdata);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };
 
  export const GetCommentApi = async () => {
    try {
      const result = await instance.get(`/Course/GetCourseCommnets/:CourseId`);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };