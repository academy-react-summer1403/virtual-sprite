import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { ImagePay } from "./ImagePay";
import { Pay } from "./Pay";
const ItemCurses = ({ dore, term, end, start, mony, teacher, img, cost,id }) => {
  const [opened, { open, close }] = useDisclosure(false);
  
  const [content, setContent] = useState("pay");
  


  return (
    <div className="w-[95%] h-[65px] bg-[#fff] mt-[1%] m-auto rounded-[25px] flex justify-between text-[#22445D] text-[17px] leading-[60px]">
      <div className="w-[12%] text-center" onClick={open}>
        <SlBasket className="ml-[50%] mt-[18%] cursor-pointer" />
        <Modal
          opened={opened}
          className="ml-[1500px]"
          onClose={close}
          title="پرداخت شهریه"
        >
    
          {content === "pay" ? (
        <Pay setContent={setContent} close={close} cost={cost} id={id}/>
      ) : content === "imagepay" ? (
        <ImagePay
        cost={cost}
          setContent={setContent}
          close={close}
        />): null}
        </Modal>
      </div>
      <div className="w-[14%] text-center"> {mony}</div>
      <div className="w-[16%]  text-center truncate">{end}</div>
      <div className="w-[16%]  text-center truncate">{start}</div>
      <div className="w-[15%] text-center truncate"> {term}</div>
      <div className="w-[14%] text-center truncate"> {teacher}</div>
      <div className="w-[14%] text-center truncate"> {dore}</div>
      <div className="w-[12%]">
        <img
          src={img}
          className="w-[75%] h-[70%] m-auto mt-[6%] rounded-[15px]"
        ></img>
      </div>
    </div>
  );
};
export { ItemCurses };
