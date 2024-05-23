import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useHelper from "../../../Clip/useHelper";
import usersLogout from "../../../assets/usersLogout.svg";

const Ebb = () => {
   const { logout } = useHelper();
   const [isOpen, setIsOpen] = useState(false);
   const wrapperRef = useRef(null);
   const navigate = useNavigate();

   const navigationItems = [
      {
         linkName: "Dashboard",
         icon: "dashboard.svg", // replace with actual path
         sortDescription: "Quick overview of all basic metrics and settings",
         path: "/log-in"
      },
      {
         linkName: "Metrics and analytics",
         icon: "analytics.svg", // replace with actual path
         sortDescription: "Detailed analytic date reviews management",
         path: "/metrics-analytics"
      },
      { separator: true },
      {
         linkName: "Multi-Channel Funnels overview",
         icon: "channel.svg", // replace with actual path
         sortDescription: "Generated from conversion paths, the sequences of interactions",
         path: "/multi-channel-funnels"
      },
      {
         linkName: "User settings",
         icon: "user.svg", // replace with actual path
         sortDescription: "User settings allow you to configure your email preferences",
         path: "/user-settings"
      },
      {
         linkName: "User Profile",
         icon: "userProfile.svg", // replace with actual path
         sortDescription: "A collection of settings and information about your account",
         path: "/user-profile"
      },
      { separator: true },
      {
         linkName: "Log out",
         icon: usersLogout,
         sortDescription: "A collection of settings and information about your account",
         path: "/log-in"
      },
   ];

   // Handle click outside of the dropdown
   const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      // Add event listener on document mount
      document.addEventListener("click", handleClickOutside);

      // Cleanup function to remove listener on unmount
      return () => {
         document.removeEventListener("click", handleClickOutside);
      };
   }, []); // Empty dependency array ensures the effect runs only once on mount

   const handleLogout = async () => {
      try {
         await logout(); // Assuming logout returns a promise
         console.log("Sign-out successful.");
         navigate("/log-in"); // Redirect after successful logout
      } catch (error) {
         console.error("An error happened during sign-out:", error);
      }
   };

   return (
      <div className="relative inline-flex">
         {/*  <!-- Start Dropdown trigger --> */}
         <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen ? "true" : "false"}
            ref={wrapperRef}
         >
            <span>
               <a href="#">
                  <img src="https://i.pravatar.cc/48?img=1" alt="" className="rounded h-4/5 ring-2 ring-inherit ring-offset-1 hover:shadow-slate-800" />
               </a>
            </span>
         </button>
         {/*  <!-- End Dropdown trigger --> */}
         {/*  <!-- Start Menu list --> */}
         <ul
            className={`${isOpen ? "flex" : "hidden"} absolute top-full right-2 z-10 mt-1 w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10`}
         >
            {navigationItems.map((job, i) => {
               if (job.separator) {
                  return (
                     <li key={`separator-${i}`} role="separator" className="border-b border-slate-200"></li>
                  );
               } else {
                  return (
                     <li key={i}>
                        <Link
                           to={job.path}
                           onClick={job.linkName === 'Log out' ? () => handleLogout() : undefined}
                           className="flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-indigo-50 hover:text-indigo-500 focus:bg-indigo-50 focus:text-indigo-600 focus:outline-none focus-visible:outline-none"
                           aria-current=""
                        >
                           <span className="flex-shrink-0 w-5 h-5">
                              <img src={job.icon} alt="" />
                           </span>
                           <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                              <span className="leading-5 truncate">
                                 {job.linkName}
                              </span>
                              <span className="text-sm whitespace-normal opacity-70">
                                 {job.sortDescription}
                              </span>
                           </span>
                        </Link>
                     </li>
                  );
               }
            })}
         </ul>
         {/*  <!-- End Menu list --> */}
      </div>
   );
};

export default Ebb;
