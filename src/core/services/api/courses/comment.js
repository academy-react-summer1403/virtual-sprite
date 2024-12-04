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
 
  export const GetCommentApi = async (CourseId) => {
    try {
      const result = await instance.get(`/Course/GetCourseCommnets/${CourseId}`);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };
  
  export const PostReply = async (formData) => {
    try {
      const result = await instance.post("/Course/AddReplyCourseComment",formData);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };
  
  export const GetReplyApi = async (CourseId,CommentId) => {
    try {
      const result = await instance.get(`/Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };