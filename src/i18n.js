import i18 from "i18next"
import { initReactI18next } from "react-i18next"
import LangDetector from "i18next-browser-languagedetector"

import translationEn from "./Locales/en/translation.json"
import translationRu from "./Locales/ru/translation.json"

const resources = {
    en: { translation: translationEn },
    ru: { translation: translationRu }
}

i18 
.use(LangDetector)
.use(initReactI18next)
.init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
        escapevalue: false,
    }
})

export default i18