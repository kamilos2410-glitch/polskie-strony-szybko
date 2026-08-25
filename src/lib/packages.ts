import type { Faq, Step } from "@/lib/services";

export type PackageItem = { name: string; price: string; to: string };

export type Pkg = {
  slug: string;
  name: string;
  h1: string;
  promise: string;
  metaTitle: string;
  metaDescription: string;
  items: PackageItem[];
  separate: string;
  bundle: string;
  bundleNote?: string;
  forWhom: string[];
  duration: string[];
  steps: Step[];
  priceOnce: string[];
  priceRecurring: string[];
  notes?: string[];
  faq: Faq[];
};

const STRONA: PackageItem = {
  name: "Strona internetowa",
  price: "1500 zł",
  to: "/uslugi/strona-internetowa",
};
const POCZTA: PackageItem = {
  name: "Firmowa poczta na domenie",
  price: "400 zł",
  to: "/uslugi/poczta-firmowa",
};
const GOOGLE: PackageItem = {
  name: "Pakiet Start Google",
  price: "400 zł",
  to: "/uslugi/pakiet-start-google",
};
const WIZYTOWKA: PackageItem = {
  name: "Projekt wizytówki",
  price: "250 zł",
  to: "/uslugi/projekt-wizytowki",
};
const ULOTKA: PackageItem = {
  name: "Projekt ulotki",
  price: "300 zł",
  to: "/uslugi/projekt-ulotki",
};
const LOGO: PackageItem = { name: "Projekt logo", price: "800 zł", to: "/uslugi/projekt-logo" };

const DOMENA_LINE =
  "Roczna opłata za domenę i skrzynkę pocztową idzie do dostawcy, nie do nas — rejestrujemy wszystko na Twoje dane.";

export const PACKAGES: Record<string, Pkg> = {
  "start-online": {
    slug: "start-online",
    name: "Start Online",
    h1: "Pakiet Start Online — strona, firmowy e-mail i wizytówka Google",
    promise:
      "Komplet, żeby zaistnieć w internecie od zera: strona, poczta na własnej domenie i wizytówka w Mapach Google.",
    metaTitle: "Pakiet Start Online — strona, e-mail i wizytówka Google | SCS Web",
    metaDescription:
      "Strona internetowa, firmowa poczta na domenie i Pakiet Start Google dla lokalnej firmy — 1990 zł zamiast 2300 zł osobno.",
    items: [STRONA, POCZTA, GOOGLE],
    separate: "2300 zł",
    bundle: "1990 zł",
    bundleNote: "Z zakładaniem wizytówki Google od zera: 2190 zł.",
    forWhom: [
      "Firma, która startuje w internecie od zera i chce mieć wszystko załatwione za jednym razem.",
      "Fachowiec, który dziś ma tylko prywatną skrzynkę i numer telefonu — a chce wyglądać poważnie.",
    ],
    duration: [
      "Strona: projekt w 48 godzin, publikacja w 48 godzin od akceptacji.",
      "Poczta: 1 dzień roboczy plus 24–48 godzin propagacji.",
      "Wizytówka Google: 2 dni robocze.",
    ],
    steps: [
      {
        n: "01",
        title: "Rozmowa",
        body: "Kwadrans przez telefon: co robisz, gdzie działasz, jak mają do Ciebie trafiać klienci.",
      },
      {
        n: "02",
        title: "Darmowe demo strony",
        body: "W 48 godzin dostajesz link do działającej strony. Mówisz, co zmienić — poprawiam.",
      },
      {
        n: "03",
        title: "Domena, poczta i Google",
        body: "Po akceptacji publikuję stronę pod Twoją domeną, uruchamiam skrzynkę i ustawiam wizytówkę Google.",
      },
    ],
    priceOnce: [
      "1990 zł za cały pakiet zamiast 2300 zł przy zamawianiu każdej usługi osobno.",
      "Z zakładaniem wizytówki Google od zera: 2190 zł.",
      "Płacisz dopiero po akceptacji projektu strony.",
    ],
    priceRecurring: [
      "Domena: ok. 100–150 zł rocznie.",
      "Skrzynka pocztowa: od 49 zł rocznie.",
      DOMENA_LINE,
    ],
    faq: [
      {
        q: "Czy muszę mieć własną domenę?",
        a: "Nie. Jeśli jej nie masz, rejestruję ją na Twoje dane i podpinam do strony oraz poczty.",
      },
      {
        q: "Co jeśli nie mam jeszcze wizytówki w Google?",
        a: "Zakładam ją od zera — wtedy pakiet kosztuje 2190 zł zamiast 1990 zł.",
      },
      {
        q: "Czy strona jest moja na własność?",
        a: "Tak. Płacisz raz i strona wraz z domeną należy do Ciebie.",
      },
    ],
  },

  "firma-kompletna": {
    slug: "firma-kompletna",
    name: "Firma Kompletna",
    h1: "Pakiet Firma Kompletna — internet i materiały firmowe w komplecie",
    promise:
      "Wszystko naraz: strona, firmowy e-mail, wizytówka Google oraz projekty wizytówki i ulotki gotowe do druku.",
    metaTitle: "Pakiet Firma Kompletna — strona, poczta, Google i druki | SCS Web",
    metaDescription:
      "Strona, firmowa poczta, Pakiet Start Google oraz projekty wizytówki i ulotki — 2390 zł zamiast 2850 zł osobno.",
    items: [STRONA, POCZTA, GOOGLE, WIZYTOWKA, ULOTKA],
    separate: "2850 zł",
    bundle: "2390 zł",
    bundleNote: "Z zakładaniem wizytówki Google od zera: 2590 zł.",
    forWhom: [
      "Firma, która chce mieć internet i materiały drukowane spójne i załatwione za jednym razem.",
      "Każdy, kto rozdaje wizytówki i ulotki, a jednocześnie potrzebuje porządnej strony.",
    ],
    duration: [
      "Strona: projekt w 48 godzin, publikacja w 48 godzin od akceptacji.",
      "Poczta: 1 dzień roboczy plus 24–48 godzin propagacji.",
      "Wizytówka Google: 2 dni robocze.",
      "Projekty wizytówki i ulotki: pierwsze wersje w 2 dni robocze.",
    ],
    steps: [
      {
        n: "01",
        title: "Rozmowa",
        body: "Ustalamy zakres: usługi, teren działania, dane kontaktowe i to, co ma być na drukach.",
      },
      {
        n: "02",
        title: "Projekty",
        body: "Dostajesz demo strony oraz projekty wizytówki i ulotki. Zgłaszasz poprawki.",
      },
      {
        n: "03",
        title: "Publikacja i pliki",
        body: "Publikuję stronę, uruchamiam pocztę i wizytówkę Google, przekazuję pliki do druku.",
      },
    ],
    priceOnce: [
      "2390 zł za cały pakiet zamiast 2850 zł osobno.",
      "Z zakładaniem wizytówki Google od zera: 2590 zł.",
    ],
    priceRecurring: [
      "Domena: 100–150 zł rocznie.",
      "Skrzynka pocztowa: od 49 zł rocznie.",
      DOMENA_LINE,
      "Druk zamawiasz sam: 100 wizytówek to ok. 60 zł, 500 ulotek A6 ok. 90 zł.",
    ],
    faq: [
      {
        q: "Czy druk jest w cenie?",
        a: "Nie. Dostajesz gotowe pliki do druku, a zamówienie w drukarni robisz sam — dzięki temu nie dopłacasz mi marży.",
      },
      {
        q: "Czy mogę dołożyć logo?",
        a: "Tak, projekt logo to dodatkowe 800 zł. Zadzwoń, policzę to razem z pakietem.",
      },
      {
        q: "Kiedy płacę?",
        a: "Po akceptacji projektu strony i materiałów. Najpierw oglądasz, potem decydujesz.",
      },
    ],
  },

  wizerunek: {
    slug: "wizerunek",
    name: "Wizerunek",
    h1: "Pakiet Wizerunek — wizytówka Google i materiały firmowe",
    promise:
      "Dla firm, które mają już stronę: wizytówka w Mapach Google plus projekty wizytówki i ulotki.",
    metaTitle: "Pakiet Wizerunek — wizytówka Google, wizytówka i ulotka | SCS Web",
    metaDescription:
      "Pakiet Start Google oraz projekty wizytówki i ulotki dla firmy, która ma już stronę — 820 zł zamiast 950 zł osobno.",
    items: [GOOGLE, WIZYTOWKA, ULOTKA],
    separate: "950 zł",
    bundle: "820 zł",
    bundleNote: "Z zakładaniem wizytówki Google od zera: 1020 zł.",
    forWhom: [
      "Firmy, które mają już stronę internetową i nie potrzebują nowej.",
      "Fachowcy, którzy chcą być widoczni w Mapach Google i mieć porządne materiały do ręki.",
    ],
    duration: [
      "Wizytówka Google: 2 dni robocze.",
      "Projekty wizytówki i ulotki: pierwsze wersje w 2 dni robocze, całość z poprawkami do 5 dni.",
    ],
    steps: [
      {
        n: "01",
        title: "Dane firmy",
        body: "Przesyłasz dane kontaktowe, zakres usług i logo, jeśli je masz.",
      },
      {
        n: "02",
        title: "Wizytówka Google",
        body: "Zakładam albo porządkuję wizytówkę: kategorie, godziny, opis, zdjęcia, obszar działania.",
      },
      {
        n: "03",
        title: "Projekty do druku",
        body: "Dostajesz projekty wizytówki i ulotki, nanoszę poprawki i przekazuję pliki PDF do druku.",
      },
    ],
    priceOnce: ["820 zł za pakiet zamiast 950 zł osobno.", "Z zakładaniem wizytówki Google od zera: 1020 zł."],
    priceRecurring: [
      "Żadnych kosztów cyklicznych po naszej stronie — nic nie płacisz nam co miesiąc ani co rok.",
      "Druk wizytówek i ulotek zamawiasz sam, bezpośrednio w drukarni.",
    ],
    faq: [
      {
        q: "Mam już stronę, czy to problem?",
        a: "Nie, ten pakiet jest właśnie dla takich firm. Wizytówkę Google podpinam do Twojej obecnej strony.",
      },
      {
        q: "Nie mam logo — co wtedy?",
        a: "Zaprojektuję materiały na samej typografii, ale wyjdą słabsze. Wtedy lepszym wyborem jest pakiet Identyfikacja.",
      },
      {
        q: "Czy dostanę pliki do drukarni?",
        a: "Tak, PDF w CMYK ze spadami plus wersja cyfrowa do wysyłania mailem.",
      },
    ],
  },

  "materialy-firmowe": {
    slug: "materialy-firmowe",
    name: "Materiały firmowe",
    h1: "Pakiet Materiały firmowe — wizytówka i ulotka",
    promise: "Dwa projekty, jeden spójny styl — wizytówka i ulotka gotowe do druku.",
    metaTitle: "Pakiet Materiały firmowe — wizytówka i ulotka | SCS Web",
    metaDescription:
      "Projekt wizytówki i ulotki dla lokalnej firmy w jednym spójnym stylu — 480 zł zamiast 550 zł osobno. Pliki PDF gotowe do druku.",
    items: [WIZYTOWKA, ULOTKA],
    separate: "550 zł",
    bundle: "480 zł",
    forWhom: [
      "Firmy, które rozdają wizytówki i ulotki na budowie, w sklepie albo do skrzynek.",
      "Każdy, kto ma już logo i chce materiały w jednym, spójnym stylu.",
    ],
    duration: [
      "Pierwsze projekty: 2 dni robocze.",
      "Całość z poprawkami: do 5 dni roboczych.",
    ],
    steps: [
      {
        n: "01",
        title: "Materiały od Ciebie",
        body: "Przesyłasz dane kontaktowe, listę usług i logo, jeśli je masz.",
      },
      {
        n: "02",
        title: "Projekty",
        body: "Dostajesz projekt wizytówki i ulotki w jednym stylu. W cenie są 2 rundy poprawek.",
      },
      {
        n: "03",
        title: "Pliki do druku",
        body: "Przekazuję PDF w CMYK ze spadami oraz wersję cyfrową. Druk zamawiasz sam.",
      },
    ],
    priceOnce: [
      "480 zł za oba projekty zamiast 550 zł osobno.",
      "2 rundy poprawek w cenie, każda kolejna 100 zł.",
      "Pliki PDF CMYK ze spadami oraz wersja cyfrowa.",
    ],
    priceRecurring: [
      "Żadnych kosztów cyklicznych — nic nie płacisz nam co miesiąc ani co rok.",
      "Druk zamawiasz sam: 100 wizytówek to ok. 60 zł, 500 ulotek A6 ok. 90 zł.",
    ],
    notes: [
      "Jeśli nie masz jeszcze logo, materiały wyjdą słabsze — wtedy lepszym wyborem jest pakiet Identyfikacja, w którym logo projektuję razem z wizytówką i ulotką.",
    ],
    faq: [
      {
        q: "Czy muszę mieć logo?",
        a: "Nie musisz, ale bez logo materiały będą słabsze. W takiej sytuacji polecam pakiet Identyfikacja.",
      },
      {
        q: "Ile poprawek mogę zgłosić?",
        a: "Dwie rundy poprawek są w cenie. Każda kolejna kosztuje 100 zł.",
      },
      {
        q: "Czy zamawiacie druk za mnie?",
        a: "Nie. Dostajesz gotowe pliki i zamawiasz druk sam, w dowolnej drukarni.",
      },
    ],
  },

  identyfikacja: {
    slug: "identyfikacja",
    name: "Identyfikacja",
    h1: "Pakiet Identyfikacja — logo, wizytówka i ulotka",
    promise: "Od znaku firmowego po gotowe druki — jeden spójny wygląd Twojej firmy.",
    metaTitle: "Pakiet Identyfikacja — logo, wizytówka i ulotka | SCS Web",
    metaDescription:
      "Projekt logo oraz wizytówki i ulotki dla lokalnej firmy — 1200 zł zamiast 1350 zł osobno. Spójny wygląd na każdym materiale.",
    items: [LOGO, WIZYTOWKA, ULOTKA],
    separate: "1350 zł",
    bundle: "1200 zł",
    forWhom: [
      "Firmy, które startują i chcą od razu wyglądać poważnie.",
      "Firmy z przypadkowym logo zrobionym kiedyś w darmowym generatorze.",
    ],
    duration: [
      "3 propozycje logo: 3 dni robocze.",
      "Komplet plików logo: do 7 dni roboczych.",
      "Wizytówka i ulotka: po zatwierdzeniu logo.",
    ],
    steps: [
      {
        n: "01",
        title: "Rozmowa o firmie",
        body: "Ustalamy, czym się zajmujesz, kto jest Twoim klientem i jaki styl Ci odpowiada.",
      },
      {
        n: "02",
        title: "Trzy propozycje logo",
        body: "W 3 dni robocze pokazuję trzy kierunki. Wybierasz jeden, dopracowuję go z Tobą.",
      },
      {
        n: "03",
        title: "Materiały firmowe",
        body: "Na zatwierdzonym logo projektuję wizytówkę i ulotkę, a na koniec przekazuję pliki do druku.",
      },
    ],
    priceOnce: [
      "1200 zł za cały pakiet zamiast 1350 zł osobno.",
      "Komplet plików logo: wersje kolorowe, czarno-białe, wektor i pliki na internet.",
      "Pliki PDF CMYK ze spadami dla wizytówki i ulotki.",
    ],
    priceRecurring: [
      "Żadnych kosztów cyklicznych — nic nie płacisz nam co miesiąc ani co rok.",
      "Druk zamawiasz sam, bezpośrednio w drukarni.",
    ],
    faq: [
      {
        q: "Co jeśli żadna propozycja logo mi się nie spodoba?",
        a: "Rozmawiamy jeszcze raz o kierunku i przygotowuję kolejne propozycje. Celem jest znak, z którym będziesz chodził latami.",
      },
      {
        q: "Czy logo będzie moje na własność?",
        a: "Tak, dostajesz komplet plików i pełne prawo do używania logo w firmie.",
      },
      {
        q: "Czy mogę dołożyć oznakowanie auta?",
        a: "Tak, na gotowym logo robi się to szybko. Zadzwoń, wycenię to razem z pakietem.",
      },
    ],
  },
};
