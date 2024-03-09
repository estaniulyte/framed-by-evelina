import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import InstagramIcon from '@/components/icons/instagram';
import FacebookIcon from '@/components/icons/facebook';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MywedIcon from '@/components/icons/mywed';
// import { ContactUs } from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Framed by Evelina',
  description: 'Fotografas Vilniuje',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen font-sans antialiased grainy',
          inter.className
        )}
      >
        <Header />
        {children}
        <MaxWidthWrapper>
          <div className='w-[90%] md:w-full my-9 m-auto flex justify-between gap-x-10 text-center text-[#2F2E2B]'>
            {/* <div>
            <div>email: info@estaniulyte.com</div>
            
          </div> */}
            {/* <ContactUs /> */}
            <div className='text-sm'>
              @ Framed by Evelina {new Date().getFullYear()}
            </div>
            <div className='flex gap-5 align-middle content-center'>
              <a
                href='https://www.instagram.com/framed.by.evelina/'
                className='grid content-center'
              >
                <InstagramIcon fillColor='#2F2E2B' size='27' />{' '}
              </a>

              <a
                href='https://www.facebook.com/framedbyevelinaa'
                className='grid content-center'
              >
                <FacebookIcon fillColor='#2F2E2B' size='25' />
              </a>
              <a
                href='https://mywed.com/lt/photographer/framedbyevelina/'
                className='mywed_badge grid content-center'
                title='Vestuvių fotografas Evelina Staniulytė (Vilnius, Lietuva) | MyWed'
              >
                <MywedIcon fillColor='#2F2E2B' size='27' />
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
