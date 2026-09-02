import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronUp, FaCommentDots, FaShoppingBag } from 'react-icons/fa';

const Footer = () => {
  

  return (
    <footer className="w-full bg-[#FFFFFF] text-gray-600 pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-10">
          
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                  🏠
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-orange-500 tracking-wider uppercase leading-none">
                    GHORER
                  </h2>
                  <h2 className="text-xl font-extrabold text-gray-800 tracking-widest uppercase leading-none">
                    BAZAR
                  </h2>
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Ghorer Bazar is an e-commerce platform dedicated to providing safe and reliable food to every home.
            </p>

            {/* Contact Details */}
            <div className="space-y-2 text-xs sm:text-sm text-gray-600 pt-2">
              <div className="flex items-center gap-2.5">
                <FaMapMarkerAlt className="text-gray-400 shrink-0" />
                <span>Rampura, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-gray-400 shrink-0" />
                <a href="tel:+8809642922922" className="hover:text-orange-500 transition-colors">
                  +8809642922922
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-gray-400 shrink-0" />
                <a href="mailto:contact@ghorerbazar.com" className="hover:text-orange-500 transition-colors">
                  contact@ghorerbazar.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-orange-100/70 hover:bg-orange-500 text-orange-500 hover:text-white flex items-center justify-center text-xs transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-orange-100/70 hover:bg-orange-500 text-orange-500 hover:text-white flex items-center justify-center text-xs transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-orange-100/70 hover:bg-orange-500 text-orange-500 hover:text-white flex items-center justify-center text-xs transition-colors">
                <FaInstagram />
              </a>
            </div>

            {/* Download App Buttons */}
            <div className="pt-3">
              <p className="text-xs font-semibold text-gray-800 mb-3">
                Download App on Mobile :
              </p>
              <div className="flex items-center gap-2">
                <a href="#playstore" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-9 object-contain"
                  />
                </a>
                <a href="#appstore" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-9 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Information */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h3 className="text-base font-bold text-gray-800 mb-4">Information</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about-us" className="hover:text-orange-500 transition-colors">About us</Link></li>
              <li><Link to="/contact-us" className="hover:text-orange-500 transition-colors">Contact us</Link></li>
              <li><Link to="/company-info" className="hover:text-orange-500 transition-colors">Company Information</Link></li>
              <li><Link to="/stories" className="hover:text-orange-500 transition-colors">Ghorer Bazar Stories</Link></li>
              <li><Link to="/terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/careers" className="hover:text-orange-500 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4: Shop By */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h3 className="text-base font-bold text-gray-800 mb-4">Shop By</h3>
            <ul className="space-y-2.5">
              <li><Link to="/category/oil-ghee" className="hover:text-orange-500 transition-colors">Oil & Ghee</Link></li>
              <li><Link to="/category/honey" className="hover:text-orange-500 transition-colors">Honey</Link></li>
              <li><Link to="/category/dates" className="hover:text-orange-500 transition-colors">Dates</Link></li>
              <li><Link to="/category/spices" className="hover:text-orange-500 transition-colors">Spices</Link></li>
              <li><Link to="/category/nuts-seeds" className="hover:text-orange-500 transition-colors">Nuts & Seeds</Link></li>
              <li><Link to="/category/beverage" className="hover:text-orange-500 transition-colors">Beverage</Link></li>
              <li><Link to="/category/functional-foods" className="hover:text-orange-500 transition-colors">Functional Foods</Link></li>
            </ul>
          </div>

          {/* Column 5: Support */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h3 className="text-base font-bold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li><Link to="/support-center" className="hover:text-orange-500 transition-colors">Support Center</Link></li>
              <li><Link to="/how-to-order" className="hover:text-orange-500 transition-colors">How to Order</Link></li>
              <li><Link to="/order-tracking" className="hover:text-orange-500 transition-colors">Order Tracking</Link></li>
              <li><Link to="/payment" className="hover:text-orange-500 transition-colors">Payment</Link></li>
              <li><Link to="/shipping" className="hover:text-orange-500 transition-colors">Shipping</Link></li>
              <li><Link to="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 6: Consumer Policy */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h3 className="text-base font-bold text-gray-800 mb-4">Consumer Policy</h3>
            <ul className="space-y-2.5">
              <li><Link to="/happy-return" className="hover:text-orange-500 transition-colors">Happy Return</Link></li>
              <li><Link to="/refund-policy" className="hover:text-orange-500 transition-colors">Refund Policy</Link></li>
              <li><Link to="/exchange" className="hover:text-orange-500 transition-colors">Exchange</Link></li>
              <li><Link to="/cancellation" className="hover:text-orange-500 transition-colors">Cancellation</Link></li>
              <li><Link to="/pre-order" className="hover:text-orange-500 transition-colors">Pre-Order</Link></li>
              <li><Link to="/extra-discount" className="hover:text-orange-500 transition-colors">Extra Discount</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Partners */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          
          <p>Copyright © 2026 GhorerBazar</p>

          {/* Payment Gateways Banner */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-700">Pay With</span>
            <div className="flex items-center border border-gray-200 rounded p-1 bg-white">
              <img 
                src="https://securepay.sslcommerz.com/gwprocess/v4/image/gw/footer_logo.png" 
                alt="SSLCommerz Cards Supported" 
                className="h-6 sm:h-8 object-contain max-w-full"
              />
            </div>
          </div>

        </div>

      </div>

 
 

    </footer>
  );
};

export default Footer;