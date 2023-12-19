import React from 'react';
import { navItems } from '@/data';

const NavMobile = ({ navMobile }: { navMobile: boolean }) => {
  return (
    <nav
      className={`${
        navMobile ? 'min-h-screen' : 'min-h-0'
      } lg:hidden w-full bg-black fixed top-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
        {navItems.map((item, idx) => {
          return (
            <li key={idx}>
              <a className='text-white text-body-md uppercase' href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
