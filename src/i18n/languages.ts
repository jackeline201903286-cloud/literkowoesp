export const UI_LANGUAGES = ['pl', 'uk', 'es'] as const;
export type UiLanguage = (typeof UI_LANGUAGES)[number];
export const DEFAULT_UI_LANGUAGE: UiLanguage = 'es';
export const UI_LANGUAGE_LABELS: Readonly<Record<UiLanguage, string>> = { pl: 'PL', uk: 'UA', es: 'ES' };
