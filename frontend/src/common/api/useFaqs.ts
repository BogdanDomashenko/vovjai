import { useQuery } from '@tanstack/react-query';
import { ResponseError } from '../types';
import { api } from '.';
import { useLocalization } from '../hooks';

export const useFaqs = () => {
  const { language } = useLocalization();
  const translations = useQuery<{ title: string; description: string }[], ResponseError>({
    queryKey: [`${language}_faqs`],
    queryFn: async () => {
      const res = await api.get<{ title: string; description: string }[]>('/faqs', {
        params: {
          locale: language,
        },
      });
      return res.data;
    },
  });

  return translations;
};
