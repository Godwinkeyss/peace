import React from 'react';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  return (
    <div className="w-[400px] rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full lg:h-96 object-cover object-center"
      />

      {/* Product Info Section */}
      <div className="p-4 mx-2">
        {/* Product Title */}
        <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
        
        {/* Product Category */}
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        
        {/* Product Rating */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500"><Rating rating={product.rating} /></span>
          <span className="text-gray-600 text-sm ml-2">({product.rating} reviews)</span>
        </div>
        
        {/* Product Price */}
        <p className="text-xl font-bold text-gray-900 mt-2">£{product.price}</p>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
      </div>

      {/* Add to Cart Button */}
      <div className="flex mx-2 py-4 bg-gray-50">
        <button 
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
