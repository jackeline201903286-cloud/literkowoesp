const pl = {
  kinds: {
    learn: 'Nowy klawisz',
    practice: 'Trening',
    review: 'Powtórka',
  },
  hints: {
    practice: 'Ćwiczymy w krótkich słowach. Najpierw dokładnie, potem szybko!',
    review: 'Powtarzamy wszystkie poznane klawisze. Na końcu czeka Mały Strażnik!',
  },
  backToMap: 'Wróć do mapy',
  locks: {
    window: 'Najpierw ukończ wcześniejsze poziomy',
    review: 'Wygraj poziomy przed powtórką',
    boss: 'Wygraj powtórkę przed bossem',
  },
};

const uk: typeof pl = {
  kinds: {
    learn: 'Нова клавіша',
    practice: 'Тренування',
    review: 'Повторення',
  },
  hints: {
    practice: 'Тренуємося на коротких словах. Спершу точно, потім швидко!',
    review: 'Повторюємо всі вивчені клавіші. Наприкінці чекає Малий Вартовий!',
  },
  backToMap: 'Повернутися до мапи',
  locks: {
    window: 'Спочатку пройди попередні рівні',
    review: 'Виграй рівні перед повторенням',
    boss: 'Виграй повторення перед босом',
  },
};

const es: typeof pl = {
  kinds: {
    learn: 'Tecla nueva',
    practice: 'Práctica',
    review: 'Repaso',
  },
  hints: {
    practice: 'Practicamos con palabras cortas. ¡Primero con precisión, luego rápido!',
    review: 'Repasamos todas las teclas aprendidas. ¡Al final te espera un Mini Guardián!',
  },
  backToMap: 'Volver al mapa',
  locks: {
    window: 'Completa primero los niveles anteriores',
    review: 'Supera los niveles antes del repaso',
    boss: 'Supera el repaso antes del jefe',
  },
};

export const course = { pl, uk, es };
