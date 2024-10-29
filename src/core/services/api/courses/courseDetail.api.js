import axios from "axios";
import { baseUrl } from "@config/baseURL";

export const courseDetail = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=12&SortingCol=Active&SortType=DESC&TechCount=0`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
