import React from 'react';
import Slider from './Slider';
import Animation from './Animation';

const Carousel = () => {
  return (
    <div className="flex w-screen overflow-hidden">
      {/* Left Side - Slider */}
      <div className=" overflow-hidden">
        <Slider />
        {/* <Animation/> */}
      </div>

    </div>
  );
};

export default Carousel;
