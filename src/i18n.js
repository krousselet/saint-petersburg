// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // NAV
    home: "Home",
    about: "About",
    apply: "Apply",
    contact: "Contact",
    // SLOGAN
    location: "Saint Petersburg",
    slogan: "Start a new life",
    toggleDark: "Dark Mode",
    // ABOUT PAGE
    hello: "Hello",
    myself: "I am Kevin and my wings are brand new",
    data: "Service record",
    amateur: "Even though I am a novice",
    determination: "I am ready to prove myself in the sky",
    qualities: "Discipline, passion, cold-blood, safety...",
    motivation: "To make every flight a success",
    flightAttended: "Flights attended",
    milesTravelled: "Miles travelled",
    hoursInFlight: "Flight hours",
    incidentEncountered: "Incidents encountered",
    countryDiscovered: "Country Discovered",
    //APPLY
    experience: "Experience",
    programmingLanguages: "Languages",
    educationCertifications: "Diploma",
    additionalLinks: "Additionnal links",
      //EXPERIENCE COMPONENT
      cashier: "Cashier",
      leclercStart: "E. Leclerc",
      superU: "Super U",
      writer: "Writer",
      webDeveloper: "Web developer",
      artist: "Artist",
      //LANGUAGES
      frenchLanguage: "French",
      englishLanguage: "English",
      italianLanguage: "Italian",
      spanishLanguage: "Spanish",
      russianLanguage: "Russian",
      japaneseLanguage: "Japanese",
      indonesianLanguage: "Indonesian",
    // ABOUT PAGE
    formTitle: "Contact me",
    placeholderName: "Your name",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message",
    formSend: "Send",
    formValidationText: "Your message has been sent",
  },
  fr: {
    // NAV
    home: "Accueil",
    about: "À propos",
    apply: "Postuler",
     contact: "Contacter",
    // SLOGAN
    location: "Saint-Petersbourg",
    slogan: "Commencer une nouvelle vie",
    toggleDark: "Mode Sombre",
    // ABOUT PAGE
    //BLOC 1
    hello: "Bonjour",
    myself: "Moi, c'est Kevin, et je viens d'avoir mes ailes",
    data: "Mes états de service",
    determination: "Je suis prêt à prouver ma valeur dans les airs",
    qualities: "Rigueur, passion, sang-froid, sécurité...",
    amateur: "Bien que je sois novice",
    motivation: "Pour faire de chaque vol un succès",
    //BLOC 2
    flightAttended: "Détermination",
    hoursInFlight: "Maîtrise du Russe",
    progress: "En progression",
    km: "kilomètres",
    milesTravelled: "Kilomètres jusqu'à mon but",
    incidentEncountered: "Incidents rencontrés",
    countryDiscovered: "Pays à traverser",
   //APPLY
    experience: "Expérience",
    programmingLanguages: "Langages",
    educationCertifications: "Diplômes",
    additionalLinks: "Liens additionnels",
      //EXPERIENCE COMPONENT
      cashier: "Caissier",
      leclercStart: "E. Leclerc",
      superU: "Super U",
        //WRITER
      writer: "Ecrivain",
      scienceFiction: "J'ai écrit de la science-fiction",
      philosophy: "J'ai écrit de la philosophie",
      action: "J'ai écrit de l'action",
      genre: "J'ai écrit des romans, des nouvelles et de la poésie",
      webDeveloper: "Développeur web",
      artist: "Artiste",
      //LANGUAGES
      frenchLanguage: "Français",
      englishLanguage: "Anglais",
      italianLanguage: "Italien",
      spanishLanguage: "Espagnol",
      russianLanguage: "Russe",
      japaneseLanguage: "Japonais",
      indonesianLanguage: "Indonésien",
    // ABOUT PAGE
    formTitle: "Contactez moi",
    placeholderName: "Votre nom",
    placeholderEmail: "Votre email",
    placeholderMessage: "Votre message",
    formSend: "Envoyer",
    formValidationText: "Votre message a bien été envoyé",
  },
  ru: {
    // NAV
    home: "прием",
    about: "обо мне",
    apply: "применять",
     contact: "Контакт",
    // SLOGAN
    location: "Санкт-Петербург",
    slogan: "Начни новую жизнь",
    toggleDark: "Mode Sombre",
    // ABOUT PAGE
    //BLOC 1
    hello: "Здравствуйте",
    myself: "Я Кевин и я хочу жить в Санкт-Петербурге",
    data: "Я влюбился в русскую культуру",
    //BLOC 2
    flightAttended: "решительность",
    hoursInFlight: "Знание русского языка",
    progress: "Увеличение",
    km: "Километры",
    milesTravelled: "Километры до моей цели",
    incidentEncountered: "инцидентов",
    countryDiscovered: "страну через",
    // BLOC 3
    amateur: "Я француз",
    determination: "Я сделал этот сайт",
    qualitiesOne: "Я говорю на нескольких языках",
    qualitiesTwo: "Строгость, страсть, самообладание, дисциплина, уважать...",
    motivation: "Я пишу книги и играю на пианино уже 23 года",
    //APPLY
    experience: "Опыт",
    programmingLanguages: "Языки",
    educationCertifications: "Дипломы",
    additionalLinks: "Дополнительные ссылки",
    //EXPERIENCE COMPONENT
      //CASHIER
    cashier: "кассир",
    leclercStart: "Э. Леклерк",
    superU: "Супер Ю",
    //WRITER
    writer: "Писатель",
    scienceFiction: "Я писал научную фантастику",
    philosophy: "Я написал философию",
    action: "я написал действие",
    genre: "Я написал романы, рассказы и стихи.",
    //WEBDEV
    webDeveloper: "Веб-разработчик",
    morocco: "Я провел два месяца в Марокко. Там я в составе команды занимался разработкой банковского приложения.",
    own: "Я давал уроки игры на фортепиано",
    //ARTIST
    artist: "Художник",
    //LANGUAGES
    frenchLanguage: "французский",
    englishLanguage: "английский",
    italianLanguage: "итальянский",
    spanishLanguage: "испанский",
    russianLanguage: "Русский",
    japaneseLanguage: "японский",
    indonesianLanguage: "индонезийский",
    // ABOUT PAGE
    formTitle: "Свяжитесь со мной",
    placeholderName: "Ваше имя",
    placeholderEmail: "ваша электронная почта",
    placeholderMessage: "Ваше сообщение",
    formSend: "Отправлять",
    formValidationText: "Ваше сообщение успешно отправлено",
    //ADDITIONNAL LINKS COMPONENT
      //NIHONGO
      nihongo: "нихонго",
      nihongoLearn: "Изучайте японский",
      nihongoDictionnary: "Японский словарь",
      russianDictionnary: "Русский словарь",
      myBook: "Одна из моих книг",
      adiscarTitle: "Адискар",
  },
  it: {
    // NAV
    home: "Home",
    about: "Chi sono",
    apply: "Candidatura",
    contact: "Contattare",
    // SLOGAN
    slogan: "Puntare all'eccellenza",
    toggleDark: "Modalità scura",
    // ABOUT PAGE
    hello: "Ciao",
    myself: "Mi chiamo Kevin, e ho appena ottenuto le mie ali",
    data: "I miei dati di servizio",
    determination: "Sono pronto a dimostrare il mio valore in volo",
    qualities: "Rigore, passione, sangue freddo, sicurezza...",
    amateur: "Anche se sono un principiante",
    motivation: "Per rendere ogni volo un successo",
    flightAttended: "Voli effettuati",
    milesTravelled: "Miglia percorse",
    hoursInFlight: "Ore di volo",
    incidentEncountered: "Incidenti incontrati",
    countryDiscovered: "Paesi scoperti",
    // APPLY
    // ABOUT PAGE
    formTitle: "Contattarmi",
    placeholderName: "Nome",
    placeholderEmail: "Mail",
    placeholderMessage: "Messagio",
    formSend: "Mandare",
    formValidationText: "Il messagio è partito",
  },

  es: {
    // NAV
    home: "Inicio",
    about: "Acerca de mí",
    apply: "Solicitud",
    contact: "Contactar",
    // SLOGAN
    slogan: "Apuntar a la excelencia",
    toggleDark: "Modo oscuro",
    // ABOUT PAGE
    hello: "Hola",
    myself: "Me llamo Kevin y acabo de obtener mis alas",
    data: "Mis datos de servicio",
    determination: "Estoy listo para demostrar mi valía en el aire",
    qualities: "Rigor, pasión, sangre fría, seguridad...",
    amateur: "Aunque soy principiante",
    motivation: "Para hacer de cada vuelo un éxito",
    flightAttended: "Vuelos realizados",
    milesTravelled: "Millas recorridas",
    hoursInFlight: "Horas de vuelo",
    incidentEncountered: "Incidentes encontrados",
    countryDiscovered: "Países descubiertos",
    // APPLY
    // ABOUT PAGE
    formTitle: "Contactar conmigo",
    placeholderName: "Nombre",
    placeholderEmail: "Correo electrónico",
    placeholderMessage: "Mensaje",
    formSend: "Mandar",
     formValidationText: "El mensaje fue enviado",
  },
   de: {
    // NAV
    home: "Startseite",
    about: "Über mich",
    apply: "Lebenslauf",
    // SLOGAN
    slogan: "Streben nach Spitzenleistung",
    toggleDark: "Modo oscuro",
    // ABOUT PAGE
    hello: "Hola",
    myself: "Me llamo Kevin y acabo de obtener mis alas",
    data: "Mis datos de servicio",
    determination: "Estoy listo para demostrar mi valía en el aire",
    qualities: "Rigor, pasión, sangre fría, seguridad...",
    amateur: "Aunque soy principiante",
    motivation: "Para hacer de cada vuelo un éxito",
    flightAttended: "Anzahl absolvierte Flüge",
    milesTravelled: "Zurückgelegte Flugmeilen",
    hoursInFlight: "Gesammelte Flugstunden",
    incidentEncountered: "Zwischenfälle",
    countryDiscovered: "Bereiste Länder",
    // APPLY
  },
  ja: {
    // NAV
    home: "ホーム ",
    about: "概要",
    apply: "応募",
    contact: "Contactar",
    // SLOGAN
    slogan: "高みを目指して",
    toggleDark: "Modo oscuro",
    // ABOUT PAGE
    hello: "こんにちは",
    myself: "私はケビン。新品の翼を手に入れたばかりです",
    data: "これまでの制作実績",
    amateur: " 初心者ですが",
    determination: "空で自分の力を証明する準備はできています",
    qualities: "正確さ、情熱、冷静、安全…",
    motivation: "すべてのフライトを成功させるために ",
    flightAttended: "運航された便",
    milesTravelled: "飛行距離s",
    hoursInFlight: "飛行時間",
    incidentEncountered: "遭遇したインシデント",
    countryDiscovered: "就航路線 ",
    // APPLY
    // ABOUT PAGE
    formTitle: "Contactar conmigo",
    placeholderName: "Nombre",
    placeholderEmail: "Correo electrónico",
    placeholderMessage: "Mensaje",
    formSend: "Mandar",
    formValidationText: "El mensaje fue enviado",
  },
   'zh-Hans': {
    // NAV
    home: "家",
    about: "关于",
    apply: "申请",
    contact: "Contactar",
    // SLOGAN
    slogan: "追求卓越",
    toggleDark: "夜间模式",
    // ABOUT PAGE
    hello: "你好",
    myself: "我是Kevin，我的翅膀焕然一新",
    data: "服务记录",
    amateur: "尽管我是个新手",
    determination: "我已经准备好了在空中证明我自己",
    qualities: "自律，热情，残酷，安全",
    motivation: "确保每一次航班都圆满成功",
    flightAttended: "飞行出席",
    milesTravelled: "行驶里程",
    hoursInFlight: "飞行时间",
    incidentEncountered: "事故遭遇",
    countryDiscovered: "到访国家",
    // APPLY
    // ABOUT PAGE
    formTitle: "Contactar conmigo",
    placeholderName: "Nombre",
    placeholderEmail: "Correo electrónico",
    placeholderMessage: "Mensaje",
    formSend: "Mandar",
    formValidationText: "El mensaje fue enviado",
  },
};

const i18n = createI18n({
  legacy: false, // Composition API
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
