import "./index.css"
import React from 'react'
import ReactDom from 'react-dom/client';
import App from './components/Client Side/App.jsx';
import Home from "./components/Doctors side/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Compeleted from "./components/Doctors side/pages/Compeleted.jsx";
import Appointments from "./components/Doctors side/pages/Appointments.jsx";
import Canceled from "./components/Doctors side/pages/Canceled.jsx";
import Rescheduled from "./components/Doctors side/pages/Rescheduled.jsx";
import Profile from "./components/Doctors side/pages/Profile.jsx";
import BookAppointment from "./components/Client Side/pages/BookAppointment.jsx";
import Login from "./components/Client Side/pages/Login.jsx";
import SignUp from "./components/Client Side/pages/SignUp.jsx";
import AboutUs from "./components/Client Side/pages/AboutUs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>404 page not found</div>,
        children: [
            {
                path: "/AboutUs",
                element: <AboutUs />,
            },
        ]
    },
    {
        path: "/bookAppointment",
        element: <BookAppointment />,
        errorElement: <div>404 page not found</div>,},
    {
      path: "/Login",
      element: <Login />,
      errorElement: <div>404 page not found</div>,
    },
    {
        path: "/Login/SignUp",
        element: <SignUp />,
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <div>404 page not found</div>,
        children: [
            {
              path: "/home",
              element: <Profile />,
            },
            {
                path: "/home/Appointments",
                element: <Appointments />,
            },{
               path: "/home/Cancelled",
                element: <Canceled />,
            },{
                path: "/home/Completed",
                element: <Compeleted />,
            },{
                path: "/home/Rescheduled",
                element: <Rescheduled />,
            },
        ]
    },
])

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);