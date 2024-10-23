
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import App from './../../app/App';
import CourseList1 from '@components/Courses/Pagination1/CourseList1';
import CourseDetail from '@components/CourseDetail/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <App />,
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