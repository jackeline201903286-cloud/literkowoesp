import type { UiLanguage } from '../i18n/languages';

export type Speaker = 'owl' | 'fox' | 'shadow';

export interface StoryLine {
  speaker: Speaker;
  text: Record<UiLanguage, string>;
}

export interface StoryScene {
  id: string;
  lines: StoryLine[];
}

const line = (speaker: Speaker, pl: string, uk: string, es: string): StoryLine => ({
  speaker,
  text: { pl, uk, es },
});

const SCENES: StoryScene[] = [
  {
    id: 'intro',
    lines: [
      line(
        'owl',
        'Felku, obudź się! Mrok zakradł się nocą do Wielkiej Księgi i ukradł wszystkie litery.',
        'Фелеку, прокинься! Морок уночі прокрався до Великої Книги і вкрав усі літери.',
        '¡Félix, despierta! La Sombra se coló de noche en el Gran Libro y se llevó todas las letras.',
      ),
      line(
        'fox',
        'Bez liter nikt nie opowie żadnej bajki! Musimy je odzyskać.',
        'Без літер ніхто не розповість жодної казки! Ми мусимо їх повернути.',
        '¡Sin letras nadie podrá contar ningún cuento! Tenemos que recuperarlas.',
      ),
      line(
        'owl',
        'Mrok zamknął litery w kryształach i rozsypał je po całym Literkowie. Tylko klawiatura może je uwolnić.',
        'Морок замкнув літери в кристалах і розсипав їх по всьому Літеркову. Лише клавіатура може їх звільнити.',
        'La Sombra encerró las letras en cristales y las esparció por todo Literkowo. Solo el teclado puede liberarlas.',
      ),
      line(
        'owl',
        'Każdy palec ma swoje klawisze. Zaczniemy od F i J. Poczuj pod palcami wskazującymi małe wypustki.',
        'Кожен палець має свої клавіші. Почнемо з F та J. Відчуй під вказівними пальцями маленькі горбики.',
        'Cada dedo tiene sus teclas. Empezaremos por F y J. Siente las pequeñas marcas bajo tus dedos índices.',
      ),
    ],
  },
  {
    id: 'boss-polana',
    lines: [
      line(
        'shadow',
        'Ha! Myślisz, że kilka liter cię uratuje? Mój Strażnik Polany zmiażdży cię.',
        'Ха! Думаєш, кілька літер тебе врятують? Мій Вартовий Галявини розчавить тебе.',
        '¡Ja! ¿Crees que unas pocas letras te salvarán? Mi Guardián del Claro te aplastará.',
      ),
      line(
        'owl',
        'Spokojnie, Felku. Strażnik jest duży, ale powolny. Wpisuj długie słowa, a rozpadnie się na kawałki.',
        'Спокійно, Фелеку. Вартовий великий, але повільний. Друкуй довгі слова, і він розсиплеться на шматки.',
        'Tranquilo, Félix. El Guardián es grande, pero lento. Escribe palabras largas y se hará pedazos.',
      ),
    ],
  },
  {
    id: 'after-polana',
    lines: [
      line(
        'fox',
        'Polana znów śpiewa! Pierwsze litery wróciły do Księgi.',
        'Галявина знову співає! Перші літери повернулися до Книги.',
        '¡El Claro vuelve a cantar! Las primeras letras regresaron al Libro.',
      ),
      line(
        'owl',
        'Przed nami Las. Robi się ciemno, ale świetliki pokażą nam drogę.',
        'Попереду Ліс. Темніє, але світлячки покажуть нам дорогу.',
        'Delante está el Bosque. Se está oscureciendo, pero las luciérnagas nos mostrarán el camino.',
      ),
    ],
  },
  {
    id: 'boss-las',
    lines: [
      line(
        'shadow',
        'Zabłądzisz w moim lesie, lisku. Strażnik Lasu nie śpi nigdy.',
        'Ти заблукаєш у моєму лісі, лисеня. Вартовий Лісу ніколи не спить.',
        'Te perderás en mi bosque, zorrito. El Guardián del Bosque nunca duerme.',
      ),
      line(
        'owl',
        'Palce na swoich miejscach. Patrz na ekran, nie na klawiaturę!',
        'Пальці на своїх місцях. Дивись на екран, а не на клавіатуру!',
        '¡Dedos en su sitio. Mira la pantalla, no el teclado!',
      ),
    ],
  },
  {
    id: 'after-las',
    lines: [
      line(
        'owl',
        'Las jest wolny! Teraz w górę, na ośnieżone szczyty. Tam Mrok schował górny rząd klawiszy.',
        'Ліс вільний! Тепер угору, на засніжені вершини. Там Морок сховав верхній ряд клавіш.',
        '¡El Bosque está libre! Ahora arriba, hacia las cumbres nevadas. Allí la Sombra escondió la fila superior de teclas.',
      ),
    ],
  },
  {
    id: 'boss-gory',
    lines: [
      line(
        'shadow',
        'Zimno ci, lisku? Strażnik Gór jest zrobiony z lodu.',
        'Холодно тобі, лисеня? Вартовий Гір зроблений з льоду.',
        '¿Tienes frío, zorrito? El Guardián de las Montañas está hecho de hielo.',
      ),
      line(
        'fox',
        'Moje palce są rozgrzane. Zaczynamy!',
        'Мої пальці розігріті. Починаємо!',
        '¡Mis dedos están listos. Empecemos!',
      ),
    ],
  },
  {
    id: 'after-gory',
    lines: [
      line(
        'owl',
        'Szczyty są czyste! Zostały tylko litery z dolnego rzędu. Mrok ukrył je głęboko w Jaskini.',
        'Вершини чисті! Залишилися лише літери нижнього ряду. Морок сховав їх глибоко в Печері.',
        '¡Las cumbres están despejadas! Solo quedan las letras de la fila inferior. La Sombra las ocultó en lo profundo de la Cueva.',
      ),
    ],
  },
  {
    id: 'boss-jaskinia',
    lines: [
      line(
        'shadow',
        'W ciemności nikt nie widzi klawiszy!',
        'У темряві ніхто не бачить клавіш!',
        '¡En la oscuridad nadie ve las teclas!',
      ),
      line(
        'owl',
        'Nie musisz ich widzieć, Felku. Twoje palce już pamiętają drogę.',
        'Тобі не треба їх бачити, Фелеку. Твої пальці вже памʼятають дорогу.',
        'No necesitas verlas, Félix. Tus dedos ya recuerdan el camino.',
      ),
    ],
  },
  {
    id: 'after-jaskinia',
    lines: [
      line(
        'fox',
        'Cały alfabet jest wolny! Ale coś mi tu nie pasuje. Gdzie są ą, ę i ł?',
        'Увесь алфавіт вільний! Але щось тут не так. Де ą, ę та ł?',
        '¡Todo el alfabeto está libre! Pero algo no me cuadra. ¿Dónde están ą, ę y ł?',
      ),
      line(
        'owl',
        'Na Wyspie Ogonków. Tam litery noszą ogonki i kreski. Przytrzymaj prawy Alt i naciśnij literę.',
        'На Острові Хвостиків. Там літери носять хвостики та рисочки. Утримуй правий Alt і натисни літеру.',
        'En la Isla de los Trazos. Allí las letras llevan colitas y rayas. Mantén pulsado Alt derecho y pulsa la letra.',
      ),
    ],
  },
  {
    id: 'boss-wyspa',
    lines: [
      line(
        'shadow',
        'To mój ostatni Strażnik. Tym razem nie wygrasz.',
        'Це мій останній Вартовий. Цього разу ти не переможеш.',
        'Es mi último Guardián. Esta vez no ganarás.',
      ),
      line(
        'fox',
        'Już wygrałem, Mroku. Umiem pisać.',
        'Я вже переміг, Мороку. Я вмію друкувати.',
        'Ya gané, Sombra. Sé escribir.',
      ),
    ],
  },
  {
    id: 'finale',
    lines: [
      line(
        'owl',
        'Wielka Księga jest pełna! Mrok uciekł, a ty piszesz jak prawdziwy mistrz klawiatury.',
        'Велика Книга повна! Морок утік, а ти друкуєш як справжній майстер клавіатури.',
        '¡El Gran Libro está completo! La Sombra huyó y escribes como un verdadero maestro del teclado.',
      ),
      line(
        'fox',
        'Dziękuję, Klaro. A teraz... napiszemy nową bajkę?',
        'Дякую, Кларо. А тепер... напишемо нову казку?',
        'Gracias, Clara. Y ahora... ¿escribimos un cuento nuevo?',
      ),
    ],
  },
];

export const INTRO_STORY_ID = 'intro';
export const FINALE_STORY_ID = 'finale';

export function bossStoryId(regionId: string): string {
  return `boss-${regionId}`;
}

export function afterStoryId(regionId: string): string {
  return `after-${regionId}`;
}

export function storyScene(id: string): StoryScene | undefined {
  return SCENES.find((scene) => scene.id === id);
}
