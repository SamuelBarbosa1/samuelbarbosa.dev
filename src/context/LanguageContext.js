import React, { createContext, useState, useContext, useEffect } from "react";
import translations from "../locales/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem("app_lang");
    if (saved && ["pt", "en", "es"].includes(saved)) {
      return saved;
    }
    // Detect browser language if no saved setting
    const browserLang = navigator.language || navigator.userLanguage || "";
    if (browserLang.startsWith("es")) return "es";
    if (browserLang.startsWith("en")) return "en";
    return "pt";
  });

  const setLanguage = (lang) => {
    if (["pt", "en", "es"].includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem("app_lang", lang);
    }
  };

  const t = (path) => {
    const keys = path.split(".");
    let current = translations[language] || translations["pt"];
    
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Portuguese if missing
        let fallback = translations["pt"];
        for (const k of keys) {
          if (fallback && fallback[k] !== undefined) {
            fallback = fallback[k];
          } else {
            return path; // return key if missing in both
          }
        }
        return fallback;
      }
    }
    return current;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
