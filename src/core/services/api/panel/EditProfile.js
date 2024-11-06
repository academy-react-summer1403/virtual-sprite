import instance from "../../interceptor/index.js";
export const EditInfo = async (formdata) => {
    try {
      const result = await instance.put("/SharePanel/UpdateProfileInfo",formdata);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };
  export const SelectImg = async(formData) => {
    try{
        console.log("fetching started ...");

        const result = await instance.post("/SharePanel/SelectProfileImage",formData);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export const DeleteImg = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.delete("/SharePanel/DeleteProfileImage");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export const AddImg = async(imgdata) => {
    try{
        console.log("fetching started ...");

        const result = await instance.post("/SharePanel/AddProfileImage",imgdata);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export const UserInfo = async () => {
    try {
      const result = await instance.get(`/SharePanel/GetProfileInfo`);
  
      return result;
    } catch (error) {
        console.log(error);
        return[];
    }
  };