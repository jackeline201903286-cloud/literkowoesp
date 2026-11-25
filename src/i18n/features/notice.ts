interface NoticeTexts {
  close: string;
  unsaved: string;
}

const pl: NoticeTexts = {
  close: 'Zamknij',
  unsaved: 'Postęp nie zapisze się na tym urządzeniu. Zapisz go do pliku w ustawieniach',
};

const uk: NoticeTexts = {
  close: 'Закрити',
  unsaved: 'Поступ не збережеться на цьому пристрої. Збережи його у файл у налаштуваннях',
};

const es: NoticeTexts = {
  close: 'Cerrar',
  unsaved:
    'El progreso no se guardará en este dispositivo. Guárdalo en un archivo desde los ajustes',
};

export const notice = { pl, uk, es };
