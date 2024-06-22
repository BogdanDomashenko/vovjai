import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import { Work } from '../types/work.types';
import { ResponseRecord } from '../types';
import { useLocalization } from '../hooks';

export const useWorks = (payload?: { workSubcategory: number }) => {
  const { language } = useLocalization();

  const works = useQuery<ResponseRecord<Work>[]>({
    queryKey: [`works_${payload?.workSubcategory || 'all'}_${language}`],
    queryFn: async () => {
      const res = await api.get<{ data: ResponseRecord<Work>[] }>('/works', {
        params: {
          locale: language,
          'populate[0]': 'workSubcategory',
          'populate[1]': 'workSubcategory',
          'sort[createdAt]': 'desc',
          ...(payload?.workSubcategory && { 'filters[workSubcategory]': payload.workSubcategory }),
        },
      });
      return res.data.data;
    },
  });

  return works;
};
