import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { heroSliderImages } from '../data/data';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function SwiperImage() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={true}
        
        className="w-full h-full mySwiper"
      >

        {
          heroSliderImages?.map((img,i)=>(
            <SwiperSlide>
              <img
                  key={i}
                  src={img}
                  className=" md:rounded-tl-[108px] h-[80vh] object-cover  "
                  alt={img}
              />
            </SwiperSlide>
          ))
        }
        
        
        
        
        
      </Swiper>
    </>
  );
}
