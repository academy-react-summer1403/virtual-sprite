import React from 'react';

const DateFormater = ({ dateString }) => {

    // Create a Date object from the string  
    const date = new Date(dateString);

    // Define options for Persian calendar format  
    const options = { year: 'numeric', month: 'long', day: '2-digit', calendar: 'persian' };

    // Format the date in Persian calendar  
    const formattedDate = new Intl.DateTimeFormat('fa-IR', options).format(date);

    return (
        <div >{formattedDate}</div>
    );
};

export default DateFormater;