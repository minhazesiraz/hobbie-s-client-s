import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Helper from './HelperOfFirebase/Helper.jsx'
import Theme from './HelperOfTheme/Theme.jsx'
import { router } from './Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Theme>
         <Helper>
            <RouterProvider router={router} />
         </Helper>
      </Theme>
   </React.StrictMode>,
);
