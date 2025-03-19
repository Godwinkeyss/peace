import React from 'react';
import ProductCard from './ProductCard';
import data from '../data';

const Product = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center overflow-x-hidden w-full p-2 box-border">
      <div className="flex items-center justify-center flex-col w-full md:w-1/2 overflow-hidden p-4 box-border">
        <h1 className="sm:text-4xl text-3xl p-1 font-bold text-center">
          Women’s Community
        </h1>
        <h1 className="sm:text-4xl text-3xl font-bold pb-1 text-center">
          Boutique CIC
        </h1>
        <p className="sm:text-[16px] text-[14px] text-center text-gray-600">
          Women’s Community Boutique is a vibrant social enterprise based in
          Sunderland, dedicated to empowering women from diverse backgrounds
          through inclusive and engaging activities. Our mission is centred
          around promoting holistic wellbeing, confidence, and community
          integration.
        </p>
        <p className="my-3 sm:text-[16px] text-[14px] text-center text-gray-600">
          Through a variety of workshops and events, we provide a supportive
          environment where women can explore their creativity, enhance their
          skills, and build meaningful connections.
        </p>
        <button className="text-white bg-black rounded-lg p-3 text-[14px] my-2">
          Read more about what we do.....
        </button>
        <img
          src="images/sv.svg"
          className="mx-auto block h-7 rounded-full object-cover mt-4 shrink-0"
          alt="Community Logo"
        />
      </div>
     
    </div>
     <div className="flex flex-wrap gap-8  items-center justify-center w-full">
     {data.products.slice(0, 8).map((product, index) => (
       <ProductCard key={index} product={product} />
     ))}
   </div>
   </>
  );
};

export default Product;
