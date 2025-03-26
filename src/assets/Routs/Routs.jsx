import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layoute/Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import Verification from "../Pages/Verifications/Verification";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/signup",
            element:<SignUp></SignUp>
        },
        {
            path: "/forgetpassword",
            element:<ForgetPassword></ForgetPassword>,
        },
        {
            path: "/verification",
            element: <Verification></Verification>
        }
      ]
    },
  ]);
  