// import rec from "@assets/images/CourseDetail/recHtml5.svg";
import noPhoto from "@assets/images/mainContent/topcourses/no.jpg";
import heart from "@assets/images/CourseDetail/heart.svg";
import whiteHeart from "@assets/images/CourseDetail/whiteHeart.svg";
import clock from "@assets/images/CourseDetail/clock.svg";
import note from "@assets/images/CourseDetail/note.svg";
import stuCount from "@assets/images/CourseDetail/stuCount.svg";
import courseStatus from "@assets/images/CourseDetail/courseStatus.svg";
import startDate from "@assets/images/CourseDetail/startDate.svg";
import endDate from "@assets/images/CourseDetail/endDate.svg";
import drBahr from "@assets/images/CourseDetail/drBahr.png";
import teacher from "@assets/images/CourseDetail/teacher.svg";
import emptyStar from "@assets/images/CourseDetail/emptyStar.svg";
import fillStar from "@assets/images/CourseDetail/fillStar.svg";
import like0 from "@assets/images/CourseDetail/like0.svg";
import like1 from "@assets/images/CourseDetail/like1.svg";
import dislike0 from "@assets/images/CourseDetail/dislike0.svg";
import dislike1 from "@assets/images/CourseDetail/dislike1.svg";
import Btn from "../common/Btn";
import SimilarCourses from "./SimilarCourses";
import { useState, useEffect } from "react";
import { Notification } from "@mantine/core";


import {
  Addcourse,
  Addfavorite,
  AddLikeApi,
  DisLikeApi,
} from "../../core/services/api/courses/courseDetail.api";
import { courseDetailById } from "../../core/services/api/courses/courseDetailById.api";
import { useParams } from "react-router-dom";
import { data } from "autoprefixer";
import ConvertToPersianDate from "../common/PersianDate";
import { Describe } from "./Describe";
import { Comment } from "./Comment";
import { AddComment } from "../../core/services/api/courses/comment";

const CourseDetail = () => {
  const [top, settop] = useState(2);
  const [detail, setDetail] = useState([]);

  const updatetop = (id) => {
    settop(id);
  };

  const token = localStorage.getItem("token");
  const { id } = useParams();

  const getDetails = async () => {
    const result = await courseDetailById(id);
    console.log("course detail", result);
    setDetail(result);
  };
  useEffect(() => {
    getDetails();
  }, [id]);

  const AddLike = async () => {
    const Likeapi = await AddLikeApi(id);
    getDetails();
  };

  const DisLike = async () => {
    const Disapi = await DisLikeApi(id);
    getDetails();
  };

  const AddCourseapi = async () => {
    const obj = { courseId: id };
    console.log("obj add reserve", obj);
    if (token) {
      const res = await Addcourse(obj);
      console.log("result add reserve", res);
    } else {
      console.log("توکن وجود ندارد");
    }
  };
  const Addfavoriteapi = async () => {
    const obj = { courseId: id };
    if (token) {
      const res = await Addfavorite(obj);
      if (res) {
        console.log("response", res);
      }
    } else {
      return <Notification>لطفا لاگین کنید</Notification>;
    }
  };

  return (
    <div class="flex flex-row justify-center items-start p-4 bg-[#ffffffd7]">
      <div class="flex flex-col flex-wrap justify-center items-center gap-10 ">
        <div class=" flex flex-row flex-wrap justify-center items-start gap-10 ">
          <div className="flex flex-col gap-4 w-1/2 md:w-1/2 lg:w-[800px]  ">
            <div className="w-full relative">
              <img
                className="w-[100%]  h-[550px]  rounded-[20px]"
                // src={detail.imageAddress == null ?  noPhoto : detail.imageAddress}
              />

              <button
                class="w-[10rem] h-[48px] absolute px-4 py-3 top-[20px] right-[20px] 
                      flex flex-row bg-[#ffff] rounded-[50px] text-[red] gap-[5px] z-20"
              >
                مورد علاقه ها
                <img
                  className="w-[25px] h-[25px] cursor-pointer"
                  src={Addfavoriteapi.success === false ? whiteHeart : heart}
                  onClick={() => Addfavoriteapi()}
                />
              </button>
              <div>
                <div
                  class="w-[119px] h-[48px] absolute px-3 py-3 bottom-[30px] left-[30px] 
                      flex flex-row bg-white rounded-3xl text-[#000000] gap-[5px] z-20"
                >
                  <img class=" w-[25px] h-[25px]" src={clock} alt="ساعت" />
                  <div>{ConvertToPersianDate(detail.insertDate)}</div>
                </div>
                <div
                  class="w-[119px] h-[48px] absolute px-4 py-3 bottom-[30px] left-[160px] 
                    flex flex-row bg-white rounded-3xl text-[#000000] gap-[5px] z-20"
                >
                  <img class=" w-[25px] h-[25px]" src={note} alt="یادداشت" />
                  <div>202 درس</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-start items-start">
              <div className="bold-text">
                <h3 class="text-[32px] leading[49.6]">{detail.title} </h3>
              </div>
              <div>
                <p class="text-right">{detail.miniDescribe}</p>
              </div>
            </div>
            <div className="h-[100px] flex items-center justify-between">
              <div class="flex flex-col sm:flex-row gap-4 items-center">
                <div class="flex flex-row gap-2">
                  <img
                    class="w-5 h-5 sm:w-6 sm:h-6"
                    src={emptyStar}
                    alt="ستاره توخالی"
                  />
                  <img
                    class="w-5 h-5 sm:w-6 sm:h-6"
                    src={fillStar}
                    alt="ستاره"
                  />
                  <img
                    class="w-5 h-5 sm:w-6 sm:h-6"
                    src={fillStar}
                    alt="ستاره"
                  />
                  <img
                    class="w-5 h-5 sm:w-6 sm:h-6"
                    src={fillStar}
                    alt="ستاره"
                  />
                  <img
                    class="w-5 h-5 sm:w-6 sm:h-6"
                    src={fillStar}
                    alt="ستاره"
                  />
                </div>

                <div class="flex flex-row justify-center items-center text-sm sm:text-base md:text-lg lg:text-xl">
                  امتیاز {detail.currentRate} نفر
                </div>
                {/* 
                <Btn insideText={"ثبت دیدگاه"} /> */}
              </div>

              <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-3">
                <div class="flex justify-center items-center text-sm sm:text-base">
                  آیا از این دوره راضی بودید؟
                </div>

                <div
                  class="flex flex-row justify-center items-center gap-2 bg-[#ECEFF1] rounded-[50px] w-[5rem] h-[3rem]"
                  onClick={AddLike}
                >
                  <img
                    class="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer "
                    src={AddLike.success === true ? like0 : like1}
                  />
                  <span class="text-sm sm:text-base">{detail.likeCount}</span>
                  {/* <FaThumbsDown color={detail.currentUserLike === "0" ? "black" : "white"}/> */}
                </div>

                <div
           onClick={DisLike}
                  class="flex flex-row justify-center items-center gap-2 bg-[#ECEFF1] rounded-[50px] w-[5rem] h-[3rem]"
                >
                  <img
                    class="w-5 h-5 sm:w-6 sm:h-6"
                    src={
                      DisLike.success === true ? dislike0 : dislike1
                    }
                  />
                  <span class="text-sm sm:text-base">
                    {detail.dissLikeCount}
                  </span>
                </div>
              </div>
            </div>

            <div className="shadow-xl bg-white rounded-xl flex flex-col items-start justify-center gap-10 p-10">
              <div className="w-[40%] h-[60px] border-b-[1px] border-b-[#ECEFF1] mt-[1%]  cursor-pointer  text-center leading-[50px] flex text-[#607D8B] text-[23px]">
                <div
                  className={
                    top == 1
                      ? "w-[50%] h-[100%] text-[#2196F3] border-b-[#2196F3] border-b-[3px]"
                      : "w-[50%] h-[100%] "
                  }
                  onClick={() => {
                    updatetop(1);
                  }}
                >
                  توضیحات
                </div>
                <div
                  className={
                    top == 2
                      ? "w-[50%] h-[100%] text-[#2196F3] border-b-[#2196F3] border-b-[3px]"
                      : "w-[50%] h-[100%] "
                  }
                  onClick={() => {
                    updatetop(2);
                  }}
                >
                  نظرات کاربران
                </div>
              </div>
              <div className="w-[95%] h-[85%] m-auto rounded-[15px]">
                <div className={top == 1 ? "w-[100%] h-[90%]" : "hidden"}>
                  <Describe detail={detail} />
                </div>

                <div className={top == 2 ? "w-[100%] h-[90%]" : "hidden"}>
                  <Comment detail={detail} />
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-[25px]">
            <div
              class="flex flex-col justify-around items-center w-full md:w-1/3 lg:w-[380px] h-[500px] min-w-[380px] 
                       shadow-xl bg-[#FFFFFF] rounded-xl"
            >
              <div className="heavy-text">مشخصات دوره</div>
              <div class="w-full flex flex-row justify-between px-10">
                <div class="flex flex-row gap-1 items-center">
                  <img
                    class=" w-[25px] h-[25px]"
                    src={stuCount}
                    alt="تعداد دانشجو"
                  />
                  تعداد دانشجو
                </div>
                <div>27</div>
              </div>
              <div class="w-full flex flex-row justify-between px-10">
                <div class="flex flex-row gap-1 items-center">
                  <img
                    class=" w-[25px] h-[25px]"
                    src={courseStatus}
                    alt="وضعیت دوره "
                  />
                  وضعیت دوره
                </div>
                <div>در حال برگزاری</div>
              </div>
              <div class="w-full flex flex-row justify-between px-10">
                <div class="flex flex-row gap-1 items-center">
                  <img
                    class=" w-[25px] h-[25px]"
                    src={startDate}
                    alt="تاریخ شروع"
                  />
                  تاریخ شروع
                </div>
                <div>{ConvertToPersianDate(detail.startTime)}</div>
              </div>
              <div class="w-full flex flex-row justify-between px-10">
                <div class="flex flex-row gap-1 items-center">
                  <img
                    class=" w-[25px] h-[25px]"
                    src={endDate}
                    alt="تاریخ پایان"
                  />
                  تاریخ پایان
                </div>
                <div>{ConvertToPersianDate(detail.endTime)}</div>
              </div>

              <div class="w-full  flex flex-row justify-between px-10">
                <button
                  className="bg-[#2196F3] text-white "
                  onClick={() => AddCourseapi()}
                >
                  شرکت در دوره
                </button>

                <div class="flex flex-row justify-center items-center">
                  {detail.cost} تومان
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full md:w-1/3 lg:w-[380px] h-[100px] shadow-xl bg-white rounded-xl">
              <div class="flex flex-row justify-center items-center pl-[16px] pr-[24px]">
                <img class="w-[64px] h-[64px] " src={drBahr} alt="استاد  " />
              </div>

              <div class="flex flex-col grow justify-center items-center">
                <div class="w-full flex flex-row justify-start items-center gap-1 ">
                  <div class="flex flex-center items-start rounded-[16px]">
                    <img
                      class="w-[17.52px] h-[16px]"
                      src={teacher}
                      alt="استاد"
                    />
                  </div>
                  <div class="flex flex-row items-center">
                    {detail.teacherName}{" "}
                  </div>
                </div>
                <div class="w-full flex flex-row justify-start items-start">
                  برنامه نویسی فرانت و بکند
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full shadow-xl bg-white rounded-xl flex items-center justify-center">
          <SimilarCourses />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
