import { FC } from 'react';
import { Container } from '../../ui';
import { useLocalization } from '../../../common/hooks';
import VJlogo2 from '../../../assets/images/VJlogo2.svg';
import { cx } from 'class-variance-authority';

export interface FooterProps {
  title: string;
  children?: React.ReactNode;
  bgImage: string;
  className?: string;
}

export const Footer: FC<FooterProps> = ({ title, children, bgImage, className }) => {
  const { localize } = useLocalization();

  return (
    <footer
      className={cx(className)}
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
    >
      <Container gradientBg={false} className='px-6 py-4 md:px-0'>
        <div className='bg-black py-3 text-center md:py-1'>
          <h2 className='text-2md font-serif leading-tight md:text-lg'>{title}</h2>
        </div>
        <div className='my-4'>{children}</div>
        <div className='mt-6 grid grid-cols-3'>
          <div className='text-xxs md:text-sm'>
            <div>{new Date().getFullYear()} ©</div>
            <div>{localize('all_rights_reserved')}</div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={VJlogo2} alt='VJlogo2' className='w-20' />
            <div className='mt-1 text-xs'>Vovjai.com</div>
          </div>
          <div className='text-xxs flex flex-col items-end md:text-sm'>
            <p>{localize('design_by_vovjai')}</p>
            <p>{localize('code_by_sorryimbroke')}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
