import React, { useEffect, useState } from "react";
import dore from "../../../assets/images/panel/dore.jpg";
import { ItemArticle } from "./ItemArticle";
import ReactPaginate from "react-paginate";
import { MyFevoritearticle} from "../../../core/services/api/panel/Myfevorite.js"
const FavoriteArticle = () => {
  const [articleList, setArticleList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [RowsOfPage, setRowsOfPage] = useState(5);
  const getFavoritearticle = async () => {
    const article = await MyFevoritearticle();
    setTotalPages(Math.ceil(article?.totalCount / RowsOfPage));
    setArticleList(article.myFavoriteNews);
  };

  useEffect(() => {
    getFavoritearticle();
  }, [RowsOfPage, pageNumber]);

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };
  return (
    <>
      <div className="w-[100%]  h-[10%] mt-[1%]  m-auto flex justify-between leading-[50px] text-[#22445D] text-[20px] bg-[#A4F6DE] rounded-t-[15px]">
        <div className="w-[10%] text-right">حذف </div>
        <div className="w-[14%]  text-center">نویسنده </div>
        <div className="w-[16%] text-center">زمان انتشار </div>
        <div className="w-[13%] text-center">عنوان </div>
        <div className="w-[13%]"></div>
      </div>
      <div className="w-[100%] h-[88%]">
        {articleList.map((item, index) => {
          return (
            <ItemArticle
            key={index}
            dore={item.courseTitle	}
            teacher={item.teacheName}
            img={item.tumbImageAddress}
            id={item.favoriteId	}
            start={item.lastUpdate	}
            level={item.levelName	}
            term={item.typeName	}
            />
          );
        })}
      </div>
      <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="< "
          renderOnZeroPageCount={null}
          className=" h-[3rem] w-[77%] flex gap-1 m-auto justify-center "
          pageClassName=" h-[2.5rem] w-[2.1rem]  hover:border-[1px] hover:border-[#158B68] pt-[0.4rem] text-center hover:rounded-[100%] hover:bg-[#BFF4E4] hover:text-[#158B68]"
          activeClassName="text-[#158B68]"
          previousClassName=" h-[2.5rem] w-[2.1rem] hover:border-[1px] hover:border-[#158B68] pt-[0.4rem] text-center hover:rounded-[100%] hover:bg-[#BFF4E4] hover:text-[#158B68]"
          nextClassName=" h-[2.5rem] w-[2.1rem] hover:border-[1px] hover:border-[#158B68] pt-[0.4rem] text-center  hover:rounded-[100%] hover:bg-[#BFF4E4] hover:text-[#158B68]"
        />
    </>
  );
};
export { FavoriteArticle };
