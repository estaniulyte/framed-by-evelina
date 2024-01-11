'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import Image from 'next/image';

export default function Contacts() {
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
            src='/contacts.jpg'
            fill={true}
            quality={90}
            alt='Photoshot pictures'
          />
          <Image
            className='block lg:hidden w-full object-cover'
            src='/contacts-mobile.jpg'
            fill={true}
            quality={100}
            alt='Photoshot pictures'
          />
          <div className='absolute top-[55%] lg:top-[27%] left-[50%] lg:left-[52%] 3xl:left-[52%] -translate-x-1/2 -translate-y-1/2 opacity-90 text-center md:text-left z-10'>
            <p className='text-xl uppercase text-gray-300 lg:text-3xl 3xl:text-4xl pb-2 tracking-widest'></p>
            <h1 className='text-4xl font-semibold lg:text-5xl 3xl:text-7xl text-gray-200 uppercase tracking-widest font-serif'>
              Kontaktai
            </h1>
          </div>
        </div>
        <p className='py-5 text-center uppercase'>COMING SOON</p>
      </MaxWidthWrapper>
    </main>
  );
}
