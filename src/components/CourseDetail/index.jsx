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
import { Addcourse, courseDetail } from "../../core/services/api/courses/courseDetail.api";
import { courseDetailById } from "../../core/services/api/courses/courseDetailById.api";
import { useParams } from "react-router-dom";
import { data } from "autoprefixer";
import ConvertToPersianDate from '../common/PersianDate'

const CourseDetail = () => {
  // const currentUserLike = 0;

  const [detail, setDetail] = useState([]);
  const token = localStorage.getItem("token");
  const { id } = useParams();
  // console.log(id);
  const getDetails = async () => {
    if (token) {
      const result = await courseDetailById(id);
      console.log("course detail", result);
      setDetail(result);
    } else {
      console.log("توکن وجود ندارد");
    }
  };
  useEffect(() => {
    getDetails();
  }, [id]);
  
  const AddCourseapi=async()=>{
    const courseId="id";
    if (courseId) {  const res = await Addcourse(courseId);
      console.log("course rezarve", res);
    }
   
    else {
      console.log("توکن وجود ندارد");
    }
  }; 

  return (
    <div class="flex flex-row justify-center items-start p-4">
      <div class="flex flex-col flex-wrap justify-center items-center gap-10">
        <div class=" flex flex-row flex-wrap justify-center items-start gap-10">
          <div className="flex flex-col gap-4 w-1/2 md:w-1/2 lg:w-[800px] ">
            <div className="w-full relative">
              <img className="w-full h-[500px] rounded-[20px]" src={detail.imageAddress? detail.imageAddress : noPhoto} alt="HTML" />
              <div
                class="w-[78px] h-[48px] absolute px-4 py-3 top-[20px] right-[20px] 
                      flex flex-row bg-white rounded-3xl text-[red] gap-[5px] z-20"
              >
                <img
                  className="w-[25px] h-[25px]"
                  src={detail.isUserFavorite === false ? whiteHeart : heart}
                  alt="علاقمندی"
                />
                <div>{detail.likeCount}</div>
              </div>
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
                <p class="text-right">
                  محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
                  پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین
                  کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل
                  مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی
                  جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز.
                </p>
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
                  امتیاز 20 نفر
                </div>

                <Btn insideText={"ثبت دیدگاه"} />
              </div>

              <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-3">
                <div class="flex justify-center items-center text-sm sm:text-base">
                  آیا از این دوره راضی بودید؟
                </div>

                <div class="flex flex-row justify-center items-center gap-2">
                  <img
                    class="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer "
                    src={detail.currentUserLike === "0" ? like0 : like1}
                    alt="لایک"
                  />
                  <span class="text-sm sm:text-base">{detail.likeCount}</span>
                  {/* <FaThumbsDown color={detail.currentUserLike === "0" ? "black" : "white"}/> */}
                </div>

                <div class="flex flex-row justify-center items-center gap-2">
                  <img
                    class="w-5 h-5 sm:w-6 sm:h-6"
                    src={
                      detail.currentUserDissLike === "0" ? dislike0 : dislike1
                    }
                    alt="دیسلایک"
                  />
                  <span class="text-sm sm:text-base">
                    {detail.dissLikeCount}
                  </span>
                </div>
              </div>
            </div>

            <div className="shadow-xl bg-white rounded-xl flex flex-col items-start justify-center gap-10 p-10">
              <div class="">توضیحات</div>
              <div>
                <div className="bold-text  py-5">
                  <h3 class="text-[20px] leading[31] text-right">
                    آموزش رایگان html
                  </h3>
                </div>
                <div>
                  <p class="text-[16px] leading[24.8] text-right">
                    محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
                    پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین
                    کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل
                    مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی
                    جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز.
                  </p>
                </div>
              </div>
              <div>
                <div className="bold-text py-5">
                  <h3 class="text-[20px] leading[31] text-right">
                    اموزش رایگان html برای چه کسانی مناسب است ؟
                  </h3>
                </div>
                <div>
                  <p class="text-[16px] leading[24.8] text-right">
                    محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
                    پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین
                    کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل
                    مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی
                    جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛
                  </p>
                  <p class="text-right">
                    محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
                    پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین
                    کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل
                    مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی
                    جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛
                  </p>
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
              <div class="w-full flex flex-row justify-between px-10">
                <div>
                  <Btn onclick={AddCourseapi()} insideText={"شرکت در دوره"} />
                </div>
                <div class="flex flex-row justify-center items-center">
                  500000 تومان
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
