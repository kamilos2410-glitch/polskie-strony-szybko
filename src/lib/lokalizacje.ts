export type LokalizacjaFaq = { q: string; a: string };

export type Lokalizacja = {
  slug: string;
  nazwa: string;
  wLokalizacji: string;
  title: string;
  description: string;
  lead: string;
  dojazd: string;
  branze: string[];
  akapit: string;
  faq: LokalizacjaFaq[];
};

export const CO_DOSTAJESZ: string[] = [
  "strona pod Twoją własną domeną, gotowa w 48 godzin",
  "wersja na telefon — większość Twoich klientów wejdzie z komórki",
  "opis usług, zdjęcia Twoich realizacji, obszar działania",
  "formularz kontaktowy — zgłoszenia lecą prosto na Twój e-mail",
  "klikalny numer telefonu, mapa i godziny pracy",
  "certyfikat SSL i przygotowanie techniczne pod Google: tytuły, opisy, dane firmy w kodzie strony, mapa witryny i zgłoszenie do Search Console",
];

export const JAK_TO_DZIALA: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Darmowe demo",
    body: "Krótka rozmowa, w 48 godzin dostajesz link do gotowego projektu strony.",
  },
  {
    n: "02",
    title: "Akceptacja",
    body: "Zgłaszasz poprawki, płacisz dopiero wtedy, gdy projekt Ci się podoba.",
  },
  {
    n: "03",
    title: "Publikacja",
    body: "Strona rusza pod Twoją domeną w 48 godzin od akceptacji.",
  },
];

export const CENNIK_JEDNORAZOWO = {
  label: "Jednorazowo",
  price: "1500 zł",
  body: "Strona na własność, publikacja pod Twoją domeną. Potem za samą stronę nie płacisz nic — jedyny stały koszt to domena, około 100–150 zł rocznie, płacona bezpośrednio rejestratorowi i zarejestrowana na Twoje dane.",
};

export const CENNIK_ABONAMENT = {
  label: "Abonament",
  price: "199 zł/mies.",
  badge: "0 zł na start",
  body: "Domena, hosting, utrzymanie i drobne zmiany w cenie.",
};

export const CZEGO_NIE_OBIECUJE =
  "Nie gwarantuję pozycji w Google ani „top 3\" — kto to obiecuje, sprzedaje ściemę. Nie sprzedaję SEO jako stałej usługi. Strona dostaje przygotowanie techniczne pod wyszukiwarkę i zgłoszenie do Google Search Console; pierwsze efekty na frazy lokalne widać zwykle po 4–12 tygodniach.";

export const LOKALIZACJE: Lokalizacja[] = [
  {
    slug: "piaseczno",
    nazwa: "Piaseczno",
    wLokalizacji: "w Piasecznie",
    title: "Strony internetowe Piaseczno — strona dla firmy w 48 godzin | SCS Web",
    description:
      "Strony internetowe dla firm z Piaseczna i okolic. Projekt w 48 godzin, płacisz dopiero po akceptacji. 1500 zł jednorazowo albo 199 zł miesięcznie. Tel. 664 013 998.",
    lead: "Robię strony dla małych firm usługowych z Piaseczna i okolic — takich, które mają klientów z polecenia i dobre opinie, ale w internecie nie ma ich nigdzie. Projekt Twojej strony zobaczysz w 48 godzin i zapłacisz dopiero wtedy, gdy Ci się spodoba.",
    dojazd:
      "Z Tarczyna do Piaseczna jest kilkanaście kilometrów, więc jeśli wolisz spotkanie na miejscu zamiast rozmowy telefonicznej — przyjadę.",
    branze: [
      "ekipy remontowe i wykończeniowe",
      "hydraulicy i elektrycy",
      "warsztaty samochodowe",
      "firmy ogrodnicze i brukarskie",
      "salony i gabinety usługowe",
    ],
    akapit:
      "W Piasecznie i gminach wokół konkurencja o klienta rozgrywa się w telefonie: ktoś wpisuje „hydraulik Piaseczno\", ogląda trzy pierwsze wyniki i dzwoni. Jeśli Twoja firma nie ma nic poza wizytówką Google albo profilem na Facebooku, wypadasz z tego porównania, zanim się zacznie. Strona nie załatwia tego sama, ale daje miejsce, do którego odsyłasz każdego, kto pyta „a macie coś do obejrzenia?\".",
    faq: [
      {
        q: "Przyjedziesz do Piaseczna?",
        a: "Tak. Zwykle wystarczy rozmowa telefoniczna i kilka zdjęć z Twoich realizacji, ale jeśli wolisz usiąść i pogadać — umówimy się na miejscu.",
      },
      {
        q: "Czy wyjdę dzięki temu w Google na „hydraulik Piaseczno\"?",
        a: "Nie obiecuję pozycji, bo nikt uczciwie nie może. Strona dostaje przygotowanie techniczne pod wyszukiwarkę i zgłoszenie do Google Search Console. Pierwsze efekty na frazy lokalne widać zwykle po 4–12 tygodniach i zależą od tego, ilu masz konkurentów.",
      },
    ],
  },
  {
    slug: "grojec",
    nazwa: "Grójec",
    wLokalizacji: "w Grójcu",
    title: "Strony internetowe Grójec — strona dla firmy w 48 godzin | SCS Web",
    description:
      "Strony internetowe dla firm z Grójca i powiatu grójeckiego. Projekt w 48 godzin, płacisz po akceptacji. 1500 zł jednorazowo albo 199 zł miesięcznie. Tel. 664 013 998.",
    lead: "Robię strony dla małych firm z Grójca i okolic — usługowych, handlowych i tych pracujących wokół sadów. Projekt zobaczysz w 48 godzin, a płacisz dopiero wtedy, gdy go zaakceptujesz.",
    dojazd:
      "Z Tarczyna do Grójca jest kilkanaście kilometrów, więc spotkanie na miejscu nie jest problemem.",
    branze: [
      "usługi i serwis dla sadownictwa",
      "transport i chłodnie",
      "warsztaty i serwis maszyn",
      "firmy budowlane i instalacyjne",
      "handel i hurtownie",
    ],
    akapit:
      "Grójec to rejon sadowniczy, więc sporo tutejszych firm pracuje w rytmie sezonu i żyje z kontaktów ciągnących się latami. Strona nie zastąpi tych kontaktów, ale robi dwie rzeczy: pokazuje nowemu odbiorcy, że firma jest realna, i daje jedno miejsce z aktualnym telefonem, zakresem usług i obszarem, w którym pracujesz.",
    faq: [
      {
        q: "Czy robisz strony dla firm spoza samego Grójca?",
        a: "Tak, cały powiat grójecki i okolice. Pracuję zdalnie, więc odległość nie zmienia ani ceny, ani terminu.",
      },
      {
        q: "Mam już wizytówkę Google. Po co mi jeszcze strona?",
        a: "Wizytówka pokazuje telefon i opinie, ale nie pokazuje, co dokładnie robisz i jak. Strona jest miejscem, do którego odsyłasz klienta z wizytówki, z ogłoszenia albo z rozmowy — i jedynym, którego treść w całości kontrolujesz.",
      },
    ],
  },
  {
    slug: "gora-kalwaria",
    nazwa: "Góra Kalwaria",
    wLokalizacji: "w Górze Kalwarii",
    title: "Strony internetowe Góra Kalwaria — strona dla firmy w 48 godzin | SCS Web",
    description:
      "Strony internetowe dla firm z Góry Kalwarii i okolic. Projekt w 48 godzin, płatność po akceptacji. 1500 zł jednorazowo albo 199 zł miesięcznie. Tel. 664 013 998.",
    lead: "Robię strony dla małych firm z Góry Kalwarii i okolicznych miejscowości — usługowych, budowlanych, transportowych i handlowych. Projekt dostajesz w 48 godzin, płacisz po akceptacji.",
    dojazd:
      "Z Tarczyna do Góry Kalwarii jest około dwudziestu kilometrów — jeśli wolisz spotkanie osobiste, przyjadę.",
    branze: [
      "firmy budowlane i wykończeniowe",
      "transport i usługi sprzętem",
      "warsztaty samochodowe",
      "sadownictwo i usługi rolnicze",
      "handel i drobna produkcja",
    ],
    akapit:
      "Firmy z Góry Kalwarii i okolic często pracują na dwa rynki naraz: lokalny i warszawski. W jednym wystarczy polecenie, w drugim klient najpierw sprawdza w internecie, komu chce zapłacić. Strona pod własną domeną, z opisem usług i obszaru działania, jest najtańszym sposobem, żeby na tym drugim rynku w ogóle istnieć.",
    faq: [
      {
        q: "Ile płacę po uruchomieniu strony?",
        a: "Przy wariancie jednorazowym za samą stronę nic. Jedyny stały koszt to domena, około 100–150 zł rocznie, płacona bezpośrednio rejestratorowi i zarejestrowana na Twoje dane. W wariancie abonamentowym 199 zł miesięcznie obejmuje domenę, hosting i drobne zmiany.",
      },
      {
        q: "Czy mogę potem sam zmieniać treść?",
        a: "Nie w panelu — strona jest statyczna, bez systemu do klikania treści. Dzięki temu jest szybka i nie wymaga aktualizacji wtyczek, ale zmiany robię ja: w abonamencie do trzech miesięcznie w cenie, przy wariancie jednorazowym wyceniam je osobno.",
      },
    ],
  },
  {
    slug: "konstancin-jeziorna",
    nazwa: "Konstancin-Jeziorna",
    wLokalizacji: "w Konstancinie-Jeziornej",
    title: "Strony internetowe Konstancin-Jeziorna — strona dla firmy w 48 godzin | SCS Web",
    description:
      "Strony internetowe dla firm z Konstancina-Jeziornej i okolic. Projekt w 48 godzin, płatność po akceptacji. 1500 zł jednorazowo albo 199 zł miesięcznie. Tel. 664 013 998.",
    lead: "Robię strony dla małych firm z Konstancina-Jeziornej i okolic — głównie tych, które pracują przy domach jednorodzinnych i ogrodach. Projekt zobaczysz w 48 godzin i zapłacisz dopiero po akceptacji.",
    dojazd:
      "Z Tarczyna do Konstancina jest około dwudziestu kilometrów, więc spotkanie na miejscu jest możliwe.",
    branze: [
      "wykończenia wnętrz i ekipy remontowe",
      "hydraulika, elektryka, instalacje",
      "ogrody, tarasy, baseny",
      "gabinety i usługi dla klienta indywidualnego",
      "usługi domowe i opiekuńcze",
    ],
    akapit:
      "Konstancin to rynek, na którym klient rzadko wybiera najtaniej — częściej wybiera tego, komu ufa. Zaufanie w internecie buduje się prostymi rzeczami: konkretnym opisem usług, zdjęciami własnych realizacji, widocznym telefonem i stroną, która ładuje się szybko na telefonie. Tyle wystarczy, żeby wyprzedzić firmę mającą tylko numer w ogłoszeniu.",
    faq: [
      {
        q: "Nie mam logo ani dobrych zdjęć. Da się zrobić stronę?",
        a: "Da się. Zdjęcia z telefonu z Twoich realizacji zwykle wystarczą i wyglądają lepiej niż zdjęcia stockowe. Logo mogę zaprojektować osobno za 800 zł, ale strona nie jest od niego zależna.",
      },
      {
        q: "Czy strona będzie działać na telefonie?",
        a: "Tak i to jest priorytet — większość klientów wejdzie z komórki. Projekt, który dostajesz do akceptacji, możesz od razu otworzyć na swoim telefonie i sprawdzić.",
      },
    ],
  },
  {
    slug: "tarczyn",
    nazwa: "Tarczyn",
    wLokalizacji: "w Tarczynie",
    title: "Strony internetowe Tarczyn — strona dla firmy w 48 godzin | SCS Web",
    description:
      "Strony internetowe dla firm z Tarczyna i gminy. Projekt w 48 godzin, płatność po akceptacji. 1500 zł jednorazowo albo 199 zł miesięcznie. Tel. 664 013 998.",
    lead: "SCS Web działa z Tarczyna. Robię strony dla małych firm usługowych — tutejszych i z całej Polski — a projekt Twojej strony zobaczysz w 48 godzin, zanim cokolwiek zapłacisz.",
    dojazd: "Jestem na miejscu, więc spotkanie umówimy w tym samym tygodniu.",
    branze: [
      "usługi budowlane i wykończeniowe",
      "transport i usługi sprzętem",
      "warsztaty samochodowe",
      "sady i usługi rolnicze",
      "handel i usługi lokalne",
    ],
    akapit:
      "Tarczyn leży przy trasie do Warszawy, więc wiele tutejszych firm obsługuje klientów daleko poza gminą. To akurat argument za stroną, a nie przeciw: klient z Piaseczna czy z Warszawy nie zna Cię z widzenia i sprawdzi Cię w internecie, zanim zadzwoni.",
    faq: [
      {
        q: "Znamy się z widzenia — czy to zmienia cenę?",
        a: "Nie. Cena jest taka sama dla wszystkich: 1500 zł jednorazowo albo 0 zł na start i 199 zł miesięcznie. Bliskość zmienia tylko to, że łatwiej się spotkać.",
      },
      {
        q: "Jak wygląda pierwsza rozmowa?",
        a: "Piętnaście minut. Pytam o usługi, obszar działania i o to, czym się wyróżniasz. Potem robię projekt strony i wysyłam link — decyzję podejmujesz, mając gotową stronę przed oczami.",
      },
    ],
  },
  {
    slug: "nadarzyn",
    nazwa: "Nadarzyn",
    wLokalizacji: "w Nadarzynie",
    title: "Strony internetowe Nadarzyn — strona dla firmy w 48 godzin | SCS Web",
    description:
      "Strony internetowe dla firm z Nadarzyna i okolic. Projekt w 48 godzin, płatność po akceptacji. 1500 zł jednorazowo albo 199 zł miesięcznie. Tel. 664 013 998.",
    lead: "Robię strony dla małych firm z Nadarzyna i okolic — handlowych, instalacyjnych i usługowych. Projekt dostajesz w 48 godzin, płacisz dopiero po akceptacji.",
    dojazd:
      "Z Tarczyna do Nadarzyna jest kilkanaście kilometrów, więc spotkanie na miejscu nie jest problemem.",
    branze: [
      "hurtownie i firmy handlowe",
      "firmy instalacyjne i budowlane",
      "transport i logistyka",
      "warsztaty i serwis",
      "usługi dla domu i ogrodu",
    ],
    akapit:
      "W Nadarzynie i okolicach sporo firm sprzedaje jednocześnie klientowi indywidualnemu i firmowemu. Ten drugi prawie zawsze sprawdza stronę przed pierwszym telefonem — nie dlatego, że szuka wrażeń, tylko dlatego, że chce wiedzieć, z kim rozmawia. Strona z konkretnym zakresem usług i danymi firmy załatwia to w trzydzieści sekund.",
    faq: [
      {
        q: "Potrzebuję strony pod klienta firmowego, nie pod Google. Ma to sens?",
        a: "Ma, i to często większy. Strona jest wtedy wizytówką, którą wysyłasz w mailu albo podajesz w ofercie. Nie musi walczyć o pozycje, musi wyglądać poważnie i mieć komplet danych.",
      },
      {
        q: "Czy dostanę firmowy e-mail na swojej domenie?",
        a: "Tak, to osobna usługa za 400 zł — skrzynka w stylu kontakt@twojafirma.pl, skonfigurowana na Twoich urządzeniach. Do tego dochodzi opłata dostawcy skrzynki, od 49 zł rocznie.",
      },
    ],
  },
  {
    slug: "pruszkow",
    nazwa: "Pruszków",
    wLokalizacji: "w Pruszkowie",
    title: "Strony internetowe Pruszków — strona dla firmy w 48 godzin | SCS Web",
    description:
      "Strony internetowe dla firm z Pruszkowa i okolic. Projekt w 48 godzin, płatność po akceptacji. 1500 zł jednorazowo albo 199 zł miesięcznie. Tel. 664 013 998.",
    lead: "Robię strony dla małych firm usługowych i handlowych z Pruszkowa i okolic. Projekt zobaczysz w 48 godzin, a zapłacisz dopiero wtedy, gdy go zaakceptujesz.",
    dojazd:
      "Z Tarczyna do Pruszkowa jest około pół godziny jazdy — jeśli wolisz spotkanie osobiste, umówimy się.",
    branze: [
      "warsztaty samochodowe i serwis",
      "ekipy remontowe i wykończeniowe",
      "hydraulicy, elektrycy, instalatorzy",
      "gabinety i salony usługowe",
      "handel i usługi lokalne",
    ],
    akapit:
      "Pruszków i sąsiednie gminy to gęsty rynek — w każdej branży jest kilkunastu wykonawców w promieniu kilku kilometrów. Wygrywa nie ten, kto krzyczy najgłośniej, tylko ten, którego łatwiej sprawdzić: jasny zakres usług, widoczny telefon, zdjęcia własnych prac, opinie. Strona zbiera to w jednym miejscu, którego nie kontroluje żaden portal.",
    faq: [
      {
        q: "Mam profil na Facebooku, wystarczy?",
        a: "Facebook jest dobry do pokazywania bieżących prac, ale zasięg i wygląd profilu zależą od platformy, nie od Ciebie. Strona pod własną domeną należy do Ciebie i wygląda tak samo dla każdego, kto na nią wejdzie.",
      },
      {
        q: "Ile to trwa od decyzji do uruchomienia?",
        a: "Projekt w 48 godzin od przekazania materiałów, publikacja pod Twoją domeną w kolejne 48 godzin od akceptacji. Realnie: kilka dni, nie kilka tygodni.",
      },
    ],
  },
  {
    slug: "grodzisk-mazowiecki",
    nazwa: "Grodzisk Mazowiecki",
    wLokalizacji: "w Grodzisku Mazowieckim",
    title: "Strony internetowe Grodzisk Mazowiecki — strona dla firmy w 48 godzin | SCS Web",
    description:
      "Strony internetowe dla firm z Grodziska Mazowieckiego i okolic. Projekt w 48 godzin, płatność po akceptacji. 1500 zł jednorazowo albo 199 zł miesięcznie. Tel. 664 013 998.",
    lead: "Robię strony dla małych firm z Grodziska Mazowieckiego i okolic — usługowych, budowlanych i produkcyjnych. Projekt dostajesz w 48 godzin i płacisz dopiero po akceptacji.",
    dojazd:
      "Z Tarczyna do Grodziska jest około pół godziny jazdy, więc spotkanie osobiste jest możliwe.",
    branze: [
      "firmy budowlane i wykończeniowe",
      "instalacje: hydraulika, elektryka, ogrzewanie",
      "drobna produkcja i usługi dla firm",
      "warsztaty samochodowe",
      "usługi dla domu i ogrodu",
    ],
    akapit:
      "Wiele firm z Grodziska i okolic pracuje dla klientów z całej zachodniej części aglomeracji. Przy takim zasięgu polecenia przestają wystarczać — nowy klient najpierw wpisuje nazwę firmy w Google i patrzy, co znajdzie. Jeśli nie znajdzie nic, zwykle nie dzwoni.",
    faq: [
      {
        q: "Czy strona musi mieć wiele podstron?",
        a: "Nie. Dla większości małych firm lepiej działa jedna dobrze ułożona strona: usługi, dlaczego my, realizacje, obszar działania i kontakt. Podstrony dokładamy tylko wtedy, gdy naprawdę są potrzebne.",
      },
      {
        q: "Co jeśli projekt mi się nie spodoba?",
        a: "Nic nie płacisz. Projekt jest darmowy i niezobowiązujący — płatność jest dopiero po akceptacji gotowej strony.",
      },
    ],
  },
];

export function getLokalizacja(slug: string): Lokalizacja {
  const found = LOKALIZACJE.find((l) => l.slug === slug);
  if (!found) throw new Error(`Brak lokalizacji: ${slug}`);
  return found;
}
