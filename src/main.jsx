import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routers';
import AuthProvider from './providers/AuthProvider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='min-w-[270px] mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode> 
)
