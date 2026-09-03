import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  {
    name: 'Oil & Ghee',
    path: '/category/oil-ghee',
    image: 'https://backoffice.ghorerbazar.com/category_images/Zf99g1774766372.png',
  },
  {
    name: 'Organic',
    path: '/category/organic',
    image: 'https://backoffice.ghorerbazar.com/category_images/HJOrw1774766749.png',
  },
  {
    name: 'Honey',
    path: '/category/honey',
    image: 'https://backoffice.ghorerbazar.com/category_images/KbWCe1774766391.png',
  },
  {
    name: 'Dates',
    path: '/category/dates',
    image: 'https://backoffice.ghorerbazar.com/category_images/wgCR01774766402.png',
  },
  {
    name: 'Spices',
    path: '/category/spices',
    image: 'https://backoffice.ghorerbazar.com/category_images/hXyU71774766413.png',
  },
  {
    name: 'Nuts & Seeds',
    path: '/category/nuts-seeds',
    image: 'https://backoffice.ghorerbazar.com/category_images/5u39t1774766425.png',
  },
  {
    name: 'Beverage',
    path: '/category/beverage',
    image: 'https://cdn-icons-png.flaticon.com/512/2935/2935307.png',
  },
  {
    name: 'Rice',
    path: '/category/rice',
    image: 'https://backoffice.ghorerbazar.com/category_images/Emr6I1774766667.png',
  },
  {
    name: 'Flours & Lentils',
    path: '/category/flours-lentils',
    image: 'https://backoffice.ghorerbazar.com/category_images/Lo11M1774766468.png',
  },
  {
    name: 'Pickle',
    path: '/category/pickle',
    image: 'https://backoffice.ghorerbazar.com/category_images/JxBh61774766494.png',
  },
];

const CategorySlider = () => {
  return (
    <div className="w-full bg-[#FAF9F6] py-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Shop by Category</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative group">
        
        {/* Custom Navigation Arrows */}
        <button className="category-prev absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-green-100 hover:bg-[#49A760] text-[#49A760] hover:text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none">
          &#10094;
        </button>
        <button className="category-next absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#49A760] text-white hover:bg-[#3d8c50] flex items-center justify-center transition-colors shadow-sm focus:outline-none">
          &#10095;
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          navigation={{
            prevEl: '.category-prev',
            nextEl: '.category-next',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 16 },
            640: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 7, spaceBetween: 24 },
            1280: { slidesPerView: 8, spaceBetween: 24 },
          }}
          className="w-full px-6"
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <Link 
                to={cat.path} 
                className="flex flex-col items-center group/item text-center cursor-pointer"
              >
                {/* White Rounded Card Box for Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl p-4 shadow-sm flex items-center justify-center border border-gray-100 group-hover/item:shadow-md group-hover/item:border-[#49A760]/40 transition-all">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain group-hover/item:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Category Label */}
                <span className="mt-3 text-xs sm:text-sm font-medium text-gray-700 group-hover/item:text-[#49A760] transition-colors">
                  {cat.name}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default CategorySlider;