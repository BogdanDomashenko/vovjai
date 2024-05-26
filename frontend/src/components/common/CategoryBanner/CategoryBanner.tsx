import { FC, useState } from 'react';
import { WorkCategoryInstrument } from '../../../common/types/work.types';
import { Separator } from '../Separator';
import classNames from 'classnames';
import { WORK_CATEGORY_INSTUMENT_ICON } from '../../../common/constants';
import { useBreakpoint } from '../../../common/hooks/useBreackpoint';

export interface CategoryBannerProps {
  title: string;
  text: string;
  instruments: WorkCategoryInstrument[];
  image: string;
}

export const CategoryBanner: FC<CategoryBannerProps> = ({ title, text, instruments, image }) => {
  const { isBreakpointHigherThan, isBreakpointLowerThan } = useBreakpoint();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='cursor-pointer bg-black p-sm'>
      <div
        className={classNames(
          'flex flex-col items-center justify-between bg-cover bg-no-repeat p-1 md:flex-row',
          {
            'ring-1 ring-white': isHovered,
          },
        )}
        style={{
          backgroundImage: !isHovered ? `url("${image}")` : 'none',
          ...(isBreakpointLowerThan('md') && {
            backgroundPosition: 'right bottom',
            backgroundSize: '250%',
          }),
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='flex w-6/12 flex-col items-center md:flex-row'>
          <div className='flex flex-col items-center gap-sm md:inline-flex md:w-[min-content] md:flex-row'>
            <h2 className='text-center font-sans text-md font-bold uppercase leading-[25px] text-white md:text-lg md:leading-[50px]'>
              {title}
            </h2>
            <Separator className='ml-4 hidden md:block' />
            <Separator className='ml-4 block md:hidden' direction='horizontal' />
          </div>
          {isBreakpointHigherThan('md') && (
            <div className='ml-12 grid grid-cols-2 gap-3'>
              {instruments.map((instrument, index) => (
                <img
                  key={index}
                  src={WORK_CATEGORY_INSTUMENT_ICON[instrument]}
                  className='h-8 w-8'
                  alt={`${instrument} icon`}
                />
              ))}
            </div>
          )}
        </div>
        <div
          className={classNames(
            'mt-4 min-h-[80px] pr-4 text-center leading-none text-white md:mt-0 md:w-4/12 md:text-right',
            {
              opacity: isHovered ? 1 : 0,
              invisible: !isHovered && isBreakpointHigherThan('md'),
            },
          )}
        >
          {text}
        </div>
        {isBreakpointLowerThan('md') && (
          <div className='w-full'>
            <div className='grid max-w-[70px] grid-cols-2 gap-3'>
              {instruments.map((instrument, index) => (
                <img
                  key={index}
                  src={WORK_CATEGORY_INSTUMENT_ICON[instrument]}
                  className='h-8 w-8'
                  alt={`${instrument} icon`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
