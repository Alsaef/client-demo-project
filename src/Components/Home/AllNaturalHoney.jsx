import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

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
        <span className="loading loading-spinner text-[#49A760] loading-lg"></span>
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
            {/* Green Underline Accent */}
            <span className="absolute left-0 -bottom-[9px] w-12 h-[3px] bg-[#49A760] rounded-full" />
          </div>

          <Link 
            to="/category/honey" 
            className="text-xs font-semibold text-[#49A760] hover:text-[#3d8c50] flex items-center gap-1 uppercase tracking-wider transition-colors"
          >
            VIEW ALL ITEMS <span className="text-sm">→</span>
          </Link>
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

      {/* Swiper Pagination Styling Override */}
      <style>{`
        .honey-swiper-container .swiper-pagination {
          bottom: 0px !important;
        }
        .honey-swiper-container .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background-color: transparent !important;
          border: 1.5px solid #49A760 !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        .honey-swiper-container .swiper-pagination-bullet-active {
          background-color: #49A760 !important;
          border-color: #49A760 !important;
          width: 22px !important;
          border-radius: 9999px !important;
        }
      `}</style>
    </section>
  );
};

export default AllNaturalHoney;