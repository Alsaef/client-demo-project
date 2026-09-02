import React from 'react';
import { FiX, FiTrash2, FiShoppingBag } from 'react-icons/fi';

const AddToCartDrawer = () => {
  return (
    <div>
      {/* Added 'drawer-end' to make it open from the right side */}
      <div className="drawer drawer-end z-50">
        <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
        
        {/* Trigger Button (Page Content) */}
       

        {/* Drawer Side Panel */}
        <div className="drawer-side">
          <label htmlFor="cart-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          
          <div className="bg-white min-h-full w-80 sm:w-96 p-6 text-gray-800 flex flex-col justify-between shadow-2xl">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h2 className="text-lg font-bold flex items-center gap-2 text-gray-800">
                  <FiShoppingBag className="text-orange-500" />
                  Your Shopping Cart
                </h2>
                <label 
                  htmlFor="cart-drawer" 
                  className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:text-gray-800"
                >
                  <FiX className="text-lg" />
                </label>
              </div>

              {/* Cart Items List */}
              <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Sample Cart Item */}
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <img 
                    src="https://backoffice.ghorerbazar.com/productImages/JdeWl1767418564.jpg" 
                    alt="Product" 
                    className="w-16 h-16 object-contain rounded-lg border border-gray-100 p-1"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                      Sundarban Honey 1kg
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">1 x ৳2,500</p>
                    <p className="text-sm font-bold text-orange-500 mt-1">৳2,500</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 p-1 transition-colors">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Summary & Checkout */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-gray-800">
                <span>Subtotal</span>
                <span className="text-orange-500 text-base">৳2,500</span>
              </div>
              <p className="text-xs text-gray-400">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="space-y-2 pt-2">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl transition-colors shadow-sm">
                  Proceed to Checkout
                </button>
                <label 
                  htmlFor="cart-drawer" 
                  className="w-full btn btn-ghost text-xs text-gray-500 hover:bg-gray-100 uppercase tracking-wider"
                >
                  Continue Shopping
                </label>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AddToCartDrawer;