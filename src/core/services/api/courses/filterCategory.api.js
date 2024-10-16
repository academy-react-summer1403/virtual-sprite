import axios from "axios";
import { baseUrl } from "@config/baseURL";

export const filterCategory = async () => {
  try {
    const res = await axios.get(`${baseUrl}/Home/GetTechnologies`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
