import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CreateAPosts from "../Pages/Dashboard/CreateAPosts/CreateAPosts";
import EditedAPosts from "../Pages/Dashboard/EditedAPosts/EditedAPosts";
import Designate from "../Pages/Dashboard/Users/Designate";
import Users from "../Pages/Dashboard/Users/Users";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Posts from "../Pages/Posts/Posts";
import Signup from "../Pages/Signup/Signup";
import Oops from "../Pages/errorElement/Oops";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement: <Oops />,
      children: [
         {
            path: "/",
            element: <Home />
         },
         {
            path: "log-in",
            element: <Login />
         },
         {
            path: "sign-up",
            element: <Signup />
         },
         {
            path: "blogs",
            element: <Blogs />
         },
         {
            path: "blogs/posts/:pid",
            element: <Posts />,
            loader: ({ params }) => fetch(`http://localhost:5000/blogs/posts/${params.pid}`)
         },
      ]
   },
   {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
         /* Admin Routes */
         {
            path: "users",
            element: <Users />
         },
         {
            path: "designate/:uid",
            element: <Designate />,
            loader: ({ params }) => fetch(`http://localhost:5000/users/designate/${params.uid}`)
         },
         {
            path: "create-a-posts",
            element: <CreateAPosts />
         },
         {
            path: "edited-a-posts/:pid",
            element: <EditedAPosts />,
            loader: ({ params }) => fetch(`http://localhost:5000/blogs/posts/${params.pid}`)
         },
         /* Moderator Routes */
         /* Member Routes */
      ]
   }
]);