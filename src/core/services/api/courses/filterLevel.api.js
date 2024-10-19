import axios from "axios";
import { baseUrl } from "@config/baseURL";

export const filterLevel = async () => {
  try {
    const res = await axios.get(`${baseUrl}/CourseLevel/GetAllCourseLevel`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
