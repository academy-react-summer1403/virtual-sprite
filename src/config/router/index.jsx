
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './../../app/App';
import CourseList1 from '@components/Courses/Pagination1/CourseList1';
import CourseDetail from '@components/CourseDetail/index.jsx';
import  MainLayout  from '@app/Layouts/MainLayout/index.jsx';
import Landing from '../../components/Landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Landing />,
        // errorElement: <ErrorText />
      },
      {
        path: "/courselist1",
        element: <CourseList1 />,
        // errorElement: <ErrorText />
      },
      {
        path: "/coursedetail",
        element: <CourseDetail />,
        // errorElement: <ErrorText />
      },
      // {
      //   path: "/addItem",
      //   element: <AddItem />,
      //   errorElement: <ErrorText />
      // },
    ],
  },
  // {
  //   path: "*",
  //   element: <Error />
  // }
])

const RouterConfig = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default RouterConfig