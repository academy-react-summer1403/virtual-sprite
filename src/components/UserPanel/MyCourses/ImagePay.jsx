import React from "react";
const ImagePay = ({cost}) => {
  const handleFileChange = (event) => {
    const [image, setImage] = useState();
    const [selectedFile, setSelectedFile] = useState();
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <>
      <div className="h-[30px] mt-[1%]">{cost}</div>
      <img className="w-[200px] h-[200px] m-auto mb-[3%]" src={image}></img>
      <input type="file" accept="image/*" onChange={handleFileChange}></input>
      <button className="bg-[#A4F6DE] mt-[3%]" onClose={close}>
        ارسال فیش واریزی
      </button>
    </>
  );
};
export {ImagePay};
