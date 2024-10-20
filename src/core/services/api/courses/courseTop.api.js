import axios from "axios";
import { baseUrl } from "@config/baseURL";

export const getTopCourses = async () => {

  //const baseURL = import.meta.env.VITE_BASE_URL
try {
  const res = await axios.get(`${baseUrl}/Home/GetCoursesTop?Count=4`);
  return res.data;
} catch (error) {
  console.log(error)
  return[]
}
};
