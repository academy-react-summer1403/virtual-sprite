import React from "react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";

const Comment =()=>{
    return(
        <div className="flex flex-col   ">
        <Formik initialValues={{Describe: "" }}
        // onSubmit={onSubmit}
        >
          <Form>
            <section className="flex flex-col ">
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
            <section>
                
            </section>
          </Form>
        </Formik>
      </div>
    )
}
export {Comment};