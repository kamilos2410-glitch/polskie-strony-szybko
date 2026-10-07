import type { Faq, Step } from "@/lib/services";

// ============================================================
// STRONY BRANŻOWE — oś ogólnopolska.
//
// DLACZEGO TO ISTNIEJE: strony miastowe (/strony-internetowe/<miasto>/)
// to oś lokalna i ona nie działa. Przez 28 dni dały 0 wyświetleń,
// a /strony-internetowe/piaseczno/ jest w indeksie od 29.09 i nadal
// nie ma ani jednego. Między sobą mają 83–87% wspólnego słownictwa.
// Kamil pracuje na całą Polskę, więc mnożenie miast nie ma sensu —
// kilkadziesiąt bliźniaczych stron to thin content.
// Oś branżowa skaluje się krajowo i każda strona jest naprawdę inna,
// bo inna branża. Szczegóły: claude/seo-kierunek-cala-polska-07-10.md
//
// ZASADA TREŚCI: strona ma być użyteczna dla kogoś z branży nawet
// wtedy, gdy nic u nas nie kupi. Konkret z branży, nie przepisana
// oferta. Bez obietnic pozycji w Google. Bez zdań stawiających nas
// w słabej pozycji (claude/zasada-bez-slabych-stwierdzen.md).
// ============================================================

export type Branza = {
  slug: string;
  h1: string;
  promise: string;
  metaTitle: string;
  metaDescription: string;
  /** Pozycja na liście na stronie głównej. */
  listName: string;
  listBenefit: string;
  /** Co w tej branży decyduje o tym, że strona działa. */
  czegoPotrzebuje: { title: string; body: string }[];
  getList: string[];
  /** Dowód: skończona robota u klienta z tej samej branży. */
  proof?: {
    title: string;
    body: string;
    links: { label: string; href: string }[];
  };
  steps: Step[];
  price: string[];
  faq: Faq[];
};

export const BRANZE: Record<string, Branza> = {
  "firmy-budowlane": {
    slug: "firmy-budowlane",
    h1: "Strona internetowa dla firmy budowlanej",
    promise:
      "Projekt zobaczysz w 48 godzin i płacisz dopiero wtedy, gdy Ci się spodoba. Pracuję z firmami budowlanymi z całej Polski — zdalnie, bez dojazdów.",
    metaTitle: "Strona internetowa dla firmy budowlanej — projekt w 48 h | SCS Web",
    metaDescription:
      "Strona dla firmy budowlanej: galeria realizacji, lista usług, klikalny telefon. Projekt w 48 godzin, płacisz po akceptacji. 1500 zł jednorazowo lub 199 zł miesięcznie. Cała Polska.",
    listName: "Firmy budowlane",
    listBenefit:
      "Galeria realizacji, lista usług i telefon pod ręką — strona pod to, jak klient wybiera wykonawcę.",

    czegoPotrzebuje: [
      {
        title: "Zdjęcia skończonych robót, nie opisy",
        body: "W budowlance klient nie czyta — ogląda. Zanim zadzwoni, chce zobaczyć pięć czy dziesięć skończonych robót i ocenić, czy to jest poziom, jakiego szuka. Galeria to jest ta strona; reszta jest dookoła niej. Zdjęcia z telefonu w zupełności wystarczą — przygotowuję je tak, żeby nie zamulały strony na komórce.",
      },
      {
        title: "Rozpisane usługi, każda osobno",
        body: "Nikt nie szuka „firmy budowlanej”. Szuka układania kostki brukowej, wylewek, fundamentów, prac koparką, wyburzeń, ogrodzeń, drenażu. Jeśli na stronie jest jeden akapit „usługi ogólnobudowlane”, nie masz jak się pokazać na żadne z tych zapytań. Rozbijam to na listę, w której każda robota jest nazwana tak, jak nazywa ją klient.",
      },
      {
        title: "Telefon, nie formularz",
        body: "Do firmy budowlanej się dzwoni. Numer siedzi w nagłówku, przy każdej usłudze i na dole ekranu na telefonie — zawsze klikalny, jednym kciukiem. Formularz zostaje dla tych, którzy piszą wieczorem, ale nie jest głównym sposobem kontaktu.",
      },
      {
        title: "To, co sprawdza generalny wykonawca",
        body: "Część zleceń przychodzi nie od właściciela domu, tylko od firmy, która szuka podwykonawcy. Taki ktoś sprawdza co innego: NIP, od kiedy działasz, jaki masz sprzęt, czy masz ubezpieczenie OC, jaki teren obsługujesz. To są cztery linijki na stronie, a potrafią zdecydować o kontrakcie.",
      },
      {
        title: "Teren działania napisany wprost",
        body: "Jeździsz w promieniu 50 km czy po całym województwie? Klient musi to wiedzieć, zanim zadzwoni, inaczej marnujecie sobie nawzajem czas. Jedno zdanie, widoczne wysoko.",
      },
    ],

    getList: [
      "Galeria realizacji — zdjęcia z Twojego telefonu, przygotowane tak, żeby strona szybko się otwierała",
      "Lista usług rozbita na konkretne roboty, nazwane językiem klienta",
      "Klikalny numer telefonu w nagłówku, przy usługach i na pasku na dole ekranu",
      "Dane firmy: NIP, teren działania, od kiedy działasz, sprzęt",
      "Formularz kontaktowy dla tych, którzy piszą po godzinach",
      "Strona działa na telefonie tak samo dobrze jak na komputerze",
      "Tytuły, opisy i dane firmy zapisane w kodzie pod Google (JSON-LD)",
      "Sitemap i zgłoszenie strony do Google Search Console",
      "Publikacja pod Twoją domeną, z certyfikatem SSL",
    ],

    proof: {
      title: "Zrobione u klienta z tej branży",
      body: "DK-BUD Damian Kasiarz ze Stargardu — usługi koparką i brukarstwo. Strona z galerią realizacji, rozpisanymi usługami i formularzem kontaktowym, wdrożona pod domeną klienta we wrześniu 2026. Referencje podpisane przez właściciela są do wglądu na naszej stronie.",
      links: [
        { label: "Podpisane referencje", href: "/referencje" },
        { label: "dk-bud.com.pl", href: "https://dk-bud.com.pl" },
      ],
    },

    steps: [
      {
        n: "01",
        title: "Rozmowa",
        body: "Kwadrans przez telefon. Pytam, jakie roboty bierzesz, gdzie jeździsz, kto do Ciebie dzwoni i czego najczęściej szukają. Bez zobowiązań i bez zaliczki.",
      },
      {
        n: "02",
        title: "Zdjęcia",
        body: "Przesyłasz, co masz na telefonie — nawet kilkadziesiąt zdjęć z budów. Wybieram i przygotowuję te, które najlepiej pokazują poziom roboty.",
      },
      {
        n: "03",
        title: "Projekt w 48 godzin",
        body: "Dostajesz działającą stronę pod tymczasowym adresem. Klikasz, oglądasz na telefonie, mówisz co zmienić. Nadal nic nie płacisz.",
      },
      {
        n: "04",
        title: "Poprawki i publikacja",
        body: "Nanoszę uwagi, kupujemy domenę i strona idzie na żywo. Zgłaszam ją do Google i przekazuję dostępy — strona jest Twoja.",
      },
    ],

    price: [
      "1500 zł jednorazowo — płatne po akceptacji projektu, strona i kod są Twoje.",
      "Albo 199 zł miesięcznie, jeśli wolisz rozłożyć koszt. W abonamencie mieści się hosting, SSL i drobne zmiany.",
      "Domena to koszt około 60–100 zł rocznie, płatny u rejestratora, nie do nas.",
      "Opieka nad wizytówką Google to osobna usługa: 299 zł miesięcznie, minimum trzy miesiące.",
    ],

    faq: [
      {
        q: "Mam tylko zdjęcia z telefonu, słabej jakości. To wystarczy?",
        a: "Tak, i tak wygląda to u większości firm budowlanych. Zdjęcie skończonego podjazdu zrobione telefonem w słońcu działa na klienta lepiej niż wystudiowana grafika z banku zdjęć, bo widać, że to Wasza robota. Przygotowuję je technicznie: kadruję, zmniejszam ciężar pliku, układam w galerii. Jeśli zdjęcie jest naprawdę nie do uratowania, mówię to wprost, zamiast wstawiać je na siłę.",
      },
      {
        q: "Czy po zrobieniu strony będę pierwszy w Google na „firma budowlana + moje miasto”?",
        a: "Nie obiecuję żadnej pozycji w Google i nie zrobi tego uczciwie nikt inny — o kolejności decyduje Google, nie wykonawca strony. Mogę powiedzieć, co robię: strona dostaje poprawne tytuły i opisy, dane firmy zapisane w kodzie, sitemap i zgłoszenie do Google Search Console. To jest warunek, żeby Google w ogóle mógł Cię pokazać. Na lokalne zapytania zwykle szybciej pracuje wizytówka w Mapach Google niż sama strona i o tym też powiem wprost.",
      },
      {
        q: "Działam w całej Polsce, a Wy jesteście pod Warszawą. To problem?",
        a: "Nie. Cała robota idzie przez telefon i e-mail — rozmowa, zdjęcia, uwagi do projektu, przekazanie dostępów. Nie musimy się spotkać ani razu. Klientów mam z różnych stron kraju.",
      },
      {
        q: "Mam już stronę sprzed kilku lat. Przerobić ją czy zrobić nową?",
        a: "Zależy, co w niej jest. Jeśli treść i zdjęcia są dobre, a problem jest tylko w wyglądzie i działaniu na telefonie, często taniej wyjdzie zrobić nową stronę na tej samej treści niż łatać starą. Prześlij adres, obejrzę i powiem, co bym z nią zrobił — nawet jeśli wyjdzie, że nic nie trzeba.",
      },
      {
        q: "Sezon mam od wiosny do jesieni. Kiedy robić stronę?",
        a: "Zimą, czyli wtedy, kiedy masz na to czas i głowę. Strona potrzebuje kilku tygodni, zanim Google ją na dobre pozna, więc zrobiona w styczniu pracuje już od pierwszych ciepłych dni. Robiona w czerwcu wchodzi w sezon spóźniona.",
      },
      {
        q: "Co jeśli projekt mi się nie spodoba?",
        a: "Nie płacisz. Projekt dostajesz przed płatnością właśnie po to, żebyś mógł powiedzieć „nie”. Jeśli coś jest nie tak, poprawiam. Jeśli po poprawkach nadal nie jest to, czego chciałeś, rozchodzimy się i nie jesteś mi nic winien.",
      },
    ],
  },
};
