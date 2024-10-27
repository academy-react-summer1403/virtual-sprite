import React from 'react';
import nobody from '@assets/images/mainContent/news/no.jpg';
import eye from '@assets/images/mainContent/news/eye.svg';
import calendar from '@assets/images/mainContent/news/calendar.svg';
import NewsDate from '@common/NewsDate';

const NewsItem = ({ img, newsTitle, describe, view, date, index }) => {
    // Fallback image if none is provided  
    img = img || nobody;

    const isFeatured = index === 0;

    return (
        <div className={`flex flex-col gap-4 p-3 rounded-md ${isFeatured ? 'w-full md:w-[616px] h-[548px]' : 'w-full md:w-[624px] h-[180px]'}`}>
            {isFeatured ? (
                <>
                    <img src={img} className='w-full h-[340px] rounded-2xl object-cover' alt={newsTitle} />
                    <div className='flex gap-2 items-center'>
                        <div className='flex items-center gap-1 p-2 bg-[#DAEEFF] rounded-3xl'>
                            <img src={eye} className='w-[16px] h-[16px]' alt="Views" />
                            <h4 className='text-[#2196F3] text-[14px]'>{view} بازدید</h4>
                        </div>
                        <div className='flex items-center justify-center gap-1 p-2 bg-[#DAEEFF] rounded-3xl'>
                            <img src={calendar} className='w-[16px] h-[16px]' alt="Date" />
                            <h4 className='text-[#2196F3] text-[14px]'>
                                <NewsDate dateString={date} />
                            </h4>
                        </div>
                    </div>
                    <h4 className='text-[#263238] text-[24px] md:text-[32px] text-right'>{newsTitle}</h4>
                    <h4 className='text-[#455A64] text-[14px] md:text-[16px] text-right'>{describe}</h4>
                </>
            ) : (
                <div className='flex gap-2'>
                    <img src={img} className='w-[224px] h-[161px] rounded-2xl object-cover' alt={newsTitle} />
                    <div className='flex flex-col justify-center w-full'>
                        <div className='flex flex-col flex-wrap text-wrap'>
                            <h4 className='text-[#263238] text-[20px] md:text-[32px] text-right text-wrap'>{newsTitle}</h4>
                            <h4 className='text-[#455A64] text-[12px] md:text-[16px] text-right text-wrap'>{describe}</h4>
                        </div>
                        <div className='flex items-center text-right gap-1'>
                            <div className='flex items-center gap-1 p-2 bg-[#DAEEFF] rounded-3xl'>
                                <img src={eye} className='w-[16px] h-[16px]' alt="Views" />
                                <h4 className='text-[#2196F3] text-[14px]'>{view} بازدید</h4>
                            </div>
                            <div className='flex items-center gap-1 p-2 bg-[#DAEEFF] rounded-3xl'>
                                <img src={calendar} className='w-[16px] h-[16px]' alt="Date" />
                                <h4 className='text-[#2196F3] text-[14px]'>
                                    <NewsDate dateString={date} />
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsItem;