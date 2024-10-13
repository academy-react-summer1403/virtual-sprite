import React from 'react'
// import sabad from "@assets/images/header/sabad.png"
import hexa from '@assets/images/header/hexa.svg'
import { useState } from 'react'
import Btn from '@components/common/Btn'

const Header = () => {

    const [hList, setHlist] = useState(
        [
            { title: "دوره ها" },
            { title: "اساتید" },
            { title: "ارتباط با ما" },
            { title: "اخبار مقالات" },
        ]
    );

    return (
        <div class="container mx-auto flex justify-between items-center bg-transparent ">
            <div class="flex gap-1 mr-12 items-center ">
                <h2 class='text-[#263238] text-[19px] font-bold ' >Virtual Sprite</h2>
                <img src={hexa} class="w-[43px] h-[30px]" />
            </div>
            <ul class="flex gap-10 items-center ">
                {hList.map((item, index) => {
                    return <li key={index} class="cursor-pointer text-[#263238]">
                        {item.title}
                    </li>
                })}
            </ul>
            <div class="flex gap-4 ml-12">
                {/* <img src={sabad} class=" h-20 w-20" /> */}
                <Btn insideText={"ورود به حساب"} />
            </div>
        </div>
    )
}

export default Header