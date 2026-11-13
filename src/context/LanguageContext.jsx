import React, { useState } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./LanguageContextInstance";

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "vi";
  });

  const toggleLanguage = () => {
    const nextLang = lang === "vi" ? "en" : "vi";
    setLang(nextLang);
    localStorage.setItem("portfolio_lang", nextLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
