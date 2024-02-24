'use client';

import EmblaCarousel from './ui/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

// import '../css/embla.css'

import '../app/embla.css';

interface Item {
  name: string;
  pictures: { src: string }[];
  types: string[];
}

interface Props {
  items: Item[];
}

const OPTIONS: EmblaOptionsType = {
  align: 'start',
  loop: true,
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PropsGrid = ({ items }: Props) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-y-7 gap-x-7'>
      {items.map((item) => {
        return (
          <div key={item.name} className='grid grid-cols-1'>
            <div>
              {/* <Carousel
                className='w-full max-w-xs'
                opts={{
                  align: 'start',
                  loop: true,
                }}
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className='p-1'>
                        <img
                          className='w-full aspect-[5/6] object-cover'
                          src={item.picture}
                        ></img>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel> */}

              <EmblaCarousel slides={item.pictures} options={OPTIONS} />
              <div className='text-lg'>{item.name}</div>
            </div>
            {/* <div className='w-[80%] flex justify-center  bg-slate-100 h-full py-8 md:py-0 text-center m-auto text-xl 3xl:text-3xl tracking-wider leading-7 flex-column'>
              <div>{item.name}</div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default PropsGrid;
