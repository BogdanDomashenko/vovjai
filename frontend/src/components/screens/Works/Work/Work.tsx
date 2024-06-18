import { FC, useState } from 'react';
import { ResponseRecord } from '../../../../common/types';
import { Work as TWork } from '../../../../common/types/work.types';
import { getUploadUrl } from '../../../../common/utils';
import dayjs from 'dayjs';
import { Button, Modal } from '../../../ui';
import arrowRight from '../../../../assets/icons/arrow-right.svg';
import { cx } from 'class-variance-authority';

export interface WorkProps {
  data: ResponseRecord<TWork>;
}

export const Work: FC<WorkProps> = ({ data }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState(0);
  const items = [...(data.videos || []), ...(data.images || [])];
  const activeItem = items[activeModalImage];

  return (
    <>
      <div className='w-full bg-black p-3'>
        <div className='w-full ring-1 ring-white'>
          <img src={getUploadUrl(data.previewImage.url)} alt='work' className='w-full' />
          <div className='flex items-center justify-between gap-2 bg-black p-2'>
            <h2 className='text-sm font-bold'>{data.title}</h2>
            <div>{dayjs(data.createdAt).format('DD.MM.YYYY')}</div>
          </div>
        </div>
        <p className='mt-4 leading-tight'>{data.shortDescription}</p>
        {data.images?.length && (
          <div className='flex justify-center'>
            <Button className='uppercase' onClick={() => setIsDescriptionOpen(true)}>
              <img src={arrowRight} alt='arrow' className='h-3 rotate-90' />
              <span>Description</span>
              <img src={arrowRight} alt='arrow' className='h-3 rotate-90' />
            </Button>
          </div>
        )}
      </div>
      <Modal
        isOpen={isDescriptionOpen}
        onClose={() => setIsDescriptionOpen(false)}
        title={data.title}
        width='xl'
      >
        <p>{data.longDescription}</p>
        <div>
          <div className='mt-4 flex justify-center'>
            {typeof activeItem === 'string' ? (
              <iframe
                width='100%'
                height='315'
                src={activeItem}
              ></iframe>
            ) : (
              <img src={getUploadUrl(activeItem.url)} alt='work' className='w-full' />
            )}
          </div>
          <div className='flex justify-between gap-4 py-2'>
            <div className='flex flex-wrap gap-2'>
              {items.map((_, index) => (
                <Button
                  key={index}
                  className={cx('h-12 w-12', {
                    'bg-white text-black': index === activeModalImage,
                  })}
                  onClick={() => setActiveModalImage(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            <div className='flex gap-2'>
              <Button
                className='h-12 w-12'
                onClick={() =>
                  setActiveModalImage((prev) => (prev === 0 ? data.images!.length - 1 : prev - 1))
                }
              >
                <img src={arrowRight} alt='arrow' className='h-3 rotate-180' />
              </Button>
              <Button
                className='h-12 w-12'
                onClick={() =>
                  setActiveModalImage((prev) => (prev === data.images!.length - 1 ? 0 : prev + 1))
                }
              >
                <img src={arrowRight} alt='arrow' className='h-3' />
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
