'use client';

import Faq from '@/components/Faq';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';

export default function Prices() {
  return (
    <main
      className='pt-4 w-full before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:to-gray-900
    before:opacity-40
    before:z-[1]'
    >
      <MaxWidthWrapper>
        <div className='h-screen w-full'>
          <Image
            className='hidden lg:block w-full object-cover'
            src='/fotosesijos.jpg'
            fill={true}
            alt='Photoshot pictures'
          />
          <Image
            className='block lg:hidden w-full object-cover'
            src='/fotosesijos-mobile.jpg'
            fill={true}
            quality={100}
            alt='Photoshot pictures'
          />
          <div className='absolute top-3/4 lg:top-[40%] left-1/2 lg:left-[19%] 3xl:left-[18%] -translate-x-1/2 -translate-y-1/2 opacity-90 text-center md:text-left z-10'>
            <p className='text-xl uppercase text-gray-300 lg:text-3xl 3xl:text-4xl pb-2 tracking-widest'>
              Emocijų kupinos
            </p>
            <h1 className='text-5xl font-semibold lg:text-5xl 3xl:text-7xl text-gray-200 uppercase tracking-widest font-serif'>
              Fotosesijos
            </h1>
          </div>
        </div>
        <h1 className='text-3xl mt-8 mb-2'>D.U.K.</h1>
        <Faq />
        <div className='h-[100px] flex justify-center mt-10 '>COMMING SOON</div>
      </MaxWidthWrapper>
    </main>
  );
}
