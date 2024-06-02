import { FC } from 'react';
import { MutatingDots } from 'react-loader-spinner';

export const LoaderScreen: FC = () => {
  return (
    <div className='relative h-[100svh] w-full bg-black'>
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
