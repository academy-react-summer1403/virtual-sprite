// DateFormatter.js  
import React from 'react';

const NewsDate = ({ dateString }) => {
    // Create a Date object from the string  
    const date = new Date(dateString);

    // Convert to Persian calendar  
    const persianYear = date.getFullYear() - 621; // Roughly adjust for Persian year  
    const persianMonth = date.getMonth() + 1; // Months are 0-based in JS  
    const persianDay = date.getDate(); // Day of the month  

    // Function to handle month conversion  
    const convertMonth = (month) => {
        // Here we can adjust based on a more precise conversion logic if needed  
        if (month < 3) return month + 9; // Shahrivar or sooner  
        return month - 3; // After Nowruz  
    };

    const adjustedMonth = convertMonth(persianMonth);

    // Format as YYYY/MM/DD  
    const formattedDate = `${persianYear}/${String(adjustedMonth).padStart(2, '0')}/${String(persianDay).padStart(2, '0')}`;

    return (
        <div>{formattedDate}</div>
    );
};


export default NewsDate;