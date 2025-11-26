import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Setting from "../pages/Settings/Setting";
import Single from "../pages/single/Single";
import Write from "../pages/write/Write";
import Posts from "../components/posts/Posts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "write", element: <Write /> },
      { path: "profile", element: <Setting /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "posts", element: <Posts /> },
      { path: "posts/:id", element: <Single /> },
    ],
  },
]);
