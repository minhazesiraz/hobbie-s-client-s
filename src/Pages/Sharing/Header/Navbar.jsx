import { useState } from "react";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import useHelper from "../../../Clip/useHelper";
import Ebb from "./Ebb";

const Navbar = () => {
   const [isToggleOpen, setIsToggleOpen] = useState(false);
   const { user } = useHelper();

   const links = <>
      <li role="none" className="flex items-stretch">
         <a
            role="menuitem"
            aria-haspopup="false"
            className="flex items-center gap-2 py-2 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none md:px-2"
            href=""
         >
            <span>Blog</span>
         </a>
      </li>
      <li role="none" className="flex items-stretch">
         <a
            role="menuitem"
            aria-current="page"
            aria-haspopup="false"
            className="flex items-center gap-2 py-2 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none md:px-2"
            href=""
         >
            <span>Planning</span>
         </a>
      </li>
      <li role="none" className="flex items-stretch">
         <a
            role="menuitem"
            aria-haspopup="false"
            className="flex items-center gap-2 py-2 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none md:px-2"
            href=""
         >
            <span>About me</span>
         </a>
      </li>
   </>

   return (
      <header className="fixed top-0 left-0 right-0 z-10">
         <div className="border-b-1 relative z-20 border-b border-slate-200 bg-transparent shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 md:border-slate-200 md:backdrop-blur-sm md:after:hidden">
            <div className="relative mx-auto px-6 md:max-w-5xl lg:max-w-7xl">
               <nav
                  aria-label="main navigation"
                  className="flex h-14 items-stretch justify-between font-medium text-slate-700"
                  role="navigation"
               >
                  {/*      <!-- Brand logo --> */}
                  <a
                     id="WindUI"
                     aria-label="WindUI logo"
                     aria-current="page"
                     className="flex items-center gap-2 whitespace-nowrap py-2 text-lg focus:outline-none md:flex-1 uppercase font-rock-salt"
                     href=""
                  >
                     <span className="text-emerald-500">Minhaz</span> E Siraz
                  </a>
                  {/*      <!-- Mobile trigger --> */}
                  <button
                     className={`relative order-10 block h-10 w-10 self-center md:hidden
              ${isToggleOpen
                           ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                           : ""
                        }
            `}
                     onClick={() => setIsToggleOpen(!isToggleOpen)}
                     aria-expanded={isToggleOpen ? "true" : "false"}
                     aria-label="Toggle navigation"
                  >
                     <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                        <span
                           aria-hidden="true"
                           className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                        ></span>
                        <span
                           aria-hidden="true"
                           className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                        ></span>
                        <span
                           aria-hidden="true"
                           className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                        ></span>
                     </div>
                  </button>
                  {/*      <!-- Navigation links --> */}
                  <ul
                     role="menubar"
                     aria-label="Select page"
                     className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-80 justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-transparent px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 md:visible md:relative md:top-0  md:z-0 md:flex md:h-full md:w-auto md:items-stretch md:overflow-visible md:bg-white/0 md:px-0 md:py-0  md:pt-0 md:opacity-100 ${isToggleOpen
                        ? "visible opacity-100 backdrop-blur-sm w-80 h-screen top-0 bottom-0"
                        : "invisible opacity-0"
                        }`}
                  >
                     {
                        links
                     }
                  </ul>
                  <div className="ml-auto flex items-center px-6 md:ml-0 md:p-0">
                     <span className="inline-flex items-center cursor-pointer justify-center gap-1 rounded ring-2 ring-inherit ring-offset-1 p-1 text-lg mr-3">
                        <FaCartPlus />
                        10<span className="sr-only"> new emails</span>
                     </span>
                     {/*        <!-- Avatar --> */}
                     {
                        user ? <>
                           {/* dropdowns */}
                           <Ebb />
                        </>
                           :
                           <Link to="/log-in">
                              <button className="flex items-center gap-2 rounded h-4/5 ring-2 ring-inherit ring-offset-1 p-1 text-lg">
                                 <FaRegUser /> Log in
                              </button>
                           </Link>
                     }
                     {/*        <!-- End Avatar --> */}
                  </div>
               </nav>
            </div>
         </div>
      </header>
   );
};

export default Navbar;