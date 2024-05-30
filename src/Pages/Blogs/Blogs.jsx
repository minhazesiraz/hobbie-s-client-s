import { Link } from "react-router-dom";
import useBlogs from "../../Clip/useBlogs";
import "./Blogs.css";

const Blogs = () => {
   const [blogs] = useBlogs();
   console.log(blogs);

   return (
      <>
         <main className="grid grid-cols-4 gap-6 max-w-7xl mx-auto my-16">
            {blogs.map((job) => (
               <div
                  key={job._id}
                  className="overflow-hidden rounded bg-white text-slate-500 border border-red-500 effect-image-1"
               >
                  {/*  <!-- Image --> */}
                  <figure>
                     <img
                        src="https://picsum.photos/id/1081/800/600"
                        alt="card image"
                        className="aspect-video w-full"
                     />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="p-6">
                     <header className="mb-4 flex gap-4">
                        <a
                           className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                           <img
                              src="https://i.pravatar.cc/48?img=25"
                              alt="user name"
                              title=""
                              width="48"
                              height="48"
                              className="max-w-full rounded-full"
                           />
                        </a>
                        <div>
                           <h3 className="text-xl font-medium text-slate-700">
                              In the urban Jungle
                           </h3>
                           <p className="text-sm text-slate-400"> By Mary Jay, jun 3 2023</p>
                        </div>
                     </header>
                     <p>
                        Day to day life operates outside, so get ready to see the beach
                        become the living room, and the street the kitchen. A simple, yet
                        beautiful, way of life that explains the sunny outlook.
                     </p>
                  </div>
                  {/*  <!-- Action base sized link button --> */}
                  <div className="flex justify-end gap-2 p-2 pt-0">
                     <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-indigo-500 transition duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-indigo-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <Link to={`/blogs/${job._id}`}>Read more</Link>
                     </button>
                  </div>
                  <div className="overlay simple-overlay-3">
                     <div className="overlay-content text-black">Some text / <button>Button</button></div>
                  </div>
               </div>
            ))}
         </main>
      </>
   );
};

export default Blogs;