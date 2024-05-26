import { useQuery } from '@tanstack/react-query';
import { PaginationRequest, ResponseError } from '../types';
import { api } from '.';
import { Program } from '../types/program.types';
import { useLocalization } from '../hooks';

export const usePrograms = (
  payload: PaginationRequest & {
    special?: boolean;
    programCategoryCode?: string;
    programSubcategory?: number;
    hasDiscount?: boolean;
  },
  params?: { enabled?: boolean },
) => {
  const { language } = useLocalization();

  const programs = useQuery<Program[], ResponseError>({
    queryKey: [`programs_${JSON.stringify(payload)}_${language}`],
    queryFn: async () => {
      const res = await api.get<{ data: Program[] }>('/programs', {
        params: {
          locale: language,
          'pagination[page]': payload.page,
          'pagination[pageSize]': payload.pageSize || 20,
          'populate[0]': 'image',
          ...(payload.special && { 'filters[special][$eq]': true }),
          ...(payload.programCategoryCode && {
            'populate[1]': 'programCategory',
            'filters[programCategory][code][$eq]': payload.programCategoryCode,
          }),
          ...(payload.programSubcategory && {
            'populate[2]': 'programSubcategory',
            'filters[programSubcategory][id][$eq]': payload.programSubcategory,
          }),
          ...(payload.hasDiscount && { 'filters[discount][$gt]': 0 }),
        },
      });
      return res.data.data;
    },
    retry: 2,
    enabled: params?.enabled,
  });

  return programs;
};
