import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

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
        <div className='w-full my-9 m-auto flex justify-center gap-x-10 text-center text-[#877964]'>
          {/* <div>
            <div>email: info@estaniulyte.com</div>
          </div> */}
          <div>
            <a href='https://www.instagram.com/framed.by.evelina/'>Instagram</a>
          </div>
        </div>
      </body>
    </html>
  );
}
