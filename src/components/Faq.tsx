import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq = () => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          Ar galima patiems atsirinkti nuotraukas?
        </AccordionTrigger>
        <AccordionContent>
          Taip, visada duodu atsirinkti patiems ;)
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Ar padėsite su pozavimu?</AccordionTrigger>
        <AccordionContent>
          Žinoma! Papasakosiu ką ir kaip daryti, kad jums būtų smagu ir patogu
          :))
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Ar važiuojate į kitus miestus?</AccordionTrigger>
        <AccordionContent>Taip, bet už papildomą mokestį :))</AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger>
          Per kiek laiko atiduodate nuotraukas?
        </AccordionTrigger>
        <AccordionContent>
          Per dvi savaites. Dažniausiai net greičiau :)){' '}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-5'>
        <AccordionTrigger>
          Ar patariate dėl vietos/drabužių/studijos?
        </AccordionTrigger>
        <AccordionContent>
          Taip, visada patarsiu bet kokiais klausymais kiek turėsiu žinių ;)
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-6'>
        <AccordionTrigger>
          Ar atiduodate neredaguotas nuotraukas?
        </AccordionTrigger>
        <AccordionContent>
          Ne, neredaguotų nuotraukų neatiduodu ^^
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
