import { useTranslations } from '../api';
import { useSettingsStore } from '../store';

export const useLocalization = () => {
  const { language, setLanguage } = useSettingsStore();

  const translations = useTranslations(language);

  if (translations.data && !translations.data.length) {
    setLanguage('en');
  }

  const localize = (key: string) => {
    const translation = translations.data?.find((t) => t.key === key);
    return translation?.text ?? key;
  };

  return { localize, language, setLanguage, isLoading: translations.isLoading };
};
