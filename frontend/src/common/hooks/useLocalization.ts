import { useTranslations } from '../api';
import { useSettingsStore } from '../store';

export const useLocalization = () => {
  const { language, setLanguage, resetLanguage } = useSettingsStore();

  const translations = useTranslations(language);

  if (translations.isError) {
    if (translations.error.response?.data.error.details.code === 'language_not_found') {
      resetLanguage();
    }
  }

  const localize = (key: string) => {
    const translation = translations.data?.find((t) => t.key === key);
    return translation?.text ?? key;
  };

  return { localize, language, setLanguage, isLoading: translations.isLoading };
};
