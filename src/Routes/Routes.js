import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import CourseDatails from "../pages/CourseDatails";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";
import CheckOut from "../pages/CheckOut";
import Faq from "../pages/Faq";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/faq", element: <Faq /> },
      {
        path: "/courses",
        element: <Courses />,
      },
      { path: "/blog", element: <Blog /> },
      {
        path: "/Course/:id",
        element: <CourseDatails />,
        loader: async ({ params }) =>
          axios(`https://skiliky-server.vercel.app/api/v1/course/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          axios(`https://skiliky-server.vercel.app/api/v1/course/${params.id}`),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default Router;
