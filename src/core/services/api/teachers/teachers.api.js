import { baseUrl } from "@config/baseURL";
import axios from "axios";

export const getAllTeachers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/Home/GetTeachers`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
