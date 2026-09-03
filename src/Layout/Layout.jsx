import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Shared/NavBar';
import Footer from '../Components/Shared/Footer';
import SideSlide from '../Components/Home/SideSlide';
import AddToCartDrawer from '../Components/Home/AddToCart';
import AutoScrol from '../Components/AutoScrol';

const Layout = () => {
    return (
        <div>
            <AutoScrol></AutoScrol>
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