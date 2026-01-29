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
import SpotDetails from './components/SpotDetails.jsx';
import UpdateSpots from './components/UpdateSpots.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import AddCountry from './components/AddCountry.jsx';
import CountryBasedSpots from './components/CountryBasedSpots.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/touristSpots')
      },
      
      {
        path: '/tourist-spots',
        element: <TouristSpots></TouristSpots>,
        loader: ()=>fetch('http://localhost:5000/touristSpots')   
         },
      {
        path: '/tourist-spots/countrybased/:id',
        element: <CountryBasedSpots></CountryBasedSpots>,
        loader: ({params})=>fetch(`http://localhost:5000/countries/${params.id}`)   
         },
      {
        path: '/add-tourist-spots',
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path: '/mylist',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
       
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/spot-details/:id',
        element:<SpotDetails></SpotDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/touristSpots/${params.id}`)
      },
      {
        path: '/updateTouristSpots/:id',
        element:<PrivateRoute><UpdateSpots></UpdateSpots></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/touristSpots/${params.id}`)
      },
      {
        path:'*',
        element: <PageNotFound></PageNotFound>
      },
      {
        path: '/addcountry',
        element: <AddCountry></AddCountry>
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
