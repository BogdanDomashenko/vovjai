import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import { Work } from '../types/work.types';
import { ResponseRecord } from '../types';

export const useWorks = (payload?: { workSubcategory: number }) => {
  const works = useQuery<ResponseRecord<Work>[]>({
    queryKey: ['works'],
    queryFn: async () => {
      const res = await api.get<{ data: ResponseRecord<Work>[] }>('/works', {
        params: {
          'populate[0]': 'workSubcategory',
          'populate[1]': 'workSubcategory',
          ...(payload?.workSubcategory && { 'filters[workSubcategory]': payload.workSubcategory }),
        },
      });
      return res.data.data;
    },
  });

  return works;
};
