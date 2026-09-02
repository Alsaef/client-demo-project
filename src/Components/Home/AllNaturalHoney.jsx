import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FiShoppingCart } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '../Cards/Card';

const AllNaturalHoney = () => {
  const [honeyProducts, setHoneyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products JSON
    axios.get('/products.json')
      .then((res) => {
        // Filter products belonging to Honey category
        const filtered = res.data.filter(
          (product) => product.main_category === 'Honey'
        );
        setHoneyProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching honey products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-[#FBF9F5] py-12 flex justify-center items-center">
        <span className="loading loading-spinner text-orange-500 loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="w-full bg-[#FBF9F5] py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-6 relative">
          <div className="relative">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              All Natural Honey
            </h2>
            {/* Orange Underline Accent */}
            <span className="absolute left-0 -bottom-[9px] w-12 h-[3px] bg-orange-500 rounded-full" />
          </div>

          <a 
            href="/category/honey" 
            className="text-xs font-semibold text-orange-500 hover:text-orange-600 flex items-center gap-1 uppercase tracking-wider transition-colors"
          >
            VIEW ALL ITEMS <span className="text-sm">→</span>
          </a>
        </div>

        {/* Swiper Honey Slider */}
        <div className="honey-swiper-container pb-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 16 },
            }}
            className="w-full"
          >
            {honeyProducts.map((product) => (
              <SwiperSlide key={product.id}>
               <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Swiper Pagination Styling */}
      <style>{`
        .honey-swiper-container .swiper-pagination {
          bottom: 0px !important;
        }
        .honey-swiper-container .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background-color: transparent;
          border: 1.5px solid #f97316;
          opacity: 1;
          margin: 0 4px !important;
        }
        .honey-swiper-container .swiper-pagination-bullet-active {
          background-color: #f97316 !important;
          border-color: #f97316 !important;
          width: 18px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default AllNaturalHoney;