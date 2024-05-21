import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Theme from './HelperOfTheme/Theme.jsx'
import { router } from './Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Theme>
         <RouterProvider router={router} />
      </Theme>
   </React.StrictMode>,
   document.getElementById('root')
);
