import { create } from 'zustand';

interface SettingsStore {
  language: string;
  setLanguage: (language: string) => void;
  resetLanguage: () => void;
}

const localStorageSettings = localStorage.getItem('settings');
const localStorageSettingsParsed = localStorageSettings ? JSON.parse(localStorageSettings) : {};

export const useSettingsStore = create<SettingsStore>((set) => ({
  language: localStorageSettingsParsed.language || navigator.language?.split('-')[0] || 'en',
  setLanguage: (language: string) => {
    localStorageSettingsParsed.language = language;
    localStorage.setItem('settings', JSON.stringify(localStorageSettingsParsed));
    return set({ language });
  },
  resetLanguage() {
    this.setLanguage(
      localStorageSettingsParsed.language || navigator.language?.split('-')[0] || 'en',
    );
  },
}));
