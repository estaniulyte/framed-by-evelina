'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { photoshootList } from '@/data';
import Image from 'next/image';
import { Gallery } from 'react-grid-gallery';

import LightGallery from 'lightgallery/react';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import { useState } from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params;

  console.log(slug);
  const selectedPhotoshoot = photoshootList.find(
    (photoshoot) => photoshoot.slug === slug
  );

  if (!selectedPhotoshoot) {
    return <div>Object not found</div>;
  }

  const { name, description, pictures } = selectedPhotoshoot;

  return (
    <main className=' w-full'>
      <div className='h-[60px] md:h-[140px] mb-6 bg-black w-full'></div>

      <MaxWidthWrapper>
        <h1 className='text-5xl mb-6'>{name}</h1>
        <Gallery
          images={pictures}
          enableImageSelection={false}
          rowHeight={400}
        />
        <p className='py-5 text-center uppercase'>COMING SOON</p>
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
