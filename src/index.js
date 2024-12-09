import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutComp } from './NavData/About/AboutComp';
import { ContactComp } from './NavData/Contact/ContactComp';
import { HomeComp } from './NavData/Home/HomeComp';
import { HeaderComp } from './NavData/Header/HeaderComp';
import { BlogComp,ShowProductDetails } from './NavData/Blog/BlogComp';
// import { ShowProductDetails } from './Product/ShowProductDetails';
import { Lesson } from './Lesson/Lesson';
import { CarShows } from './Car/Car';
import { LoginComp } from './Login/LoginComp';
import {ErrorComp} from './ErrorPage/Error';
import { RegistrationComp } from './Registration/Registration';







const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter([
  {
     path: '/about',
    element: <AboutComp/>,
  },
  {
    path: '/contact',
   element: <ContactComp/>,
 },
  {
    path: '/',
    element: <HeaderComp/>,
  },
  {
    path: '/home',
    element: <HomeComp/>,
  },
  {
    path: '/products',
    element: <BlogComp/>,
  },
  {
    path: '/product/:id',
    element: <ShowProductDetails/>,
  },
  {
    path: '/lesson',
    element: <Lesson/>,
  },
  {
    path: '/car',
    element: <CarShows/>,
  },
  {
    path: '/login',
    element: <LoginComp/>,
  },
  {
    path: '*',
    element: <ErrorComp/>,
  },
  {
    path: '/register',
    element: <RegistrationComp/>,
  }
]
)
root.render(
  
  <React.StrictMode>
    {/* <SideMenu/>
    <FrequentQuestions/> */}
    {/* <CarShows/> */}
    {/* <Lesson/> */}
    {/* <TabViwer/> */}
    <RouterProvider router={allRoutes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
