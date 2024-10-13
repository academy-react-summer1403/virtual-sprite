import React from 'react'

const CourseCatItem = () => {
    return (
        <div class='flex gap-5'>

            <div class='flex flex-col justify-start gap-6 p-3'>

                <div class='flex flex-col justify-center items-center  gap-4 py-2 shadow-xl bg-[#FFFFFF] rounded-xl ' >
                    <img src={analyze} class='w-[104px] h-[104px] bg-[#F1F7FF] rounded-xl ' />
                    <h2 class='text-[#263238] text-[21px] ' >تحلیل داده</h2>
                    <p class='text-[#455A64] text-[16px] w-[85%]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است</p>
                </div>
                <div class='flex flex-col justify-center items-center  gap-4 py-2 shadow-xl bg-[#FFFFFF] rounded-xl ' >
                    <img src={security} class='w-[104px] h-[104px] bg-[#DEFFEE] rounded-xl ' />
                    <h2 class='text-[#263238] text-[21px] ' >امنیت شبکه</h2>
                    <p class='text-[#455A64] text-[16px] w-[85%] '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است</p>
                </div>

            </div>
            <div class='flex flex-col justify-end gap-6 p-3'>
                <div class='flex flex-col justify-center items-center  gap-4 py-2 shadow-xl bg-[#FFFFFF] rounded-xl ' >
                    <img src={game} class='w-[104px] h-[104px] bg-[#FFF7E3] rounded-xl ' />
                    <h2 class='text-[#263238] text-[21px] ' >بازی</h2>
                    <p class='text-[#455A64] text-[16px] w-[85%]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است</p>
                </div>
                <div class='flex flex-col justify-center items-center  gap-4 py-2 shadow-xl bg-[#FFFFFF] rounded-xl ' >
                    <img src={web} class='w-[104px] h-[104px] bg-[#FFF2F8] rounded-xl ' />
                    <h2 class='text-[#263238] text-[21px] ' >وب دیزاین</h2>
                    <p class='text-[#455A64] text-[16px] w-[85%]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است</p>
                </div>
            </div>
        </div>
    )
}

export default CourseCatItem