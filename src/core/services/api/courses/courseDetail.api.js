import axios from "axios";
import { baseUrl } from "@config/baseURL";

export const courseDetail = async ({id}) => {
  try {
    const res = await axios.get(
      `${baseUrl}/Home/GetCourseDetails?CourseId=${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
