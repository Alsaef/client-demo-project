import React from 'react';
import HeroBanner from '../Components/Home/HeroBanner';
import CategorySlider from '../Components/Home/CategorySlider';
import TopSellingProducts from '../Components/Home/TopSellingProducts';
import OurBrands from '../Components/Home/OurBrands';
import AllNaturalHoney from '../Components/Home/AllNaturalHoney';
import CookingEssentials from '../Components/Home/CookingEssentials';
import BrandBanner from '../Components/Home/BrandBanner';
import JustForYou from '../Components/Home/JustForYou';

const Home = () => {
    return (
        <div className="bg-[#FBF9F5]">
            <HeroBanner></HeroBanner>
            <CategorySlider></CategorySlider>
            <TopSellingProducts></TopSellingProducts>
            <OurBrands></OurBrands>
            <AllNaturalHoney></AllNaturalHoney>
            <CookingEssentials></CookingEssentials>
            <BrandBanner></BrandBanner>
            <JustForYou></JustForYou>
        </div>
    );
};

export default Home;