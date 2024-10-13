import axios from "axios";
import { baseUrl } from "@config/baseURL";

export const getTopNews = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
