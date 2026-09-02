import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiSearch, 
  FiUser, 
  FiHeart, 
  FiShoppingCart, 
  FiMenu, 
  FiX, 
  FiChevronRight, 
  FiChevronDown, 
  FiMapPin, 
  FiInfo,
  FiAlignJustify,
  FiPhone,
  FiMessageSquare
} from 'react-icons/fi';
import AddToCard from '../Home/AddToCart';

const navCategories = [
  { name: 'Combos', path: '/combos', hasSub: false },
  { name: 'Offer Zone', path: '/offer-zone', hasSub: false },
  { 
    name: 'Honey', 
    path: '/category/honey', 
    hasSub: true,
    subItems: [
      { name: 'Raw Honey', path: '/category/honey/raw' },
      { name: 'Mustard Flower Honey', path: '/category/honey/mustard' },
    ] 
  },
  { name: 'Oil & Ghee', path: '/category/oil-ghee', hasSub: false },
  { 
    name: 'Dates', 
    path: '/category/dates', 
    hasSub: true,
    subItems: [
      { name: 'Ajwa Dates', path: '/category/dates/ajwa' },
      { name: 'Mariami Dates', path: '/category/dates/mariami' },
    ] 
  },
  { 
    name: 'Spices', 
    path: '/category/spices', 
    hasSub: true,
    subItems: [
      { name: 'Whole Spices', path: '/category/spices/whole' },
      { name: 'Ground Spices', path: '/category/spices/ground' },
    ] 
  },
  { 
    name: 'Nuts & Seeds', 
    path: '/category/nuts-seeds', 
    hasSub: true,
    subItems: [
      { name: 'Almonds & Cashews', path: '/category/nuts-seeds/almonds' },
      { name: 'Chia Seeds', path: '/category/nuts-seeds/chia' },
    ] 
  },
  { 
    name: 'Beverage', 
    path: '/category/beverage', 
    hasSub: true,
    subItems: [
      { name: 'Green Tea', path: '/category/beverage/green-tea' },
      { name: 'Black Tea', path: '/category/beverage/black-tea' },
    ] 
  },
  { name: 'Rice', path: '/category/rice', hasSub: false },
  { 
    name: 'Flours & Lentils', 
    path: '/category/flours-lentils', 
    hasSub: true,
    subItems: [
      { name: 'Atta & Maida', path: '/category/flours-lentils/atta' },
      { name: 'Lentils (Dal)', path: '/category/flours-lentils/dal' },
    ] 
  },
  { name: 'Certified', path: '/category/certified', hasSub: false },
  { name: 'Pickle', path: '/category/pickle', hasSub: false },
  { name: 'Tabaya', path: '/category/tabaya', hasSub: false },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const toggleMobileSubmenu = (index) => {
    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
  };

  return (
    <header className="w-full font-sans bg-white shadow-sm border-b border-gray-100">
      {/* ---------------- Desktop & Mobile Top Bar ---------------- */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden text-gray-700 hover:text-orange-500 focus:outline-none p-1"
          aria-label="Open Menu"
        >
          <FiMenu className="w-6 h-6" />
        </button>

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-orange-500 text-white p-2 rounded-xl flex items-center justify-center font-bold text-xl w-10 h-10">
            G
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-orange-500 font-extrabold text-lg tracking-wide uppercase">GHORER</span>
            <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">BAZAR</span>
          </div>
        </Link>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative">
          <input
            type="text"
            placeholder="Search in..."
            className="w-full bg-gray-100 text-gray-700 pl-4 pr-10 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-400 border border-transparent"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500">
            <FiSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Action Icons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-700 text-xs font-medium">
          <Link to="/track-order" className="flex flex-col items-center hover:text-orange-500 gap-1">
            <FiMapPin className="w-5 h-5" />
            <span>Track Order</span>
          </Link>
          <Link to="/signin" className="flex flex-col items-center hover:text-orange-500 gap-1">
            <FiUser className="w-5 h-5" />
            <span>Sign In</span>
          </Link>
          <Link to="/wishlist" className="flex flex-col items-center hover:text-orange-500 gap-1">
            <FiHeart className="w-5 h-5" />
            <span>Wishlist</span>
          </Link>
      <label  htmlFor="cart-drawer"  className="flex flex-col items-center hover:text-orange-500 gap-1 relative">
            <div className="relative">
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </div>
            <span>Cart</span>
          </label>

          {/* More Dropdown (Using FiAlignJustify) */}
          <div className="relative group flex flex-col items-center cursor-pointer hover:text-orange-500 gap-1">
            <FiAlignJustify className="w-5 h-5" />
            <span>More</span>
            
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50 min-w-[160px]">
              <ul className="bg-white text-gray-800 rounded-md shadow-lg py-2 border border-gray-100 text-xs font-normal">
                <li>
                  <Link to="/about" className="flex items-center gap-2 px-4 py-2 hover:bg-orange-50 hover:text-orange-500">
                    <FiInfo className="w-4 h-4" /> About Us
                  </Link>
                </li>
                <li>
                  <a href="tel:+8801700000000" className="flex items-center gap-2 px-4 py-2 hover:bg-orange-50 hover:text-orange-500">
                    <FiPhone className="w-4 h-4" /> Call Us
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 hover:bg-orange-50 hover:text-orange-500">
                    <FiMessageSquare className="w-4 h-4" /> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Cart Icon */}
        <div className="lg:hidden flex items-center">
          <label   htmlFor="cart-drawer" className="relative p-2 text-gray-700">
            <FiShoppingCart className="w-6 h-6" />
            <span className="absolute top-1 right-1 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </label>
        </div>
      </div>

      {/* ---------------- Mobile Search Bar Bar ---------------- */}
      <div className="lg:hidden px-4 pb-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search in..."
            className="w-full bg-gray-100 text-gray-700 pl-4 pr-10 py-2 rounded-lg text-sm focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            <FiSearch className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ---------------- Desktop Bottom Navigation Bar ---------------- */}
      <nav className="hidden lg:block bg-[#051F1C] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-between text-xs font-medium py-3">
            {navCategories.map((cat, idx) => (
              <li key={idx} className="relative group">
                <Link
                  to={cat.path}
                  className="flex items-center gap-1 hover:text-orange-400 transition-colors py-1"
                >
                  {cat.name}
                  {cat.hasSub && <FiChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Dropdown Menu for desktop */}
                {cat.hasSub && (
                  <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50 min-w-[180px]">
                    <ul className="bg-white text-gray-800 rounded-md shadow-lg py-2 border border-gray-100">
                      {cat.subItems.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <Link
                            to={sub.path}
                            className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 text-xs transition-colors"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ---------------- Mobile Drawer Menu ---------------- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative bg-white w-[280px] max-w-full h-full shadow-xl flex flex-col z-10 overflow-y-auto">
            
            {/* Header / Sign In Banner */}
            <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
              <Link 
                to="/signin" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 bg-orange-500 text-white w-full p-3 rounded-lg shadow-sm"
              >
                <div className="bg-white/20 p-2 rounded-full">
                  <FiUser className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">Hello text!</div>
                  <div className="text-xs text-orange-100">Signin</div>
                </div>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="ml-2 text-gray-500 hover:text-gray-700 p-1"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Categories List */}
            <div className="flex-1 py-2 px-3">
              <ul className="space-y-1">
                {navCategories.map((cat, idx) => (
                  <li key={idx} className="border-b border-gray-50 last:border-0">
                    <div className="flex items-center justify-between py-2.5 px-2">
                      <Link 
                        to={cat.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-700 text-sm font-medium hover:text-orange-500"
                      >
                        {cat.name}
                      </Link>
                      
                      {cat.hasSub && (
                        <button 
                          onClick={() => toggleMobileSubmenu(idx)}
                          className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                          <FiChevronRight 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              openMobileSubmenu === idx ? 'rotate-90' : ''
                            }`} 
                          />
                        </button>
                      )}
                    </div>

                    {/* Accordion Submenu for Mobile */}
                    {cat.hasSub && openMobileSubmenu === idx && (
                      <ul className="pl-4 pb-2 space-y-1 bg-gray-50 rounded-md">
                        {cat.subItems.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <Link
                              to={sub.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1.5 px-3 text-xs text-gray-600 hover:text-orange-500"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Quick Links Section */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                  Quick Links
                </h4>
                <ul className="space-y-1">
                  <li>
                    <Link 
                      to="/about" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-2 px-2 text-sm text-gray-700 hover:text-orange-500"
                    >
                      <FiInfo className="w-4 h-4" />
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="tel:+8801700000000"
                      className="flex items-center gap-2 py-2 px-2 text-sm text-gray-700 hover:text-orange-500"
                    >
                      <FiPhone className="w-4 h-4" />
                      <span>Call Us</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://wa.me/8801700000000" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 py-2 px-2 text-sm text-gray-700 hover:text-orange-500"
                    >
                      <FiMessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
     
    </header>
  );
};

export default NavBar;