import React from 'react';
import ProductCard from './ProductCard';
import data from '../data';

const Product = () => {
  return (
    <div className='mt-96 lg:mt-0'>
      <h1 className='text-center text-5xl lg:mb-20'>Featured Products</h1>
     <div className="flex flex-wrap gap-8  items-center justify-center w-full">
     {data.products.slice(0, 8).map((product, index) => (
       <ProductCard key={index} product={product} />
     ))}
   </div>
   </div>
  );
};

export default Product;
