interface TouchTexts {
  tapToType: string;
  typingField: string;
  pause: string;
  resume: string;
  phoneKeyboard: string;
  rotateHint: string;
  closeHint: string;
}

const pl: TouchTexts = {
  tapToType: 'Stuknij, aby pisać',
  typingField: 'Pole do pisania',
  pause: 'Pauza',
  resume: 'Graj dalej',
  phoneKeyboard: 'Klawiatura telefonu',
  rotateHint: 'Obróć telefon, będzie wygodniej',
  closeHint: 'Zamknij podpowiedź',
};

const uk: TouchTexts = {
  tapToType: 'Торкнись, щоб друкувати',
  typingField: 'Поле для друку',
  pause: 'Пауза',
  resume: 'Грати далі',
  phoneKeyboard: 'Клавіатура телефону',
  rotateHint: 'Поверни телефон, буде зручніше',
  closeHint: 'Закрити підказку',
};

const es: TouchTexts = {
  tapToType: 'Toca para escribir',
  typingField: 'Campo de escritura',
  pause: 'Pausa',
  resume: 'Seguir jugando',
  phoneKeyboard: 'Teclado del teléfono',
  rotateHint: 'Gira el teléfono, será más cómodo',
  closeHint: 'Cerrar pista',
};

export const touch = { pl, uk, es };
