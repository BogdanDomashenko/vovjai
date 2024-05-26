import { useQuery } from '@tanstack/react-query';
import { PaginationRequest, ResponseError, ResponseRecord } from '../types';
import { api } from '.';
import { ProgramSubcategory } from '../types/program.types';
import { useLocalization } from '../hooks';

export const useProgramSubcategories = (params: PaginationRequest & { programCode?: string }) => {
  const { language } = useLocalization();

  const programSubcategories = useQuery<ResponseRecord<ProgramSubcategory>[], ResponseError>({
    queryKey: [`${language}_programSubcategories_${JSON.stringify(params)}`],
    queryFn: async () => {
      const res = await api.get<{ data: ResponseRecord<ProgramSubcategory>[] }>(
        '/program-subcategories',
        {
          params: {
            locale: language,
            'pagination[page]': params.page,
            'pagination[pageSize]': params.pageSize || 20,
            ...(params.programCode && {
              'populate[0]': 'programCategory',
              'filters[programCategory][code][$eq]': params.programCode,
            }),
          },
        },
      );
      return res.data.data;
    },
    retry: 2,
  });

  return programSubcategories;
};
