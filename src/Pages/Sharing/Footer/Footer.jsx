import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTheme from "../../../Clip/useTheme";

const Footer = () => {
   const { theme } = useTheme();

   return (
      <>
         <footer
            className={`w-full
         ${(theme === 'dark' || theme === 'default-dark') ? 'bg-slate-800 text-slate-400 border-t border-slate-300' : ''}
         ${(theme === 'light' || theme === 'default-light') ? 'bg-slate-100 text-slate-800 border-t border-slate-300' : ''}
         ${theme === 'warm' ? 'bg-orange-50 text-slate-800 border-t border-slate-300' : ''}`}
         >
            {/* <!-- Main footer --> */}
            <div className="pt-8 pb-4 text-sm max-w-screen-xl mx-auto">
               <div className="container mx-auto px-6">
                  <div className="grid grid-cols-4 gap-6 sm:grid-cols-8 md:grid-cols-10">
                     <div
                        className="col-span-4 sm:col-span-8 md:col-span-4"
                        aria-labelledby="footer-header"
                     >
                        <a
                           id="WindUI-5-logo"
                           aria-label="WindUI logo"
                           aria-current="page"
                           className="mb-6 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 focus:outline-none font-rock-salt uppercase"
                           href=""
                        >
                           <span className="text-sky-500">Minhaz</span> E Siraz
                        </a>
                        <p className={theme === 'dark' ? 'text-red-500' : 'text-slate-600'}>
                           Expertly made, responsive, accessible components in React and
                           HTML ready to be used on your website or app. Just copy and
                           paste them on your Tailwind CSS project.
                        </p>
                        <ul className="flex gap-2 mt-3">
                           <li><Link>
                              <FaFacebook />
                           </Link></li>
                           <li><Link>
                              <FaTwitter />
                           </Link></li>
                           <li><Link>
                              <FaYoutube />
                           </Link></li>
                           <li><Link>
                              <FaGithub />
                           </Link></li>
                           <li><Link>
                              <FaInstagram />
                           </Link></li>
                        </ul>
                     </div>
                     <nav
                        className="col-span-2 sm:col-span-4 md:col-span-2"
                        aria-labelledby="footer-product-5-logo"
                     >
                        <h3
                           className="mb-6 text-base font-medium"
                           id="footer-product-5-logo"
                        >
                           Services
                        </h3>
                        <ul>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Web Development
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 WordPress Services
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Graphic Design
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 SEO Services <span className="bg-basic text-white p-1 rounded text-xs">NEW</span>
                              </a>
                           </li>
                        </ul>
                     </nav>
                     <nav
                        className="col-span-2 sm:col-span-4 md:col-span-2"
                        aria-labelledby="footer-about-5-logo"
                     >
                        <h3
                           className="mb-6 text-base font-medium"
                           id="footer-about-5-logo"
                        >
                           About us
                        </h3>
                        <ul>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 About us
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Careers
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Leadership
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Blog
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Events
                              </a>
                           </li>
                        </ul>
                     </nav>
                     <nav
                        className="col-span-2 sm:col-span-4 md:col-span-2"
                        aria-labelledby="footer-get-in-touch-5-logo"
                     >
                        <h3
                           className="mb-6 text-base font-medium"
                           id="footer-get-in-touch-5-logo"
                        >
                           Get in touch
                        </h3>
                        <ul>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Contact
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Support
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Partners
                              </a>
                           </li>
                           <li className="mb-2 leading-6">
                              <a
                                 href=""
                                 className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                              >
                                 Join research
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;