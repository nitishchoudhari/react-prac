import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { About } from "./components/About";
import { Error } from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const root = ReactDOM.createRoot(document.getElementById('root'));

const BasicApp = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <BasicApp/>,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path : '/about',
                element : <About />
            },
            {
                path : '/restaurants/:resID',
                // path : '/dapi/menu/pl/:resId',
                element : <RestaurantMenu/>
            },
        ],
        errorElement  : <Error />
    },
])

root.render(<RouterProvider router={appRouter}/>);
