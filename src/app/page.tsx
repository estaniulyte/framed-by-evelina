'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Home() {
  return (
    <main className=''>
      {/* <div className='h-screen'>
        <Image
          className=' sm:m-auto w-full object-cover '
          src='/profile.jpg'
          fill={true}
          alt='Photoshot pictures'
        />
      </div> */}
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='h-screen'>
            <Image
              className=' sm:m-auto w-full object-cover '
              src='/profile.jpg'
              fill={true}
              alt='Photoshot pictures'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-screen'>
            <Image
              className=' sm:m-auto w-full object-cover '
              src='/profile3.jpg'
              fill={true}
              alt='Photoshot pictures'
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='h-[100px] flex justify-center mt-10 '>COMMING SOON</div>
    </main>
  );
}
