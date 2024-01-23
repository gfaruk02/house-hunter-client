import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/OwnerDashboard/Dashboard';
import RenterDashboard from './Pages/Dashboard/Renter/RenterDashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/ownerDashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('http://localhost:5000/houses')
      },
      {
        path: '/renterDashboard',
        element: <RenterDashboard></RenterDashboard>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
