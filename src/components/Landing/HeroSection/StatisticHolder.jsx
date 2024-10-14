import React from 'react'
import right from '@assets/images/HeroSection/1.svg'
import mid from '@assets/images/HeroSection/2.svg'
import left from '@assets/images/HeroSection/3.svg'
import { useState } from 'react'
import StatisticItem from './StatisticItem'

const StatisticHolder = () => {
    const [statistic, setStatistic] = useState(
        [
            { img: right, num: "167", type: 'مدرس مجرب' },
            { img: mid , num: "408,228", type: 'دقیقه آموزش' },
            { img: left, num: "460,789", type: 'نفر دانشجو' },
        ]
    );
    return (
        <div class='flex justify-center gap-8 mb-[200px]' > {statistic.map((item, index) => {
            return <StatisticItem
                key={index}
                img= {item.img}
                num={item.num}
                type={item.type}
            />
        })} </div>
    )
}

export default StatisticHolder