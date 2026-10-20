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
  hydraulik: {
    slug: "hydraulik",
    h1: "Strona internetowa dla hydraulika",
    promise:
      "Projekt zobaczysz w 48 godzin i płacisz dopiero wtedy, gdy Ci się spodoba. Pracuję z instalatorami z całej Polski — zdalnie, bez dojazdów.",
    metaTitle: "Strona internetowa dla hydraulika — projekt w 48 h | SCS Web",
    metaDescription:
      "Strona dla hydraulika: rozpisane usługi, awarie 24 h, teren dojazdu i klikalny telefon. Projekt w 48 godzin, płacisz po akceptacji. 1500 zł jednorazowo lub 199 zł miesięcznie. Cała Polska.",
    listName: "Hydraulicy i instalatorzy",
    listBenefit:
      "Awarie, usługi rozpisane po nazwie i teren dojazdu — strona pod telefon, który ma zadzwonić w ciągu minuty.",

    czegoPotrzebuje: [
      {
        title: "Awaria to zupełnie inny klient niż remont",
        body: "Kiedy komuś leje się woda z rury, nie czyta oferty. Wpisuje w telefon „hydraulik awaria” i dzwoni pod pierwszy numer, który widzi bez przewijania. Taka osoba potrzebuje trzech informacji na pierwszym ekranie: że jeździsz do awarii, w jakich godzinach i jaki masz numer. Klient planujący wymianę instalacji przeczyta znacznie więcej, ale on ma czas. Strona musi obsłużyć obu, a pierwszy ekran należy do tego pierwszego.",
      },
      {
        title: "Usługi nazwane tak, jak szuka ich klient",
        body: "Nikt nie wpisuje w Google „usługi hydrauliczne”. Wpisuje wymianę grzejnika, podłączenie pralki, udrożnienie kanalizacji, montaż kabiny prysznicowej, wymianę baterii, przeróbkę instalacji w łazience, montaż pompy ciepła, przegląd kotła. Jeśli u Ciebie jest jeden akapit zbiorczy, nie masz jak pokazać się na żadne z tych zapytań. Rozbijam to na listę konkretnych robót.",
      },
      {
        title: "Teren dojazdu i kiedy odbierasz",
        body: "Dwa zdania, które ucinają najwięcej niepotrzebnych telefonów i najwięcej niepotrzebnych rozczarowań: dokąd dojeżdżasz i w jakich godzinach odbierasz. Jeśli bierzesz zgłoszenia w nocy albo w weekendy, to jest informacja, za którą ludzie są gotowi zapłacić więcej — musi być widoczna, a nie schowana w zakładce kontakt.",
      },
      {
        title: "Zdjęcia skończonych robót, nawet zwykłych",
        body: "Wymieniony grzejnik, nowa łazienka, równo poprowadzone rury w kotłowni — to wystarczy. Klient, który wpuszcza obcego człowieka do mieszkania, chce najpierw zobaczyć, że po Twojej robocie jest czysto i prosto. Zdjęcia z telefonu są w zupełności dobre; przygotowuję je tak, żeby nie spowalniały strony.",
      },
      {
        title: "Jak liczysz pieniądze",
        body: "Nie chodzi o cennik co do złotówki, bo każda awaria jest inna. Chodzi o to, żeby klient wiedział, czego się spodziewać: czy jest opłata za dojazd, czy wycena jest bezpłatna, czy liczysz za godzinę, czy za robotę. Jedno uczciwe zdanie na ten temat buduje więcej zaufania niż cała strona o profesjonalizmie.",
      },
    ],

    getList: [
      "Pierwszy ekran pod awarię: czym się zajmujesz, dokąd jeździsz, klikalny numer",
      "Lista usług rozbita na konkretne roboty, nazwane językiem klienta",
      "Teren dojazdu i godziny, w których odbierasz telefon",
      "Galeria skończonych robót — zdjęcia z Twojego telefonu",
      "Klikalny numer w nagłówku, przy usługach i na pasku na dole ekranu",
      "Formularz dla tych, którzy piszą wieczorem zamiast dzwonić",
      "Strona działa na telefonie tak samo dobrze jak na komputerze",
      "Tytuły, opisy i dane firmy zapisane w kodzie pod Google (JSON-LD)",
      "Sitemap i zgłoszenie strony do Google Search Console",
      "Publikacja pod Twoją domeną, z certyfikatem SSL",
    ],

    proof: {
      title: "Zobacz, jak taka strona wygląda",
      body: "Przygotowałem kompletny projekt pokazowy dla tej branży — Hydro Perfekt. To nie jest strona istniejącej firmy, tylko przykład zrobiony od zera, żeby było widać układ, rozpisane usługi i sposób prowadzenia klienta do telefonu. Możesz go obejrzeć na komputerze i na telefonie, zanim cokolwiek zamówisz.",
      links: [
        { label: "Projekt pokazowy: Hydro Perfekt", href: "/demo/hydro-perfekt" },
        { label: "Podpisane referencje klientów", href: "/referencje" },
      ],
    },

    steps: [
      {
        n: "01",
        title: "Rozmowa",
        body: "Kwadrans przez telefon. Pytam, jakie roboty bierzesz, czy jeździsz do awarii, dokąd dojeżdżasz i kto najczęściej do Ciebie dzwoni. Bez zobowiązań i bez zaliczki.",
      },
      {
        n: "02",
        title: "Materiały",
        body: "Przesyłasz zdjęcia skończonych robót z telefonu i mówisz, co wymieniasz najczęściej. Resztę treści piszę ja i dajesz mi znać, co poprawić.",
      },
      {
        n: "03",
        title: "Projekt w 48 godzin",
        body: "Dostajesz działającą stronę pod tymczasowym adresem. Klikasz, sprawdzasz na telefonie, mówisz co zmienić. Nadal nic nie płacisz.",
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
        q: "Mam wizytówkę w Google i stamtąd mam telefony. Po co mi jeszcze strona?",
        a: "Wizytówka i strona robią dwie różne rzeczy. Wizytówka wygrywa telefony „tu i teraz”, kiedy ktoś szuka hydraulika w okolicy. Strona jest tym, co ten ktoś otwiera, zanim zadzwoni — i tym, co pokazujesz klientowi na większą robotę, gdzie decyzja zapada wolniej. Dodatkowo strona podpięta do wizytówki poprawia jej wiarygodność. Jeśli masz budżet tylko na jedno, powiem wprost: zacznij od wizytówki i zajmijmy się nią porządnie.",
      },
      {
        q: "Czy będę pierwszy w Google na „hydraulik + moje miasto”?",
        a: "Nie obiecuję żadnej pozycji i nie zrobi tego uczciwie nikt inny — o kolejności decyduje Google, nie wykonawca strony. Mogę powiedzieć, co robię: poprawne tytuły i opisy, dane firmy zapisane w kodzie, sitemap i zgłoszenie do Google Search Console. To warunek, żeby Google w ogóle mógł Cię pokazać. Na zapytania lokalne zwykle szybciej pracuje wizytówka w Mapach niż sama strona i o tym też mówię wprost.",
      },
      {
        q: "Nie mam żadnych zdjęć swoich robót. Da się zrobić stronę bez nich?",
        a: "Da się, ale szkoda. Wystarczą trzy albo cztery zdjęcia telefonem przy najbliższej robocie: grzejnik, kotłownia, skończona łazienka. Jeśli naprawdę nic nie masz, robię stronę na samej treści i zostawiam galerię przygotowaną — dorzucisz zdjęcia później, a ja je wstawię.",
      },
      {
        q: "Pracuję sam. Czy strona nie sprawi, że będę wyglądał na większą firmę, niż jestem?",
        a: "Nie piszę, że masz zespół, jeśli go nie masz. Jednoosobowa działalność ma swoje atuty — klient wie, kto przyjedzie, i rozmawia z tym samym człowiekiem od telefonu do faktury. To da się pokazać uczciwie i działa lepiej niż udawanie korporacji.",
      },
      {
        q: "Co jeśli projekt mi się nie spodoba?",
        a: "Nie płacisz. Projekt dostajesz przed płatnością właśnie po to, żebyś mógł powiedzieć „nie”. Jeśli coś jest nie tak, poprawiam. Jeśli po poprawkach nadal nie jest to, czego chciałeś, rozchodzimy się i nie jesteś mi nic winien.",
      },
    ],
  },

  "warsztat-samochodowy": {
    slug: "warsztat-samochodowy",
    h1: "Strona internetowa dla warsztatu samochodowego",
    promise:
      "Projekt zobaczysz w 48 godzin i płacisz dopiero wtedy, gdy Ci się spodoba. Pracuję z warsztatami z całej Polski — zdalnie, bez dojazdów.",
    metaTitle: "Strona internetowa dla warsztatu samochodowego — projekt w 48 h | SCS Web",
    metaDescription:
      "Strona dla warsztatu: zakres napraw, specjalizacja, godziny, dojazd i klikalny telefon. Projekt w 48 godzin, płacisz po akceptacji. 1500 zł jednorazowo lub 199 zł miesięcznie. Cała Polska.",
    listName: "Warsztaty i serwisy samochodowe",
    listBenefit:
      "Zakres napraw, specjalizacja i godziny otwarcia — strona pod kierowcę, który szuka warsztatu na dziś.",

    czegoPotrzebuje: [
      {
        title: "Co dokładnie naprawiacie",
        body: "Kierowca nie szuka „warsztatu”. Szuka wymiany rozrządu, naprawy skrzyni automatycznej, geometrii, klimatyzacji, diagnostyki komputerowej, wymiany sprzęgła, zawieszenia albo przeglądu przed kupnem auta. Każda z tych rzeczy to osobne zapytanie i osobna pozycja na stronie. Jeden akapit o kompleksowej obsłudze pojazdów nie pokazuje się na żadne z nich.",
      },
      {
        title: "Specjalizacja, jeśli ją masz",
        body: "Jeśli robicie głównie diesle, konkretne marki, auta dostawcze albo skrzynie automatyczne, to jest najważniejsza informacja na całej stronie. Klient z takim autem szuka właśnie kogoś, kto się na tym zna, i jest gotów dojechać dalej. Warsztat „od wszystkiego” konkuruje tylko ceną.",
      },
      {
        title: "Godziny, dojazd i jak zapisać auto",
        body: "Czy przyjmujecie bez zapisu? Jak daleko trzeba czekać na termin? Czy jest parking i czy można zostawić auto na noc? To są pytania, które kierowca zadaje przez telefon, a każde z nich zabiera Wam minutę przy warsztacie. Na stronie odpowiadają raz i na zawsze.",
      },
      {
        title: "Zdjęcia warsztatu, nie tylko aut",
        body: "Porządek na stanowisku, podnośnik, sprzęt diagnostyczny — to buduje zaufanie szybciej niż zdjęcia błyszczących samochodów z internetu. Klient oddaje komuś auto warte kilkadziesiąt tysięcy złotych i chce zobaczyć, gdzie je zostawia.",
      },
      {
        title: "Opinie i wizytówka w Mapach",
        body: "W tej branży opinie w Mapach Google ważą więcej niż w większości innych. Strona powinna prowadzić do wizytówki, a wizytówka do strony — razem pracują lepiej niż osobno. Pokazuję, jak to spiąć, nawet jeśli samą wizytówką zajmujesz się sam.",
      },
    ],

    getList: [
      "Zakres napraw rozbity na konkretne pozycje, nazwane językiem kierowcy",
      "Wyróżniona specjalizacja, jeśli warsztat ją ma",
      "Godziny otwarcia, adres z mapą i informacja o zapisach",
      "Klikalny numer w nagłówku, przy usługach i na pasku na dole ekranu",
      "Galeria warsztatu i wykonanych napraw — zdjęcia z telefonu wystarczą",
      "Formularz zgłoszenia auta dla tych, którzy wolą napisać",
      "Odnośnik do wizytówki Google i opinii",
      "Strona działa na telefonie tak samo dobrze jak na komputerze",
      "Tytuły, opisy i dane firmy zapisane w kodzie pod Google (JSON-LD)",
      "Sitemap, zgłoszenie do Google Search Console, publikacja pod Twoją domeną z SSL",
    ],

    proof: {
      title: "Zobacz, jak taka strona wygląda",
      body: "Przygotowałem kompletny projekt pokazowy dla tej branży — Autoserwis Kowalski. To nie jest strona istniejącej firmy, tylko przykład zrobiony od zera, żeby było widać układ, rozpisany zakres napraw i sposób prowadzenia klienta do telefonu. Obejrzyj go na telefonie, bo większość kierowców właśnie tak będzie Cię szukać.",
      links: [
        { label: "Projekt pokazowy: Autoserwis Kowalski", href: "/demo/autoserwis-kowalski" },
        { label: "Podpisane referencje klientów", href: "/referencje" },
      ],
    },

    steps: [
      {
        n: "01",
        title: "Rozmowa",
        body: "Kwadrans przez telefon. Pytam, co naprawiacie najczęściej, czy macie specjalizację, jak wyglądają zapisy i skąd przyjeżdżają klienci. Bez zobowiązań i bez zaliczki.",
      },
      {
        n: "02",
        title: "Materiały",
        body: "Przesyłasz zdjęcia warsztatu i kilku napraw oraz godziny otwarcia. Resztę treści piszę ja i dajesz mi znać, co poprawić.",
      },
      {
        n: "03",
        title: "Projekt w 48 godzin",
        body: "Dostajesz działającą stronę pod tymczasowym adresem. Klikasz, sprawdzasz na telefonie, mówisz co zmienić. Nadal nic nie płacisz.",
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
        q: "Mam komplet terminów na dwa tygodnie w przód. Po co mi strona?",
        a: "Wtedy strona służy do czegoś innego niż łapanie każdego zgłoszenia: do wybierania klientów. Jeśli wprost napiszesz, w czym się specjalizujesz i czego nie robisz, zaczną dzwonić ludzie z robotami, które lubisz i na których więcej zarabiasz, a przestaną ci z pytaniem o wymianę żarówki. Przy pełnym grafiku to jest większa wartość niż kolejny telefon.",
      },
      {
        q: "Czy opinie z Google da się pokazać na stronie?",
        a: "Można zrobić odnośnik do wizytówki i pokazać, ile masz opinii oraz jaką średnią. Nie przepisuję natomiast cudzych opinii do kodu strony jako znaczników ocen — Google od 2019 roku nie pokazuje gwiazdek dla opinii o firmie umieszczonych na jej własnej stronie, a próby obejścia tego kończą się błędem w Search Console. Wolę zrobić to uczciwie i skutecznie.",
      },
      {
        q: "Czy potrzebuję cennika napraw na stronie?",
        a: "Pełnego cennika zwykle nie, bo w warsztacie prawie każda pozycja zależy od auta. Warto za to podać kilka punktów odniesienia: ile kosztuje diagnostyka komputerowa, czy jest płatna, ile kosztuje przegląd przed zakupem auta. Klient chce wiedzieć, czy w ogóle gra w tej samej lidze.",
      },
      {
        q: "Konkurencja obok ma stronę zrobioną pewnie za 5 tysięcy. Jak to wygląda przy mojej?",
        a: "Prześlij mi jej adres przed zamówieniem — obejrzę i powiem wprost, co w niej działa, a co nie. Często okazuje się, że droga strona jest ładna, ale wolno się otwiera na telefonie i nie da się z niej zadzwonić jednym kciukiem. To są rzeczy, które realnie decydują o telefonie, a nie budżet projektu.",
      },
      {
        q: "Co jeśli projekt mi się nie spodoba?",
        a: "Nie płacisz. Projekt dostajesz przed płatnością właśnie po to, żebyś mógł powiedzieć „nie”. Jeśli coś jest nie tak, poprawiam. Jeśli po poprawkach nadal nie jest to, czego chciałeś, rozchodzimy się i nie jesteś mi nic winien.",
      },
    ],
  },

  dekarz: {
    slug: "dekarz",
    h1: "Strona internetowa dla dekarza i firmy dekarskiej",
    promise:
      "Projekt zobaczysz w 48 godzin i płacisz dopiero wtedy, gdy Ci się spodoba. Pracuję z firmami dekarskimi z całej Polski — zdalnie, bez dojazdów.",
    metaTitle: "Strona internetowa dla dekarza — projekt w 48 h | SCS Web",
    metaDescription:
      "Strona dla firmy dekarskiej: galeria dachów, rodzaje pokryć, teren działania i klikalny telefon. Projekt w 48 godzin, płacisz po akceptacji. 1500 zł jednorazowo lub 199 zł miesięcznie.",
    listName: "Dekarze i firmy dekarskie",
    listBenefit:
      "Galeria dachów, rodzaje pokryć i teren działania — strona pod inwestora, który porównuje wykonawców.",

    czegoPotrzebuje: [
      {
        title: "Galeria dachów to jest ta strona",
        body: "Dach ogląda się z daleka i ocenia w sekundę. Inwestor, zanim zadzwoni, chce zobaczyć kilkanaście skończonych dachów i sprawdzić, czy kalenice są równe, obróbki zrobione porządnie, a okna połaciowe wpasowane. Żaden opis tego nie zastąpi. Galeria jest najważniejszą częścią strony, reszta jest dookoła niej.",
      },
      {
        title: "Rodzaje pokryć wymienione z nazwy",
        body: "Blachodachówka, blacha na rąbek stojący, dachówka ceramiczna, dachówka cementowa, papa termozgrzewalna, gont bitumiczny, membrana PVC. Inwestor zwykle wie, czego chce, i szuka wykonawcy do konkretnego pokrycia. Jeśli na stronie jest tylko słowo „dachy”, nie ma jak Cię znaleźć ani jak sprawdzić, czy to robisz.",
      },
      {
        title: "Remont dachu to inny klient niż nowy dach",
        body: "Przecieka i trzeba naprawić dziś — to jeden rodzaj telefonu. Buduję dom i szukam ekipy na wiosnę — zupełnie inny. Pierwszy potrzebuje numeru na pierwszym ekranie, drugi przeczyta całą stronę i porówna Cię z trzema innymi firmami. Obie ścieżki da się obsłużyć na jednej stronie, jeśli się je rozdzieli zamiast mieszać.",
      },
      {
        title: "Praca na wysokości, czyli czego sprawdza inwestor",
        body: "Ubezpieczenie OC firmy, uprawnienia do pracy na wysokości, od kiedy działacie, czy macie własne rusztowanie i podnośnik, jaką dajecie gwarancję na robociznę. Przy dachu stawka jest wysoka, więc te cztery–pięć linijek potrafi zdecydować o zleceniu bardziej niż zdjęcia.",
      },
      {
        title: "Teren i sezon",
        body: "Jak daleko jeździcie i na kiedy macie wolne terminy. W dekarstwie grafik wypełnia się na miesiące do przodu, a inwestor planujący budowę naprawdę chce to wiedzieć, zanim zadzwoni. Napisanie tego wprost oszczędza czas obu stronom.",
      },
    ],

    getList: [
      "Galeria skończonych dachów — zdjęcia z Twojego telefonu, przygotowane tak, żeby strona szybko się otwierała",
      "Rodzaje pokryć wymienione z nazwy, każdy jako osobna pozycja",
      "Rozdzielone ścieżki: naprawa i przeciek kontra nowy dach",
      "Dane firmy: NIP, ubezpieczenie, uprawnienia, sprzęt, gwarancja",
      "Teren działania i informacja o terminach",
      "Klikalny numer telefonu w nagłówku, przy usługach i na pasku na dole ekranu",
      "Formularz zapytania o wycenę dachu",
      "Strona działa na telefonie tak samo dobrze jak na komputerze",
      "Tytuły, opisy i dane firmy zapisane w kodzie pod Google (JSON-LD)",
      "Sitemap, zgłoszenie do Google Search Console, publikacja pod Twoją domeną z SSL",
    ],

    proof: {
      title: "Zobacz, jak taka strona wygląda",
      body: "Przygotowałem kompletny projekt pokazowy dla tej branży — DachPol. To nie jest strona istniejącej firmy, tylko przykład zrobiony od zera: galeria, rozpisane pokrycia i droga od zdjęcia do telefonu. Obok masz podpisane referencje od klientów, dla których robiłem strony naprawdę.",
      links: [
        { label: "Projekt pokazowy: DachPol", href: "/demo/dachpol" },
        { label: "Podpisane referencje klientów", href: "/referencje" },
      ],
    },

    steps: [
      {
        n: "01",
        title: "Rozmowa",
        body: "Kwadrans przez telefon. Pytam, jakie pokrycia robicie, czy bierzecie naprawy, jak daleko jeździcie i kto do Was dzwoni. Bez zobowiązań i bez zaliczki.",
      },
      {
        n: "02",
        title: "Zdjęcia",
        body: "Przesyłasz, co masz na telefonie — nawet kilkadziesiąt zdjęć z dachów. Wybieram i przygotowuję te, które najlepiej pokazują poziom roboty.",
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
        q: "Mam zapełniony grafik na cały sezon. Po co mi strona?",
        a: "Po to, żeby następny sezon wypełnić lepszymi zleceniami, a nie pierwszymi, które się trafią. Firma z galerią skończonych dachów rozmawia z inwestorem z zupełnie innej pozycji niż firma, o której nie da się niczego sprawdzić — i rzadziej musi schodzić z ceny. Dach robiony zimą trafia na stronę i pracuje na wiosnę.",
      },
      {
        q: "Zdjęcia mam tylko z telefonu, często pod słońce. Wystarczą?",
        a: "Tak, i tak wygląda to u większości firm dekarskich. Zdjęcie skończonego dachu zrobione telefonem działa lepiej niż wystudiowana grafika z banku zdjęć, bo widać, że to Wasza robota. Kadruję je, zmniejszam ciężar pliku i układam w galerii. Jeśli któreś jest naprawdę nie do uratowania, mówię to wprost, zamiast wstawiać je na siłę.",
      },
      {
        q: "Czy warto wrzucać zdjęcia z drona?",
        a: "Jeśli je macie — bardzo. Dach z góry pokazuje równość połaci i jakość obróbek tak, jak nie pokaże żadne zdjęcie z ziemi. Ale to dodatek, nie warunek: strona ma działać na tym, co macie dzisiaj w telefonie.",
      },
      {
        q: "Czy po zrobieniu strony będę pierwszy w Google na „dekarz + moje miasto”?",
        a: "Nie obiecuję żadnej pozycji i nie zrobi tego uczciwie nikt inny — o kolejności decyduje Google, nie wykonawca strony. Mogę powiedzieć, co robię: poprawne tytuły i opisy, dane firmy zapisane w kodzie, sitemap i zgłoszenie do Google Search Console. To warunek, żeby Google w ogóle mógł Cię pokazać. Na zapytania lokalne zwykle szybciej pracuje wizytówka w Mapach niż sama strona.",
      },
      {
        q: "Co jeśli projekt mi się nie spodoba?",
        a: "Nie płacisz. Projekt dostajesz przed płatnością właśnie po to, żebyś mógł powiedzieć „nie”. Jeśli coś jest nie tak, poprawiam. Jeśli po poprawkach nadal nie jest to, czego chciałeś, rozchodzimy się i nie jesteś mi nic winien.",
      },
    ],
  },

  elektryk: {
    slug: "elektryk",
    h1: "Strona internetowa dla elektryka",
    promise:
      "Projekt zobaczysz w 48 godzin i płacisz dopiero wtedy, gdy Ci się spodoba. Pracuję z elektrykami z całej Polski — zdalnie, bez dojazdów.",
    metaTitle: "Strona internetowa dla elektryka — projekt w 48 h | SCS Web",
    metaDescription:
      "Strona dla elektryka: rozpisane usługi, uprawnienia SEP, pomiary i protokoły, teren dojazdu, klikalny telefon. Projekt w 48 godzin, płacisz po akceptacji. 1500 zł lub 199 zł miesięcznie.",
    listName: "Elektrycy",
    listBenefit:
      "Uprawnienia, pomiary z protokołem i rozpisane usługi — strona pod klienta, który musi sprawdzić, komu oddaje instalację.",

    czegoPotrzebuje: [
      {
        title: "Uprawnienia napisane wprost",
        body: "Przy elektryce klient sprawdza nie tylko, czy potrafisz, ale czy wolno Ci. Uprawnienia SEP i ich zakres, uprawnienia budowlane jeśli je masz, ubezpieczenie OC — to jest pierwsza rzecz, której szuka inwestor i każdy, kto odbiera budowę. Trzy linijki na stronie, a zamykają temat, który inaczej ciągnie się przez dwa telefony.",
      },
      {
        title: "Pomiary i protokoły to osobna usługa",
        body: "Pomiary instalacji, protokół odbiorowy, pomiary okresowe do ubezpieczenia albo do odbioru budynku — to są zapytania, które przychodzą od zupełnie innych ludzi niż „wymiana gniazdka”. Często od firm i zarządców, czyli od klientów, którzy wracają. Jeśli to robisz, zasługuje na własne miejsce na stronie, a nie na myślnik w liście usług.",
      },
      {
        title: "Usługi nazwane tak, jak szuka ich klient",
        body: "Wymiana instalacji w mieszkaniu, podłączenie płyty indukcyjnej, montaż ładowarki do auta elektrycznego, rozdzielnica, oświetlenie LED, instalacja odgromowa, fotowoltaika, inteligentny dom, usuwanie awarii. Każda z tych rzeczy to osobne zapytanie. Zbiorcze „usługi elektryczne” nie pokazuje się na żadne z nich.",
      },
      {
        title: "Awaria kontra planowana robota",
        body: "Zwarcie i brak prądu to telefon natychmiastowy — taki klient potrzebuje numeru na pierwszym ekranie i informacji, czy jeździsz po godzinach. Wymiana instalacji w remontowanym mieszkaniu to decyzja na tydzień i zupełnie inna treść. Strona musi obsłużyć obu, a to się robi układem, nie dłuższym tekstem.",
      },
      {
        title: "Teren dojazdu i czy bierzesz firmy",
        body: "Dokąd dojeżdżasz i czy obsługujesz tylko mieszkania, czy też firmy, warsztaty i obiekty. Klient firmowy od razu sprawdza, czy jesteś w stanie wystawić fakturę i wejść na obiekt z dokumentami — jedno zdanie o tym otwiera zupełnie inny rodzaj zleceń.",
      },
    ],

    getList: [
      "Uprawnienia SEP i ich zakres, ubezpieczenie, dane firmy do weryfikacji",
      "Pomiary i protokoły jako osobna, wyróżniona usługa",
      "Lista usług rozbita na konkretne roboty, nazwane językiem klienta",
      "Rozdzielone ścieżki: awaria kontra robota planowana",
      "Teren dojazdu i informacja, czy obsługujesz firmy",
      "Klikalny numer w nagłówku, przy usługach i na pasku na dole ekranu",
      "Formularz zapytania dla tych, którzy wolą napisać",
      "Strona działa na telefonie tak samo dobrze jak na komputerze",
      "Tytuły, opisy i dane firmy zapisane w kodzie pod Google (JSON-LD)",
      "Sitemap, zgłoszenie do Google Search Console, publikacja pod Twoją domeną z SSL",
    ],

    proof: {
      title: "Zrobione u klientów",
      body: "DK-BUD Damian Kasiarz ze Stargardu — usługi koparką i brukarstwo, strona z galerią realizacji i formularzem kontaktowym, wdrożona pod domeną klienta we wrześniu 2026. SP Trans spod Tarczyna — katalog około dziewięćdziesięciu pojazdów z wyszukiwarką. Obie firmy podpisały referencje, które możesz przeczytać w całości.",
      links: [
        { label: "Podpisane referencje", href: "/referencje" },
        { label: "dk-bud.com.pl", href: "https://dk-bud.com.pl" },
      ],
    },

    steps: [
      {
        n: "01",
        title: "Rozmowa",
        body: "Kwadrans przez telefon. Pytam, jakie roboty bierzesz, czy robisz pomiary, jakie masz uprawnienia i dokąd dojeżdżasz. Bez zobowiązań i bez zaliczki.",
      },
      {
        n: "02",
        title: "Materiały",
        body: "Przesyłasz zdjęcia z robót i dane firmy. Resztę treści piszę ja i dajesz mi znać, co poprawić.",
      },
      {
        n: "03",
        title: "Projekt w 48 godzin",
        body: "Dostajesz działającą stronę pod tymczasowym adresem. Klikasz, sprawdzasz na telefonie, mówisz co zmienić. Nadal nic nie płacisz.",
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
        q: "Mam robotę z polecenia i nie szukam klientów. Po co mi strona?",
        a: "Polecenie też kończy się sprawdzeniem. Ktoś dostaje Twój numer od sąsiada, wpisuje nazwisko albo nazwę firmy w telefon i patrzy, co znajdzie. Jeśli nie ma nic, polecenie traci połowę siły. Strona to w tym wypadku nie reklama, tylko potwierdzenie, że firma istnieje i wygląda poważnie.",
      },
      {
        q: "Czy na stronie trzeba podawać numer uprawnień SEP?",
        a: "Nie trzeba, ale warto napisać, jakie uprawnienia masz i w jakim zakresie. Sam numer świadectwa to dla większości klientów ciąg znaków bez znaczenia; informacja „uprawnienia SEP do 1 kV, pomiary i protokoły odbiorowe” mówi im dokładnie to, co chcą wiedzieć. Jeśli wolisz podać numer, podajemy.",
      },
      {
        q: "Robię też fotowoltaikę. Wrzucać to na tę samą stronę?",
        a: "Na tę samą stronę tak, ale jako wyraźnie osobną sekcję, bo to inny klient i inna decyzja. Jeśli fotowoltaika jest u Ciebie głównym źródłem przychodu, rozmawiamy o osobnej stronie pod nią — powiem wprost, kiedy to się opłaca, a kiedy wystarczy sekcja.",
      },
      {
        q: "Czy będę pierwszy w Google na „elektryk + moje miasto”?",
        a: "Nie obiecuję żadnej pozycji i nie zrobi tego uczciwie nikt inny — o kolejności decyduje Google, nie wykonawca strony. Mogę powiedzieć, co robię: poprawne tytuły i opisy, dane firmy zapisane w kodzie, sitemap i zgłoszenie do Google Search Console. Na zapytania lokalne zwykle szybciej pracuje wizytówka w Mapach niż sama strona i o tym też mówię wprost.",
      },
      {
        q: "Co jeśli projekt mi się nie spodoba?",
        a: "Nie płacisz. Projekt dostajesz przed płatnością właśnie po to, żebyś mógł powiedzieć „nie”. Jeśli coś jest nie tak, poprawiam. Jeśli po poprawkach nadal nie jest to, czego chciałeś, rozchodzimy się i nie jesteś mi nic winien.",
      },
    ],
  },
};
