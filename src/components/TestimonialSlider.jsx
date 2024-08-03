  // TestimonialSlider.jsx
  import React from 'react';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation'; // Import Navigation styles
  import 'swiper/css/pagination'; // Import Pagination styles
  import { Navigation, Pagination } from 'swiper/modules';

  import reviews from '../data'; 

  const TestimonialSlider = () => {
    return (
      <div className="container mx-auto py-12  w-[50%] ">
        <h2 className="text-4xl font-bold text-center mb-8">Our Testimonials</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          className="mySwiper"
    
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <img src={review.image} alt={review.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <p className="text-gray-600">{review.job}</p>
                <p className="mt-4 text-gray-700">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  export default TestimonialSlider;

