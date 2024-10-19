import axios from "axios";
import { baseUrl } from "@config/baseURL";

export const filterType = async () => {
  try {
    const res = await axios.get(`${baseUrl}/CourseType/GetCourseTypes`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
