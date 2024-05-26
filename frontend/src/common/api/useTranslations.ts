import { useQuery } from '@tanstack/react-query';
import { ResponseError, Translation } from '../types';
import { api } from '.';

export const useTranslations = (language: string) => {
  const translations = useQuery<Translation[], ResponseError>({
    queryKey: ['translations', language],
    queryFn: async () => {
      const res = await api.get<{ data: Translation[] }>('/translations', {
        params: {
          locale: language,
        },
      });
      return res.data.data;
    },
    retry: 2,
  });

  return translations;
};
