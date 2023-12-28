'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Home() {
  return (
    // <main className='hidden lg:block'>
    <main>
      {/* <div className='h-screen'>
        <Image
          className=' sm:m-auto w-full object-cover '
          src='/profile.jpg'
          fill={true}
          alt='Photoshot pictures'
        />
      </div> */}
      <div
        className='block lg:hidden before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[20]'
      >
        <div className='absolute z-20 top-[70%] md:top-[80%] left-[4%] lg:left-[4%] 3xl:top-[85%] opacity-80'>
          <h1 className='text-5xl text-gray-100 uppercase tracking-widest font-semibold font-serif'>
            Tavo istorija.
          </h1>
          <div className='uppercase text-gray-200 text-xl pt-3 tracking-wider'>
            Tikra. Asmeniška. Nuotaikinga.
          </div>
        </div>
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
                src='/book-mobile.jpg'
                fill={true}
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-screen'>
              <Image
                className=' sm:m-auto w-full object-cover '
                src='/couple-mobile.jpg'
                fill={true}
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-screen'>
              <Image
                className=' sm:m-auto w-full object-cover '
                src='/mocas-mobile.jpg'
                fill={true}
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className='hidden lg:block before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[20]'
      >
        <div className='absolute top-[80%] left-[4%] 3xl:top-[85%] opacity-80 z-30'>
          <h1 className='text-5xl text-gray-100 uppercase tracking-widest font-semibold font-serif'>
            Tavo istorija.
          </h1>
          <div className='uppercase text-gray-200 text-2xl pt-3 tracking-wider'>
            Tikra. Asmeniška. Nuotaikinga.
          </div>
        </div>
        <Swiper
          spaceBetween={0}
          effect={'fade'}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
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
          <SwiperSlide>
            <div className='h-screen'>
              <Image
                className=' sm:m-auto w-full object-cover '
                src='/profile4.jpg'
                fill={true}
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='h-[100px] flex justify-center mt-10 '>COMMING SOON</div>
    </main>
  );
}
