import instance from "../../interceptor/index.js";
export const MyFevoritecourse = async () => {
    try {
      const result = await instance.get("/SharePanel/GetMyFavoriteCourses");
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };
  export const MyFevoritearticle = async () => {
    try {
      const result = await instance.get("/SharePanel/GetMyFavoriteNews");
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };
  export const Deletefavoritecourse = async (formData) => {
    try {
      const result = await instance.delete(`/Course/DeleteCourseFavorite`, { data: formData });
  
      return result;
    } catch (error) {
      console.error("خطا", error);
    }
  };