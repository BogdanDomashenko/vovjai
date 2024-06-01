import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import { WorkCategory, WorkSubcategory } from '../types/work.types';
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
            ...(payload?.workCategory && { 'filters[workCategory]': payload.workCategory }),
          },
        },
      );
      return res.data.data;
    },
  });

  return workSubcategories;
};
