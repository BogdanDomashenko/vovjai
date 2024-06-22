import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import { WorkCategory } from '../types/work.types';
import { ResponseRecord } from '../types';
import { useLocalization } from '../hooks';

export const useWorkCategory = (payload: { id: number }) => {
  const { language } = useLocalization();

  const workCategories = useQuery<ResponseRecord<WorkCategory>>({
    queryKey: [`workCategory-${payload.id}_${language}`],
    queryFn: async () => {
      const res = await api.get<{ data: ResponseRecord<WorkCategory> }>(
        `/work-categories/${payload.id}`,
        {
          params: {
            locale: language,
            'populate[0]': 'pageImage',
            'populate[1]': 'footerBg',
            'populate[2]': 'bgImage',
          },
        },
      );
      return res.data.data;
    },
  });

  return workCategories;
};
