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
    myself: "I'm Kevin and I want to live in Saint Petersburg",
    data: "I fell in love with Russian culture",
    //BLOC 2
    flightAttended: "Determination",
    hoursInFlight: "Russian language knowledge",
    progress: "Increasing",
    km: "Kilometers",
    milesTravelled: "Kilometers to my goal",
    incidentEncountered: "Incidents encountered",
    countryDiscovered: "Countries crossed",
    //BLOC 3
    amateur: "I'm French",
    determination: "I made this website",
    qualitiesOne: "I speak several languages",
    qualitiesTwo: "Rigor, passion, self-control, discipline, respect...",
    motivation: "I've been writing books and playing piano for 23 years",
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
    morocco:
      "I spent two months in Morocco. There, I was part of a team developing a banking application.",
    own: "I gave piano lessons",
    artist: "Artist",
    //LANGUAGES
    frenchLanguage: "French",
    englishLanguage: "English",
    italianLanguage: "Italian",
    spanishLanguage: "Spanish",
    russianLanguage: "Russian",
    japaneseLanguage: "Japanese",
    indonesianLanguage: "Indonesian",
    frenchLanguageLevel: "Native",
    englishLanguageLevel: "Intermediate",
    italianLanguageLevel: "Intermediate",
    spanishLanguageLevel: "Intermediate",
    russianLanguageLevel: "Beginner",
    japaneseLanguageLevel: "Beginner",
    indonesianLanguageLevel: "Beginner",
    // EDUCATION
    versoie: "La Versoie High School",
    bac: "Literature Baccalaureate",
    car: "Driving License",
    certification: "Web development certication",
    certificationDetails:
      "I have obtained a web developer certification for both front-end and back-end",
    cca: "Cabin crew attestation",
    ccaDetails:
      "I passed the theoretical part and I will take the practical part in September. Then I will have my wings",
    lilate: "Lilate",
    lilateEnglish: "B2 level recognition in English",
    //NIHONGO
    nihongo: "Nihongo",
    nihongoLearn: "Learn Japanese",
    nihongoDictionnary: "Japanese dictionary",
    russianDictionnary: "Russian dictionary",
    myBook: "One of my books",
    adiscarTitle: "Adiscar",
    //ARTIST COMPONENT
    //ARTIST
    music: "One of my creations",
    favouritePerson:
      "I dedicate this improvisation to my favorite person on this earth. May the winds be favorable to us",
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
    frenchLanguageLevel: "Natif",
    englishLanguageLevel: "Intermédiaire",
    italianLanguageLevel: "Intermédiaire",
    spanishLanguageLevel: "Intermédiaire",
    russianLanguageLevel: "Débutant",
    japaneseLanguageLevel: "Débutant",
    indonesianLanguageLevel: "Débutant",
    // EDUCATION
    versoie: "Lycée de la Versoie",
    bac: "Baccalauréat littéraire",
    car: "Permis de conduire",
    certification: "Certification de développement web",
    certificationDetails:
      "J'ai obtenu une certification de développeur web à la fois pour le font-end et le back-end",
    cca: "Attestation de personnel naviguant",
    ccaDetails:
      "J'ai réussi la partie théorique et je passerai la partie pratique en septembre. Alors j'aurai mes ailes",
    lilate: "Lilate",
    lilateEnglish: "Reconnaissance du niveau B2 en Englais",
    //ADDITIONNAL LINKS
    //NIHONGO
    nihongo: "Nihongo",
    nihongoLearn: "Apprendre le Japonais",
    nihongoDictionnary: "Dictionnaire Japonais",
    russianDictionnary: "Dictionnaire Russe",
    myBook: "Un de mes livres",
    adiscarTitle: "Adiscar",
    //ARTIST COMPONENT
    //ARTIST
    music: "Une de mes compositions",
    favouritePerson:
      "Je dédie cette improvisation à ma personne préférée sur cette terre. Puissent les vents nous être favorables",
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
    morocco:
      "Я провел два месяца в Марокко. Там я в составе команды занимался разработкой банковского приложения",
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
    frenchLanguageLevel: "Родной",
    englishLanguageLevel: "Средний",
    italianLanguageLevel: "Средний",
    spanishLanguageLevel: "Средний",
    russianLanguageLevel: "Новичок",
    japaneseLanguageLevel: "Новичок",
    indonesianLanguageLevel: "Новичок",
    //EDUCATION
    versoie: "Средняя школа Версои",
    bac: "Литературный бакалавриат",
    car: "Водительские права",
    certification: "Сертификация веб-разработки",
    certificationDetails:
      "Я получил сертификат веб-разработчика как 'front-end', так и 'back-end'.",
    cca: "Аттестация бортпроводников",
    ccaDetails:
      "Я сдал теоретическую часть и в сентябре буду сдавать практическую часть. Тогда я получу свои крылья",
    lilate: "Лилате",
    lilateEnglish: "Признание уровня B2 по английскому языку",
    //ADDITIONNAL LINKS COMPONENT
    //NIHONGO
    nihongo: "нихонго",
    nihongoLearn: "Изучайте японский",
    nihongoDictionnary: "Японский словарь",
    russianDictionnary: "Русский словарь",
    myBook: "Одна из моих книг",
    adiscarTitle: "Адискар",
    //ARTIST COMPONENT
    //ARTIST
    music: "Одно из моих творений",
    favouritePerson:
      "Эту импровизацию я посвящаю моему самому любимому человеку на этой земле. Пусть ветры будут нам попутны",
    // ABOUT PAGE
    formTitle: "Свяжитесь со мной",
    placeholderName: "Ваше имя",
    placeholderEmail: "ваша электронная почта",
    placeholderMessage: "Ваше сообщение",
    formSend: "Отправлять",
    formValidationText: "Ваше сообщение успешно отправлено",
  },
  it: {
    // NAV
    home: "Home",
    about: "Chi sono",
    apply: "Candidarsi",
    contact: "Contatto",
    // SLOGAN
    location: "San Pietroburgo",
    slogan: "Inizia una nuova vita",
    toggleDark: "Modalità scura",
    // ABOUT PAGE
    //BLOC 1
    hello: "Ciao",
    myself: "Sono Kevin e voglio vivere a San Pietroburgo",
    data: "Mi sono innamorato della cultura russa",
    //BLOC 2
    flightAttended: "Determinazione",
    hoursInFlight: "Conoscenza della lingua russa",
    progress: "In aumento",
    km: "Chilometri",
    milesTravelled: "Chilometri fino al mio obiettivo",
    incidentEncountered: "Incidenti incontrati",
    countryDiscovered: "Paesi attraversati",
    //BLOC 3
    amateur: "Sono francese",
    determination: "Ho creato questo sito web",
    qualitiesOne: "Parlo diverse lingue",
    qualitiesTwo:
      "Rigorosità, passione, autocontrollo, disciplina, rispetto...",
    motivation: "Scrivo libri e suono il pianoforte da 23 anni",
    // APPLY
    experience: "Esperienza",
    programmingLanguages: "Linguaggi",
    educationCertifications: "Titoli di studio",
    additionalLinks: "Link aggiuntivi",
    // EXPERIENCE COMPONENT
    cashier: "Cassiere",
    leclercStart: "E. Leclerc",
    superU: "Super U",
    // WRITER
    writer: "Scrittore",
    scienceFiction: "Ho scritto fantascienza",
    philosophy: "Ho scritto filosofia",
    action: "Ho scritto azione",
    genre: "Ho scritto romanzi, racconti e poesie",
    webDeveloper: "Sviluppatore web",
    artist: "Artista",
    // LANGUAGES
    frenchLanguage: "Francese",
    englishLanguage: "Inglese",
    italianLanguage: "Italiano",
    spanishLanguage: "Spagnolo",
    russianLanguage: "Russo",
    japaneseLanguage: "Giapponese",
    indonesianLanguage: "Indonesiano",
    frenchLanguageLevel: "Madrelingua",
    englishLanguageLevel: "Intermedio",
    italianLanguageLevel: "Intermedio",
    spanishLanguageLevel: "Intermedio",
    russianLanguageLevel: "Principiante",
    japaneseLanguageLevel: "Principiante",
    indonesianLanguageLevel: "Principiante",
    // EDUCATION
    versoie: "Liceo Versoie",
    bac: "Diploma letterario",
    car: "Patente di guida",
    certification: "Certificazione sviluppo web",
    certificationDetails:
      "Ho ottenuto una certificazione per lo sviluppo web sia front-end che back-end",
    cca: "Certificazione di personale di volo",
    ccaDetails:
      "Ho superato la parte teorica e sosterrò quella pratica a settembre. Allora avrò le mie ali",
    lilate: "Lilate",
    lilateEnglish: "Certificazione livello B2 in Inglese",
    // ADDITIONAL LINKS
    nihongo: "Nihongo",
    nihongoLearn: "Imparare il giapponese",
    nihongoDictionnary: "Dizionario giapponese",
    russianDictionnary: "Dizionario russo",
    myBook: "Uno dei miei libri",
    adiscarTitle: "Adiscar",
    // ARTIST COMPONENT
    music: "Una mia composizione",
    favouritePerson:
      "Dedico questa improvvisazione alla mia persona preferita su questa terra. Che i venti ci siano favorevoli",
    // ABOUT PAGE
    formTitle: "Contattami",
    placeholderName: "Il suo nome",
    placeholderEmail: "La sua email",
    placeholderMessage: "Il suo messaggio",
    formSend: "Invia",
    formValidationText: "Il suo messaggio è stato inviato correttamente",
  },

  es: {
    // NAV
    home: "Inicio",
    about: "Acerca de",
    apply: "Aplicar",
    contact: "Contacto",
    // SLOGAN
    location: "San Petersburgo",
    slogan: "Comenzar una nueva vida",
    toggleDark: "Modo oscuro",
    // ABOUT PAGE
    //BLOC 1
    hello: "Hola",
    myself: "Soy Kevin y quiero vivir en San Petersburgo",
    data: "Me enamoré de la cultura rusa",
    //BLOC 2
    flightAttended: "Determinación",
    hoursInFlight: "Conocimiento del idioma ruso",
    progress: "En aumento",
    km: "Kilómetros",
    milesTravelled: "Kilómetros hasta mi objetivo",
    incidentEncountered: "Incidentes",
    countryDiscovered: "Países atravesados",
    //BLOC 3
    amateur: "Soy francés",
    determination: "He creado este sitio web",
    qualitiesOne: "Hablo varios idiomas",
    qualitiesTwo: "Rigor, pasión, autocontrol, disciplina, respeto...",
    motivation: "Escribo libros y toco el piano desde hace 23 años",
    // APPLY
    experience: "Experiencia",
    programmingLanguages: "Lenguajes",
    educationCertifications: "Títulos",
    additionalLinks: "Enlaces adicionales",
    // EXPERIENCE COMPONENT
    cashier: "Cajero",
    leclercStart: "E. Leclerc",
    superU: "Super U",
    // WRITER
    writer: "Escritor",
    scienceFiction: "He escrito ciencia ficción",
    philosophy: "He escrito filosofía",
    action: "He escrito acción",
    genre: "He escrito novelas, cuentos y poesía",
    webDeveloper: "Desarrollador web",
    artist: "Artista",
    // LANGUAGES
    frenchLanguage: "Francés",
    englishLanguage: "Inglés",
    italianLanguage: "Italiano",
    spanishLanguage: "Español",
    russianLanguage: "Ruso",
    japaneseLanguage: "Japonés",
    indonesianLanguage: "Indonesio",
    frenchLanguageLevel: "Nativo",
    englishLanguageLevel: "Intermedio",
    italianLanguageLevel: "Intermedio",
    spanishLanguageLevel: "Intermedio",
    russianLanguageLevel: "Principiante",
    japaneseLanguageLevel: "Principiante",
    indonesianLanguageLevel: "Principiante",
    // EDUCATION
    versoie: "Liceo Versoie",
    bac: "Bachillerato literario",
    car: "Licencia de conducir",
    certification: "Certificación de desarrollo web",
    certificationDetails:
      "Obtuve una certificación como desarrollador web tanto front-end como back-end",
    cca: "Certificación de tripulación de cabina",
    ccaDetails:
      "Aprobé la parte teórica y realizaré la práctica en septiembre. Entonces tendré mis alas",
    lilate: "Lilate",
    lilateEnglish: "Reconocimiento de nivel B2 en inglés",
    // ADDITIONAL LINKS
    nihongo: "Nihongo",
    nihongoLearn: "Aprender japonés",
    nihongoDictionnary: "Diccionario japonés",
    russianDictionnary: "Diccionario ruso",
    myBook: "Uno de mis libros",
    adiscarTitle: "Adiscar",
    // ARTIST COMPONENT
    music: "Una de mis composiciones",
    favouritePerson:
      "Dedico esta improvisación a mi persona favorita en la tierra. Que los vientos nos sean favorables",
    // ABOUT PAGE
    formTitle: "Contáctame",
    placeholderName: "Su nombre",
    placeholderEmail: "Su correo",
    placeholderMessage: "Su mensaje",
    formSend: "Enviar",
    formValidationText: "Su mensaje ha sido enviado correctamente",
  },
  de: {
    // NAV
    home: "Startseite",
    about: "Über mich",
    apply: "Bewerben",
    contact: "Kontakt",
    // SLOGAN
    location: "Sankt Petersburg",
    slogan: "Ein neues Leben beginnen",
    toggleDark: "Dunkelmodus",
    // ABOUT PAGE
    //BLOC 1
    hello: "Hallo",
    myself: "Ich bin Kevin und möchte in Sankt Petersburg leben",
    data: "Ich habe mich in die russische Kultur verliebt",
    //BLOC 2
    flightAttended: "Entschlossenheit",
    hoursInFlight: "Russischkenntnisse",
    progress: "Zunehmend",
    km: "Kilometer",
    milesTravelled: "Kilometer bis zu meinem Ziel",
    incidentEncountered: "Vorfälle",
    countryDiscovered: "Durchquerte Länder",
    //BLOC 3
    amateur: "Ich bin Franzose",
    determination: "Ich habe diese Website erstellt",
    qualitiesOne: "Ich spreche mehrere Sprachen",
    qualitiesTwo:
      "Strenge, Leidenschaft, Selbstbeherrschung, Disziplin, Respekt...",
    motivation: "Ich schreibe Bücher und spiele seit 23 Jahren Klavier",
    // APPLY
    experience: "Erfahrung",
    programmingLanguages: "Programmiersprachen",
    educationCertifications: "Abschlüsse",
    additionalLinks: "Zusätzliche Links",
    // EXPERIENCE COMPONENT
    cashier: "Kassierer",
    leclercStart: "E. Leclerc",
    superU: "Super U",
    // WRITER
    writer: "Schriftsteller",
    scienceFiction: "Ich habe Science-Fiction geschrieben",
    philosophy: "Ich habe Philosophie geschrieben",
    action: "Ich habe Action geschrieben",
    genre: "Ich habe Romane, Kurzgeschichten und Poesie geschrieben",
    webDeveloper: "Webentwickler",
    artist: "Künstler",
    // LANGUAGES
    frenchLanguage: "Französisch",
    englishLanguage: "Englisch",
    italianLanguage: "Italienisch",
    spanishLanguage: "Spanisch",
    russianLanguage: "Russisch",
    japaneseLanguage: "Japanisch",
    indonesianLanguage: "Indonesisch",
    frenchLanguageLevel: "Muttersprache",
    englishLanguageLevel: "Mittelstufe",
    italianLanguageLevel: "Mittelstufe",
    spanishLanguageLevel: "Mittelstufe",
    russianLanguageLevel: "Anfänger",
    japaneseLanguageLevel: "Anfänger",
    indonesianLanguageLevel: "Anfänger",
    // EDUCATION
    versoie: "Lycée de la Versoie",
    bac: "Literarisches Abitur",
    car: "Führerschein",
    certification: "Webentwickler-Zertifikat",
    certificationDetails:
      "Ich habe eine Zertifizierung für Frontend- und Backend-Entwicklung erhalten",
    cca: "Kabinenpersonal-Zertifikat",
    ccaDetails:
      "Ich habe den Theorieteil bestanden und mache im September den Praxisteil. Dann habe ich meine Flügel",
    lilate: "Lilate",
    lilateEnglish: "B2-Niveau in Englisch anerkannt",
    // ADDITIONAL LINKS
    nihongo: "Nihongo",
    nihongoLearn: "Japanisch lernen",
    nihongoDictionnary: "Japanisch-Wörterbuch",
    russianDictionnary: "Russisch-Wörterbuch",
    myBook: "Eines meiner Bücher",
    adiscarTitle: "Adiscar",
    // ARTIST COMPONENT
    music: "Eine meiner Kompositionen",
    favouritePerson:
      "Ich widme diese Improvisation meiner Lieblingsperson auf dieser Erde. Mögen die Winde uns wohlgesinnt sein",
    // ABOUT PAGE
    formTitle: "Kontaktieren Sie mich",
    placeholderName: "Ihr Name",
    placeholderEmail: "Ihre E-Mail",
    placeholderMessage: "Ihre Nachricht",
    formSend: "Senden",
    formValidationText: "Ihre Nachricht wurde erfolgreich gesendet",
  },
  ja: {
    // NAV
    home: "ホーム",
    about: "概要",
    apply: "応募",
    contact: "連絡する",
    // SLOGAN
    location: "サンクトペテルブルク",
    slogan: "新しい人生を始めよう",
    toggleDark: "ダークモード",
    // ABOUT PAGE
    //BLOC 1
    hello: "こんにちは",
    myself: "私はケヴィンで、サンクトペテルブルクに住みたいです",
    data: "私はロシア文化に恋をしました",
    //BLOC 2
    flightAttended: "決意",
    hoursInFlight: "ロシア語の知識",
    progress: "増加中",
    km: "キロメートル",
    milesTravelled: "目標までの距離",
    incidentEncountered: "遭遇した出来事",
    countryDiscovered: "通過した国",
    //BLOC 3
    amateur: "私はフランス人です",
    determination: "このウェブサイトは私が作りました",
    qualitiesOne: "私は複数の言語を話します",
    qualitiesTwo: "厳格さ、情熱、自制心、規律、敬意...",
    motivation: "私は23年間本を書き、ピアノを弾いています",
    // APPLY
    experience: "経験",
    programmingLanguages: "プログラミング言語",
    educationCertifications: "学歴・資格",
    additionalLinks: "追加リンク",
    // EXPERIENCE COMPONENT
    cashier: "レジ係",
    leclercStart: "E. ルクレール",
    superU: "スーパーU",
    // WRITER
    writer: "作家",
    scienceFiction: "SFを書きました",
    philosophy: "哲学を書きました",
    action: "アクションを書きました",
    genre: "小説、短編、小詩を書きました",
    webDeveloper: "ウェブ開発者",
    artist: "アーティスト",
    // LANGUAGES
    frenchLanguage: "フランス語",
    englishLanguage: "英語",
    italianLanguage: "イタリア語",
    spanishLanguage: "スペイン語",
    russianLanguage: "ロシア語",
    japaneseLanguage: "日本語",
    indonesianLanguage: "インドネシア語",
    frenchLanguageLevel: "ネイティブ",
    englishLanguageLevel: "中級",
    italianLanguageLevel: "中級",
    spanishLanguageLevel: "中級",
    russianLanguageLevel: "初級",
    japaneseLanguageLevel: "初級",
    indonesianLanguageLevel: "初級",
    // EDUCATION
    versoie: "ヴェルソワ高校",
    bac: "文学バカロレア",
    car: "運転免許",
    certification: "ウェブ開発認定",
    certificationDetails:
      "フロントエンドとバックエンドの両方で開発者認定を取得しました",
    cca: "客室乗務員証明書",
    ccaDetails:
      "理論試験に合格し、実技は9月に受験予定です。そのとき、私は翼を持ちます",
    lilate: "Lilate",
    lilateEnglish: "英語B2レベル認定",
    // ADDITIONAL LINKS
    nihongo: "日本語",
    nihongoLearn: "日本語を学ぶ",
    nihongoDictionnary: "日本語辞書",
    russianDictionnary: "ロシア語辞書",
    myBook: "私の著書の一つ",
    adiscarTitle: "アディスカー",
    // ARTIST COMPONENT
    music: "私の作曲のひとつ",
    favouritePerson:
      "この即興を、地球上で一番大切な人に捧げます。風が私たちに味方しますように",
    // ABOUT PAGE
    formTitle: "お問い合わせ",
    placeholderName: "お名前",
    placeholderEmail: "メールアドレス",
    placeholderMessage: "メッセージ",
    formSend: "送信",
    formValidationText: "メッセージが送信されました",
  },
  zh: {
    // NAV
    home: "首页",
    about: "关于我",
    apply: "申请",
    contact: "联系",
    // SLOGAN
    location: "圣彼得堡",
    slogan: "开启新生活",
    toggleDark: "夜间模式",
    // ABOUT PAGE
    //BLOC 1
    hello: "你好",
    myself: "我是凯文，我想住在圣彼得堡",
    data: "我爱上了俄罗斯文化",
    //BLOC 2
    flightAttended: "决心",
    hoursInFlight: "俄语知识",
    progress: "增长中",
    km: "公里",
    milesTravelled: "离目标的公里数",
    incidentEncountered: "遇到的事件",
    countryDiscovered: "穿越的国家",
    //BLOC 3
    amateur: "我是法国人",
    determination: "我创建了这个网站",
    qualitiesOne: "我会说多种语言",
    qualitiesTwo: "严谨、热情、自制、纪律、尊重……",
    motivation: "我写书并弹钢琴已有23年",
    // APPLY
    experience: "经验",
    programmingLanguages: "编程语言",
    educationCertifications: "学历与证书",
    additionalLinks: "其他链接",
    // EXPERIENCE COMPONENT
    cashier: "收银员",
    leclercStart: "E. Leclerc",
    superU: "Super U",
    // WRITER
    writer: "作家",
    scienceFiction: "我写过科幻",
    philosophy: "我写过哲学",
    action: "我写过动作小说",
    genre: "我写过小说、短篇和诗歌",
    webDeveloper: "网页开发者",
    artist: "艺术家",
    // LANGUAGES
    frenchLanguage: "法语",
    englishLanguage: "英语",
    italianLanguage: "意大利语",
    spanishLanguage: "西班牙语",
    russianLanguage: "俄语",
    japaneseLanguage: "日语",
    indonesianLanguage: "印尼语",
    frenchLanguageLevel: "母语",
    englishLanguageLevel: "中级",
    italianLanguageLevel: "中级",
    spanishLanguageLevel: "中级",
    russianLanguageLevel: "初级",
    japaneseLanguageLevel: "初级",
    indonesianLanguageLevel: "初级",
    // EDUCATION
    versoie: "Versoie高中",
    bac: "文学类高中毕业证",
    car: "驾照",
    certification: "网页开发认证",
    certificationDetails: "我获得了前端和后端的网页开发认证",
    cca: "乘务员证书",
    ccaDetails: "我已通过理论考试，9月将参加实践部分。那时我将拥有我的翅膀",
    lilate: "Lilate",
    lilateEnglish: "英语B2级别认证",
    // ADDITIONAL LINKS
    nihongo: "日本语",
    nihongoLearn: "学习日语",
    nihongoDictionnary: "日语词典",
    russianDictionnary: "俄语词典",
    myBook: "我的一本书",
    adiscarTitle: "阿迪斯卡",
    // ARTIST COMPONENT
    music: "我的一首作品",
    favouritePerson: "我将这段即兴演奏献给我最喜欢的人。愿风儿眷顾我们",
    // ABOUT PAGE
    formTitle: "联系我",
    placeholderName: "您的名字",
    placeholderEmail: "您的邮箱",
    placeholderMessage: "您的留言",
    formSend: "发送",
    formValidationText: "您的消息已成功发送",
  },
};

const i18n = createI18n({
  legacy: false, // Composition API
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
