
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './../../app/App';
import CourseList1 from '@components/Courses/Pagination1/CourseList1';
import CourseDetail from '@components/CourseDetail/index.jsx';
import  MainLayout  from '@app/Layouts/MainLayout/index.jsx';
import Landing from '../../components/Landing';
import { PanelLayout } from '../../app/Layouts/PanelLayout/index.jsx';
import DashboardPage from "../../screens/UserPanel/Dashboard/index.jsx";
import EditProfilePage from "../../screens/UserPanel/EditProfile/index.jsx";
 import MyCoursesPage from "../../screens/UserPanel/MyCourses/index.jsx";
 import FavoritePage from "../../screens/UserPanel/Favorite/index.jsx";
 import ChangePassPage from "../../screens/UserPanel/ChangePass/index.jsx";
 import { CommentPage } from '../../screens/UserPanel/Comment/index.jsx';
import ReservedCoursesPage from ".././../screens/UserPanel/ReservedCourses/index.jsx";
import ForgetPass from '../../components/Auth/ForgetPass';
import Register from '../../components/Auth/Register/index.jsx';
import NewsPage from '../../screens/News/index.jsx';
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
        path: "/coursedetail/:id",
        element: <CourseDetail />,
        // errorElement: <ErrorText />
      },
      {
        path: "/news",
        element: <NewsPage />,
        // errorElement: <ErrorText />
      },
    
     
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
  { path: '/panel', element: <PanelLayout/> ,children: [
    { path: '/panel/dashboard', element: <DashboardPage /> },
    { path: '/panel/editprofile', element: <EditProfilePage /> },
    { path: '/panel/mycourses', element: <MyCoursesPage /> },
    { path: '/panel/favorite', element:<FavoritePage /> },
    { path: '/panel/changepass', element:<ChangePassPage/> },
    { path: '/panel/comment', element:<CommentPage/> },
    { path: '/panel/reserved', element:<ReservedCoursesPage/> },
  ]},

])

const RouterConfig = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default RouterConfig