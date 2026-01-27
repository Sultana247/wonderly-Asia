import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthProvider from './provider/AuthProvider.jsx';
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import TouristSpots from './components/TouristSpots.jsx';
import AddTouristSpot from './components/AddTouristSpot.jsx';
import MyList from './components/MyList.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import PrivateRoute from './privateroutes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/tourist-spots',
        element: <TouristSpots></TouristSpots>,
      },
      {
        path: '/add-tourist-spots',
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path: '/mylist',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
