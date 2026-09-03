import React, { useState, useEffect } from 'react';
import { FaChevronUp, FaCommentDots, FaShoppingBag } from 'react-icons/fa';

const SideSlide = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="z-0">
      {/* 1. Floating Cart Drawer Button */}
      <label 
        htmlFor="cart-drawer" 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#49A760] text-white rounded-l-xl p-2.5 shadow-lg text-center flex flex-col items-center justify-center cursor-pointer hover:bg-[#3d8c50] transition-colors"
      >
        <FaShoppingBag className="text-lg mb-1" />
        <span className="text-[10px] font-bold block leading-tight">0 Items</span>
        <span className="text-[10px] font-semibold bg-white text-[#49A760] px-1.5 py-0.5 rounded mt-1">
          ৳0.00
        </span>
      </label>

      {/* 2. Scroll To Top Button */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-16 z-40 bg-[#49A760] hover:bg-[#3d8c50] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors"
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </button>
      )}

      {/* 3. Live Chat Floating Button */}
      <button
        className="fixed right-4 bottom-4 z-40 bg-[#49A760] hover:bg-[#3d8c50] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors"
        aria-label="Live Chat"
      >
        <FaCommentDots className="text-lg" />
      </button>
    </div>
  );
};

export default SideSlide;