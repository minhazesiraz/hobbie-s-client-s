import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Designate from "../Pages/Dashboard/Users/Designate";
import Users from "../Pages/Dashboard/Users/Users";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
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
         }
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
         /* Moderator Routes */
         /* Member Routes */
      ]
   }
]);