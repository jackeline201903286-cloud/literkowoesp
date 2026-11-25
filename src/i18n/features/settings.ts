import type { OnScreenKeyboardChoice } from '../../ui/formFactor';
import type { ReducedMotionChoice } from '../../ui/motionPreference';
import type { UiLanguage } from '../languages';

interface ChoiceTexts<T extends string> {
  title: string;
  hint: string;
  options: Record<T, string>;
}

interface SettingsTexts {
  open: string;
  title: string;
  back: string;
  effects: string;
  music: string;
  language: string;
  languages: Record<UiLanguage, string>;
  profile: string;
  profileHint: string;
  keyboard: ChoiceTexts<OnScreenKeyboardChoice>;
  motion: ChoiceTexts<ReducedMotionChoice>;
}

const LANGUAGE_NAMES: Record<UiLanguage, string> = {
  pl: 'Polski',
  uk: 'Українська',
  es: 'Español',
};

const pl: SettingsTexts = {
  open: 'Ustawienia',
  title: 'Ustawienia',
  back: 'Wróć',
  effects: 'Efekty dźwiękowe',
  music: 'Muzyka',
  language: 'Język gry',
  languages: LANGUAGE_NAMES,
  profile: 'Profil',
  profileHint: '{name}. Usunięcie kasuje cały postęp na tym urządzeniu',
  keyboard: {
    title: 'Klawiatura na ekranie',
    hint: 'Na telefonie. Zadziała od następnego poziomu',
    options: { auto: 'Auto', always: 'Zawsze', never: 'Nigdy' },
  },
  motion: {
    title: 'Mniej animacji',
    hint: 'Auto słucha ustawień urządzenia',
    options: { auto: 'Auto', always: 'Zawsze' },
  },
};

const uk: SettingsTexts = {
  open: 'Налаштування',
  title: 'Налаштування',
  back: 'Назад',
  effects: 'Звукові ефекти',
  music: 'Музика',
  language: 'Мова гри',
  languages: LANGUAGE_NAMES,
  profile: 'Профіль',
  profileHint: '{name}. Видалення стирає весь поступ на цьому пристрої',
  keyboard: {
    title: 'Клавіатура на екрані',
    hint: 'На телефоні. Діятиме з наступного рівня',
    options: { auto: 'Авто', always: 'Завжди', never: 'Ніколи' },
  },
  motion: {
    title: 'Менше анімації',
    hint: 'Авто враховує налаштування пристрою',
    options: { auto: 'Авто', always: 'Завжди' },
  },
};

const es: SettingsTexts = {
  open: 'Ajustes',
  title: 'Ajustes',
  back: 'Volver',
  effects: 'Efectos de sonido',
  music: 'Música',
  language: 'Idioma del juego',
  languages: LANGUAGE_NAMES,
  profile: 'Perfil',
  profileHint: '{name}. Al borrarlo se elimina todo el progreso en este dispositivo',
  keyboard: {
    title: 'Teclado en pantalla',
    hint: 'En teléfono. Se aplicará a partir del siguiente nivel',
    options: { auto: 'Auto', always: 'Siempre', never: 'Nunca' },
  },
  motion: {
    title: 'Menos movimiento',
    hint: 'Auto sigue la configuración del dispositivo',
    options: { auto: 'Auto', always: 'Siempre' },
  },
};

export const settings = { pl, uk, es };
