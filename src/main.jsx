import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import ApplaiedJobs from './component/ApplaiedJobs/ApplaiedJobs';
import Errorpage from './component/ErrorPage/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
 children:[
  {
    path:"/",
    element:<Home></Home>
  },
  {
    path: "/applaied",
    element:<ApplaiedJobs></ApplaiedJobs>
  }
 ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
