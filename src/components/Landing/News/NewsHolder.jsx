import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import { getTopNews } from '@core/services/api/news/newsTop.api';
import NewsItem from './NewsItem';
import Btn from '@common/Btn';

const NewsHolder = () => {
    const [topNews, setTopNews] = useState([]);

    const getNews = async () => {
        const result = await getTopNews();
        setTopNews(result.news);
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div className='mb-16 -mt-20'>
            <Title title={"اخبار و مقالات"} />
            <div className='flex flex-wrap gap-5 justify-center my-8'>
                {topNews.length > 0 && (
                    <>
                        <div className='flex gap-5' key={topNews[0].id}>
                            <NewsItem
                                index={0}
                                img={topNews[0].currentImageAddressTumb}
                                newsTitle={topNews[0].title}
                                describe={topNews[0].miniDescribe}
                                view={topNews[0].currentView}
                                date={topNews[0].insertDate}
                            />
                        </div>
                        <div className='flex flex-col gap-5'>
                            {topNews.slice(1).map((item, index) => (
                                <NewsItem
                                    index={index + 1}  
                                    img={item.currentImageAddressTumb}
                                    newsTitle={item.title}
                                    describe={item.miniDescribe}
                                    view={item.currentView}
                                    date={item.insertDate}
                                    key={item.id}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <Btn insideText={"مشاهده همه"} />
        </div>
    );
};

export default NewsHolder;