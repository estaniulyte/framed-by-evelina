'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import Faq from '@/components/Faq';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

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
      <div className='block md:hidden'>
        <div className='absolute z-20 top-[70%] md:top-[80%] left-[4%] lg:left-[4%] 3xl:top-[85%] opacity-80'>
          <h1 className='text-5xl text-gray-100 uppercase tracking-widest font-semibold font-serif'>
            Tavo istorija.
          </h1>
          <div className='uppercase text-gray-200 text-xl pt-3 tracking-wider'>
            Tikra. Asmeniška. Nuoširdi.
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
            <div
              className='h-screen before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[20]'
            >
              <img
                className=' sm:m-auto w-full object-cover h-screen'
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/mobile-carousel/11.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='h-screen before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[20]'
            >
              <img
                className='sm:m-auto w-full object-cover h-screen'
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/mobile-carousel/3.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='h-screen before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[20]'
            >
              <img
                className=' sm:m-auto w-full object-cover h-screen'
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/mobile-carousel/9.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='h-screen before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[20]'
            >
              <img
                className='sm:m-auto w-full object-cover h-screen'
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/mobile-carousel/1.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className='h-screen before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[20]'
            >
              <img
                className='sm:m-auto w-full object-cover h-screen'
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/mobile-carousel/5.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='h-screen before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[20]'
            >
              <img
                className='sm:m-auto w-full object-cover h-screen'
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/mobile-carousel/6.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className='h-screen before:absolute
                before:inset-0
                before:block
                before:bg-gradient-to-r
                before:from-black
                before:to-gray-900
                before:opacity-40
                before:z-[20]'
            >
              <Image
                className=' sm:m-auto w-full object-cover '
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/mobile-carousel/8.jpg?raw=true'
                fill={true}
                quality={100}
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='h-screen before:absolute
                before:inset-0
                before:block
                before:bg-gradient-to-r
                before:from-black
                before:to-gray-900
                before:opacity-40
                before:z-[20]'
            >
              <Image
                className=' sm:m-auto w-full object-cover '
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/mobile-carousel/10.jpg?raw=true'
                fill={true}
                quality={100}
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className='hidden md:block before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[20]'
      >
        <div className='absolute top-[80%] left-[4%] lg:top-[80%] 3xl:top-[86%] opacity-80 z-30'>
          <h1 className='text-5xl 3xl:text-6xl text-gray-100 uppercase tracking-widest font-semibold font-serif'>
            Tavo istorija.
          </h1>
          <div className='uppercase text-gray-200 text-2xl 3xl:text-3xl pt-3 tracking-wider'>
            Tikra. Asmeniška. Nuoširdi.
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
              <img
                className=' sm:m-auto h-screen w-full object-cover '
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/desktop-carousel/18.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-screen'>
              <img
                className=' sm:m-auto h-screen w-full object-cover '
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/desktop-carousel/7.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-screen'>
              <img
                className=' sm:m-auto h-screen w-full object-cover '
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/desktop-carousel/3.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='h-screen'>
              <img
                className=' sm:m-auto h-screen w-full object-cover '
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/desktop-carousel/15.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-screen'>
              <img
                className=' sm:m-auto h-screen w-full object-cover '
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/desktop-carousel/12.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='h-screen'>
              <img
                className=' sm:m-auto h-screen w-full object-cover '
                src='https://github.com/estaniulyte/photos/blob/main/forpages/main/desktop-carousel/8.jpg?raw=true'
                alt='Photoshot pictures'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <MaxWidthWrapper>
        <h1 className='text-3xl mt-8 mb-2'>D.U.K.</h1>
        <Faq />
      </MaxWidthWrapper>
      <div className='h-[100px] flex justify-center mt-10 '>COMMING SOON</div>
    </main>
  );
}
