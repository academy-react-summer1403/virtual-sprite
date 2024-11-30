import axios from "axios";
import instance from "../../interceptor";
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

export const Addcourse = async (obj) => {
  try {
    const res = await instance.post("/CourseReserve/ReserveAdd", obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const AddLikeApi = async (id) => {
  try {
    const res = await instance.post(`/Course/AddCourseLike?CourseId=${id}`);
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const DisLikeApi = async (id) => {
  try {
    const res = await instance.post(`/Course/AddCourseDissLike?CourseId=${id}`);
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const Addfavorite = async (obj) => {
  try {
    const result = await instance.post("/Course/AddCourseFavorite", obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
