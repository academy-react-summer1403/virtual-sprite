import React from 'react'
import nobody from '@assets/images/mainContent/news/no.jpg'
import eye from '@assets/images/mainContent/news/eye.svg'
import calendar from '@assets/images/mainContent/news/calendar.svg'
import NewsDate from '@common/NewsDate'





const NewsItem = ({ img, newsTitle, describe, view, date, index }) => {
    img === null ? img = nobody : img = img

    return (
        <>
            {index === 0 ?
                <div class='flex flex-col gap-4 p-3 w-[616px] h-[548px] rounded-md '>
                    <img src={img} class='w-[400px] h-[400px] rounded-2xl ' />
                    <div class='flex gap-2 items-center'>
                        <div class='flex items-center gap-1 p-2  bg-[#DAEEFF] rounded-3xl ' >
                            <img src={eye} class=' w-[16px] h-[16px] ' />
                            <h4 class='text-[#2196F3] text-[14px] '> {view} بازدید</h4>
                        </div>
                        <div class='flex items-center justify-center gap-1  p-2  bg-[#DAEEFF] rounded-3xl ' >
                            <img src={calendar} class=' w-[16px] h-[16px] ' />
                            <h4 class='text-[#2196F3] text-[14px] '>
                                <NewsDate dateString={date} />
                            </h4>
                        </div>
                    </div>
                    <h4 class='text-[#263238] text-[32px] text-right '>{newsTitle}</h4>
                    <h4 class='text-[#455A64] text-[16px] text-right'>{describe}</h4>
                </div>
                :
                <div class='flex gap-2 p-3 rounded-md w-[624px] h-[180px]  '>
                    <img src={img} class='w-[180px] h-[180px] rounded-2xl ' />
                    <div class='flex flex-col gap-2 justify-center '>
                        <div className=' flex flex-col flex-wrap text-wrap w-[380px] ' >
                            <h4 class='text-[#263238] text-[32px] text-right text-wrap'>{newsTitle}</h4>
                            <h4 class='text-[#455A64] text-[16px] text-right text-wrap'>{describe}</h4>
                        </div>
                        <div class='flex items-center text-right gap-1'>
                            <div class='flex items-center gap-1 p-2  rounded-3xl ' >
                                <img src={eye} class=' w-[16px] h-[16px] ' />
                                <h4 class='text-[#2196F3] text-[14px] '> {view} بازدید</h4>
                            </div>
                            <div class='flex items-center gap-1 p-2  rounded-3xl ' >
                                <img src={calendar} class=' w-[16px] h-[16px] ' />
                                <h4 class='text-[#2196F3] text-[14px] '>
                                    <NewsDate dateString={date} />
                                </h4>
                            </div>
                        </div>
                    </div >

                </div>
            }

        </>
    )
}

export default NewsItem