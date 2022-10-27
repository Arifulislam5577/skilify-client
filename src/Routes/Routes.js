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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/courses", element: <Courses /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/Course/:id",
        element: <CourseDatails />,
        loader: async ({ params }) =>
          axios(`http://localhost:5000/api/v1/course/${params.id}`),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default Router;
