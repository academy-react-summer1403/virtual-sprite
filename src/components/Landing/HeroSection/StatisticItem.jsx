import React from 'react'

const StatisticItem = ({img, num , type}) => {
  return (
    <div class= "container border-4 border-white bg-white/[60%] w-[190px] h-[180px] flex flex-col justify-center align-center items-center gap-2 rounded-lg">
        <img src={img} class="w-[64px] h-[64px] "/>
        <h2 class='text-xl text-[#263238]' >{num}</h2>
        <h4 class='text-xl text-[#455A64]' >{type}</h4>
    </div>
  )
}

export default StatisticItem