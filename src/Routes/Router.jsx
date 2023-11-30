import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Details/Detail";
import DashBoard from "../DashBoard/DashBoard";
import Profile from "../DashBoard/Profile/Profile";
import Add from "../DashBoard/AddPost/Add";

import MyPost from "../DashBoard/MyPost/MyPost";
import MemberShip from "../Pages/MemberShip/MemberShip";
import AllUser from "../DashBoard/Admin/AllUser";
import AdminHome from "../DashBoard/Admin/AdminHome";
import Report from "../DashBoard/Admin/Report";
import Announcement from "../DashBoard/Admin/Announcement";
import Notification from "../Pages/Home/Notification/Notification";
import Comment from "../DashBoard/MyPost/Comment";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/post/:id',
        element:<Detail></Detail>,
        loader: ({ params })=> fetch(`http://localhost:5000/post/${params.id}`)

      },
      {
        path: '/notification',
        element: <Notification></Notification>
      },
     {
        path: '/membership',
        element: <MemberShip></MemberShip>
      },
      {
         path: '/comments/:title',
         element: <Comment></Comment>
       }
      ,
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>

      },

    ]
  },
  {
    path:"dashboard",
    element:<DashBoard></DashBoard>,
    children:[
      {
        path:"profile",
        element:<Profile></Profile>,
        loader: () => fetch('http://localhost:5000/post')
      },
      {
        path:"add",
        element:<Add></Add>,
        loader: () => fetch('http://localhost:5000/post')
      },
      {
        path:"my",
        element:<MyPost></MyPost>,
        loader: () => fetch('http://localhost:5000/post')
      },

      // admin
      {
        path:"admin",
        element:<AdminHome></AdminHome>
      },
      {
        path:"all",
        element:<AllUser></AllUser>
      },
      {
        path:"report",
        element:<Report></Report>
      },
      {
        path:"ann",
        element:<Announcement></Announcement>
      },
    ]
  }

]);