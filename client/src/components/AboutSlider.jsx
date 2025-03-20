import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function AboutSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="w-full md:w-[50%] lg:w-[100%] mx-auto h-[500px]"> {/* Ensures it doesn't take full width */}
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
        <SwiperSlide className="swiper-slide">
            <img src='images/aboutslide.jpg' />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/aboutslide7.jpg' /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/aboutslide1.jpg' /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/aboutslide2.jpg' /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/aboutslide3.jpg' /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/aboutslide4.jpg' /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/boutslide5.jpg' /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/aboutslide6.jpg' /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/aboutslide8.jpg' /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/aboutslide9.jpg' /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src='images/aboutslide10.jpg' /></SwiperSlide>

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
