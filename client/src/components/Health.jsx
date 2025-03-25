import React from 'react';

const Health = () => {
  return (
    <>
      <div className="flex items-center w-screen flex-col mb-20 ">
        <div className="top flex items-center flex-col justify-center   w-full md:w-1/3">
          <h1>Health & Wellbeing</h1>
          <p className="text-center px-20 text-gray-500 mb-4 ">
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
            click here to read more...
          </button>
          <img src="images/sv.svg" className=" w-10" />
        </div>
        <div className="relative mt-4 h-[60vh] w-screen health">
          {/* <img
            src="images/health.jpg"
            alt="Health Image"
            className="absolute inset-0 w-full h-full object-cover"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Health;
