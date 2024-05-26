import { FC, ReactNode } from 'react';
import { Button } from '../../../ui';
import { useLocalization } from '../../../../common/hooks';
import { cx } from 'class-variance-authority';

export interface DesktopItemsProps {
  items: { icon?: ReactNode; text: string }[];
  className?: string;
}

export const DesktopItems: FC<DesktopItemsProps> = ({ items, className }) => {
  const { localize } = useLocalization();

  return (
    <ul className={cx('flex items-center gap-3 font-extrabold', className)}>
      {items.map((item, index) => (
        <li key={index}>
          <Button icon={item.icon} width='lg'>
            {localize(item.text)}
          </Button>
        </li>
      ))}
    </ul>
  );
};
