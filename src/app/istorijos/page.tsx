'use client';

import Image from 'next/image';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Gallery() {
  return (
    <main className='pt-4 w-full'>
      <MaxWidthWrapper>
        <div className='h-screen'>
          <Image
            className='w-full object-cover '
            src='/glory.jpg'
            fill={true}
            alt='Photoshot pictures'
          />
          <div className='invisible md:visible absolute top-[80%] z-30 left-[4%] 3xl:top-[85%] opacity-90'>
            <h1 className='lg:text-5xl text-gray-300 uppercase tracking-wider font-serif'>
              Nuotraukos
            </h1>
            <div className='uppercase text-gray-200 lg:text-2xl pt-3 tracking-widest '>
              Pilnos istorijų
            </div>
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
