import glide from "@glidejs/glide";
import { useEffect } from "react";

const Sliders = () => {
   const details = [
      {
         "title": "Graphics Design",
         "image": "https://Tailwindmix.b-cdn.net/image-01.jpg"
      },
      {
         "title": "Landing Page",
         "image": "https://Tailwindmix.b-cdn.net/image-02.jpg"
      },
      {
         "title": "WordPress Development",
         "image": "https://Tailwindmix.b-cdn.net/image-03.jpg"
      },
      {
         "title": "Web Development",
         "image": "https://Tailwindmix.b-cdn.net/image-04.jpg"
      },
      {
         "title": "Digital Marketing",
         "image": "https://Tailwindmix.b-cdn.net/image-05.jpg"
      },
   ];

   useEffect(() => {
      const slider = new glide(".glide-06", {
         type: "slider",
         focusAt: "center",
         perView: 1,
         autoplay: 3000,
         animationDuration: 700,
         gap: 0,
         classes: {
            nav: {
               active: "[&>*]:bg-slate-700",  /* Active class for navigation */
            },
         },
      }).mount();

      return () => {
         slider.destroy();
      };
   }, []);

   return (
      <>
         <div className="relative max-w-7xl mx-auto overflow-hidden rounded glide-06">
            {/* Slides */}
            <div className="overflow-hidden" data-glide-el="track">
               <ul className="whitespace-no-wrap flex-no-wrap flex w-full overflow-hidden p-0">
                  {details.map((detail, i) => (
                     <li key={i} className="relative">
                        <div className="relative"> {/* Container for image & content */}
                           <img
                              src={detail.image}
                              className="w-full h-96"
                              alt={`Slide ${i + 1}`}
                           />
                           <div className="absolute bottom-12 left-20 w-3/6 bg-gray-900 bg-opacity-50 p-4"> {/* Overlay for text & button */}
                              <div className="flex flex-col gap-4"> {/* Text & button container */}
                                 <strong className="text-white">{detail.title}</strong>
                                 <p className="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus voluptatum nam dolores aliquid facilis suscipit sed? Laudantium repellat perspiciatis totam suscipit optio dolor maxime modi unde quo, placeat exercitationem quos? Deserunt necessitatibus officiis eius quam autem amet debitis. Neque ipsam possimus accusamus perferendis excepturi eveniet tempora. Harum, nihil optio.</p>
                                 <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Let&apos;s Talk</button>
                              </div>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
            {/* Controls */}
            <div className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2" data-glide-el="controls">
               <button
                  className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                  data-glide-dir="<"
                  aria-label="prev slide"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="w-5 h-5"
                  >
                     <title>prev slide</title>
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                     />
                  </svg>
               </button>
               <button
                  className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                  data-glide-dir=">"
                  aria-label="next slide"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="w-5 h-5"
                  >
                     <title>next slide</title>
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                     />
                  </svg>
               </button>
            </div>
            {/* Indicators */}
            <div className="absolute bottom-0 flex items-center justify-center w-full gap-2" data-glide-el="controls[nav]">
               {details.map((_, i) => (
                  <button
                     key={i}
                     className="p-4 group"
                     data-glide-dir={`=${i}`}
                     aria-label={`goto slide ${i + 1}`}
                  >
                     <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                  </button>
               ))}
            </div>
         </div>
      </>
   );
};

export default Sliders;
