import axios from "axios";
import { baseUrl } from "@config/baseURL";

export const getTopCourses = async () => {
try {
  const res = await axios.get(`${baseUrl}/Home/GetCoursesTop?Count=4`);
  return res.data;
} catch (error) {
  console.log(error)
  return[]
}
};
