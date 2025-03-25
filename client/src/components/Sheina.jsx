import React, { useState, useEffect } from 'react';

const Shein = () => {
  const images = [
    "images/eng.jpg",
    "images/eng2.jpg",
    "images/ind.jpeg",
    "images/ind2.jpeg",
    "images/nig.jpg",
    "images/nig2.jpg"
  ];

  const shuffleImages = (array) => [...array].sort(() => Math.random() - 0.5);

  const [shuffledImages, setShuffledImages] = useState(shuffleImages(images));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-screen h-[55vh] lg:h-[60vh] gap-3 px-64">
      {/* Middle Section (Main Slider) */}
      <div className="middle flex-[2] bg-gray-100 w-full lg:w-full h-full flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={images[currentImageIndex]}
            className="max-w-full max-h-full object-contain transition-opacity duration-500"
            alt="Main Slider Image"
          />
        </div>
      </div>

      {/* Right Section (Randomized Grid with Scaling Effect) */}
      <div className="right hidden lg:grid grid-cols-3 gap-2 flex-[1] w-full p-2">
        {shuffledImages.map((image, index) => (
          <div
            key={index}
            className={`bg-blue-500 w-full rounded-lg overflow-hidden transition-transform duration-300 ${
              images[currentImageIndex] === image ? "scale-110 border-4 border-red-500 shadow-lg" : ""
            }`}
          >
            <img
              src={image}
              className="w-full h-full object-contain"
              alt={`Grid Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shein;
