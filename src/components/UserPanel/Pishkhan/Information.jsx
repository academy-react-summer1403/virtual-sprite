import React, { useState } from "react";
import { ItemInformation } from "./ItemInformation";
const Information=()=>{
    const[cardList,setcardList]=useState([
        {id:1,name:":نام و نام خانوادگی",explane:"لیلا کریمی"},
        {id:1,name:":تاریخ تولد",explane:"13/6/1373"},
        {id:1,name:":تلفن همراه",explane:"09117792547"},
        {id:2,name:":ایمیل",explane:"leilakarimi@gmail.com"},
        {id:3,name:":کدملی",explane:"2080542044"},
     ])
    return(
    <div dir="rtl" className="w-[98%] m-auto h-[80%] relative mt-[1%] flex flex-row flex-wrap gap-[2%] ">

{cardList.map((item,index) => {
        return(
<ItemInformation
key={index}
name={item.name}
explane={item.explane}
id={item.id}
/>
        ); } ) }
        <div className="w-[20%] h-[40%] bg-[#3F40EA] text-[#ffff] absolute bottom-[-20%] border-[#D6D5F5]  text-center font-normal text-[25px] cursor-pointer leading-[50px] rounded-tr-[15px] rounded-bl-[15px] border-[2px] left-[-1.1%]">ویرایش</div>
    </div>
    
    )
}
export{Information};