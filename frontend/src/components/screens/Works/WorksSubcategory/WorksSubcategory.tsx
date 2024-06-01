import { FC } from 'react';
import { ResponseRecord } from '../../../../common/types';
import { WorkSubcategory } from '../../../../common/types/work.types';
import { Banner } from '../../../common';

export interface WorksSubcategoryProps {
  data: ResponseRecord<WorkSubcategory>;
}

export const WorksSubcategory: FC<WorksSubcategoryProps> = ({ data }) => {
  return (
    <div>
      <Banner title={data.name} text={'desc'} />
    </div>
  );
};
