import { useForm } from "react-hook-form";
import { FaBezierCurve, FaHeading } from "react-icons/fa";
import { FaCloudArrowDown, FaCloudArrowUp } from "react-icons/fa6";
import useDecrypted from "../../../Clip/useDecrypted";
import useEncrypted from "../../../Clip/useEncrypted";

const image_hosting_key = '5b6dd2f94856f5beeafb0275b9b11348';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateAPosts = () => {
   const decrypted = useDecrypted();
   const encrypted = useEncrypted();
   const { register, handleSubmit, reset, formState: { isValid } } = useForm({ mode: "onChange" });

   const onSubmit = async (data) => {
      // console.log(data);
      const imageFiles = { image: data.photoURL[0] }
      const res = await decrypted.post(image_hosting_api, imageFiles, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
      // console.log(res);
      if (res.data.success) {
         const job = {
            title: data.title,
            description: data.description,
            image: res.data.data.display_url,
            category: data.category
         }
         const jobResponse = await encrypted.post('/blogs/create-a-posts', job);
         // console.log(jobResponse.data);
         if (jobResponse.data.insertedId) {
            reset();
            alert(`${data.title} is added to the blogs.`);
         }
      }
   }

   return (
      <>
         <section>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="grid grid-cols-2 gap-x-3"
            >
               {/*    <!-- Title of posts: Rounded input with leading icon--> */}
               <div className="relative my-6 col-span-2">
                  <input
                     id="id-11"
                     type="text"
                     name="id-11"
                     placeholder="your name"
                     {...register("title", { required: true })}
                     //  value={state["id-11"]}
                     className="peer relative h-10 w-full rounded border border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  //  onChange={handleChange}
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
               {/*<!-- Category of posts: Rounded base sized file input with leading icon --> */}
               <div className="relative mb-8">
                  <input
                     id="id-12"
                     type="text"
                     name="id-12"
                     placeholder="your name"
                     {...register("category", { required: true })}
                     //  value={state["id-11"]}
                     className="peer relative h-10 w-full rounded border border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  //  onChange={handleChange}
                  />
                  <label
                     htmlFor="id-12"
                     className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-indigo-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                     Category of posts
                  </label>
                  <FaBezierCurve
                     className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed text-sky-500"
                  />
               </div>
               {/*<!-- Upload a file: Rounded base sized file input with leading icon --> */}
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
                     {" "}
                     Upload a file{" "}
                  </label>
                  <FaCloudArrowUp
                     className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed text-sky-500"
                  />
                  <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                     <span>The user can select multiple files</span>
                  </small>
               </div>
               {/*<!-- Write your message: Rounded base size textarea with helper text --> */}
               <div className="relative col-span-2">
                  <textarea
                     id="id-b03"
                     type="text"
                     name="id-b03"
                     rows="8"
                     placeholder="Write your message"
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
               {/*<!-- Submit: Base outline button with leading icon  --> */}
               <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-sky-500 px-5 text-sm font-medium tracking-wide text-sky-500 transition duration-300 hover:border-sky-600 hover:text-sky-600 focus:border-sky-700 focus:text-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:text-sky-300 disabled:shadow-none mt-3 col-span-2" disabled={!isValid}>
                  <span className="order-2">Posts</span>
                  <span className="relative only:-mx-5">
                     <FaCloudArrowDown
                        className="text-xl"
                     />
                  </span>
               </button>
            </form>
         </section>
      </>
   );
};

export default CreateAPosts;