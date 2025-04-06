import React from 'react';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  return (
    <div className="w-[300px] h-[500px] rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 mx-3">
      {/* Image Section */}
      <div className=" h-[300px] w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Product Info Section */}
      <div className="p-4 ">
        {/* Product Title */}
        <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>

        {/* Product Category */}
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>

        {/* Product Rating */}
        <div className="flex items-center mt-1">
          <span className="text-yellow-500">
            <Rating rating={product.rating} />
          </span>
          <span className="text-gray-600 text-sm ml-2">
            ({product.rating} reviews)
          </span>
        </div>

        {/* Product Price */}
        <p className="text-xl font-bold text-gray-900 mt-1">£{product.price}</p>

        
      </div>

      {/* Add to Cart Button */}
      <div className="flex mx-2 py-1 bg-gray-50">
        <button className="bg-black text-white py-1 px-2 rounded-md hover:bg-gray-800 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
