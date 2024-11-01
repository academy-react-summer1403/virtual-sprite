import axios from "axios";
import { baseUrl } from "@config/baseURL";
export const courseDetailById = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/Home/GetCourseDetails?CourseId=c79954bc-1f31-ef11-b6c8-c6ea51a59bbe`
    );
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
};
