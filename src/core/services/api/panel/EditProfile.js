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

  export const SelectImg = async(data) => {
    try{
        console.log("fetching started ...");

        const result = await instance.post("/SharePanel/SelectProfileImage",data);

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
export const uploadImage = async(data) => {
    try{
        console.log("fetching started ...");

        const result = await instance.post("/SharePanel/AddProfileImage",data);

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