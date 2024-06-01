import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container } from '../../ui';
import { useWorkCategory } from '../../../common/api/useWorkCategory';
import { getUploadUrl } from '../../../common/utils';
import { useWorkSubcategories } from '../../../common/api/useWorkSubcategories';
import { WorksSubcategory } from './WorksSubcategory';

export const Works: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useWorkCategory({ id: Number(id) });
  const { data: subcategories } = useWorkSubcategories({ workCategory: Number(id) });

  //if (!isLoading || !data) return <LoaderScreen />;

  return (
    <>
      <Container className='bg-black pb-4 pt-[90px]' gradientBg={false}>
        <div
          style={{ backgroundImage: `url(${getUploadUrl(data?.pageImage.url || '')})` }}
          className='h-[150px] w-full text-center ring-1 ring-white'
        >
          <h1 className='font-serif text-lg'>{data?.name}</h1>
          <p className='uppercase'>{data?.pageDescription}</p>
        </div>
      </Container>
      <Container>
        <div className='flex flex-wrap justify-center py-4'>
          {subcategories?.map((subcategory) => (
            <Button key={subcategory.id} className='w-1/2 font-bold md:w-1/4'>
              {subcategory.name}
            </Button>
          ))}
        </div>
        <div>
          {subcategories?.map((subcategory) => (
            <WorksSubcategory key={subcategory.id} data={subcategory} />
          ))}
        </div>
      </Container>
    </>
  );
};
