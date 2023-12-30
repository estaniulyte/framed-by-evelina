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
            <p className='text-xl uppercase text-gray-300 lg:text-3xl 3xl:text-4xl pb-2 tracking-widest'>
              Nuotraukos pilnos
            </p>
            <h1 className='text-5xl font-semibold lg:text-6xl 3xl:text-7xl text-gray-200 uppercase tracking-widest font-serif'>
              Istorijų
            </h1>
          </div>
        </div>
        <Tabs defaultValue='all' className='w-full mx-auto md:my-5 pb-5'>
          <TabsList className='flex mb-7'>
            <TabsTrigger value='all' className=''>
              Visos
            </TabsTrigger>
            <TabsTrigger value='couples'>Poros</TabsTrigger>
            <TabsTrigger value='personal'>Asmeninės</TabsTrigger>
            <TabsTrigger value='family'>Šeimos</TabsTrigger>
            <TabsTrigger value='products'>Produktai</TabsTrigger>
          </TabsList>
          <TabsContent value='all'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-7'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 bg-slate-100'>
                <div>
                  <img
                    className='w-full aspect-[5/6] object-cover'
                    src='https://drive.google.com/uc?export=download&id=1dyTME0m3jl7O59gL_jMER0-9a1fw9k53'
                  ></img>
                </div>
                <div className='w-[80%] py-8 md:py-0 text-center m-auto text-xl 3xl:text-3xl tracking-wider leading-7'>
                  Žieminis pasivaiksčiojimas ir meškučių medžioklė
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 bg-slate-100'>
                <div>
                  <img
                    className='w-full aspect-[5/6] object-cover'
                    src='https://drive.google.com/uc?export=download&id=1YZZ-luI9q_NQey0H_f2NgJOTFFRM5eyL'
                  ></img>
                </div>
                <div className='w-[80%] py-8 md:py-0 text-center m-auto text-xl 3xl:text-3xl tracking-wider leading-7'>
                  Young ir Kauno eglutė
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 bg-slate-100'>
                <div>
                  <img
                    className='w-full aspect-[5/6] object-cover'
                    src='https://drive.google.com/uc?export=download&id=18ScN1aVFDfH4UwTaSYNGqXaoBacqHczv'
                  ></img>
                </div>
                <div className='w-[80%] py-8 md:py-0 text-center m-auto text-xl 3xl:text-3xl tracking-wider leading-7'>
                  Atsinaujint LinkedIn portretą
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 bg-slate-100'>
                <div>
                  <img
                    className='w-full aspect-[5/6] object-cover'
                    src='https://drive.google.com/uc?export=download&id=1uCi7KrsGRFs4Q_OKy9ptT_zamU33n4CI'
                  ></img>
                </div>
                <div className='w-[80%] py-8 md:py-0 text-center m-auto text-xl 3xl:text-3xl tracking-wider leading-7'>
                  {' '}
                  Dominika ir jos knygų karalystė
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 bg-slate-100'>
                <div>
                  <img
                    className='w-full aspect-[5/6] object-cover'
                    src='https://drive.google.com/uc?export=download&id=1V72m07BxFnO38pj5YJW1UnAsAHadPoMj'
                  ></img>
                </div>
                <div className='w-[80%] py-8 md:py-0 text-center m-auto text-xl 3xl:text-3xl tracking-wider leading-7'>
                  {' '}
                  Glorijos 1-asis gimtadieniukas
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='couples'>Poros</TabsContent>
          <TabsContent value='personal'>Asmenines</TabsContent>
          <TabsContent value='family'>Seimos</TabsContent>
          <TabsContent value='products'>Produktai</TabsContent>
        </Tabs>
        <p className='pb-5 text-center uppercase'>MORE COMING SOON</p>
      </MaxWidthWrapper>
    </main>
  );
}
