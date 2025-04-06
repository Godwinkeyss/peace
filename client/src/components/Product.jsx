import React from 'react';
import ProductCard from './ProductCard';
import data from '../data';

const Product = () => {
  return (
    <div className='mt-[500px] md:mt-[220px] lg:mt-0   lg:px-20'>
      <h1 className='text-center text-[22px] mb-[24px] lg:text-3xl lg:mb-20'>Featured Products</h1>
     <div className="flex flex-wrap gap-8  items-center justify-center w-full">
     {data.products.slice(0, 8).map((product, index) => (
       <ProductCard key={index} product={product} />
     ))}
   </div>
   </div>
  );
};

export default Product;
