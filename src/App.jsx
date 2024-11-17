import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'




export default function App() {

  let router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "/profile", element: <Profile /> },

      ]
    },


    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> }
  ])


  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}
