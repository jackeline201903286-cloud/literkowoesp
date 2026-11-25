import type { QualityChoice } from '../../game/quality';

interface QualityTexts {
  title: string;
  hint: string;
  options: Record<QualityChoice, string>;
}

const pl: QualityTexts = {
  title: 'Jakość grafiki',
  hint: 'Nowa jakość zadziała od następnego poziomu',
  options: { auto: 'Auto', high: 'Wysoka', medium: 'Średnia', low: 'Niska' },
};

const uk: QualityTexts = {
  title: 'Якість графіки',
  hint: 'Нова якість діятиме з наступного рівня',
  options: { auto: 'Авто', high: 'Висока', medium: 'Середня', low: 'Низька' },
};

const es: QualityTexts = {
  title: 'Calidad gráfica',
  hint: 'La nueva calidad se aplicará a partir del siguiente nivel',
  options: { auto: 'Auto', high: 'Alta', medium: 'Media', low: 'Baja' },
};

export const quality = { pl, uk, es };
