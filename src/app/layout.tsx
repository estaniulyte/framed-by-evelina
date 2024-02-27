import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import InstagramIcon from '@/components/icons/instagram';
import FacebookIcon from '@/components/icons/facebook';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

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
            <div>©FramedbyEvelina {new Date().getFullYear()}</div>
            <div className='flex gap-5'>
              <a href='https://www.instagram.com/framed.by.evelina/'>
                <InstagramIcon fillColor='#2F2E2B' size='25' />{' '}
              </a>

              <a href='https://www.facebook.com/framedbyevelinaa'>
                <FacebookIcon fillColor='#2F2E2B' size='23' />
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
