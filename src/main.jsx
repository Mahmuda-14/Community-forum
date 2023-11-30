import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';
import AuthProvider from './Provider/AuthProvider';

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AppProvider from './Pages/Home/Notification/AppProvider';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
      <AppProvider>
    <QueryClientProvider client={queryClient}>
    <div className=' max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
    </AppProvider>
    </AuthProvider>
   
  </React.StrictMode>
)
