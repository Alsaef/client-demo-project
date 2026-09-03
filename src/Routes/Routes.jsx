import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetailsPage";

export const router = createBrowserRouter([
{
    path: "/",
    element:<Layout/>,
    children:[
        {
            path:'/',
            element:<div><Home/></div>
        },
        {
            path:'/product/:id',
            element:<div><ProductDetails/></div>
        },
        
    ]
}
]);