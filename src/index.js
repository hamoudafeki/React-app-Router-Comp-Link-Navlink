import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home  from "./pages/Home";
import Css  from "./pages/css";
import  Html from "./pages/html";
import Javascript  from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Sorry page not found 404 </h1>
  },
  
  {
    path: "/Css",
    element: <Css/>,  
  },

  {
    path: "/Html",
    element: <Html/>,  
  },

  {
    path: "/Javascript",
    element: <Javascript/>,  
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>
);



