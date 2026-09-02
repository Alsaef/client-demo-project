import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiShoppingCart } from 'react-icons/fi';

const JustForYou = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // State to control displayed product count
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products JSON
    axios.get('/products.json')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  // Function to increment the visible products
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  if (loading) {
    return (
      <div className="w-full bg-[#FBF9F5] py-12 flex justify-center items-center">
        <span className="loading loading-spinner text-orange-500 loading-lg"></span>
      </div>
    );
  }

  // Get only the products up to the visible count
  const displayedProducts = products.slice(0, visibleCount);

  return (
    <section className="w-full bg-[#FBF9F5] py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-6 relative">
          <div className="relative">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              Just For You
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

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-[360px]"
            >
              {/* Product Image */}
              <div className="w-full h-40 flex items-center justify-center p-2">
                <img
                  src={product.image}
                  alt={product.product_name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="mt-2 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {product.product_name}
                  </h3>
                  <p className="text-orange-500 font-bold text-base mt-1">
                    ৳{product.price.toLocaleString()}
                  </p>
                </div>

                {/* Add To Cart Button */}
                <button className="w-full mt-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <FiShoppingCart className="w-3.5 h-3.5" />
                  <span>Add To Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button Container */}
        {visibleCount < products.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className=" hover:bg-black hover:text-white border-black border-2 duration-500 rounded-2xl text-black font-semibold text-sm px-6 py-2.5 transition-colors"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default JustForYou;