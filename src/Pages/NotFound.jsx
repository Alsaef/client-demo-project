import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft, FiSearch } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#FBF9F5] flex items-center justify-center px-4 py-12 font-sans">
      <div className="max-w-md w-full text-center">
        
        {/* Animated 404 Illustration Badge */}
        <div className="relative inline-block mb-6">
          <h1 className="text-8xl sm:text-9xl font-extrabold text-[#49A760]/20 tracking-widest select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-gray-800 bg-[#FBF9F5] px-4 py-1 rounded-full border border-gray-200 shadow-sm">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Informational Text */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Oops! Looks like you're lost.
        </h2>
        <p className="text-sm text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#49A760] hover:bg-[#3d8c50] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-sm text-sm"
          >
            <FiHome className="text-base" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#49A760] text-[#49A760] hover:bg-green-50 font-semibold px-6 py-3 rounded-xl transition-all text-sm"
          >
            <FiSearch className="text-base" />
            <span>Browse Products</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;