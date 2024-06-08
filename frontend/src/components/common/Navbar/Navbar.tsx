import { FC } from 'react';
import logo from '../../../assets/images/logo.svg';
import { LanguageSelect } from './LanguageSelect';
import { cx } from 'class-variance-authority';
import vj2logo from '../../../assets/images/VJlogo2.svg';

export interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={cx(
        'fixed flex w-full items-center justify-between bg-black/[90%] px-5 py-3 text-md',
        className,
      )}
    >
      <a href='/'>
        <img src={logo} alt='logo' className='w-24' />
      </a>
      <img src={vj2logo} alt='vj2logo' className='w-20 md:mt-3' />
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
