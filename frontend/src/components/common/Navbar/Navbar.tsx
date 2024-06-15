import { FC } from 'react';
import logo from '../../../assets/images/logo.svg';
import { LanguageSelect } from './LanguageSelect';
import { cx } from 'class-variance-authority';
import vj2logo from '../../../assets/images/VJlogo2.svg';
import { css } from '@emotion/css';

export interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={cx(
        'fixed z-10 flex w-full items-center justify-between bg-black/[98%] px-5 py-3 text-md',
        css`
          &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1.5px;
            opacity: 0.7;
            background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(255, 255, 255, 1) 50%,
              rgba(0, 0, 0, 1) 100%
            );
            z-index: -1;
          }
        `,
        className,
      )}
    >
      <a href='/' className='p-2 ring-white hover:ring-1'>
        <img src={logo} alt='logo' className='w-24' />
      </a>
      <img src={vj2logo} alt='vj2logo' className='w-20' />
      {/*       <DesktopItems items={navbarItems} className='hidden md:flex' />
      <MobileItems
        items={navbarItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      /> */}
      <LanguageSelect />
      {/*       <Button className='block h-11 w-11 p-0 md:hidden' onClick={() => setIsMobileMenuOpen(true)}>
        <IoIosArrowDown className='text-xl' />
      </Button> */}
    </nav>
  );
};
