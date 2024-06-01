import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import { WorkCategory } from '../types/work.types';
import { ResponseRecord } from '../types';

export const useWorkCategory = (payload: { id: number }) => {
  const workCategories = useQuery<ResponseRecord<WorkCategory>>({
    queryKey: [`workCategory-${payload.id}`],
    queryFn: async () => {
      const res = await api.get<{ data: ResponseRecord<WorkCategory> }>(
        `/work-categories/${payload.id}`,
        {
          params: {
            'populate[0]': 'pageImage',
          },
        },
      );
      return res.data.data;
    },
  });

  return workCategories;
};
