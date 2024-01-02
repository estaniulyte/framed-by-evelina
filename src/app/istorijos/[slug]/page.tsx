import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { photoshootList } from '@/data';
import Image from 'next/image';

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

  const { name, description } = selectedPhotoshoot;

  return (
    <main className=' w-full'>
      <div className='h-[150px] bg-black w-full'></div>

      <MaxWidthWrapper>
        <h1 className='text-5xl'>{name}</h1>
        <p className='pb-5 text-center uppercase'>COMING SOON</p>
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
