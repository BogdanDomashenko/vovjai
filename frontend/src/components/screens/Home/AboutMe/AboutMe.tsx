import { FC } from 'react';
import { Button, Container } from '../../../ui';
import { useLocalization } from '../../../../common/hooks';
import { Banner } from '../../../common';
import heartIcon from '../../../../assets/icons/heart.svg';
import arrowRight from '../../../../assets/icons/arrow-right.svg';
import { WORK_CATEGORY_INSTUMENT_ICON } from '../../../../common/constants';
import design11 from '../../../../assets/images/design11.png';
import smile from '../../../../assets/images/smile.svg';
import { cx } from 'class-variance-authority';
import { css } from '@emotion/css';

export const AboutMe: FC = () => {
  const { localize } = useLocalization();

  return (
    <>
      <Container className='pb-12' id='about_me'>
        <Banner title={localize('about_me')} text={localize('about_me_subtitle')} />
      </Container>
      <Container className='bg-black px-0'>
        <div className='flex flex-col items-center justify-between bg-black p-sm md:flex-row'>
          <div className='md:w-8/12'>
            <span
              dangerouslySetInnerHTML={{
                __html: localize('about_me_text_1'),
              }}
              className='whitespace-pre-line text-xs md:text-sm'
            />
          </div>
          <div className='mt-6 flex w-3/12 justify-center'>
            <img src={heartIcon} alt='hart' className='h-16 w-16' />
          </div>
        </div>
        <div className='mt-4 flex flex-col items-center justify-between bg-black p-sm md:flex-row'>
          <div className='md:w-8/12'>
            <span
              dangerouslySetInnerHTML={{
                __html: localize('about_me_text_2'),
              }}
              className='whitespace-pre-line text-xs md:text-sm'
            />
          </div>
          <div className='flex flex-col items-center justify-around md:w-4/12 md:flex-row'>
            <img src={arrowRight} alt='arrow' className='my-6 h-12 w-12 rotate-90' />
            <div className='flex flex-row gap-4 md:flex-col md:gap-2'>
              {Object.values(WORK_CATEGORY_INSTUMENT_ICON).map((icon, index) => (
                <img key={index} src={icon} alt='icon' className='h-12 w-12' />
              ))}
            </div>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-between gap-12 bg-black p-sm'>
          <div className='md:w-8/12'>
            <span
              dangerouslySetInnerHTML={{
                __html: localize('about_me_text_3'),
              }}
              className='whitespace-pre-line text-xs md:text-sm'
            />
          </div>
          <div className='hidden w-4/12 items-center justify-around md:flex'>
            <img src={design11} />
          </div>
        </div>
        <div className='mt-4 flex flex-col items-center justify-between gap-12 bg-black p-sm md:flex-row'>
          <div className='md:w-8/12'>
            <span
              dangerouslySetInnerHTML={{
                __html: localize('about_me_text_4'),
              }}
              className={cx(
                'whitespace-pre-line text-xs md:text-sm',
                css`
                  b {
                    color: #6dff49;
                  }
                `,
              )}
            />
            <div className='flex justify-center md:justify-start'>
              <Button className='mt-6 font-bold'>{localize('download_my_resume')}</Button>
            </div>
          </div>
          <div className='flex items-center justify-around md:w-4/12'>
            <img src={smile} />
          </div>
        </div>
        <div className='mt-4 flex items-center justify-between gap-12 bg-black p-sm'>
          <span
            dangerouslySetInnerHTML={{
              __html: localize('about_me_text_5_1'),
            }}
            className='whitespace-pre-line text-xs md:w-8/12 md:text-sm'
          />
        </div>
      </Container>
    </>
  );
};
