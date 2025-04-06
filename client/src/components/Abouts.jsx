import React from 'react';
import AboutSlider from './AboutSlider';
import About from './About';

const Abouts = () => {
  return (
    <>
    <About />
    <div className="lg:flex lg:flex-row  items-center justify-center lg:mt-10 lg:mb-14  max-w-screen mx-2 ">
      {/* Left Section */}
      <div className="w-full lg:w-full h-[70vh] lg:h-[60vh] lg:flex flex flex-col lg:flex-row ">
        {/* About Slider */}
        <div className="w-full lg:w-1/2 h-full md:w-full">
          <AboutSlider />
        </div>

        {/* About Text */}
        <div className="w-full lg:w-1/2 flex flex-col  items-center p-4 lg:p-8 lg:py-16">
          <h1 className="sm:text-4xl text-3xl font-bold text-center lg:text-left">
            Women’s Community
          </h1>
          <h1 className="sm:text-4xl text-3xl font-bold pb-1 text-center lg:text-left">
            Boutique CIC
          </h1>
          <p className="text-[18px] my-2 text-gray-600 text-center lg:text-left">
            -Activities
          </p>
          <p className="sm:text-[16px] text-[14px] text-center lg:text-left text-gray-700">
            Beyond fashion, we are a safe and inclusive space for women,
            offering skill-building workshops, creative upcycling sessions, and
            community events that foster connection and empowerment. Whether
            you’re shopping for your perfect dress or looking to join a
            supportive network of women, our boutique is here for you.
          </p>
          <p className="sm:text-[16px] text-[14px] text-center lg:text-left text-gray-700 my-5">
            📍 Visit us in-store to explore our collection or take part in our
            vibrant community activities.
          </p>
          <button className="text-white bg-black rounded-lg p-3 text-[14px] my-2">
            Discover More
          </button>
          <img
            src="images/sv.svg"
            className="mx-auto block h-7 rounded-full object-cover mt-4"
            alt="Community Logo"
          />
        </div>
      </div>

      {/* Right Section (Placeholder) */}
      {/* <div className="w-full lg:w-1/2 bg-cyan-600 h-[70vh] flex items-center justify-center p-4">
        Add your content here
      </div> */}
    </div>
    </>
  );
};

export default Abouts;
