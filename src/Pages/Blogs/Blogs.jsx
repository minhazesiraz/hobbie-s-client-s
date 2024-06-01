import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useBlogs from "../../Clip/useBlogs"; // Adjust the import path as necessary
import './Blogs.css';

const Blogs = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery, setSearchQuery] = useState('');
   const [searchInput, setSearchInput] = useState('');
   const [jumpPage, setJumpPage] = useState('');
   const limit = 4;

   const { blogs, totalPages, isLoading } = useBlogs(currentPage, limit, searchQuery);

   const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
         setCurrentPage(page);
      }
   };

   const handleSearch = (e) => {
      e.preventDefault();
      setSearchQuery(searchInput);
      setCurrentPage(1);
   };

   const handleJumpPageChange = (e) => {
      setJumpPage(e.target.value);
   };

   const handleJumpPageSubmit = (e) => {
      e.preventDefault();
      const pageNumber = parseInt(jumpPage, 10);
      if (!isNaN(pageNumber)) {
         handlePageChange(pageNumber);
      }
      setJumpPage('');
   };

   const renderPageNumbers = () => {
      const pageNumbers = [];
      const visiblePages = 5; // Number of page numbers to show

      if (totalPages <= visiblePages) {
         for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
               <li key={i}>
                  <Link
                     className={`inline-flex h-10 items-center justify-center ${currentPage === i ? 'bg-indigo-500 text-white font-bold' : 'stroke-slate-700'
                        } px-4 text-sm font-medium transition duration-300 hover:bg-indigo-50 hover:stroke-indigo-500 hover:text-indigo-500 focus:bg-indigo-50 focus:stroke-indigo-600 focus:text-indigo-600 focus-visible:outline-none`}
                     onClick={() => handlePageChange(i)}
                  >
                     {i}
                  </Link>
               </li>
            );
         }
      } else {
         let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
         let endPage = Math.min(totalPages, startPage + visiblePages - 1);

         if (endPage - startPage < visiblePages - 1) {
            startPage = Math.max(1, endPage - visiblePages + 1);
         }

         if (startPage > 1) {
            pageNumbers.push(
               <li key="start-ellipsis">
                  <span className="pointer-events-none inline-flex h-10 items-center justify-center px-4 text-sm font-medium text-slate-700 focus-visible:outline-none md:inline-flex">...</span>
               </li>
            );
         }

         for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
               <li key={i}>
                  <Link
                     className={`inline-flex h-10 items-center justify-center ${currentPage === i ? 'bg-indigo-500 text-white font-bold' : 'stroke-slate-700'
                        } px-4 text-sm font-medium transition duration-300 hover:bg-indigo-50 hover:stroke-indigo-500 hover:text-indigo-500 focus:bg-indigo-50 focus:stroke-indigo-600 focus:text-indigo-600 focus-visible:outline-none`}
                     onClick={() => handlePageChange(i)}
                  >
                     {i}
                  </Link>
               </li>
            );
         }

         if (endPage < totalPages) {
            pageNumbers.push(
               <li key="end-ellipsis">
                  <span className="pointer-events-none inline-flex h-10 items-center justify-center px-4 text-sm font-medium text-slate-700 focus-visible:outline-none md:inline-flex">...</span>
               </li>
            );
         }
      }

      return pageNumbers;
   };

   if (isLoading) return <div>Loading...</div>;

   return (
      <>
         <form onSubmit={handleSearch} className="mb-6 mt-16">
            <input
               type="text"
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value)}
               placeholder="Search blogs"
               className="border border-gray-300 p-2 rounded"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
         </form>
         {blogs.length === 0 && searchQuery && (
            <div className="text-center text-red-500">No blogs found for &quot;{searchQuery}&quot;.</div>
         )}
         <main className="grid grid-cols-4 gap-6 max-w-7xl mx-auto my-16">
            {blogs.map((blog) => (
               <div key={blog._id} className="overflow-hidden rounded bg-white text-slate-500 border border-red-500 effect-image-1">
                  <figure>
                     <img src={blog.image} alt="card image" className="aspect-video w-full" />
                  </figure>
                  <div className="p-6">
                     <header className="mb-4 flex gap-4">
                        <Link className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white">
                           <img src={blog.authorImage} alt={blog.author} title="" width="48" height="48" className="max-w-full rounded-full" />
                        </Link>
                        <div>
                           {
                              blog.title.length > 50 ?
                                 <h3 className="text-xl font-medium text-slate-700">{blog.title.slice(0, 50)}...</h3>
                                 :
                                 <h3 className="text-xl font-medium text-slate-700">{blog.title}</h3>
                           }
                           <p className="text-sm text-slate-400">By {blog.author}, {moment(blog.date, "MMMM Do YYYY, h:mm:ss a").fromNow()}</p>
                           {/* {new Date(blog.date).toLocaleDateString()} */}
                        </div>
                     </header>
                     {
                        blog.description.length > 100 ?
                           <p>{blog.description.slice(0, 100)}...</p>
                           :
                           <p>{blog.description}</p>
                     }
                  </div>
                  <div className="flex justify-end gap-2 p-2 pt-0">
                     <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-indigo-500 transition duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-indigo-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <Link to={`/blogs/posts/${blog._id}`}>Read more</Link>
                     </button>
                  </div>
                  <div className="overlay simple-overlay-3">
                     <div className="overlay-content text-black">Some text / <button><Link to={`/blogs/posts/${blog._id}`}>Read more</Link></button></div>
                  </div>
               </div>
            ))}
         </main>
         <nav role="navigation" aria-label="Pagination Navigation">
            <ul className="flex list-none items-center justify-center divide-x divide-slate-200 overflow-hidden rounded border border-slate-200 text-sm text-slate-700">
               <li>
                  <Link
                     aria-label="Goto Previous Page"
                     className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-indigo-50 hover:stroke-indigo-500 hover:text-indigo-500 focus:bg-indigo-50 focus:stroke-indigo-600 focus:text-indigo-600 focus-visible:outline-none"
                     onClick={() => handlePageChange(currentPage - 1)}
                     disabled={currentPage === 1}
                  >
                     <span className="sr-only">Previous</span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mx-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-38 desc-38"
                     >
                        <title id="title-38">Previous page</title>
                        <desc id="desc-38">link to previous page</desc>
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M15 19l-7-7 7-7"
                        />
                     </svg>
                  </Link>
               </li>
               {renderPageNumbers()}
               <li>
                  <Link
                     aria-label="Goto Next Page"
                     className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-indigo-50 hover:stroke-indigo-500 hover:text-indigo-500 focus:bg-indigo-50 focus:stroke-indigo-600 focus:text-indigo-600 focus-visible:outline-none"
                     onClick={() => handlePageChange(currentPage + 1)}
                     disabled={currentPage === totalPages}
                  >
                     <span className="sr-only">Next</span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mx-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-39 desc-39"
                     >
                        <title id="title-39">Next page</title>
                        <desc id="desc-39">link to next page</desc>
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M9 5l7 7-7 7"
                        />
                     </svg>
                  </Link>
               </li>
            </ul>
            <form onSubmit={handleJumpPageSubmit} className="mt-4 flex items-center justify-center">
               <label htmlFor="jumpPage" className="mr-2 text-sm font-medium text-slate-700">Jump to page:</label>
               <input
                  type="number"
                  id="jumpPage"
                  value={jumpPage}
                  onChange={handleJumpPageChange}
                  min="1"
                  max={totalPages}
                  className="border border-gray-300 p-2 rounded"
               />
               <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Go</button>
            </form>
         </nav>
      </>
   );
};

export default Blogs;
