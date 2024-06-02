import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import { WorkSubcategory } from '../types/work.types';
import { ResponseRecord } from '../types';

export const useWorkSubcategories = (payload?: { workCategory: number }) => {
  const workSubcategories = useQuery<ResponseRecord<WorkSubcategory>[]>({
    queryKey: ['workSubcategories'],
    queryFn: async () => {
      const res = await api.get<{ data: ResponseRecord<WorkSubcategory>[] }>(
        '/work-subcategories',
        {
          params: {
            'populate[0]': 'workCategory',
            'populate[1]': 'works',
            'populate[2]': 'works.previewImage',
            'populate[3]': 'works.images',
            'populate[4]': 'workCategory.footerBg',
            ...(payload?.workCategory && { 'filters[workCategory]': payload.workCategory }),
          },
        },
      );
      return res.data.data;
    },
  });

  return workSubcategories;
};
