interface ProgressBackupTexts {
  title: string;
  hint: string;
  export: string;
  import: string;
  imported: string;
  importFailed: string;
}

const pl: ProgressBackupTexts = {
  title: 'Kopia postępu',
  hint: 'Postęp wszystkich profili w jednym pliku. Profile z pliku zastąpią te same profile tutaj',
  export: 'Zapisz do pliku',
  import: 'Wczytaj z pliku',
  imported: 'Postęp wczytany',
  importFailed: 'Tego pliku nie da się wczytać',
};

const uk: ProgressBackupTexts = {
  title: 'Копія поступу',
  hint: 'Поступ усіх профілів в одному файлі. Профілі з файлу замінять такі самі профілі тут',
  export: 'Зберегти у файл',
  import: 'Завантажити з файлу',
  imported: 'Поступ завантажено',
  importFailed: 'Цей файл не вдається завантажити',
};

const es: ProgressBackupTexts = {
  title: 'Copia de progreso',
  hint: 'El progreso de todos los perfiles en un solo archivo. Los perfiles del archivo reemplazarán a los mismos perfiles aquí',
  export: 'Guardar en archivo',
  import: 'Cargar desde archivo',
  imported: 'Progreso cargado',
  importFailed: 'No se puede cargar este archivo',
};

export const progressBackup = { pl, uk, es };
