import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <div className='h-screen'>
        <Image
          className=' sm:m-auto w-full object-cover '
          src='/profile3.jpg'
          fill={true}
          alt='Picture of the author'
        />
      </div>
      <div className='h-[100px] flex justify-center mt-10 '>COMMING SOON</div>
    </main>
  );
}
