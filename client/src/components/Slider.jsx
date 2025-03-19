import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  const data = {
    products: [
      { id: 1, name: 'Indian Bride 1', image: 'images/ind.jpeg' },
      { id: 2, name: 'Indian Bride 2', image: 'images/white.jpg' },
      { id: 3, name: 'Indian Bride 3', image: 'images/indianbride.jpg' },
      { id: 4, name: 'Indian Bride 4', image: 'images/nig.jpg' },
      { id: 5, name: 'Indian Bride 5', image: 'images/ind2.jpeg' },
      { id: 6, name: 'Indian Bride 6', image: 'images/ind3.jpeg' },
      { id: 7, name: 'Indian Bride 7', image: 'images/nig2.jpg' },
      { id: 8, name: 'Indian Bride 8', image: 'images/eng.jpg' },
      { id: 9, name: 'Indian Bride 9', image: 'images/eng2.jpg' },
      { id: 10, name: 'Indian Bride 10', image: 'images/eng3.jpg' },
      { id: 11, name: 'Indian Bride 11', image: 'images/ind5.jpg' },
      { id: 12, name: 'Indian Bride 12', image: 'images/nig3.jpg' },
      { id: 13, name: 'Indian Bride 13', image: 'images/nig5.jpg' },
      { id: 14, name: 'Indian Bride 14', image: 'images/nig6.jpg' },
      { id: 15, name: 'Indian Bride 1', image: 'images/ind.jpeg' },
    ],
  };

  // Calculate the middle index to insert the video
  const middleIndex = Math.floor(data.products.length / 2);

  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Grid, Pagination, Autoplay]}
        className="w-full"
        breakpoints={{
          640: {
            slidesPerView: 2,
            grid: { rows: 2 },
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            grid: { rows: 1 },
            spaceBetween: 20,
          },
        }}
      >
        {/* Before Middle Index */}
        {data.products.slice(0, middleIndex).map((product) => (
          <SwiperSlide key={product.id} className="overflow-hidden">
            <div className="w-full h-[350px] lg:h-[650px] flex justify-center items-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}

        {/* Video Slide in the Middle */}
        <SwiperSlide>
          <div className="w-full h-[350px] lg:h-[650px] flex justify-center items-center">
            <video src="images/vid.mp4" autoPlay muted loop className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>

        {/* After Middle Index */}
        {data.products.slice(middleIndex).map((product) => (
          <SwiperSlide key={product.id} className="overflow-hidden">
            <div className="w-full h-[350px] lg:h-[650px] flex justify-center items-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
