import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
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
         }
      ]
   },
]);