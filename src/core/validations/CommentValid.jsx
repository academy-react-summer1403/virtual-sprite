import * as Yup from 'yup';

export const validationcomment = Yup.object({
    Title: Yup.string().required('عنوان الزامی است'),
    Describe: Yup.string().required('نظر الزامی است'),
  });