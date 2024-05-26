import { FC, ReactNode, useEffect } from 'react';
import { Button } from '../../../ui';
import { useLocalization } from '../../../../common/hooks';
import logo from '../../../../assets/images/logo-white.svg';
import { IoIosArrowUp } from 'react-icons/io';
import { useAnimate } from 'framer-motion';
import { useClickOutside } from '../../../../common/hooks/useClickOutside';

export interface MobileItemsProps {
  isOpen: boolean;
  onClose: () => void;
  items: { icon: ReactNode; text: string }[];
}

export const MobileItems: FC<MobileItemsProps> = ({ items, isOpen, onClose }) => {
  const [scope, animate] = useAnimate();
  const { localize } = useLocalization();

  useEffect(() => {
    if (isOpen) {
      animate(scope.current, {
        top: 0,
        transition: { duration: 0.5 },
        opacity: 1,
      });
    } else {
      animate(scope.current, {
        top: '-100dvh',
        transition: { duration: 0.5 },
        opacity: 0,
      });
    }
  }, [isOpen]);

  useClickOutside(scope, onClose);

  return (
    <div
      ref={scope}
      className='height-24 absolute left-0 top-[-100dvh] z-10 w-full rounded-b-2xl bg-primary-800 px-2 py-4 opacity-0'
    >
      <ul className='mx-auto flex w-10/12 flex-col gap-3'>
        {items.map((item, index) => (
          <li key={index}>
            <Button icon={item.icon} width='lg' className='w-full'>
              {localize(item.text)}
            </Button>
          </li>
        ))}
      </ul>
      <div className='mt-4 flex justify-between'>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='h-10 w-10' />
          <span className='ml-4 leading-tight'>{localize('nav_description')}</span>
        </div>
        <Button className='h-10 w-10 p-0' onClick={onClose}>
          <IoIosArrowUp className='text-xl' />
        </Button>
      </div>
    </div>
  );
};
