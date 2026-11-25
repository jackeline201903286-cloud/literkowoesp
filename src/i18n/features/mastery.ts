const pl = {
  levels: {
    none: 'Nowy klawisz',
    learning: 'Uczysz się',
    solid: 'Pewnie',
    mastered: 'Opanowany',
  },
  keys: 'Klawisze',
  noMistakes: 'Bez pomyłek',
  meter: 'Opanowane klawisze: {mastered} z {total}',
  masteredOne: 'Opanowany: {keys}',
  masteredMany: 'Opanowane: {keys}',
  heatmap: 'Celność klawiszy',
  legend: {
    good: 'Dobrze',
    weak: 'Do ćwiczenia',
    empty: 'Brak danych',
  },
};

const uk: typeof pl = {
  levels: {
    none: 'Нова клавіша',
    learning: 'Вчишся',
    solid: 'Впевнено',
    mastered: 'Опановано',
  },
  keys: 'Клавіші',
  noMistakes: 'Без помилок',
  meter: 'Опановані клавіші: {mastered} з {total}',
  masteredOne: 'Опановано: {keys}',
  masteredMany: 'Опановано: {keys}',
  heatmap: 'Точність клавіш',
  legend: {
    good: 'Добре',
    weak: 'Треба потренувати',
    empty: 'Немає даних',
  },
};

const es: typeof pl = {
  levels: {
    none: 'Tecla nueva',
    learning: 'Aprendiendo',
    solid: 'Seguro',
    mastered: 'Dominada',
  },
  keys: 'Teclas',
  noMistakes: 'Sin errores',
  meter: 'Teclas dominadas: {mastered} de {total}',
  masteredOne: 'Dominada: {keys}',
  masteredMany: 'Dominadas: {keys}',
  heatmap: 'Precisión de teclas',
  legend: {
    good: 'Bien',
    weak: 'Por practicar',
    empty: 'Sin datos',
  },
};

export const mastery = { pl, uk, es };
