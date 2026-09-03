import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const brands = [
  {
    id: 1,
    name: 'Glarvest',
    logo: 'https://backoffice.ghorerbazar.com/brand_images/RNTIU1763611802.png',
  },
  {
    id: 2,
    name: 'Khejuri',
    logo: 'https://backoffice.ghorerbazar.com/brand_images/8Gpl21757919440.png',
  },
  {
    id: 3,
    name: 'Shosti Food',
    logo: "https://backoffice.ghorerbazar.com/brand_images/8matO1757919401.png",
  },
  {
    id: 4,
    name: 'Honeyraj',
    logo: 'https://backoffice.ghorerbazar.com/brand_images/lCfRt1759553456.png',
  },
  {
    id: 5,
    name: 'GhorerBazar',
    logo: 'https://backoffice.ghorerbazar.com/brand_images/brand_logo.png',
  },
];

const OurBrands = () => {
  return (
    <section className="w-full bg-[#FBF9F5] py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-6 relative">
          <div className="relative">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              Our Brands
            </h2>
            {/* Brand Green Underline Accent */}
            <span className="absolute left-0 -bottom-[9px] w-12 h-[3px] bg-[#49A760] rounded-full" />
          </div>

          <Link 
            to="/brands" 
            className="text-xs font-semibold text-[#49A760] hover:text-[#3d8c50] flex items-center gap-1 uppercase tracking-wider transition-colors"
          >
            SEE ALL <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Swiper Brands Slider */}
        <div className="brands-swiper-container pb-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="w-full"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="bg-white rounded-xl h-24 sm:h-28 flex items-center justify-center p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Custom Styles for Swiper Pagination Bullet Dots */}
      <style>{`
        .brands-swiper-container .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: transparent;
          border: 1.5px solid #49A760;
          opacity: 1;
          margin: 0 4px !important;
          margin-bottom: -10px !important;
        }
        .brands-swiper-container .swiper-pagination-bullet-active {
          background-color: #49A760 !important;
          border-color: #49A760 !important;
        }
      `}</style>
    </section>
  );
};

export default OurBrands;