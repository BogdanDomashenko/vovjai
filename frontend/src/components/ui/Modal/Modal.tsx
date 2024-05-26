import { FC, ReactNode, useEffect, useRef } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useClickOutside } from '../../../common/hooks/useClickOutside';
import { cx } from 'class-variance-authority';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width = 'lg',
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClose);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={cx('fixed right-0 top-0 h-screen w-full bg-gray-950/[0.5]')}>
      <div
        ref={ref}
        className={cx(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-xl border border-gray-400 bg-gray-950 p-8',
          className,
          {
            'max-w-sm': width === 'sm',
            'max-w-md': width === 'md',
            'max-w-lg': width === 'lg',
            'max-w-xl': width === 'xl',
            'w-full': width === 'full',
          },
        )}
      >
        <div
          className='absolute right-4 top-4 cursor-pointer rounded-lg bg-gray-700'
          onClick={onClose}
        >
          <IoCloseOutline className='text-3xl' />
        </div>
        <h2 className='text-center text-4xl font-extrabold'>{title}</h2>
        <div className='mt-4'>{children}</div>
      </div>
    </div>
  );
};
