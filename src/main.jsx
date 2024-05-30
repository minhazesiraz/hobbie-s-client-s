import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal'
import { RouterProvider } from 'react-router-dom'
import Helper from './HelperOfFirebase/Helper.jsx'
import Theme from './HelperOfTheme/Theme.jsx'
import { router } from './Routes/Routes.jsx'
import './index.css'

/* Setting the app's element for accessibility! */
Modal.setAppElement('#root');

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Theme>
         <Helper>
            <QueryClientProvider client={queryClient}>
               <RouterProvider router={router} />
            </QueryClientProvider>
         </Helper>
      </Theme>
   </React.StrictMode>,
);
