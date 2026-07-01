// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";
// import { translations, Language } from "./translations";

// type LanguageContextType = {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: (path: string) => string;
// };

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export function LanguageProvider({ children }: { children: ReactNode }) {
//   const [language, setLanguage] = useState<Language>("en");

//   const t = (path: string) => {
//     const keys = path.split(".");
//     let result: any = translations[language];
//     for (const key of keys) result = result?.[key];
//     return result ?? path;
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t }}>
//       <div dir={language === "en" ? "ltr" : "rtl"}>{children}</div>
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   const ctx = useContext(LanguageContext);
//   if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
//   return ctx;
// }