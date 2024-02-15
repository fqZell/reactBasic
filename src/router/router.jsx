import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import Catalog from "../pages/Catalog";
import SingleProduct from "../pages/SingleProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/catalog",
                element: <Catalog />,
                // children: [
                //     {
                //         path: ":id",
                //         element: <SingleProduct />,
                //     }
                // ]
            },
            {
                path: "/catalog/:id",
                element: <SingleProduct />,
            }
        ]
    }
])

export default router