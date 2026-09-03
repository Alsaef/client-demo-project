import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiShoppingCart } from 'react-icons/fi';

const TopSellingProducts = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products JSON data
    axios.get('/products.json') // Make sure products.json is inside your /public folder
      .then((res) => {
        // Filter products with "Best Selling" flag and pick the first 4
        const filtered = res.data
          .filter(product => product.product_flag === 'Best Selling')
          .slice(0, 4);
        setBestSellers(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
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
   <section className="w-full bg-[#FBF9F5] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Top Selling Products
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {bestSellers.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between relative group hover:shadow-md transition-shadow gap-4 sm:gap-0"
            >
              {/* "Best Selling" Tag Badge */}
              <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                <span>🔥</span> Best Selling
              </div>

              {/* Product Image Section */}
              <div className="w-full sm:w-1/3 flex justify-center items-center p-2 pt-6 sm:pt-2">
                <img 
                  src={product.image} 
                  alt={product.product_name} 
                  className="h-28 sm:h-36 max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info Section */}
              <div className="w-full sm:w-2/3 sm:pl-4 flex flex-col justify-center text-center sm:text-left">
                {/* Name */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 line-clamp-2">
                  {product.product_name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
                  <span className="text-[#49A760] font-bold text-base sm:text-lg">
                    ৳{product.discount_price ? product.discount_price.toLocaleString() : product.price.toLocaleString()}
                  </span>
                  {product.discount_price && (
                    <span className="text-gray-400 text-xs line-through">
                      ৳{product.price.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
                  <button className="flex-1 sm:flex-none justify-center flex items-center gap-1.5 border border-[#49A760] text-[#49A760] hover:bg-green-50 text-xs font-semibold px-3 py-2 rounded-lg transition-colors">
                    <FiShoppingCart className="w-3.5 h-3.5" />
                    <span className="whitespace-nowrap">Add To Cart</span>
                  </button>
                  <button className="flex-1 sm:flex-none justify-center flex items-center gap-1.5 bg-[#49A760] hover:bg-[#3d8c50] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm">
                    <FiShoppingCart className="w-3.5 h-3.5" />
                    <span className="whitespace-nowrap">Buy now</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopSellingProducts;