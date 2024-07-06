import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import { WorkSubcategory } from '../types/work.types';
import { ResponseRecord } from '../types';
import { useLocalization } from '../hooks';

export const useWorkSubcategories = (payload?: { workCategory: number }) => {
  const { language } = useLocalization();

  const workSubcategories = useQuery<ResponseRecord<WorkSubcategory>[]>({
    queryKey: [`workSubcategories_${payload?.workCategory || 'all'}_${language}`],
    queryFn: async () => {
      const res = await api.get<{ data: ResponseRecord<WorkSubcategory>[] }>(
        '/work-subcategories',
        {
          params: {
            locale: language,
            'populate[0]': 'workCategory',
            'populate[1]': 'works',
            'populate[2]': 'works.previewImage',
            'populate[3]': 'works.images',
            'populate[4]': 'works.media',
            'populate[5]': 'workCategory.footerBg',
            ...(payload?.workCategory && { 'filters[workCategory]': payload.workCategory }),
          },
        },
      );
      return res.data.data;
    },
  });

  return workSubcategories;
};
