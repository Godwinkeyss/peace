import React from 'react';

const Health = () => {
  return (
    <>
      <div className="flex items-center w-screen flex-col mb-1 overflow-x-hidden">
        <div className="top flex items-center flex-col justify-center w-full lg:w-1/2">
          <h1 class='text-3xl mb-6'>Health & Wellbeing</h1>
          <p className="text-center lg:px-20 px-10 text-[16px] text-gray-500 mb-4">
            At Women’s Community Boutique, our commitment to health and
            wellbeing is at the core of everything we do. We understand the
            diverse dimensions of women’s health—physical, mental, and
            emotional—and strive to support women from various backgrounds in
            achieving holistic wellbeing and confidence. In our nurturing
            environment, women feel safe to discuss and address mental health
            challenges through workshops and peer support groups that promote
            mindfulness and stress relief, building resilience and emotional
            strength along the way….
          </p>
          <button className="bg-black text-white py-2 px-3 rounded mb-4">
            Discover More...
          </button>
          <img src="images/sv.svg" className="w-10" alt="Icon" />
        </div>
        <div className="relative flex items-center justify-center mt-4 lg:h-[70vh] h-[30vh] w-full healths bg-[url(/images/health.jpg)] bg-top bg-cover overflow-x-hidden"></div>
        
      </div>
    </>
  );
};

export default Health;
