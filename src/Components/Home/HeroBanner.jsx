import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const mainSliderImages = [
  {
    id: 1,
    image: 'https://backoffice.ghorerbazar.com/banner/I8mKy1785823826-light-1000x400.png',
    title: 'Special Winter Offers',
    subtitle: 'Get up to 30% off on all organic honey & nuts',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    title: 'Pure & Authentic Foods',
    subtitle: 'Directly sourced from organic farms',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&q=80',
    title: 'Healthy Beverages',
    subtitle: 'Explore our premium tea and herbal collections',
  },
];

const sideBanner = {
  image: 'https://backoffice.ghorerbazar.com/banner/ZwGbr1787805653-500x410.png',
  title: 'Daily Combo Offers',
  subtitle: 'Save Extra Today',
};

const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        {/* Main 3-Photo Swiper Slider */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-sm relative group h-[250px] sm:h-[350px] md:h-[420px]">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination]}
            className="w-full h-full mySwiper"
          >
            {mainSliderImages.map((slide) => (
              <SwiperSlide key={slide.id} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex flex-col justify-center px-6 md:px-12 text-white">
                  <h2 className="text-2xl sm:text-4xl font-extrabold mb-2 tracking-wide leading-tight max-w-md">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-200 mb-4 max-w-sm">
                    {slide.subtitle}
                  </p>
                  <div>
                    <button className="bg-[#49A760] hover:bg-[#3d8c50] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors shadow-md">
                      Shop Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Side Banner */}
        <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-sm relative group h-[180px] lg:h-[420px]">
          <img
            src={sideBanner.image}
            alt={sideBanner.title || 'Side Banner'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Side Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <span className="bg-[#49A760] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded w-fit mb-2">
              Hot Deal
            </span>
            {sideBanner.title && (
              <h3 className="text-lg font-bold leading-snug">
                {sideBanner.title}
              </h3>
            )}
            {sideBanner.subtitle && (
              <p className="text-xs text-gray-200 mt-1">
                {sideBanner.subtitle}
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Style overrides for pagination dots */}
      <style>{`
        .mySwiper .swiper-pagination-bullet-active {
          background-color: #49A760 !important;
        }

        /* Fully hide navigation arrows fallback */
        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;