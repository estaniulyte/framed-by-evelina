'use client';

import Faq from '@/components/Faq';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function Prices() {
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
          {/* <Image
            className=' w-full object-cover'
            src='/fotosesijos.jpg'
            fill={true}
            alt='Photoshot pictures'
          /> */}
          <img
            className='absolute top-0 right-0 hidden overflow-hidden lg:block h-screen w-full object-cover '
            src='https://github.com/estaniulyte/photos/blob/main/forpages/main/desktop-carousel/5.jpg?raw=true'
            alt='Photoshot pictures'
          />
          <Image
            className='block lg:hidden w-full object-cover'
            src='/fotosesijos-mobile.jpg'
            fill={true}
            quality={100}
            alt='Photoshot pictures'
          />
          <div className='absolute top-3/4 lg:top-[40%] left-1/2 lg:left-[19%] 3xl:left-[18%] -translate-x-1/2 -translate-y-1/2 opacity-90 text-center md:text-left z-10'>
            <p className='text-xl uppercase text-gray-300 lg:text-3xl 3xl:text-4xl pb-2 tracking-widest'>
              Emocijų kupinos
            </p>
            <h1 className='text-5xl font-semibold lg:text-5xl 3xl:text-7xl text-gray-200 uppercase tracking-widest font-serif'>
              Fotosesijos
            </h1>
          </div>
        </div>
        <h1 className='text-3xl mt-8 mb-3'>
          PORŲ, ŠEIMŲ, ASMENINĖS FOTOSESIJOS
        </h1>
        <p>- fotografavimas 1 val.</p>
        <p>- 15 retušuotų nuotraukų </p>
        <p>- retušavimas iki 3 savaičių</p>
        <p>- galimybė išsirinkti patinkančias nuotraukas</p>
        <p>- profesionalus retušas</p>
        <p>- kuro išlaidos Vilniuje rajone</p>
        <p>- per valanda spėjama pakeisti 2-3 įvaizdžius</p>
        <p>
          - nemokami{' '}
          <Link
            href='/rekvizitai'
            className='underline hover:cursor hover:text-primary-500'
          >
            aksesuarai ir daiktai iš čia
          </Link>
        </p>
        <p className='pt-4'>
          Jeigu fotosesijos pageidaujate <b>studijoje</b>, jos nuoma kainuoja
          papildomai (dažniausiai 30 — 50 eur/val. priklausomai nuo studijos)
        </p>
        <p className='pt-3'>
          Jei norėsis <b>daugiau nuotraukų</b>, visada galite atsirinkti
          papildomai po 4e už nuotrauką.
        </p>
        <p className='pt-3'>
          Jeigu fotosesija vyksta <b>už Vilniaus</b> rajono ribų, papildomai
          skaičiuojamos kelionės išlaidos 20 eur / 100 km
        </p>
        <p className='text-xl pt-3 mb-3'>
          <b>Kaina:</b> 70 eurų
        </p>
        <h1 className='text-3xl mt-10 mb-3'>DOVANŲ KUPONAI</h1>

        <div className='flex flex-col sm:flex-row'>
          <div>
            <p className='text-xl pb-3'>
              Siunčiu tiek fizinius, tiek online dovanų kuponus.
            </p>
            <p className='text-xl pb-3'>
              Galite pasirinkti tam tikro tipo (poros, asmeninę, šeimos)
              fotosesiją, ar fotosesija + studija. Jiegu reiktų kažko kito,
              parašykite žinutę ;)
            </p>
            <p className='text-xl pb-3'>
              Taip pat galite pridėti papildomą sveikinimą ant kupono ar
              pasirinkti ant viršelio betkokią nuotrauką iš mano darbų. ♡
            </p>
          </div>
          <img
            className='block w-[100%] sm:w-[60%] object-cover'
            src='https://github.com/estaniulyte/photos/blob/main/forpages/dovanukuponai.jpg?raw=true'
            alt='Photoshot pictures'
          />
        </div>
        <Faq />
        <div className='h-[100px] flex justify-center mt-10 '>COMMING SOON</div>
      </MaxWidthWrapper>
    </main>
  );
}
