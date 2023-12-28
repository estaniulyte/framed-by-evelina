'use client';

import Image from 'next/image';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Gallery() {
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
            className='w-full object-cover'
            src='/glory.jpg'
            fill={true}
            alt='Photoshot pictures'
          />
          <div className='absolute top-3/4 left-1/2 lg:left-[18%] -translate-x-1/2 -translate-y-1/2 opacity-90 text-center md:text-left z-10'>
            <p className='text-xl uppercase text-gray-300 lg:text-3xl pb-2 tracking-widest'>
              Nuotraukos pilnos
            </p>
            <h1 className='text-5xl font-semibold lg:text-6xl text-gray-200 uppercase tracking-widest font-serif'>
              Istorijų
            </h1>
          </div>
        </div>
        <p className='pb-5 text-center uppercase'>COMING SOON</p>
        {/* <Tabs defaultValue='account' className='w-full'>
          <TabsList>
            <TabsTrigger value='couples'>Poros</TabsTrigger>
            <TabsTrigger value='personal'>Asmeninės</TabsTrigger>
            <TabsTrigger value='family'>Šeimos</TabsTrigger>
            <TabsTrigger value='products'>Produktai</TabsTrigger>
          </TabsList>
          <TabsContent value='couples'>
            Make changes to your account here.
          </TabsContent>
          <TabsContent value='password'>Change your password here.</TabsContent>
        </Tabs> */}
      </MaxWidthWrapper>
    </main>
  );
}
