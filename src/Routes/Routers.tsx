import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Error from "../pages/Error/Error";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ForgetPassword from "../pages/Login/ForgetPassword";
import AllPackages from "../pages/AllPackages/AllPackages";
import AllGuides from "../pages/AllGuides/AllGuides";

import PrivateRoutes from "./PrivateRoutes";
import PackagesDetails from "../pages/packagesDetails/PackagesDetails";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'AboutUs',
          element:<PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>,
        },
        {
          path:'register',
          element:<Register></Register>,
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'forgetPassword',
          element:<ForgetPassword></ForgetPassword>
        },
        {
          path:'packages',
          element:<AllPackages></AllPackages>,
        },
        {
          path:'details',
          element:<PackagesDetails></PackagesDetails>,
        },
        {
          path:'allguides',
          element:<PrivateRoutes><AllGuides></AllGuides></PrivateRoutes>
        },
        {
          path:'/*',
          element:<Error></Error>,
        },
      ]
    },
  ]);