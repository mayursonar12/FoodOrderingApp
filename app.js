import React from "react";
import ReactDOM from 'react-dom/client';
import Content from "./components/Content";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import SearchComponent from "./components/SearchComponent";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            {/* <Content/> */}
            <Footer/>
        </>
    )
}
const AppRouter  = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>,
                errorElement: <Error/>
            },
            {
                path: '/search',
                element: <SearchComponent/>,
                errorElement: <Error/>
            },
            {
                path: '/aboutus',
                element: <AboutUs/>,
                errorElement: <Error/>
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu/>,
                errorElement: <Error/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>);

