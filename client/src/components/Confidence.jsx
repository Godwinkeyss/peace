import React from 'react';

const Confidence = () => {
  return (
    <>
      <div className="flex items-center w-screen flex-col mb-1 overflow-x-hidden mt-10">
        <div className="top flex items-center flex-col justify-center w-full lg:w-1/2">
          <h1 class='text-3xl mb-6'>Building Confidence</h1>
          <p className="text-center lg:px-20 px-10 text-[16px] text-gray-500 mb-4">
          At Women’s Community Boutique CIC, building confidence is at the heart of everything we do. Through our diverse range of activities and supportive environment, we empower women to feel good about themselves and their abilities. All our workshops encourage women to embrace their unique styles and celebrate their bodies, promoting body positivity….
          </p>
          <button className="bg-black text-white py-2 px-3 rounded mb-4">
            Discover More...
          </button>
          <img src="images/sv.svg" className="w-10" alt="Icon" />
        </div>
        <div className="relative flex items-center justify-center mt-4 lg:h-[70vh] h-[30vh] w-full healths bg-[url(/images/com9-inst.jpg)] bg-top bg-cover overflow-x-hidden"></div>
        
      </div>
    </>
  );
};

export default Confidence;
