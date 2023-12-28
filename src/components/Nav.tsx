import Link from 'next/link';
import { navItems } from '@/data';

interface Props {
  isActive: boolean;
}

const Nav = ({ isActive = false }: Props) => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex gap-x-8 xl:gap-x-10'>
        {navItems.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={item.href}
              className={`${
                isActive
                  ? 'font-normal uppercase hover:text-zinc-500'
                  : 'xl:text-xl 3xl:text-2xl font-semibold hover:text-zinc-200 '
              }  `}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
