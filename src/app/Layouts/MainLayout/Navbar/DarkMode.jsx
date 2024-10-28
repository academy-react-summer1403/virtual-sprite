import React, { useEffect, useState } from 'react';
import sun from '@assets/images/darkmode/sun.png';
import moonIcon from '@assets/images/darkmode/moon.png';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('dark-mode') === 'true');

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode); // افزودن کلاس dark به body  
        localStorage.setItem('dark-mode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    return (
        <div onClick={toggleDarkMode} className="flex items-center p-2 cursor-pointer">
            <img
                src={darkMode ? sun : moonIcon}
                className="w-12 h-12"
            />
        </div>
    );
}

export default DarkMode;