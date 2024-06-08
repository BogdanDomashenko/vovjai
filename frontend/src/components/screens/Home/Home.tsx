import { FC } from 'react';
import vovjaiPortfolioMasterImg from '../../../assets/images/baner-animation.webp';
import { useLocalization } from '../../../common/hooks';
import { Banner, CategoryBanner } from '../../common';
import { Button } from '../../ui';
import { useWorkCategories } from '../../../common/api';
import { getUploadUrl } from '../../../common/utils';
import { AboutMe } from './AboutMe/AboutMe';
import { ContactMe } from './ContactMe';
import { Footer } from '../../common/Footer';
import homeFooterBg from '../../../assets/images/home-footer-bg.png';
import smileIcon from '../../../assets/images/smile.svg';
import sadSmileIcon from '../../../assets/images/sad-smile.svg';
import instagramIcon from '../../../assets/icons/instagram2.svg';
import youKnowImg from '../../../assets/images/you-know.png';
import youKnowSmall from '../../../assets/images/you-know-small.png';
import logo from '../../../assets/images/logo.svg';
import heartImg from '../../../assets/icons/heart.svg';
import rainbowLineImg from '../../../assets/images/rainbow-line.png';
import { Link } from 'react-router-dom';

export const Home: FC = () => {
  const { localize } = useLocalization();
  const { data } = useWorkCategories({ type: 'main' });

  return (
    <div className={`bg-[url('src/assets/images/bg.jpg')]`}>
      <div className='container flex max-w-6xl flex-col items-center bg-gradient-to-r from-dark-700 to-dark-800 px-0 pb-10 pt-[60px]'>
        <div className='bg-black md:p-4'>
          <img src={vovjaiPortfolioMasterImg} alt='vovjai-portfilio-master' className='md:border' />
        </div>
      </div>
      <div className='container flex max-w-6xl flex-col items-center bg-gradient-to-r from-dark-700 to-dark-800'>
        <Banner title={localize('promo_title')} text={localize('promo_text')} />
        <div className='mt-5 flex flex-wrap justify-center gap-4 md:flex-nowrap'>
          <a href='#about_me'>
            <Button width='xl' className='font-bold'>
              {localize('about_me')}
            </Button>
          </a>
          <a href='#contact_me'>
            <Button width='xl' className='font-bold'>
              {localize('contact_me')}
            </Button>
          </a>
        </div>
      </div>
      <div className='container flex max-w-6xl flex-col items-center bg-gradient-to-r from-dark-700 to-dark-800 p-0 pb-10'>
        <div className='mt-10 flex flex-col gap-4'>
          {data?.map((category) => (
            <Link key={category.id} to={`/works/${category.id}`}>
              <CategoryBanner
                title={category.name}
                text={category.text}
                instruments={category.instruments}
                image={getUploadUrl(category.image.url)}
              />
            </Link>
          ))}
        </div>
      </div>
      <AboutMe />
      <ContactMe />
      <Footer title={localize('powered_by_sorryimbroke')} bgImage={homeFooterBg}>
        <div className='flex flex-col items-center'>
          <a href='https://www.instagram.com/sorryiambroke/'>
            <Button className='flex items-center font-bold'>
              <img src={instagramIcon} alt='instagram' className='h-7 w-7' />
              @sorryiambroke
            </Button>
          </a>
          <div className='mt-16 flex gap-1'>
            <img src={smileIcon} className='w-32 md:w-20' />
            <img src={sadSmileIcon} className='w-32 md:w-20' />
          </div>
          <img src={youKnowImg} alt='you-know' className='mt-4 hidden w-full md:block' />
          <img src={youKnowSmall} alt='you-know' className='mt-4 w-full md:hidden' />
          <img src={logo} alt='logo' className='w-48' />
          <img src={heartImg} alt='heart' className='mt-6 h-8 w-8' />
          <img src={rainbowLineImg} alt='rainbow-line' className='mt-8 w-full' />
        </div>
      </Footer>
    </div>
  );
};
