import { Link, useLoaderData } from "react-router-dom";


const Posts = () => {
   const { _id, title } = useLoaderData();
   // const { _id, title, image, description, category } = useLoaderData();
   // console.log(job);

   return (
      <>
         <div className="container px-2 my-16 m-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
               <div className="col-span-4 lg:col-span-8">
                  {/*<!-- Component: Blog card with avatar --> */}
                  <div className="relative overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                     {/*  <!-- Image --> */}
                     <figure>
                        <img
                           src="https://picsum.photos/id/114/800/600"
                           alt="card image"
                           className="aspect-video w-full h-56"
                        />
                     </figure>
                     {/*  <!-- Body--> */}
                     <div className="p-6">
                        <header className="mb-4 flex gap-4">
                           <a
                              href="#"
                              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                           >
                              <img
                                 src="https://i.pravatar.cc/48?img=24"
                                 alt="user name"
                                 title="user name"
                                 width="48"
                                 height="48"
                                 className="max-w-full rounded-full"
                              />
                           </a>
                           <div>
                              <h3 className="text-xl font-medium text-slate-700">
                                 {title}
                              </h3>
                              <p className="text-sm text-slate-400">
                                 By Sue Longarm, jun 3 2023
                              </p>
                           </div>
                        </header>
                        <p>
                           Following the journey of history and culture, is a journey through
                           the beautiful green rice paddies, and endless golden fields! Dotted
                           amongst the countryside are bustling towns, with a vibrant
                           atmosphere and great cafe culture.
                        </p>
                     </div>
                     {/*<!-- Component: Left sided horizontal fab button --> */}
                     <div
                        // className="fixed bottom-8 left-8 z-10"
                        className="absolute top-2 left-2"
                     >
                        <div className="group flex items-center gap-2 rtl:space-x-reverse">
                           <button className="group relative z-50 inline-flex h-12 items-center justify-center gap-2 self-center whitespace-nowrap rounded bg-indigo-500 px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-indigo-600 focus:bg-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-300 disabled:shadow-none">
                              <span className="relative transition duration-300 only:-mx-6 group-hover:rotate-45">
                                 <span className="sr-only">Button description</span>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    aria-label="Plus icon"
                                    role="graphics-symbol"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                 </svg>
                              </span>
                           </button>
                           <button className="inline-flex h-0 w-0 translate-y-2 items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-indigo-50 px-6 text-sm font-medium tracking-wide text-indigo-500 opacity-0 transition duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-400 disabled:shadow-none group-hover:h-12 group-hover:w-12 group-hover:translate-y-0 group-hover:opacity-100">
                              <Link to={`/dashboard/edited-a-posts/${_id}`}>
                                 <span className="relative only:-mx-6">
                                    <span className="sr-only">Button description</span>
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                       strokeWidth="1.5"
                                       stroke="currentColor"
                                       className="h-5 w-5"
                                       aria-label="pencil-square icon"
                                       role="graphics-symbol"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                       />
                                    </svg>
                                 </span>
                              </Link>

                           </button>
                           <button className="inline-flex h-0 w-0 translate-y-2 items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-indigo-50 px-6 text-sm font-medium tracking-wide text-indigo-500 opacity-0 transition delay-[0.05s] duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-400 disabled:shadow-none group-hover:h-12 group-hover:w-12 group-hover:translate-y-0 group-hover:opacity-100">
                              <span className="relative only:-mx-6">
                                 <span className="sr-only">Button description</span>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    aria-label="document-duplicate icon"
                                    role="graphics-symbol"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                                    />
                                 </svg>
                              </span>
                           </button>
                           <button className="inline-flex h-0 w-0 translate-y-2 items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-indigo-50 px-6 text-sm font-medium tracking-wide text-indigo-500 opacity-0 transition delay-[0.10s] duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-400 disabled:shadow-none group-hover:h-12 group-hover:w-12 group-hover:translate-y-0 group-hover:opacity-100">
                              <span className="relative only:-mx-6">
                                 <span className="sr-only">Button description</span>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    aria-label="camera icon"
                                    role="graphics-symbol"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                    />
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                    />
                                 </svg>
                              </span>
                           </button>
                           <button className="inline-flex h-0 w-0 translate-y-2 items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-indigo-50 px-6 text-sm font-medium tracking-wide text-indigo-500 opacity-0 transition delay-[0.15s] duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-400 disabled:shadow-none group-hover:h-12 group-hover:w-12 group-hover:translate-y-0 group-hover:opacity-100">
                              <span className="relative only:-mx-6">
                                 <span className="sr-only">Button description</span>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    aria-label="camera icon"
                                    role="graphics-symbol"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                    />
                                 </svg>
                              </span>
                           </button>
                        </div>
                     </div>
                     {/*<!-- End Left sided horizontal fab button --> */}
                  </div>
                  {/*<!-- End Blog card with avatar --> */}
               </div>
               <div className="col-span-4">Column 4/12</div>
            </div>
         </div>
      </>
   );
};

export default Posts;