import React, { useState } from 'react';
import hexa from '@assets/images/header/hexa.svg';
import Btn from '@components/common/Btn';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import DarkMode from './DarkMode';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const headerBgClass = isHomePage ? 'bg-[#e3f2fd]' : 'bg-transparent';

    // State to control mobile menu open/close  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`container mx-auto flex justify-between items-center dark:bg-[#2c333a] ${headerBgClass} pt-5 px-4 md:px-8 lg:px-16`}>
            <div className="hidden md:flex gap-1 items-center cursor-pointer" onClick={() => navigate('/')}>
                <img src={hexa} className="w-[43px] h-[30px]" alt="Logo" />
                <h2 className='text-[#263238] dark:text-[#f1f2f4] text-[19px] font-bold'>Virtual Sprite</h2>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-10 items-center">
                <li>
                    <NavLink
                        to="/courselist1"
                        className={({ isActive }) => `${isActive ? "gradient-border" : ""} text-[#263238] dark:text-[#f1f2f4] text-[16px] transition duration-300 hover:text-[#2196F3]`}
                    >
                        دوره ها
                    </NavLink>
                </li>
                <li className='text-[#263238] dark:text-[#f1f2f4] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]'>اساتید</li>
                <li className='text-[#263238] dark:text-[#f1f2f4] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]'>ارتباط با ما</li>
                <li className='text-[#263238] dark:text-[#f1f2f4] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]'>اخبار مقالات</li>
            </ul>

            {/* Mobile Hamburger Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#263238] focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[75px] right-0 bg-white shadow-lg rounded-lg z-50 w-48 md:hidden">
                    <ul className="flex flex-col p-4">
                        <li className="py-2">
                            <NavLink
                                to="/courselist1"
                                className={({ isActive }) => `${isActive ? "gradient-border" : ""} text-[#263238] text-[16px] transition duration-300 hover:text-[#2196F3]`}
                            >
                                دوره ها
                            </NavLink>
                        </li>
                        <li className="py-2">
                            <span className='text-[#263238] text-[16px]  transition duration-300 cursor-pointer hover:text-[#2196F3]'>اساتید</span>
                        </li>
                        <li className="py-2">
                            <span className='text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]'>ارتباط با ما</span>
                        </li>
                        <li className="py-2">
                            <span className='text-[#263238] text-[16px] transition duration-300 cursor-pointer hover:text-[#2196F3]'>اخبار مقالات</span>
                        </li>
                    </ul>
                </div>
            )}

            <div className="flex gap-0 ml-4">
                <DarkMode />
                <Btn insideText={"ورود به حساب"} />
            </div>
        </div>
    );
}

export default Header;