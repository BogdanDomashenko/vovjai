import { useQuery } from '@tanstack/react-query';
import { Language } from '../types';
import { api } from './api';

export const useLanguages = () => {
  const languages = useQuery<Language[]>({
    queryKey: ['languages'],
    queryFn: async () => {
      const res = await api.get<{ data: Language[] }>('/i18n/locales');
      return res.data.data;
    },
  });

  return languages;
};
