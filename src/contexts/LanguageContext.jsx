import React, { createContext, useContext, useState } from 'react'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

const translations = { en, fr }

function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o && Object.prototype.hasOwnProperty.call(o, k) ? o[k] : undefined), obj)
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')

  const t = (key) => {
    if (!key) return ''
    const val = getByPath(translations[lang], key)
    if (val !== undefined) return val
    const fallback = getByPath(translations['fr'], key)
    return fallback ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
