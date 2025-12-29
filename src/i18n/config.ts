import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';
import it from './locales/it.json';
import pt from './locales/pt.json';
import nl from './locales/nl.json';
import da from './locales/da.json';
import sv from './locales/sv.json';
import no from './locales/no.json';
import fi from './locales/fi.json';
import el from './locales/el.json';
import pl from './locales/pl.json';
import cs from './locales/cs.json';
import sk from './locales/sk.json';
import sl from './locales/sl.json';
import hu from './locales/hu.json';
import ro from './locales/ro.json';
import bg from './locales/bg.json';
import hr from './locales/hr.json';
import lt from './locales/lt.json';
import lv from './locales/lv.json';
import et from './locales/et.json';
import ga from './locales/ga.json';
import mt from './locales/mt.json';
import ar from './locales/ar.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import he from './locales/he.json';

export const locales = [
  'en', 'fr', 'de', 'es', 'it', 'pt', 'nl', 'da', 'sv', 'no', 'fi',
  'el', 'pl', 'cs', 'sk', 'sl', 'hu', 'ro', 'bg', 'hr', 'lt', 'lv',
  'et', 'ga', 'mt', 'ar', 'zh', 'ja', 'he'
] as const;

export type Locale = typeof locales[number];

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  es: { translation: es },
  it: { translation: it },
  pt: { translation: pt },
  nl: { translation: nl },
  da: { translation: da },
  sv: { translation: sv },
  no: { translation: no },
  fi: { translation: fi },
  el: { translation: el },
  pl: { translation: pl },
  cs: { translation: cs },
  sk: { translation: sk },
  sl: { translation: sl },
  hu: { translation: hu },
  ro: { translation: ro },
  bg: { translation: bg },
  hr: { translation: hr },
  lt: { translation: lt },
  lv: { translation: lv },
  et: { translation: et },
  ga: { translation: ga },
  mt: { translation: mt },
  ar: { translation: ar },
  zh: { translation: zh },
  ja: { translation: ja },
  he: { translation: he },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: locales,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;