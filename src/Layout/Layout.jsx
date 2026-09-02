import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Shared/NavBar';
import Footer from '../Components/Shared/Footer';
import SideSlide from '../Components/Home/SideSlide';
import AddToCartDrawer from '../Components/Home/AddToCart';

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-screen'>
                <AddToCartDrawer></AddToCartDrawer>

                <SideSlide></SideSlide>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Layout;