import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SheinSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const data = {
    products: [
      { id: 1, name: 'Indian Bride 1', image: 'images/shein2.webp' },
      { id: 2, name: 'Indian Bride 2', image: 'images/shein3.webp' },
      { id: 3, name: 'Indian Bride 3', image: 'images/shein4.webp' },
      { id: 4, name: 'Indian Bride 4', image: 'images/shein5.webp' },
      { id: 5, name: 'Indian Bride 5', image: 'images/shein6.webp' },
      { id: 6, name: 'Indian Bride 6', image: 'images/shein7.jpg' },
      { id: 7, name: 'Indian Bride 7', image: 'images/women.webp' },
      { id: 8, name: 'Indian Bride 8', image: 'images/women2.webp' },
      { id: 9, name: 'Indian Bride 9', image: 'images/women3.webp' },
      { id: 10, name: 'Indian Bride 10', image: 'images/women4.webp' },
    
    ],
  };
  const middleIndex = Math.floor(data.products.length / 2);

  return (
    <div className="w-full md:w-[50%] lg:w-[100%] mx-auto h-full"> {/* Ensures it doesn't take full width */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="myswiper"
      >
         {/* Before Middle Index */}
         {data.products.slice(0, middleIndex).map((product) => (
          <SwiperSlide key={product.id} className="overflow-hidden">
            <div className="w-full h-[350px] lg:h-full swiper-slider aspect-w-16 aspect-h-9 flex justify-center items-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}

        {/* Video Slide in the Middle */}
        <SwiperSlide>
          <div className="w-full h-[350px] lg:h-[650px] swiper-slide flex justify-center items-center">
            <video src="images/vid.mp4" autoPlay muted loop className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>

        {/* After Middle Index */}
        {data.products.slice(middleIndex).map((product) => (
          <SwiperSlide key={product.id} className="overflow-hidden swiper-slide">
            <div className="w-full h-[350px] lg:h-[650px] flex justify-center items-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}

        {/* Autoplay Progress Indicator */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
