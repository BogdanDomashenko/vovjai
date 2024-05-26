import { cx } from 'class-variance-authority';
import { FC } from 'react';
import separatorHorizontal from '../../../assets/icons/separator-horizontal.svg';
import separatorVertical from '../../../assets/icons/separator-vertical.svg';

export interface SeparatorProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

export const Separator: FC<SeparatorProps> = ({ className, direction = 'vertical' }) => {
  return (
    <img
      src={direction === 'vertical' ? separatorVertical : separatorHorizontal}
      width={direction === 'vertical' ? 10 : 45}
      height={direction === 'vertical' ? 45 : 10}
      className={cx('pointer-events-none', className)}
      alt='separator icon'
    />
  );
};
