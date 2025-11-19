import 'server-only';
import type { Locale } from './config';

const dictionaries = {
  fr: async () => (await import('./dictionaries/fr.json')).default,
  en: async () => (await import('./dictionaries/en.json')).default,
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
