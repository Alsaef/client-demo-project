import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../Cards/Card';

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
        <span className="loading loading-spinner text-[#49A760] loading-lg"></span>
      </div>
    );
  }

  // Get only the products up to the visible count
  const displayedProducts = products.slice(0, visibleCount);

  return (
    <section className="w-full bg-[#FBF9F5] py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-6 relative">
          <div className="relative">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              Just For You
            </h2>
            {/* Green Underline Accent */}
            <span className="absolute left-0 -bottom-[9px] w-12 h-[3px] bg-[#49A760] rounded-full" />
          </div>

          <Link 
            to="/products" 
            className="text-xs font-semibold text-[#49A760] hover:text-[#3d8c50] flex items-center gap-1 uppercase tracking-wider transition-colors"
          >
            VIEW ALL ITEMS <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button Container */}
        {visibleCount < products.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="border-2 border-[#49A760] text-[#49A760] hover:bg-[#49A760] hover:text-white font-semibold text-sm px-8 py-2.5 rounded-full transition-all duration-300 shadow-sm"
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