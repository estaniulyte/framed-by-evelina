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
            className='hidden lg:block w-full object-cover'
            src='/me.jpg'
            fill={true}
            quality={100}
            alt='Photographer portrait - girl holding polaroid and smiling widely'
          />
          <Image
            className='block lg:hidden w-full object-cover'
            src='/me-mobile.jpg'
            quality={100}
            fill={true}
            alt='Photoshot pictures'
          />
          <div className='absolute top-[80%] lg:top-[30%] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-1/2 lg:right-[5%] opacity-90 text-center lg:text-left z-10'>
            <p className='text-2xl lg:text-3xl 3xl:text-4xl uppercase text-gray-300  pb-2 tracking-wider lg:text-right'>
              Sveiki atvykę, esu
            </p>
            <h1 className='text-5xl font-semibold lg:text-6xl 3xl:text-7xl text-gray-200 uppercase tracking-widest text-right font-serif'>
              Evelina
            </h1>
          </div>
        </div>
        <div className='flex flex-col gap-y-3 text-center md:text-left text-xl'>
          <p>Malonu, kad užsukot ir žvalgotes! </p>
          <p>
            Čia šiek tiek norėčiau pristatyt save ir ką man reiškia fotografija.
          </p>
          <p>
            Vertinu nuotraukuose emocijas, natūralumą, atsipalaidavimą kurio ir
            sieksime mūsų sesijos metu.{' '}
          </p>
          <p>
            Kodėl man tai svarbu? Po fotosesijos praleidžiu valandas koreguojant
            nuotraukas ir man patinka pasigauti save besišypsančią ir
            išgyvenančią per naują tas akimirkas kurias įpaveikslavau. Manau,
            tai įprasmina mano darbą. Įamžinti momento šilumą, juoką, energiją.
          </p>
        </div>
        <p className='py-5 text-center uppercase'>COMING SOON</p>
      </MaxWidthWrapper>
    </main>
  );
}
