'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { photoshootList, propsList } from '@/data';
import PhotosessionGrid from '@/components/PhotosessionGrid';
import PropsGrid from '@/components/PropsGrid';

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
          <img
            className='absolute top-0 right-0 w-full h-screen object-cover overflow-hidden ma-0 pa-0'
            src='https://github.com/estaniulyte/photos/blob/main/forpages/rekvizitaiDesk.jpg?raw=true'
          ></img>
          <div className='absolute top-[60%] md:top-[20%] lg:top-3/4 left-1/2 lg:left-[18%] -translate-x-1/2 -translate-y-1/2 opacity-90 text-center md:text-left z-10'>
            <p className='text-3xl uppercase text-gray-300 lg:text-3xl 3xl:text-5xl pb-2 tracking-widest'>
              Nuomojami
            </p>
            <h1 className='text-5xl font-semibold lg:text-6xl 3xl:text-7xl text-gray-200 uppercase tracking-widest font-serif'>
              rekvizitai
            </h1>
          </div>
        </div>
        <h1 className='py-3'>Grožis detalėse ir akcentuose</h1>
        <h1 className='py-3'>
          Besiruošdama savo fotosesijai susiduriau su problemyte, kad neturiu
          jokių akcentų fotosesijai ir paskutinę minutę reikia bėgti į
          parduotuvę beieškant kažko, kas papildytų ar suteiktų mano įvaizdžiui
          šiokio tokio įdomumo
        </h1>
        <h1 className='py-3'>
          Tad su džiaugsmu pristatau savo klientams nuomojamus rekvizitus ;))
        </h1>
        <h1 className='text-2xl my-5'>Kainos</h1>
        <div className='flex flex-col mb-5'>
          <div className='-m-1.5 overflow-x-auto'>
            <div className='p-1.5 w-full md:w-1/2 inline-block align-middle'>
              <div className='overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-200 '>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                      >
                        Kiekis
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                      >
                        Kaina
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 '>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        1
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        3€
                      </td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        2
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        5€
                      </td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        3
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        7€
                      </td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        4
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        8€
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Tabs defaultValue='all' className='w-full mx-auto md:my-5 pb-5'>
          <TabsList className='flex mb-7 flex-wrap'>
            <TabsTrigger value='all' className=''>
              Visi
            </TabsTrigger>
            {/* <TabsTrigger value='flowers'>Gėlės</TabsTrigger> */}
            <TabsTrigger value='accessories'>Aksesuarai</TabsTrigger>
            <TabsTrigger value='dishes'>Indai</TabsTrigger>
            <TabsTrigger value='objects'>Daiktai</TabsTrigger>
            {/* <TabsTrigger value='clothes'>Drabužiai</TabsTrigger> */}
          </TabsList>
          <TabsContent value='all'>
            <PropsGrid items={propsList} />
          </TabsContent>
          <TabsContent value='flowers'>
            <PropsGrid
              items={propsList.filter((item) => item.types.includes('flowers'))}
            />
          </TabsContent>
          <TabsContent value='accessories'>
            <PropsGrid
              items={propsList.filter((item) =>
                item.types.includes('accessories')
              )}
            />
          </TabsContent>
          <TabsContent value='dishes'>
            <PropsGrid
              items={propsList.filter((item) => item.types.includes('dishes'))}
            />
          </TabsContent>
          <TabsContent value='clothes'>
            <PropsGrid
              items={propsList.filter((item) => item.types.includes('clothes'))}
            />
          </TabsContent>
          <TabsContent value='objects'>
            <PropsGrid
              items={propsList.filter((item) => item.types.includes('objects'))}
            />
          </TabsContent>
        </Tabs>
        <p className='py-5 text-center uppercase'>MORE COMING SOON</p>
      </MaxWidthWrapper>
    </main>
  );
}
