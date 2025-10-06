"use client";
import { ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../lib/i18n"; // Adjust path if needed

interface I18nProviderProps {
  children: ReactNode;
  initialLanguage?: string;
}

export default function I18nProvider({ children, initialLanguage }: I18nProviderProps) {
  useEffect(() => {
    // Set initial language if provided (e.g., from server)
    if (initialLanguage && i18n.language !== initialLanguage) {
      i18n.changeLanguage(initialLanguage);
    }
    // Update HTML lang attribute when language changes
    document.documentElement.lang = i18n.language;
  }, [initialLanguage]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}