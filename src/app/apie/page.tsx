'use client';

import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function About() {
  return (
    <main className='pt-4 w-full'>
      <MaxWidthWrapper>
        <div
          className='h-screen w-full 
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-black
            before:to-gray-900
            before:opacity-40
            before:z-[1]'
        >
          <Image
            className='w-full object-cover'
            src='/me.jpg'
            fill={true}
            alt='Photoshot pictures'
          />
          <div className='absolute top-3/4 left-1/2 lg:left-[18%] -translate-x-1/2 -translate-y-1/2 opacity-90 text-center md:text-left z-10'>
            <p className='text-2xl uppercase text-gray-300 lg:text-3xl pb-2 tracking-wider'>
              Sveiki, aš
            </p>
            <h1 className='text-5xl font-semibold lg:text-6xl text-gray-200 uppercase tracking-widest font-serif'>
              Evelina
            </h1>
          </div>
        </div>
        <p className='pb-5 text-center uppercase'>COMING SOON</p>
      </MaxWidthWrapper>
    </main>
  );
}
