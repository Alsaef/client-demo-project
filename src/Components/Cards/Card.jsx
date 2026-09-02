import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Card = ({ product }) => {
    return (
        <div>
             <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-[380px] relative group">
                  
                  {/* Badge */}
                  {product.product_flag === 'Best Selling' && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm z-10">
                      Best Selling
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="w-full h-44 flex items-center justify-center p-2 mt-2">
                    <img
                      src={product.image}
                      alt={product.product_name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="mt-4 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
                        {product.product_name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-orange-500 font-bold text-base">
                          ৳{product.discount_price ? product.discount_price.toLocaleString() : product.price.toLocaleString()}
                        </span>
                        {product.discount_price && (
                          <span className="text-gray-400 text-xs line-through">
                            ৳{product.price.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add To Cart Button */}
                    <button className="w-full mt-4 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <FiShoppingCart className="w-3.5 h-3.5" />
                      <span>Add To Cart</span>
                    </button>
                  </div>

                </div>
        </div>
    );
};

export default Card;