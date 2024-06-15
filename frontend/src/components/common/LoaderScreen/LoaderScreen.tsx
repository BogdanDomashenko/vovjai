import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { MutatingDots } from 'react-loader-spinner';

export interface LoaderScreenProps {
  className?: string;
}

export const LoaderScreen: FC<LoaderScreenProps> = ({ className }) => {
  return (
    <div className={cx('relative h-[100svh] w-full bg-black', className)}>
      <MutatingDots
        visible={true}
        height='100'
        width='100'
        color='#FFFFFF'
        secondaryColor='#FFFFFF'
        radius='12.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      />
    </div>
  );
};
