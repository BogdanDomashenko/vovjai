import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import { WorkCategory } from '../types/work.types';
import { ResponseRecord } from '../types';

export const useWorkCategories = (payload?: { type?: 'main' | 'other' }) => {
  const workCategories = useQuery<ResponseRecord<WorkCategory>[]>({
    queryKey: ['workCategories'],
    queryFn: async () => {
      const res = await api.get<{ data: ResponseRecord<WorkCategory>[] }>('/work-categories', {
        params: {
          'populate[0]': 'image',
          ...(payload?.type && { 'filters[type]': payload.type }),
        },
      });
      return res.data.data;
    },
  });

  return workCategories;
};
