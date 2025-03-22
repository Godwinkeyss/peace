import React from 'react';
import { FiTruck } from 'react-icons/fi';
import AboutSlider from './AboutSlider';
import SheinSlider from './SheinSlider';
const Shein = () => {
  return (
    <div className="flex w-screen h-[47.5vh] lg:h-[47.5vh]  gap-3">
      <div className="left lg:flex flex-col flex-[1] w-full hidden">
        <div className=" bg-radial-[at_50%_75%]  flex-[1] relative h-full">
          <img src="images/shein1.webp" />
          <div className="text-[16px] w-full py-3 text-black absolute top-80 left-0 rounded  bg-pink-100 flex items-center ">
            {/* <FiTruck  className='text-3xl'/> Quick Shipping */}
            <img src="images/WCB-Logo-web-2-300x107.png" />
          </div>
        </div>
      </div>
      <div className="middle flex-[2] bg-red-400 w-full lg:w-full overflow-hidden">
        <SheinSlider />
      </div>
      <div className="right hidden lg:grid grid-cols-3 gap-2 flex-[1]  w-full p-2">
        <div className="bg-blue-500 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src="images/eng.jpg"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="bg-blue-500 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src="images/eng2.jpg"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="bg-blue-500 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src="images/ind.jpeg"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="bg-blue-500 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src="images/ind2.jpeg"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="bg-blue-500 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src="images/nig.jpg"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="bg-blue-500 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src="images/nig2.jpg"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
       
      </div>
    </div>
  );
};

export default Shein;
