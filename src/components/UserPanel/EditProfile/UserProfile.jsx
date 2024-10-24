import { Field, Form, Formik } from "formik";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
const UserProfile =()=>{
    return(
        <>
         <div className="w-[100%] border h-[9%] text-center text-[#ffff] leading-[60px] text-[22px] bg-[#3F40EA] rounded-t-[15px] ">مشخصات کاربر</div>
        <Formik>
        <Form>
       
     <div className="w-[90%] mt-[1%] border  m-auto flex flex-col">
         <div className="w-[100%] border-[1px] border-black flex justify-between">
         <div className="w-[48%]">
         <label
                        htmlFor="lName"
                        className=" block mb-2 text-right text-[22px] font-medium text-indigo-900 dark:text-white"
                      >
                        نام
                      </label>
                      <Field
                        type="text"
                        name="lName"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block  w-full p-2.5 "
                      />
                    </div>

                    <div className="w-[48%]">
                      <label
                        htmlFor="fName"
                        className="block text-right mb-1 text-[22px] font-medium text-indigo-900 dark:text-white"
                      >
                        نام خانوادگی
                      </label>
                      <Field
                        type="text"
                        name="fName"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      />
                      </div>
         </div>
         <label
                        htmlFor="phoneNumber"
                        className=" block mb-1 mt-2 text-right text-[22px] font-medium text-indigo-900 dark:text-white"
                      >
                      شماره همراه
                      </label>
                      <Field
                        type="text"
                        name="phoneNumber"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block  w-full p-2.5 "
                      />
            <div className="w-[100%] border-[1px] mt-[1%] border-black flex justify-between">
         <div className="w-[48%]">
         <label
                        htmlFor="code"
                        className=" block mb-1 text-right text-[22px] font-medium text-indigo-900 dark:text-white"
                      >
                       شماره ملی
                      </label>
                      <Field
                        type="text"
                        name="code"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block  w-full p-2.5 "
                      />
                    </div>

                    <div className="w-[48%]">
                      <label
                        htmlFor="date"
                        className="block text-right mb-1 text-[22px] font-medium text-indigo-900 dark:text-white"
                      >
                       تاریخ تولد
                      </label>
                      <Field
                        type="text"
                        name="date"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      />
                      </div>
         </div>
         <label
                        htmlFor="phoneNumber"
                        className=" block mb-1 mt-2 text-right text-[22px] font-medium text-indigo-900 dark:text-white"
                      >
                    درباره من
                      </label>
                      <Field
                        type="text"
                        name="phoneNumber"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block  w-full p-2.5 "
                      />
         <div className="w-[100%]  border-[1px] border-black flex justify-between">
            <div className="w-[39%]">
            <label
                        htmlFor="gmail"
                        className=" block mb-1 mt-2 text-right text-[22px] font-medium text-indigo-900 dark:text-white"
                      >
                  جنسیت
                      </label> 
                      <select  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block  w-full p-2.5 ">
                       
                        </select> 
            </div>
         <div className="w-[59%]">
         <label
                        htmlFor="gmail"
                        className=" block mb-1 mt-2 text-right text-[22px] font-medium text-indigo-900 dark:text-white"
                      >
                   ایمیل
                      </label>
                      <Field
                        type="text"
                        name="gmail"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block  w-full p-2.5 "
                      />
                      </div>
         </div>
         <div className="w-[100%]  border-[1px] border-black"></div>
         <div className="w-[100%] border-[1px] border-black"></div>
         <div className="w-[100%]  flex justify-between">
         <div className="w-[20%] h-[100%] text-[#6B6B6D] text-[22px] flex gap-[5%] ">
         <IoMdArrowBack style={{color:"#595959"}} className="w-[18%] h-[100%]"/>
         <span className=" leading-10">بازگشت</span>
         </div>
         <botton className="w-[24%] h-[100%] rounded-[10px] text-[#fff] text-[23px] text-center leading-[50px] cursor-pointer bg-[#3F40EA]">ثبت تغییرات</botton>
      
         </div>
       
         </div>
         </Form>
         </Formik>
     </>
    )
}
export{UserProfile};