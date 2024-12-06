import heart from "@assets/images/CourseDetail/heart.svg";
import whiteHeart from "@assets/images/CourseDetail/whiteHeart.svg";
import { Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import {
  AddComment,
  GetCommentApi,
  GetReplyApi,
  PostReply,
} from "../../core/services/api/courses/comment.js";
import { validationcomment } from "../../core/validations/CommentValid.jsx";
import CommentItemm from "./CommentItemm.jsx";

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
              className="h-[3rem] border-[1px] text-[font color 3] border-[#CFD8DC] w-[99%] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
            />
            <Field
              name="Describe"
              placeholder="نظر خود را بنویسید"
              className="h-[7rem] border-[1px] text-[font color 3] border-[#CFD8DC] w-[99%] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
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

      <div>
        {comments.map((item, index) => (
          <CommentItemm
            key={index}
            item={item}
            detail={detail}
            comments={comments}
            GetComment={GetComment}
          />
        ))}
      </div>
    </div>
  );
};

export { Comment };
