import { Accordion, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import whiteHeart from "@assets/images/CourseDetail/whiteHeart.svg";
import { FaComments } from "react-icons/fa6";
import {
  GetReplyApi,
  PostReply,
} from "../../core/services/api/courses/comment.js";
import { useDispatch, useSelector } from "react-redux";
import { handlecomment } from "../../redux/CommentSlice.js";
import CommentSlice from "../../redux/CommentSlice.js";
const CommentItemm = ({ item, detail, comments, GetComment }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [replies, setReplies] = useState({});
  const dispatch = useDispatch();
  const onSubmitReply = async (values, commentId) => {
    const formData = new FormData();
    formData.append("CommentId", commentId);
    formData.append("CourseId", item.courseId);
    formData.append("Title", values?.Title);
    formData.append("Describe", values?.Describe);

    try {
    //  const replyapi = await PostReply(formData);
    //   GetComment();
    //   if(replyapi.success === true){
    //     dispatch(handlecomment(formData));
      
    //   }
    const replyapi = await PostReply(formData);
    if (replyapi.success === true) {
    
      const newComment = {
        commentId,
        courseId: item.courseId,
        title: values?.Title,
        describe: values?.Describe,
      };
      dispatch(handlecomment(newComment)); 
      GetComment(); 
    }
    } catch (error) {
      console.error("Error submitting your reply. Please try again.");
    }
   
  };
const comment =useSelector (state => state.CommentSlice.comment);
console.log("comment",comment)
  const getReplyForComment = async (commentId) => {
    try {
      const result = await GetReplyApi(detail.courseId, commentId);
      console.log(`Replies for comment`, result);
      setReplies((prevReplies) => ({
        ...prevReplies,
        [commentId]: result,
      }));
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };
  

  useEffect(() => {
    if (comments && comments.length > 0) {
      comments.forEach((comment) => {
        if (!replies[comment.id]) {
          getReplyForComment(comment.id);
        }
      });
    }
  }, [comments]);

  return (
    <section className="flex flex-col w-[97%] m-auto mt-[30px] border-t h-auto">
      <div className="w-[100%] h-[40px] flex justify-between mt-[10px]">
        <div className="flex w-[30%]">
          <img
            src={item.pictureAddress}
            className="border rounded-[100%] w-[40px] h-[40px] mt-[1%]"
            alt="User"
          />
          <p className="leading-[48px] pr-1 text-[16px]">{item.title}</p>
        </div>
        <p className="text-[#607D8B] text-[14px] text-left leading-[48px]">
          {item.insertDate}
        </p>
      </div>
      <div className="w-[100%] text-[#455A64] text-right mt-[10px]">
        {item.describe}
      </div>
      <div className="w-[100%] flex mt-[2%] cursor-pointer">
        <img
          src={detail.isUserFavorite ? heart : whiteHeart}
          className="w-[20px] h-[20px] mt-[3%] mr-[2%]"
          alt="Favorite"
        />

        <Accordion>
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Control icon={FaComments}>
              {"دیدن پاسخ ها"}
            </Accordion.Control>
            <Accordion.Panel>
              <Formik
                initialValues={{ Describe: "", Title: "" }}
                onSubmit={(values) => onSubmitReply(values, item.id)}
              >
                <Form>
                  <div className="flex flex-col mb-4">
                    <Field
                      name="Title"
                      placeholder="نام خود را وارد کنید"
                      className="h-[3rem] border-[1px] text-[font color 3] border-[#CFD8DC] w-[25rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
                    />
                    <Field
                      name="Describe"
                      placeholder="نظر خود را بنویسید"
                      className="h-[7rem] border-[1px] text-[font color 3] border-[#CFD8DC] w-[25rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
                    />
                    <button
                      type="submit"
                      className="text-white w-[12rem] m-auto bg-[#2196F3] text-[1.2rem] mt-[1rem] rounded-[20px]"
                    >
                      ثبت نظرات
                    </button>
                  </div>
                </Form>
              </Formik>

              {replies[item.id]?.map((reply, index) => (
                <section
                  key={index}
                  className="flex flex-col w-[30rem]  mt-[30px] border-r"
                >
                  <div className="w-[100%] h-[40px] flex justify-between mt-[10px]">
                    <div className="flex w-[50%]">
                      <img
                        src={item.pictureAddress}
                        className="border rounded-[100%] w-[40px] h-[40px] mt-[1%]"
                        alt="User"
                      />
                      <p className="leading-[48px] pr-1 text-[16px]">
                        {item.author}
                      </p>
                    </div>
                    <p className="text-[#607D8B] text-[14px] text-left leading-[48px]">
                      {item.insertDate}
                    </p>
                  </div>
                  <div className="w-[100%] text-[#455A64] text-right mt-[10px]">
                    {item.describe}
                  </div>
                </section>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default CommentItemm;
