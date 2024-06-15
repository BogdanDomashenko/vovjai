import { useQuery } from '@tanstack/react-query';
import { Language } from '../types';
import { api } from './api';

export const useLanguages = () => {
  const languages = useQuery<Language[]>({
    queryKey: ['languages'],
    queryFn: async () => {
      const res = await api.get<Language[]>('/i18n/locales');
      console.log(res.data);
      return res.data;
    },
  });

  return languages;
};
