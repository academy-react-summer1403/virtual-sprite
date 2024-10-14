import React from 'react'

const Title = ({title}) => {
    return (
        <div class='inline-block mb-10' >
            <p class='text-[#263238] text-[40px] mt-10  py-1 px-14 '  >
                {title}
            </p>
            <div class='h-[4px] bg-gradient-to-r from-transparent via-[#2196F366] to-transparent' >
            </div>
        </div>
    )
}

export default Title