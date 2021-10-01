import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {language} from './config.json';
import {arTranslation} from './assets/translations/ar.json';
import {enTranslation} from './assets/translations/en.json';
import {languages} from './components/common/enums';

i18n.use(initReactI18next).init({
  lng: language,
  fallbackLng: languages.en,
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
});
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
  document.documentElement.setAttribute('dir', lng === languages.ar ? 'rtl' : 'lfr');
});
document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.language === languages.ar ? 'rtl' : 'lfr';
export default i18n;
