import React from 'react'

const Services = ({img, title , desc}) => {
    return (
        <div class="container border-[1px] bg-[#fafbfc] hover:bg-[#ffff] hover:shadow-lg transition delay-90 cursor-pointer border-[#CFD8DC]  w-[405px] h-[260px] flex flex-col justify-center align-center items-center gap-3 p-3 rounded-xl">
            <img src={img} class="w-[80px] h-[80px] " />
            <h2 class='text-lg text-[#263238]' >{title}</h2>
            <p class='text-[15px] text-[#455A64]' >{desc}</p>
        </div>
    )
}

export default Services