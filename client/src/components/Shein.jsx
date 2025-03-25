import React, { useState, useEffect } from 'react';

const Shein = () => {
  const images = [
    "images/ai.png",
    "images/freepik__expand__32358.png",
    "images/freepik__expand__32359.png",
    "images/freepik__expand__76594.png",
    "images/freepik__expand__76595.png",
    "images/freepik__expand__76596.png"
  ];

  // Function to shuffle images randomly for the right-side grid
  const shuffleImages = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [shuffledImages, setShuffledImages] = useState(shuffleImages(images));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-screen h-[50vh] lg:h-[55vh] gap-3 lg:px-64">
      {/* Left Section (Hidden on Large Screens) */}
      <div className="left lg:hidden flex-col flex-[1] w-full hidden">
        <div className="bg-radial-[at_50%_75%] flex-[1] relative h-full">
          <img src="images/shein1.webp" alt="Shein" />
          <div className="text-[16px] w-full py-3 text-black absolute top-80 left-0 rounded bg-pink-100 flex items-center">
            <img src="images/WCB-Logo-web-2-300x107.png" alt="Logo" />
          </div>
        </div>
      </div>

      {/* Middle Section (Main Slider) */}
      <div className="middle flex-[2] bg-gray-200 w-full h-full flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
        <img
          src={images[currentImageIndex]}
          className="w-full h-full object-cover transition-opacity duration-500"
          alt="Main Slider Image"
        />
      </div>

      {/* Right Section (Randomized Grid with Scaling Effect) */}
      <div className="right hidden lg:grid grid-cols-3 gap-2 flex-[1] w-full p-2">
        {shuffledImages.map((image, index) => (
          <div
            key={index}
            className={`bg-blue-500 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden transition-transform duration-300 ${
              images[currentImageIndex] === image ? "scale-110 border-4 border-gray-400 shadow-lg" : ""
            }`}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Grid Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shein;
