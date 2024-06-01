import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaBezierCurve, FaHeading } from "react-icons/fa";
import { FaCloudArrowDown, FaCloudArrowUp } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Select from 'react-select';
import useBlogs from "../../../Clip/useBlogs"; // Adjust the import path
import useDecrypted from "../../../Clip/useDecrypted";
import useEncrypted from "../../../Clip/useEncrypted";
import useHelper from "../../../Clip/useHelper";

/*
const designateStyles = {
   control: (base) => ({
      ...base,
      borderRadius: "0.25rem",
      borderColor: '#ccc',
      padding: '1px',
      boxShadow: 'none',
      '&:hover': {
         borderColor: '#888',
      },
   }),
   menu: (base) => ({
      ...base,
      borderRadius: "0.25rem",
   }),
   option: (base) => ({
      ...base,
      padding: '10px',
   }),
   singleValue: (base) => ({
      ...base,
      color: '#333',
   }),
};
*/

const image_hosting_key = '5b6dd2f94856f5beeafb0275b9b11348';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditedAPosts = () => {
   const { _id, title, description, category } = useLoaderData();
   const decrypted = useDecrypted();
   const encrypted = useEncrypted();
   const { blogs } = useBlogs();
   const { user } = useHelper();
   const [selectedOption, setSelectedOption] = useState(null);
   const [dynamicOptions, setDynamicOptions] = useState([]);
   const { register, handleSubmit, formState: { isValid } } = useForm({ mode: "onChange" });

   useEffect(() => {
      // Extract unique categories from blogs
      const categories = blogs.map(item => item.category);
      const uniqueCategories = [...new Set(categories)];

      // Map unique categories to the format required by Select component
      const options = uniqueCategories.map(category => ({
         value: category,
         label: category
      }));

      setDynamicOptions(options);

      // Set default value based on the category
      const defaultOption = options.find(option => option.label === category);
      setSelectedOption(defaultOption);
   }, [blogs, category]);

   const handleOnChange = (option) => {
      setSelectedOption(option);
   };

   const onSubmit = async (data) => {
      const imageFiles = { image: data.photoURL[0] }
      const res = await decrypted.post(image_hosting_api, imageFiles, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
      console.log(res);
      console.log(data);
      console.log(selectedOption);

      if (res.data.success) {
         const blog = {
            title: data.title,
            description: data.description,
            image: res.data.data.display_url,
            category: selectedOption.value,
            author: user.displayName,
            authorImage: user.photoURL
         }
         const jobResponse = await encrypted.put(`/blogs/edited-a-posts/${_id}`, blog);
         console.log(jobResponse);
         if (jobResponse.data.modifiedCount > 0) {
            alert(`${data.title} is added to the blogs.`);
         }
      }
   }

   const formatOptionLabel = ({ label }) => (
      <div className="flex items-center">
         <FaBezierCurve className="mr-2 text-sky-500 text-lg" /> {/* Add your desired icon here */}
         {label}
      </div>
   );

   return (
      <section>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-x-3"
         >
            <div className="relative my-6 col-span-2">
               <input
                  id="id-11"
                  type="text"
                  name="id-11"
                  placeholder="your name"
                  defaultValue={title}
                  {...register("title", { required: true })}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
               />
               <label
                  htmlFor="id-11"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-indigo-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
                  Title of posts
               </label>
               <FaHeading
                  className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed text-sky-500"
               />
            </div>

            <div className="relative mb-8 col-span- z-50">
               <Select
                  id="category"
                  value={selectedOption}
                  onChange={handleOnChange}
                  options={dynamicOptions}
                  // styles={designateStyles}
                  formatOptionLabel={formatOptionLabel}
                  className="peer relative h-10 w-full rounded border-0 border-slate-200 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
               // className="peer relative h-10 w-full rounded border border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
               />
               <label
                  htmlFor="category"
                  // className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-indigo-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-indigo-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
                  Category of posts
               </label>
            </div>

            <div className="relative">
               <input
                  id="id-file01"
                  type="file"
                  name="id-file01"
                  multiple
                  {...register("photoURL", { required: true })}
                  className="peer relative h-10 w-full rounded border border-slate-200 px-4 py-2.5 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 [&::file-selector-button]:hidden"
               />
               <label
                  htmlFor="id-file01"
                  className="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-indigo-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
                  Upload a file
               </label>
               <FaCloudArrowUp
                  className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed text-sky-500"
               />
               <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                  <span>The user can select multiple files</span>
               </small>
            </div>

            <div className="relative col-span-2">
               <textarea
                  id="id-b03"
                  type="text"
                  name="id-b03"
                  rows="8"
                  placeholder="Write your message"
                  defaultValue={description}
                  {...register("description", { required: true })}
                  className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
               ></textarea>
               <label
                  htmlFor="id-b03"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-indigo-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
                  Write your message
               </label>
            </div>

            <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-sky-500 px-5 text-sm font-medium tracking-wide text-sky-500 transition duration-300 hover:border-sky-600 hover:text-sky-600 focus:border-sky-700 focus:text-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:text-sky-300 disabled:shadow-none mt-3 col-span-2" disabled={!isValid}>
               <span className="order-2">Posts</span>
               <span className="relative only:-mx-5">
                  <FaCloudArrowDown className="text-xl" />
               </span>
            </button>
         </form>
      </section>
   );
};

export default EditedAPosts;
