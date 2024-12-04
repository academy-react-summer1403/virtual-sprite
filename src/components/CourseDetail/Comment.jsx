import { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { FaRegComments } from "react-icons/fa";
import heart from "@assets/images/CourseDetail/heart.svg";
import whiteHeart from "@assets/images/CourseDetail/whiteHeart.svg";
import { validationcomment } from "../../core/validations/CommentValid.jsx";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Loader, Text } from "@mantine/core";
import {
  AddComment,
  GetCommentApi,
  GetReplyApi,
  PostReply,
} from "../../core/services/api/courses/comment.js";
import { Accordion } from "@mantine/core";
const Comment = ({ detail }) => {
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState([]);
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [errorMessage, setErrorMessage] = useState("");


  const [isOpen, setIsOpen] = useState(false);

 
  const toggleDiv = () => {
    setIsOpen(!isOpen); 
  };

  const courseId = detail?.courseId;

  const GetComment = async () => {
    try {
      if (courseId) {
        const result = await GetCommentApi(courseId);
        setComments(result);
      }
    } catch (error) {
      setErrorMessage("Error fetching comments. Please try again later.");
    }
  };

  const onSubmit = async (values) => {
    const formdata = new FormData();
    formdata.append("CourseId", courseId);
    formdata.append("Title", values.Title);
    formdata.append("Describe", values.Describe);

    try {
      await AddComment(formdata);
      GetComment();
    } catch (error) {
      setErrorMessage("Error submitting your comment. Please try again.");
    }
  };

  const onSubmitReply = async (values, commentId) => {
    const formData = new FormData();
    formData.append("CommentId", commentId);
    formData.append("CourseId", courseId);
    formData.append("Title", values?.Title);
    formData.append("Describe", values?.Describe);

    try {
      await PostReply(formData);
      GetComment();
    } catch (error) {
      setErrorMessage("Error submitting your reply. Please try again.");
    }
  };

  useEffect(() => {
    if (detail && courseId) {
      GetComment();
    }
  }, [detail, courseId]);

  const getreply = async () => {
    try {
      if (!comments || comments.length === 0) {
        console.log("No comments available for replies.");
        return;
      }

      for (const comment of comments) {
        console.log("Fetching replies for comment ID:", comment.id);
        const result = await GetReplyApi(comment.courseId, comment.id);
        console.log("Reply result:", result);

        setReply((prevReplies) => [...prevReplies, ...result]);
      }
    } catch (error) {
      console.error("Error fetching replies:", error);
      setErrorMessage("Error fetching replies. Please try again later.");
    }
  };
  useEffect(() => {
    if (comments && comments.length > 0) {
      getreply();
    }
  }, [comments]);

  console.log("reply", reply);
  return (
    <div className="flex flex-col">
      <Formik
        initialValues={{ Describe: "", Title: "" }}
        onSubmit={onSubmit}
        validationSchema={validationcomment}
      >
        <Form>
          <section className="flex flex-col">
            <Field
              name="Title"
              placeholder="نام خود را وارد کنید"
              className="h-[3rem] border-[1px] text-[font color 3] border-[#CFD8DC] w-[43rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
            />
            <Field
              name="Describe"
              placeholder="نظر خود را بنویسید"
              className="h-[7rem] border-[1px] text-[font color 3] border-[#CFD8DC] w-[43rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
            />
            <button
              type="submit"
              className="text-white w-[8rem] m-auto bg-[#2196F3] text-[1.2rem] mt-[1rem] rounded-[20px]"
            >
              ثبت نظرات
            </button>
          </section>
        </Form>
      </Formik>

      {errorMessage && (
        <Text color="red" align="center" mt="md">
          {errorMessage}
        </Text>
      )}

      {/* {loading ? (
        <Loader color="blue" />
      ) : ( */}
      {comments.map((item, index) => (
        <section
          key={index}
          className="flex flex-col w-[97%] m-auto mt-[30px] border-t"
        >
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
          <div className="w-[100%] h-[30px] flex mt-[2%] cursor-pointer">
            <img
              src={detail.isUserFavorite ? heart : whiteHeart}
              className="w-[20px] h-[20px]"
              alt="Favorite"
            />
            <div className="flex mr-[10px] text-[14px] border text-[#455A64]">
              <Modal
                className="absolute right-0"
                opened={opened}
                onClose={close}
                title="پاسخ دهید"
                withCloseButton={false}
              >
                <Formik
                  initialValues={{ Describe: "", Title: "" }}
                  onSubmit={(values) => onSubmitReply(values, item.id)}
                >
                  <Form>
                    <div className="flex flex-col">
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
              </Modal>
              <Button onClick={open}>پاسخ دهید</Button>
            </div>
            <div
              onClick={toggleDiv}
              className="w-[80%] mr-[1%] mt-[1%] cursor-pointer text-left"
            >
              دیدن پاسخ ها
              {isOpen && (
                <div
                  className="
                    p-[20px] 
                    bg-[#f1f1f1]
                    mt-[10px]
                  "
                ></div>
              )}
              {/* <div>
        <div 
          onClick={() => handleToggle(1)} 
          style={{ padding: '10px', background: '#ccc', cursor: 'pointer' }}
        >
      
        </div>
       
          <div style={{ padding: '10px', background: '#f1f1f1' }}>
               {reply.map((item, index) => ( <section
            key={index}
            className="flex flex-col w-[90%] m-auto mt-[30px] border-r"
          >
            <div className="w-[100%] h-[40px] flex justify-between mt-[10px]">
              <div className="flex w-[30%]">
                <img
              src={item.pictureAddress}
                  className="border rounded-[100%] w-[40px] h-[40px] mt-[1%]"
               
                />
                <p className="leading-[48px] pr-1 text-[16px]">   {item.author}</p>
              </div>
              <p className="text-[#607D8B] text-[14px] text-left leading-[48px]">
            {item.insertDate}
              </p>
            </div>
            <div className="w-[100%] text-[#455A64] text-right mt-[10px]">
       {item.describe}
            </div>
            <div className="w-[25%] h-[30px] flex mt-[2%] cursor-pointer">
            <img
                src={detail.isUserFavorite ? heart : whiteHeart}
                className="w-[20px] h-[20px]"
                alt="Favorite"
              />
              </div>
  
</section>
  ))
}
          </div>
      
      </div> */}
            </div>
          </div>
        </section>
      ))}
      {/* )} */}
    </div>
  );
};

export { Comment };
