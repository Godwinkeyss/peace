import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden w-full p-2 box-border">
      <div className="flex items-center justify-center flex-col w-full md:w-1/2 overflow-hidden p-4 box-border">
        <h1 className="sm:text-4xl text-3xl p-1 font-bold text-center">
          Women’s Community
        </h1>
        <h1 className="sm:text-4xl text-3xl font-bold pb-1 text-center">
          Boutique CIC
        </h1>
        <p className="text-2xl my-2 text-gray-400">
          {' '}
          – Sustainable Bridal & Fashion for Every Woman
        </p>
        <p className="sm:text-[16px] text-[14px] text-center text-gray-600">
          Welcome to Women’s Community Boutique, a unique social enterprise in
          Sunderland dedicated to offering exquisite sustainable bridal wear and
          accessories. Our carefully curated collection of pre-loved and
          upcycled wedding dresses allows brides to find their dream gown while
          making an eco-conscious choice. We also provide personalized bridal
          consultations to ensure every bride feels confident and radiant on her
          special day.
        </p>
       
        <button className="text-white bg-black rounded-lg p-3 text-[14px] mt-7">
        ✨ [Discover More] ✨ (Click Button)
        </button>
        <img
          src="images/sv.svg"
          className="mx-auto block h-7 rounded-full object-cover mt-6 shrink-0 "
          alt="Community Logo"
        />
      </div>
    </div>
  );
};

export default About;
