import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Page/Home/Home/Home";
import Category from "../Page/Home/Category/Category";
import NewsLayout from "../layout/newsLayout";
import News from "../Page/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../Page/Home/Login/Login/Login";
import Register from "../Page/Home/Login/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Trams from "../Page/Shared/Trams/Trams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "trams",
        element: <Trams></Trams>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-icvlgvteo-alif819015.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },

  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-icvlgvteo-alif819015.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
