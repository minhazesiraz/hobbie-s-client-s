/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            'rock-salt': ['"Rock Salt"', 'cursive'],
            'roboto': ['"Roboto"', 'sans-serif'],
         },
         colors: {
            'basic': '#07a8ed',
            'warm': '#fff7d8',
            'pink-bright': '#f63e7b',
         }
      },
   },
   plugins: [],
}

