import instance from "../../interceptor/index.js";
export const EditInfo = async (formdata) => {
  try {
    const result = await instance.put(`‍/SharePanel/UpdateProfileInfo`, {
      data: formdata,
      headers: {
        " Content-Type": " multipart/form-data",
      },
    });

    return result;
  } catch (error) {
    console.error("خطا", error);
  }
};

export const SelectImg = async (profileFormData) => {
  try {
    console.log("fetching started ...");

    const result = await instance.post("/SharePanel/SelectProfileImage", profileFormData);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const DeleteImg = async () => {
  try {
    console.log("fetching started ...");

    const result = await instance.delete("/SharePanel/DeleteProfileImage");

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const uploadImage = async (data) => {
  try {
    console.log("fetching started ...");

    const result = await instance.post("/SharePanel/AddProfileImage", data);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const UserInfo = async () => {
  try {
    const result = await instance.get(`/SharePanel/GetProfileInfo`);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
