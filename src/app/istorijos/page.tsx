'use client';

import Image from 'next/image';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { photoshootList } from '@/data';
import PhotosessionGrid from '@/components/PhotosessionGrid';

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
            className='hidden lg:block w-full object-cover'
            src='/glory.jpg'
            fill={true}
            alt='Photoshot pictures'
          />
          <Image
            className='block lg:hidden w-full object-cover'
            src='/glory-mobile.jpg'
            fill={true}
            quality={100}
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
            <PhotosessionGrid items={photoshootList} />
          </TabsContent>
          <TabsContent value='couples'>
            <PhotosessionGrid
              items={photoshootList.filter((item) =>
                item.types.includes('couple')
              )}
            />
          </TabsContent>
          <TabsContent value='personal'>
            <PhotosessionGrid
              items={photoshootList.filter((item) =>
                item.types.includes('personal')
              )}
            />
          </TabsContent>
          <TabsContent value='family'>
            <PhotosessionGrid
              items={photoshootList.filter((item) =>
                item.types.includes('family')
              )}
            />
          </TabsContent>
          <TabsContent value='products'>
            <PhotosessionGrid
              items={photoshootList.filter((item) =>
                item.types.includes('product')
              )}
            />
          </TabsContent>
        </Tabs>
        <p className='pb-5 text-center uppercase'>MORE COMING SOON</p>
      </MaxWidthWrapper>
    </main>
  );
}
