import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ru from "./locales/ru.json";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // debug: true,
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then();
