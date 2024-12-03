// import { useState, useEffect } from "react";
// import { Field, Form, Formik } from "formik";
// import { useParams } from "react-router-dom";
// import { FaRegComments } from "react-icons/fa";
// import heart from "@assets/images/CourseDetail/heart.svg";
// import whiteHeart from "@assets/images/CourseDetail/whiteHeart.svg";
// import { validationcomment } from "../../core/validations/CommentValid.jsx";
// import { useDisclosure } from "@mantine/hooks";
// import { Modal, Button } from "@mantine/core";
// import {
//   AddComment,
//   GetCommentApi,
//   PostReply,
// } from "../../core/services/api/courses/comment.js";

// const Comment = ({ detail }) => {
//   // const [show, setShow] = useState(1);
//   const [comment, setComment] = useState([]);
//   const [opened, { open, close }] = useDisclosure(false);

//   const courseId = detail.courseId;

//   const onSubmit = async (values) => {
//     const formdata = new FormData();
//     formdata.append("CourseId", detail.courseId);
//     formdata.append("Title", values.Title);
//     formdata.append("Describe", values.Describe);

//     const commentapi = await AddComment(formdata);
//   };

//   const GetComment = async () => {
//     try {
//       const result = await GetCommentApi(detail.courseId);
//       setComment(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log("comment", comment);
//   useEffect(() => {
//     if (detail && courseId) {
//       GetComment();
//     }
//   }, [detail]);
//   const onSubmitReply = async (values) => {
//     const obj = {
//       CommentId:comment?.id,
//       CourseId: detail?.courseId,
//       Title: values?.Title,
//       Describe: values?.Describe,
//     };
//     console.log("obj", obj);
//     const Replyapi = await PostReply(obj);
//   };

//   // const items = () => {
//   // return( <Accordion.Item>
//   //     <Accordion.Control icon={<FaRegComments className="mr-[2px]" />} >  پاسخ دهید</Accordion.Control>
//   //     <Accordion.Panel>jbjbjjnbmj</Accordion.Panel>
//   //   </Accordion.Item>
//   // )
//   // };

//   return (
//     <div className="flex flex-col   ">
//       <Formik
//         initialValues={{ Describe: "", Title: "" }}
//         onSubmit={onSubmit}
//         validationSchema={validationcomment}
//         // onSubmit={onSubmit}
//       >
//         <Form>
//           <section className="flex flex-col ">
//             <Field
//               name="Title"
//               placeholder=" نام خود را وارد کنید"
//               className="h-[3rem] border-[1px] text-[font color 3] border-[#CFD8DC]  w-[43rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
//             />
//             <Field
//               name="Describe"
//               placeholder="نظر خود را بنویسید"
//               className="h-[7rem] border-[1px] text-[font color 3] border-[#CFD8DC]  w-[43rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
//             />

//             <button
//               type="submit"
//               className="text-white w-[8rem] m-auto bg-[#2196F3]  text-[1.2rem]  mt-[1rem]  rounded-[20px]"
//             >
//               ثبت نظرات
//             </button>
//           </section>
//         </Form>
//       </Formik>
//       {comment.map((item, index) => (
//         <section
//           key={index}
//           className="flex flex-col w-[97%] m-auto mt-[30px] border-t"
//         >
//           <div className="w-[100%] h-[40px] flex justify-between mt-[10px]">
//             <div className="flex w-[30%]">
//               <img
//                 src={item.pictureAddress}
//                 className="border rounded-[100%] w-[40px] h-[40px] mt-[1%]"
//               />
//               <p className="leading-[48px] pr-1  text-[16px]">{item.title}</p>
//             </div>
//             <p className="text-[#607D8B] text-[14px] text-left leading-[48px]  ">
//               {item.insertDate}
//             </p>
//           </div>
//           <div className="w-[100%] text-[#455A64] text-right mt-[10px]">
//             {item.describe}
//           </div>
//           <div className="w-[25%] h-[30px] flex mt-[2%] cursor-pointer">
//             <img
//               src={detail.isUserFavorite === false ? whiteHeart : heart}
//               className="w-[20px] h-[20px]"
//             />
//             <div className="flex mr-[10px] text-[14px] border text-[#455A64]">
//               <Modal
//                 opened={opened}
//                 onClose={close}
//                 title="پاسخ دهید"
//                 withCloseButton={false}
//               >
//                 <Formik
//                   initialValues={{ Describe: "", Title: "" }}
//                   onSubmit={(values) => onSubmitReply(values, item.id)}
//                   // validationSchema={validationcomment}
//                   // onSubmit={onSubmit}
//                 >
//                   <Form>
//                     <section className="flex flex-col ">
//                       <Field
//                         name="Title"
//                         placeholder=" نام خود را وارد کنید"
//                         className="h-[3rem] border-[1px] text-[font color 3] border-[#CFD8DC]  w-[43rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
//                       />
//                       <Field
//                         name="Describe"
//                         placeholder="نظر خود را بنویسید"
//                         className="h-[7rem] border-[1px] text-[font color 3] border-[#CFD8DC]  w-[43rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
//                       />

//                       <button
//                         type="submit"
//                         className="text-white w-[8rem] m-auto bg-[#2196F3]  text-[1.2rem]  mt-[1rem]  rounded-[20px]"
//                       >
//                         ثبت نظرات
//                       </button>
//                     </section>
//                   </Form>
//                 </Formik>
//               </Modal>

//               <Button onClick={open}>پاسخ دهید</Button>
//             </div>
//           </div>
//         </section>
//       ))}
//       {/* <section className={ show==1 ? "hidden" : "flex flex-col w-[97%] m-auto bg-[red] mt-[30px]"}>

//           </section> */}
//       <section className="flex flex-col w-[90%] m-auto  mt-[30px] pr-[15px] border-r">
//         <div className="w-[100%] h-[40px] flex justify-between mt-[10px] ">
//           <div className="flex w-[30%]">
//             <img className="border rounded-[100%] w-[40px] h-[40px] mt-[1%]" />
//             <p className="leading-[48px] pr-1  text-[16px]">gdghjhk</p>
//           </div>
//           <div className="text-[#607D8B] text-[14px] text-left leading-[48px] w-[10%] ">
//             njm m
//           </div>
//         </div>
//         <div className="w-[100%] text-right mt-[10px]">
//           <p className="text-[#2196F3]"></p>
//           <p className="text-[#455A64]">mklk,mk,mm</p>
//         </div>
//         <div className="w-[25%] h-[30px] flex mt-[2%] cursor-pointer">
//           <img
//             src={detail.isUserFavorite === false ? whiteHeart : heart}
//             className="w-[20px] h-[20px]"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };
// export { Comment };
import { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { FaRegComments } from "react-icons/fa";
import heart from "@assets/images/CourseDetail/heart.svg";
import whiteHeart from "@assets/images/CourseDetail/whiteHeart.svg";
import { validationcomment } from "../../core/validations/CommentValid.jsx";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Loader, Text } from "@mantine/core";
import { AddComment, GetCommentApi, PostReply } from "../../core/services/api/courses/comment.js";

const Comment = ({ detail }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const courseId = detail?.courseId;

  // Fetch comments from the API
  const GetComment = async () => {
    try {
      setLoading(true);
      const result = await GetCommentApi(courseId);
      setComments(result);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error fetching comments. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Add a new comment
  const onSubmit = async (values) => {
    const formdata = new FormData();
    formdata.append("CourseId", courseId);
    formdata.append("Title", values.Title);
    formdata.append("Describe", values.Describe);

    try {
      await AddComment(formdata);
      GetComment(); // Refresh the comment list after adding a new comment
    } catch (error) {
      setErrorMessage("Error submitting your comment. Please try again.");
    }
  };

  // Submit a reply to a comment
  const onSubmitReply = async (values, commentId) => {
    const obj = {
      CommentId: commentId,
      CourseId: courseId,
      Title: values?.Title,
      Describe: values?.Describe,
    };

    try {
      await PostReply(obj);
      GetComment(); // Refresh the comment list after posting a reply
    } catch (error) {
      setErrorMessage("Error submitting your reply. Please try again.");
    }
  };

  useEffect(() => {
    if (detail && courseId) {
      GetComment();
    }
  }, [detail, courseId]);

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

      {loading ? (
        <Loader color="blue" />
      ) : (
        comments.map((item, index) => (
          <section key={index} className="flex flex-col w-[97%] m-auto mt-[30px] border-t">
            <div className="w-[100%] h-[40px] flex justify-between mt-[10px]">
              <div className="flex w-[30%]">
                <img
                  src={item.pictureAddress}
                  className="border rounded-[100%] w-[40px] h-[40px] mt-[1%]"
                  alt="User"
                />
                <p className="leading-[48px] pr-1 text-[16px]">{item.title}</p>
              </div>
              <p className="text-[#607D8B] text-[14px] text-left leading-[48px]">{item.insertDate}</p>
            </div>
            <div className="w-[100%] text-[#455A64] text-right mt-[10px]">{item.describe}</div>
            <div className="w-[25%] h-[30px] flex mt-[2%] cursor-pointer">
              <img
                src={detail.isUserFavorite ? heart : whiteHeart}
                className="w-[20px] h-[20px]"
                alt="Favorite"
              />
              <div className="flex mr-[10px] text-[14px] border text-[#455A64]">
                <Modal opened={opened} onClose={close} title="پاسخ دهید" withCloseButton={false}>
                  <Formik
                    initialValues={{ Describe: "", Title: "" }}
                    onSubmit={(values) => onSubmitReply(values, item.id)}
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
                </Modal>
                <Button onClick={open}>پاسخ دهید</Button>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export { Comment };

