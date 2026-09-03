import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FiShoppingCart, 
  FiPhoneCall, 
  FiMinus, 
  FiPlus, 
  FiShoppingBag,
  FiArrowRight
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Card from '../Components/Cards/Card';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from public/products.json
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        // Find main product (fallback to first item if ID not matched)
        const foundProduct = data.find((p) => p.id === id) || data[0];
        setProduct(foundProduct);

        // Get related products based on same main_category
        const related = data.filter(
          (p) => p.main_category === foundProduct?.main_category && p.id !== foundProduct?.id
        );
        setRelatedProducts(related.length > 0 ? related : data.slice(1, 5));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product data:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBF9F5] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  if (!product) return null;

  const handleQuantityChange = (type) => {
    if (type === 'inc') setQuantity((prev) => prev + 1);
    if (type === 'dec' && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const finalPrice = product.discount_price || product.price;

  return (
    <div className="bg-[#FBF9F5] min-h-screen py-6 font-sans text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-gray-700 font-medium">Products</span>
        </nav>

        {/* Main Product Card Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Product Image Section (Left Side - 7 Cols on lg) */}
            <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
              
              {/* Active Single Product Thumbnail */}
              <div className="flex sm:flex-col gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-orange-500 p-1 shadow-sm overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.product_name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Main Display Image */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-center min-h-[320px] sm:min-h-[420px]">
                <img
                  src={product.image}
                  alt={product.product_name}
                  className="max-h-[380px] w-auto object-contain transition-all duration-300"
                />
              </div>

            </div>

            {/* Product Details & Actions (Right Side - 5 Cols on lg) */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {product.product_name}
              </h1>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl sm:text-3xl font-extrabold text-orange-500">
                  ৳{finalPrice.toLocaleString()}
                </span>
                {product.discount_price && (
                  <span className="text-lg text-gray-400 line-through">
                    ৳{product.price.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="border-t border-gray-100 my-2"></div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 my-4">
                <span className="text-sm font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange('dec')}
                    className="p-2 text-gray-500 hover:text-orange-500 transition-colors"
                  >
                    <FiMinus className="text-sm" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-gray-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange('inc')}
                    className="p-2 text-gray-500 hover:text-orange-500 transition-colors"
                  >
                    <FiPlus className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Primary Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-sm transition-colors text-sm uppercase tracking-wider">
                  <FiShoppingBag className="text-lg" />
                  Add To Cart
                </button>

                <button className="bg-[#051F1C] hover:bg-black text-white font-bold py-3 px-4 rounded-lg shadow-sm transition-colors text-sm uppercase tracking-wider">
                  Buy Now
                </button>
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <a
                  href={`https://wa.me/8801700000000?text=I%20want%20to%20order%20${encodeURIComponent(product.product_name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  Order On WhatsApp
                </a>

                <a
                  href="tel:+8801700000000"
                  className="flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#1B3278] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                >
                  <FiPhoneCall className="text-lg" />
                  Call For Order
                </a>
              </div>

              {/* Brand Tag */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Brand:</span>
                <span className="border border-gray-200 px-3 py-1 rounded-md text-xs font-extrabold text-teal-800 tracking-wider">
                  {product.brand?.toUpperCase() || 'SHOSTI'}
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Related Products
            </h2>
            <Link 
              to="/products" 
              className="text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center gap-1"
            >
              More Products <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
             <Card key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;