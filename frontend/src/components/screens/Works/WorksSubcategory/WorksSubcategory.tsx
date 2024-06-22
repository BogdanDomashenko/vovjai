import { FC, HTMLAttributes } from 'react';
import { ResponseRecord } from '../../../../common/types';
import { WorkSubcategory } from '../../../../common/types/work.types';
import { Banner } from '../../../common';
import { Work } from '../Work/Work';

export interface WorksSubcategoryProps extends HTMLAttributes<HTMLDivElement> {
  data: ResponseRecord<WorkSubcategory>;
}

export const WorksSubcategory: FC<WorksSubcategoryProps> = ({ data, ...rest }) => {
  return (
    <div {...rest}>
      <Banner title={data.name} text={data.description} />
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
        {data.works
          .sort((a, b) =>
            new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? -1 : 1,
          )
          .map((work) => (
            <Work key={work.id} data={work} />
          ))}
      </div>
    </div>
  );
};
