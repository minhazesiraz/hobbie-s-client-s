import { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [enable, setEnable] = useState(false);

   const handleSignup = (event) => {
      const form = event.target;
      const checked = form.checked;
      console.log(checked);
      setEnable(checked);
   }

   return (
      <>
         <section>
            <div className="container px-6 m-auto">
               <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                  <div className="col-span-4 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 p-4">
                     <div>
                        <h3 className="text-xl">Create your account</h3>
                        <strong>Have an account? <Link to="/log-in" className="text-emerald-400">Log in now</Link></strong>
                        <div className="flex flex-col gap-2 mb-3">
                           <button className="flex items-center justify-center border rounded"><FaGoogle className="mr-2" /> Google</button>
                           <button className="flex items-center justify-center border rounded"><FaFacebook className="mr-2" /> Facebook</button>
                           <button className="flex items-center justify-center border rounded"><FaGithub className="mr-2" /> GitHub</button>
                        </div>
                        <div className="pb-5 flex items-center">
                           <div className="flex-grow border-b border-gray-300"></div>
                           <span className="px-3 text-gray-500">Or with email and password</span>
                           <div className="flex-grow border-b border-gray-300"></div>
                        </div>
                     </div>
                     <form>
                        {/*  <!-- Body--> */}
                        <div>
                           <div className="flex flex-col space-y-8">
                              {/*      <!-- Input field --> */}
                              <div className="relative my-6">
                                 <input
                                    id="id-b03"
                                    type="email"
                                    name="id-b03"
                                    placeholder="your name"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                 />
                                 <label
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                 >
                                    Your email
                                 </label>
                                 <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                                    <span>Type your email address</span>
                                 </small>
                              </div>
                              {/*      <!-- Input field --> */}
                              <div className="relative my-6">
                                 <input
                                    id="id-b13"
                                    type={showPassword ? "text" : "password"}
                                    name="id-b13"
                                    placeholder="your password"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                 />
                                 <label
                                    htmlFor="id-b13"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                 >
                                    Your password
                                 </label>
                                 <span className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                 </span>
                                 <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                                    <span>Input field with trailing icon</span>
                                 </small>
                              </div>
                           </div>
                        </div>
                        <div className="mt-4 text-sm">
                           <input type="checkbox" name="" id="" onChange={handleSignup} />
                           <span className="ms-2">I accept the <Link className="text-emerald-400">Privacy Policy</Link> and the <Link className="text-emerald-400">Terms of Service</Link></span>
                        </div>
                        {/*  <!-- Action base sized basic button --> */}
                        <div className="flex justify-end p-6 ">
                           <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none" disabled={!enable}>
                              <span>Create Account</span>
                           </button>
                        </div>
                     </form>
                  </div>
                  <div className="col-span-4 lg:col-span-8">Column 8/12</div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Signup;