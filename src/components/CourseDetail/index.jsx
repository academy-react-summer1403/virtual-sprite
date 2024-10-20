import React from "react";
import rec from "@assets/images/CourseDetail/recHtml5.svg";
const CourseDetail = () => {
  return (
    <div>
      <div
        class="flex w-screen flex-row flex-wrap justify-center items-top 
        p-[20px] box-border gap-4"
      >
        <div class="flex flex-col flex-wrap gap-4">
          <div class="w-[800px]">
            <img class="bg-contain" src={rec}></img>
          </div>
          <div class="w-[800px] h-[100px] shadow-xl bg-[#FFFFFF] rounded-xl ">
              دوره
            </div>
            <div class="w-[800px] h-[100px] shadow-xl bg-[#FFFFFF] rounded-xl ">
              امتیاز
            </div>
            <div class="w-[800px] h-[100px] shadow-xl bg-[#FFFFFF] rounded-xl ">
              توضیحات
            </div>
        </div>
        <div class="w-[400px] h-[600px] shadow-xl bg-[#FFFFFF] rounded-xl ">
          مشخصات دوره
        </div>
        <div class="w-[1200px] h-[55px] shadow-xl bg-[#FFFFFF] rounded-xl ">
          اسلایدر دوره های مشابه
        </div>
        {/* <div class="w-[800px] flex flex-row flex-wrap
          gap-40 justify-center items-center shadow-xl" >
            

            
          </div> */}

        {/*
         */}

        {/* <div class="flex flex-col justify-center items-center gap-4 py-2 w-[843px] h-[320px] shadow-xl bg-[#FFFFFF] rounded-xl "> */}
        {/* <img
       src={analyze}
       class="w-[104px] h-[104px] bg-[#F1F7FF] rounded-xl "
     /> */}
        {/* <h2 class="text-[#263238] text-[21px] ">تحلیل داده</h2> */}
        {/* <p class="text-[#455A64] text-[16px] w-[85%]">
       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
       از طراحان گرافیک است
     </p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CourseDetail;
