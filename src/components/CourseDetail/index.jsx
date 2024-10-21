import rec from "@assets/images/CourseDetail/recHtml5.svg";
import heart from "@assets/images/CourseDetail/heart.svg";
import clock from "@assets/images/CourseDetail/clock.svg";
import note from "@assets/images/CourseDetail/note.svg";

import SimilarCourses from "./SimilarCourses";

const CourseDetail = () => {
  return (
    <div class="flex flex-row justify-center items-start p-4 bg-orange-500">
      <div class="flex flex-col flex-wrap justify-center items-center gap-10">
        <div class="flex flex-row flex-wrap justify-center items-start gap-10">
          <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-[800px]">
            <div className="w-full relative">
              <img
                className="w-full h-auto"
                src={rec}
                alt="Course Illustration"
              />
              <div
                class="w-[78px] h-[48px] absolute px-4 py-3 top-[20px] right-[20px] 
                      flex flex-row bg-white rounded-3xl text-[red] gap-[5px] z-20"
              >
                <img class=" h-auto w-[25px] h-[25px]" src={heart} alt="like" />
                <div>12</div>
              </div>
              <div>
                <div
                  class="w-[119px] h-[48px] absolute px-4 py-3 bottom-[30px] left-[30px] 
                      flex flex-row bg-white rounded-3xl text-[#000000] gap-[5px] z-20"
                >
                  <img
                    class=" h-auto w-[25px] h-[25px]"
                    src={clock}
                    alt="like"
                  />
                  <div>14 ساعت</div>
                </div>
                <div
                  class="w-[119px] h-[48px] absolute px-4 py-3 bottom-[30px] left-[160px] 
                    flex flex-row bg-white rounded-3xl text-[#000000] gap-[5px] z-20"
                >
                  <img
                    class=" h-auto w-[25px] h-[25px]"
                    src={note}
                    alt="like"
                  />
                  <div>202 درس</div>
                </div>
              </div>
            </div>
            <div className="h-[100px] shadow-xl bg-white rounded-xl flex items-center justify-center">
              <span>دوره</span>
            </div>
            <div className="h-[100px] shadow-xl bg-white rounded-xl flex items-center justify-center">
              <span>امتیاز</span>
            </div>
            <div className="h-[100px] shadow-xl bg-white rounded-xl flex items-center justify-center">
              <span>توضیحات</span>
            </div>
          </div>

          <div class="flex flex-col gap-[25px]">
            <div className="w-full md:w-1/3 lg:w-[380px] h-[500px] shadow-xl bg-white rounded-xl">
              <div class="text-center" className="heavy-text">مشخصات دوره</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
            <div  className="w-full md:w-1/3 lg:w-[380px] h-[100px] shadow-xl bg-white rounded-xl">
              <span>دکتر بحرالعلوم</span>
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
