import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <div className='h-screen bg-red-400'>
        <Image
          className=' sm:m-auto w-full object-cover '
          src='/profile3.jpg'
          fill={true}
          alt='Picture of the author'
        />
      </div>
      <div className='h-[100px]'></div>
    </main>
  );
}
