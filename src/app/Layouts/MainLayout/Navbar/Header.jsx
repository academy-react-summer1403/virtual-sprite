import React from 'react'
// import sabad from "@assets/images/header/sabad.png"
import hexa from '@assets/images/header/hexa.svg'
import Btn from '@components/common/Btn'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div class="container mx-auto flex justify-between items-center bg-transparent pt-5 ">
            <div class="flex gap-1 mr-20 items-center ">
                <h2 class='text-[#263238] text-[19px] font-bold ' >Virtual Sprite</h2>
                <img src={hexa} class="w-[43px] h-[30px]" />
            </div>
            <ul class="flex gap-10 items-center ">
                <li >
                    <NavLink to="/courselist1"
                        className={({ isActive }) => `${isActive && "gradient-border"}
                    text-[#263238] text-[16px] transition duration-300 hover:text-[#2196F3]`} >
                        دوره ها
                    </NavLink>
                </li>
                <li className='text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]' >اساتید</li>
                <li className='text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]' >ارتباط با ما</li>
                <li className='text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]' >اخبار مقالات</li>
            </ul>
            <div class="flex gap-4 ml-20">
                {/* <img src={sabad} class=" h-20 w-20" /> */}
                <Btn insideText={"ورود به حساب"} />
            </div>
        </div>
    )
}

export default Header