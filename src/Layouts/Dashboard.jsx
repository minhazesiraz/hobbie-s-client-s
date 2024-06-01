import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PhotosOfUser from "../Pages/Dashboard/PhotosOfUser/PhotosOfUser";
import dashboard from "../assets/dashboard.svg";
import usersLogout from "../assets/usersLogout.svg";

const Dashboard = () => {
   const [isSideNavOpen, setIsSideNavOpen] = useState(false);

   const dashNavLinks = [
      {
         linkName: 'Dashboard',
         path: '/dashboard-charts',
         icons: dashboard,
      },
      {
         linkName: 'Users',
         path: '/dashboard/users',
         icons: dashboard,
      },
      {
         linkName: 'Team members',
         path: '/team-members',
         icons: dashboard,
      },
      {
         linkName: 'Create a posts',
         path: '/dashboard/create-a-posts',
         icons: dashboard,
      },
   ]

   const mainNavLinks = [
      {
         linkName: 'Home',
         path: '/',
         icons: dashboard,
      },
      {
         linkName: 'Documents',
         path: '/documents',
         icons: dashboard,
      },
      {
         linkName: 'Media & files',
         path: '/media-and-files',
         icons: dashboard,
      },
      {
         linkName: 'Storage',
         path: '/storage',
         icons: dashboard,
      },
   ]

   return (
      <>
         {/*  <!-- Component: Side navigation menu with user profile and alert message --> */}
         {/*  <!-- Mobile trigger --> */}
         <button
            title="Side navigation"
            type="button"
            className={`visible fixed right-3 top-3 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${isSideNavOpen
               ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
               : ""
               }`}
            aria-haspopup="menu"
            aria-label="Side navigation"
            aria-expanded={isSideNavOpen ? " true" : "false"}
            aria-controls="nav-menu-4"
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
         >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
               <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
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

         <div
            // className="flex max-w-7xl mx-auto"
            className="flex"
         >
            {/*  <!-- Side Navigation --> */}
            <aside
               id="nav-menu-4"
               aria-label="Side navigation"
               className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${isSideNavOpen ? "translate-x-0" : " -translate-x-full"
                  }`}
            >
               <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-4">
                  <div className="shrink-0">
                     <a
                        href=""
                        className="relative flex h-14 w-14 items-center justify-center rounded-full text-white"
                     >
                        {/* <img
                           src="https://i.pravatar.cc/40?img=7"
                           alt="user name"
                           title="user name"
                           width="48"
                           height="48"
                           className="max-w-full rounded-full"
                        /> */}
                        <span onClick={() => setIsSideNavOpen(false)}>
                           <PhotosOfUser />
                        </span>
                        <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-green-500 p-1 text-sm text-white">
                           <span className="sr-only"> online </span>
                        </span>
                     </a>
                  </div>
                  <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
                     <h4 className="w-full truncate text-base text-slate-700">
                        Luke Skywalker
                     </h4>
                     <p className="w-full truncate text-sm text-slate-500">
                        Jedi warrior
                     </p>
                  </div>
               </div>
               <nav
                  aria-label="side navigation"
                  className="flex-1 divide-y divide-slate-100 overflow-auto"
               >
                  <div>
                     <ul className="flex flex-1 flex-col gap-1">
                        {dashNavLinks.map((job, i) => (
                           <li key={i} className="px-3">
                              <NavLink
                                 to={job.path}
                                 className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-500 focus:bg-indigo-50 aria-[current=page]:bg-indigo-50 aria-[current=page]:text-indigo-500 "
                              >
                                 <div className="flex items-center self-center h-6 w-6">
                                    <img src={job.icons} alt="" />
                                 </div>
                                 <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                    {job.linkName}
                                 </div>
                                 <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-2 text-xs text-pink-500 ">
                                    2<span className="sr-only"> new notifications</span>
                                 </span>
                              </NavLink>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <ul className="flex flex-1 flex-col gap-1">
                        {mainNavLinks.map((job, i) => (
                           <li key={i} className="px-3">
                              <NavLink
                                 to={job.path}
                                 className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-500 focus:bg-indigo-50 aria-[current=page]:bg-indigo-50 aria-[current=page]:text-indigo-500 "
                              >
                                 <div className="flex items-center self-center h-6 w-6">
                                    <img src={job.icons} alt="" />
                                 </div>
                                 <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                    {job.linkName}
                                 </div>
                              </NavLink>
                           </li>
                        ))}
                     </ul>
                  </div>
               </nav>
               {/* <div className="p-3">
                  <div
                     className="w-full rounded border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm text-cyan-500"
                     role="alert"
                  >
                     <h3 className="mb-2 font-semibold">Backup completed.</h3>
                     <p>
                        You successfully read this important alert message. Blue often
                        indicates a neutral informative change or action.{" "}
                     </p>
                  </div>
               </div> */}
               <footer className="border-t border-slate-200 p-3">
                  <a
                     href=""
                     className="flex items-center gap-3 rounded px-3 text-slate-900 transition-colors hover:text-indigo-500 "
                  >
                     <div className="flex items-center self-center h-6 w-6">
                        <img src={usersLogout} alt="" />
                     </div>
                     <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
                        Logout
                     </div>
                  </a>
               </footer>
            </aside>
            <main className="flex-1 lg:ml-72 md:ml-0 p-4">
               <Outlet />
            </main>
         </div>

         {/*  <!-- Backdrop --> */}
         <div
            className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${isSideNavOpen ? "block" : "hidden"
               }`}
            onClick={() => setIsSideNavOpen(false)}
         ></div>
         {/*  <!-- End Side navigation menu with user profile and alert message --> */}
      </>
   );
};

export default Dashboard;