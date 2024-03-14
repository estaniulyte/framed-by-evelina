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
        <div className='hidden md:flex flex-col md:flex-row gap-y-3 md:max-w-[1500px] mx-auto align-center mt-10'>
          <div className='md:flex md:justify-end md:pr-20'>
            <img
              className='h-auto w-full md:w-2/3 align-right object-cover'
              src='https://github.com/estaniulyte/photos/blob/main/forpages/me.jpg?raw=true'
            />
          </div>
          <div className='flex flex-grow h-full md:w-2/3 justify-center md:pt-20 flex-col gap-4 text-center md:text-left text-lg 2xl:text-xl'>
            <p>Malonu, kad užsukot ir žvalgotes! </p>
            <p>
              Čia šiek tiek norėčiau pristatyt save ir ką man reiškia
              fotografija.
            </p>
            <p>
              Esu Evelina ir nemėgstu apie save daug kalbėti :D mėgstu veikti ir
              per darbus išsireikšti, parodyti kas esu
            </p>
            <p>
              Fotografija lydi mane visą gyvenimą. Jei ne pro veidrodinį
              objektyvą, tai per telefono kamerą. O prasidėjo ši kelionė nuo
              paauglystės ir paprasčiausio fotoaparačiuko. Gyvenau mažam
              kaimuke, apsupta gamtos, tad ji ir buvo mano didžiausiu įkvėpimo
              šaltiniu
            </p>
            <p>
              Bėgant laikui įsimylėjau žmones, jie tapo mano mūzom. Kiekvienas
              esame ypatingas, unikalus ir GRAŽUS. Tačiau nusivertiname, labai
              dažnai. Ir O DIEVAI, koks geras jausmas pamatyti žmogų įsimylinti
              save fotografijos dėka{' '}
            </p>
          </div>
        </div>
        <div className='md:hidden flex flex-col md:flex-row gap-y-8 md:max-w-[1500px] mx-auto align-center mt-10'>
          <div className='flex flex-grow h-full md:w-2/3 justify-center md:pt-20 flex-col gap-4 text-center md:text-left text-xl md:text-2xl'>
            <p>Malonu, kad užsukot ir žvalgotes! </p>
            <p>
              Čia šiek tiek norėčiau pristatyt save ir ką man reiškia
              fotografija.
            </p>
            <p>
              Esu Evelina ir nemėgstu apie save daug kalbėti :D mėgstu veikti ir
              per darbus išsireikšti, parodyti kas esu
            </p>
            <p>
              Fotografija lydi mane visą gyvenimą. Jei ne pro veidrodinį
              objektyvą, tai per telefono kamerą. O prasidėjo ši kelionė nuo
              paauglystės ir paprasčiausio fotoaparačiuko. Gyvenau mažam
              kaimuke, apsupta gamtos, tad ji ir buvo mano didžiausiu įkvėpimo
              šaltiniu
            </p>
            <p>
              Bėgant laikui įsimylėjau žmones, jie tapo mano mūzom. Kiekvienas
              esame ypatingas, unikalus ir GRAŽUS. Tačiau nusivertiname, labai
              dažnai. Ir O DIEVAI, koks geras jausmas pamatyti žmogų įsimylinti
              save fotografijos dėka{' '}
            </p>
            <p>
              Vertinu nuotraukuose emocijas, natūralumą, atsipalaidavimą kurio
              ir sieksime mūsų sesijos metu.{' '}
            </p>
            <p>
              Kodėl man tai svarbu? Po fotosesijos praleidžiu valandas
              koreguojant nuotraukas ir man patinka pasigauti save besišypsančią
              ir išgyvenančią per naują tas akimirkas kurias įpaveikslavau.
              Manau, tai įprasmina mano darbą. Įamžinti momento šilumą, juoką,
              energiją.
            </p>
            <p>
              Kalbant apie stilių ir spalvas - mėgstu šilumą. Šilumą veiduose,
              aplinkoj ar bendrai atmosferoj.
            </p>
            <p>Dabar laukiu nesulaukiu progos susipažinti ir su Tavim!</p>
            <p>Šilčiausi linkėjimai, </p>
            <p>Evelina</p>
          </div>
          <div className='md:flex md:justify-end md:pr-20'>
            <img
              className='h-auto w-full md:w-2/3 align-right object-cover'
              src='https://github.com/estaniulyte/photos/blob/main/forpages/me.jpg?raw=true'
            />
          </div>
        </div>
        <div className='hidden md:flex flex-col md:flex-row gap-y-3 md:max-w-[1500px] mx-auto align-center mt-10'>
          <div className='flex flex-grow h-full md:w-[40%] 2xl:w-[50%] justify-center md:pt-20 flex-col gap-4 text-center md:text-right text-lg 2xl:text-xl -mr-40 ml-44'>
            <p>
              Vertinu nuotraukuose emocijas, natūralumą, atsipalaidavimą kurio
              ir sieksime mūsų sesijos metu.{' '}
            </p>
            <p>
              Kodėl man tai svarbu? Po fotosesijos praleidžiu valandas
              koreguojant nuotraukas ir man patinka pasigauti save besišypsančią
              ir išgyvenančią per naują tas akimirkas kurias įpaveikslavau.
              Manau, tai įprasmina mano darbą. Įamžinti momento šilumą, juoką,
              energiją.
            </p>
            <p>
              Kalbant apie stilių ir spalvas - mėgstu šilumą. Šilumą veiduose,
              aplinkoj ar bendrai atmosferoj.
            </p>
            <p>Dabar laukiu nesulaukiu progos susipažinti ir su Tavim!</p>
            <p>Šilčiausi linkėjimai, </p>
            <p>Evelina</p>
          </div>
          <div className='md:flex md:justify-center'>
            <img
              className='h-auto w-full md:w-[50%] align-right object-cover'
              src='https://github.com/estaniulyte/photos/blob/main/forpages/me-2.jpg?raw=true'
            />
          </div>
        </div>
        <p className='py-5 text-center uppercase'>COMING SOON</p>
      </MaxWidthWrapper>
    </main>
  );
}
