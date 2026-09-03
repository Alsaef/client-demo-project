import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetailsPage";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
{
    path: "/",
    element:<Layout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/product/:id',
            element:<ProductDetails/>
        },
        {
            path:'*',
            element:<NotFound></NotFound>
        }
        
    ]
}
]);