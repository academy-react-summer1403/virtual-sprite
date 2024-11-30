import { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { FaRegComments } from "react-icons/fa";
import heart from "@assets/images/CourseDetail/heart.svg";
import whiteHeart from "@assets/images/CourseDetail/whiteHeart.svg";
import {
  AddComment,
  GetCommentApi,
} from "../../core/services/api/courses/comment.js";

const Comment = ({ detail }) => {
  // const [show, setShow] = useState(1);
  const [comment, setComment] = useState(1);

  const courseId = detail.courseId;

  const onSubmit = async (values) => {
    const formdata = new FormData();
    formdata.append("CourseId", id);
    formdata.append("Title", values.Title);
    formdata.append("Describe", values.Describe);

    const commentapi = await AddComment(formdata);
  };

  const GetComment = async (id) => {
    try {
      const result = await GetCommentApi(id);
      console.log("result", result);
      setComment(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   
      GetComment(detail.courseId);
    
  }, [detail?.courseId]);

  return (
    <div className="flex flex-col   ">
      <Formik
        initialValues={{ Describe: "", Title: "" }}
        onSubmit={onSubmit}
        // onSubmit={onSubmit}
      >
        <Form>
          <section className="flex flex-col ">
            <Field
              name="Title"
              placeholder=" نام خود را وارد کنید"
              className="h-[3rem] border-[1px] text-[font color 3] border-[#CFD8DC]  w-[43rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
            />
            <Field
              name="Describe"
              placeholder="نظر خود را بنویسید"
              className="h-[7rem] border-[1px] text-[font color 3] border-[#CFD8DC]  w-[43rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
            />

            <button
              type="submit"
              className="text-white w-[8rem] m-auto bg-[#2196F3]  text-[1.2rem]  mt-[1rem]  rounded-[20px]"
            >
              ثبت نظرات
            </button>
          </section>
          <section className="flex flex-col w-[97%] m-auto mt-[30px] border-t">
            <div className="w-[100%] h-[40px] flex justify-between mt-[10px]">
              <div className="flex w-[30%]">
                <img className="border rounded-[100%] w-[40px] h-[40px] mt-[1%]" />
                <p className="leading-[48px] pr-1  text-[16px]">gdghjhk</p>
              </div>
              <div className="text-[#607D8B] text-[14px] text-left leading-[48px] w-[10%] ">
                njm m
              </div>
            </div>
            <div className="w-[100%] text-[#455A64] text-right mt-[10px]">
              kjkjnjmkn
            </div>
            <div className="w-[25%] h-[30px] flex mt-[2%] cursor-pointer">
              <img
                src={detail.isUserFavorite === false ? whiteHeart : heart}
                className="w-[20px] h-[20px]"
              />
              <div className="flex mr-[10px] text-[14px] text-[#455A64]">
                پاسخ ها
                <FaRegComments className="mr-[2px]" />
              </div>
            </div>
          </section>
          {/* <section className={ show==1 ? "hidden" : "flex flex-col w-[97%] m-auto bg-[red] mt-[30px]"}>

          </section> */}
          <section className="flex flex-col w-[90%] m-auto  mt-[30px] pr-[15px] border-r">
            <div className="w-[100%] h-[40px] flex justify-between mt-[10px] ">
              <div className="flex w-[30%]">
                <img className="border rounded-[100%] w-[40px] h-[40px] mt-[1%]" />
                <p className="leading-[48px] pr-1  text-[16px]">gdghjhk</p>
              </div>
              <div className="text-[#607D8B] text-[14px] text-left leading-[48px] w-[10%] ">
                njm m
              </div>
            </div>
            <div className="w-[100%] text-right mt-[10px]">
              <p className="text-[#2196F3]"></p>
              <p className="text-[#455A64]">mklk,mk,mm</p>
            </div>
            <div className="w-[25%] h-[30px] flex mt-[2%] cursor-pointer">
              <img
                src={detail.isUserFavorite === false ? whiteHeart : heart}
                className="w-[20px] h-[20px]"
              />
            </div>
          </section>
        </Form>
      </Formik>
    </div>
  );
};
export { Comment };
