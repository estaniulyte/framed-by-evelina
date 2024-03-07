import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq = () => {
  return (
    <>
      <h1 className='text-3xl mt-8 mb-2 invisible md:visible'>D.U.K.</h1>
      <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4'>
        <div>
          <img
            src='https://github.com/estaniulyte/photos/blob/main/forpages/duk/duk.jpg?raw=true'
            className='object-cover w-[100%] h-96 md:w-96 md:h-96'
          ></img>
          <h1 className='text-3xl mt-8 mb-2 md:invisible'>D.U.K.</h1>
        </div>
        <div className='col-span-2'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                Ar galima patiems atsirinkti nuotraukas?
              </AccordionTrigger>
              <AccordionContent>
                Taip, visada duodu atsirinkti patiems ;) Iš anksto susitariam
                kiek nuotraukų pakoreguosiu, priklausomai nuo fotosesijos. Jei
                vis dėlto norėtumete galiausiai daugiau kadrų, kiekvienas
                papildomas kadras kainuoja 4e.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Ar padėsite su pozavimu?</AccordionTrigger>
              <AccordionContent>
                Žinoma! Papasakosiu ką ir kaip daryti, kad jums būtų smagu ir
                patogu :))
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>
                Ar važiuojate į kitus miestus?
              </AccordionTrigger>
              <AccordionContent>
                Taip, bet už papildomą mokestį :)) 20 eur / 100 km{' '}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>
                Per kiek laiko atiduodate nuotraukas?
              </AccordionTrigger>
              <AccordionContent>
                Per 2-3 savaites, po to kai atsirenkate nuotraukas (jei tai
                valandos fotosesija) :)){' '}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger>
                Ar patariate dėl vietos/drabužių/studijos?
              </AccordionTrigger>
              <AccordionContent>
                Taip, visada patarsiu bet kokiais klausymais kiek turėsiu žinių
                ;)
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6'>
              <AccordionTrigger>
                Ar atiduodate neredaguotas nuotraukas?
              </AccordionTrigger>
              <AccordionContent>
                Ne, neredaguotų nuotraukų neatiduodu :) bet užtad duodu
                pasirinkti Jums patiems kadrus, kuriuos norite gauti
                pakoreguotus. Kas užtikrina, kad gausite tai kas jums patinka ir
                aš galiu susifokusuoti ties tuom nuotraukom. Jei visgi norisi
                daugiau kadrų, visada galite pasirinkti papildomai po 4e už
                nuotrauką.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
