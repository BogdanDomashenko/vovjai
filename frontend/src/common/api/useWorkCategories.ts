import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import { WorkCategory } from '../types/work.types';
import { ResponseRecord } from '../types';
import { useLocalization } from '../hooks';

export const useWorkCategories = (payload?: { type?: 'main' | 'other' }) => {
  const { language } = useLocalization();

  const workCategories = useQuery<ResponseRecord<WorkCategory>[]>({
    queryKey: ['workCategories'],
    queryFn: async () => {
      const res = await api.get<{ data: ResponseRecord<WorkCategory>[] }>('/work-categories', {
        params: {
          locale: language,
          'populate[0]': 'image',
          'populate[1]': 'mobileImage',
          ...(payload?.type && { 'filters[type]': payload.type }),
          'sort[createdAt]': 'asc',
        },
      });
      return res.data.data;
    },
  });

  return workCategories;
};
