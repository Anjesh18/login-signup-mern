import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'


const router= createBrowserRouter([{
  path:'/',
  element:<App/>
},
  {
    path:'/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },{
    path: '/home',
    element: <Home/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
