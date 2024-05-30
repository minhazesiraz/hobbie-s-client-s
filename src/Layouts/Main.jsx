import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Sharing/Footer/Footer";
import Navbar from "../Pages/Sharing/Header/Navbar";
import Switch from "../Pages/Sharing/SwitchOfTheme/Switch";

const Main = () => {
   const location = useLocation();
   // console.log(location);

   const without = location.pathname.includes('log-in') || location.pathname.includes('sign-up');

   return (
      <>
         {without || <Navbar />}
         <Outlet />
         <Switch />
         {without || <Footer />}
      </>
   );
};

/*
without : without header & footer
 */

export default Main;