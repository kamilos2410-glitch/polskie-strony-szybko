export type Step = { n: string; title: string; body: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  h1: string;
  promise: string;
  metaTitle: string;
  metaDescription: string;
  whatIs: string[];
  forWhom: string[];
  getList: string[];
  duration: string[];
  steps: Step[];
  priceOnce: string[];
  priceRecurring: string[];
  notes?: string[];
  faq: Faq[];
};

export const SERVICES: Record<string, Service> = {
  "strona-internetowa": {
    slug: "strona-internetowa",
    h1: "Strona internetowa dla firmy — gotowa w 48 godzin",
    promise:
      "Projekt Twojej strony zobaczysz w 48 godzin i płacisz dopiero wtedy, gdy Ci się spodoba.",
    metaTitle: "Strona internetowa dla firmy w 48 h — SCS Web",
    metaDescription:
      "Strona internetowa dla lokalnej firmy w Polsce. Darmowy projekt w 48 godzin, publikacja pod Twoją domeną, cena 1500 zł jednorazowo lub 199 zł miesięcznie.",
    whatIs: [
      "To Twoja wizytówka w internecie — miejsce, do którego trafia klient, gdy szuka fachowca w Twojej okolicy i chce sprawdzić, czy warto zadzwonić.",
      "Nie dostajesz szablonu z gotowej listy. Projektuję stronę od zera pod Twoją firmę: Twoje usługi, Twój teren działania, Twoi klienci. Wszystko napisane prostym językiem, bez technicznego żargonu.",
    ],
    forWhom: [
      "Hydraulik, elektryk, warsztat samochodowy, dekarz, stolarz, firma remontowa.",
      "Każdy, kto nie ma jeszcze strony albo ma stronę przestarzałą, która źle wygląda na telefonie.",
    ],
    getList: [
      "Projekt strony zanim zapłacisz — najpierw oglądasz, potem decydujesz",
      "Strona zaprojektowana od zera pod Twoją firmę, nie szablon",
      "Działa na telefonie tak samo dobrze jak na komputerze",
      "Formularz kontaktowy i klikalny numer telefonu",
      "Dane firmy zapisane w kodzie pod Google — tytuły, opisy, JSON-LD",
      "Sitemap i zgłoszenie strony do Google Search Console",
      "Publikacja pod Twoją własną domeną",
      "SSL, czyli kłódka przy adresie strony — w cenie",
    ],
    duration: [
      "Projekt demo: 48 godzin od naszej rozmowy.",
      "Publikacja pod Twoją domeną: 48 godzin od akceptacji projektu.",
    ],
    steps: [
      {
        n: "01",
        title: "Rozmowa",
        body: "Opowiadasz o firmie: co robisz, gdzie działasz, po co ludzie do Ciebie dzwonią. To zwykle 15 minut przez telefon.",
      },
      {
        n: "02",
        title: "Darmowe demo",
        body: "W 48 godzin dostajesz link do działającej strony. Nie makiety w PDF — prawdziwej witryny, którą możesz otworzyć na telefonie.",
      },
      {
        n: "03",
        title: "Poprawki i akceptacja",
        body: "Mówisz, co zmienić. Poprawiam. Płacisz dopiero wtedy, gdy strona Ci się podoba.",
      },
      {
        n: "04",
        title: "Publikacja",
        body: "Rejestruję domenę na Twoje dane, publikuję stronę i zgłaszam ją do Google Search Console.",
      },
    ],
    priceOnce: [
      "1500 zł jednorazowo — strona jest Twoja na własność.",
      "Albo 199 zł miesięcznie: 0 zł na start, domena i hosting w cenie, drobne zmiany i opieka techniczna po mojej stronie.",
    ],
    priceRecurring: [
      "Przy zakupie jednorazowym za 1500 zł jedyny stały koszt to domena — ok. 100–150 zł rocznie, płacone rejestratorowi i zarejestrowane na Twoje dane.",
      "W wariancie 199 zł/mies. nie ma żadnych dodatkowych kosztów cyklicznych — domena i serwer są po mojej stronie.",
    ],
    faq: [
      {
        q: "Czy strona jest moja?",
        a: "Tak. Przy zakupie jednorazowym strona i domena są Twoją własnością — domenę rejestruję na Twoje dane, więc możesz ją w każdej chwili przenieść gdzie indziej.",
      },
      {
        q: "Co jeśli projekt mi się nie spodoba?",
        a: "Nic nie płacisz. Demo jest darmowe i całkowicie niezobowiązujące. Możesz zgłosić poprawki albo po prostu podziękować.",
      },
      {
        q: "Czy będę wysoko w Google?",
        a: "Uczciwie: strona jest technicznie przygotowana pod Google i zgłoszona do Search Console. Pierwsze efekty na frazy lokalne widać zwykle po 4–12 tygodniach, ale nikt nie może zagwarantować konkretnej pozycji. Nie sprzedaję pozycjonowania.",
      },
      {
        q: "Czy mogę później coś zmienić?",
        a: "Tak. W abonamencie drobne zmiany są w cenie. Przy zakupie jednorazowym wyceniam je indywidualnie i zawsze podaję cenę przed rozpoczęciem pracy.",
      },
    ],
  },

  "poczta-firmowa": {
    slug: "poczta-firmowa",
    h1: "Firmowy e-mail na Twojej domenie — koniec z adresem z gmaila",
    promise:
      "Adres biuro@twojafirma.pl skonfigurowany od A do Z, razem ze skrzynką na Twoim telefonie.",
    metaTitle: "Firmowy e-mail na domenie — wdrożenie 400 zł | SCS Web",
    metaDescription:
      "Firmowa poczta na własnej domenie dla lokalnej firmy: konfiguracja DNS, zabezpieczenia wysyłki, przeniesienie bez utraty maili. Wdrożenie 400 zł jednorazowo.",
    whatIs: [
      "Adres biuro@twojafirma.pl zamiast janek.hydraulik1985@gmail.com. To drobiazg, który buduje zaufanie — szczególnie wtedy, gdy wysyłasz wycenę albo fakturę.",
      "Klient, który dostaje ofertę z firmowego adresu, widzi firmę, a nie przypadkową osobę. Nic nie musisz konfigurować sam — robię wszystko i pokazuję, jak z tego korzystać.",
    ],
    forWhom: [
      "Firmy, które mają już własną domenę i chcą wreszcie porzucić prywatną skrzynkę.",
      "Firmy, które zamawiają u mnie stronę i chcą od razu mieć komplet: strona plus poczta.",
    ],
    getList: [
      "Dobór skrzynki pod Twoje realne potrzeby — bez przepłacania",
      "Pełna konfiguracja DNS domeny",
      "Poprawne ustawienie wysyłki, żeby maile nie wpadały do spamu",
      "Przeniesienie bez utraty poczty przychodzącej",
      "Skonfigurowanie skrzynki na Twoim telefonie i komputerze",
      "Krótka instrukcja obsługi napisana prostym językiem",
    ],
    duration: [
      "1 dzień roboczy mojej pracy.",
      "Do tego 24–48 godzin, zanim zmiana rozejdzie się po internecie. Tak działają domeny — nikt uczciwy nie obieca Ci tu jednej godziny.",
    ],
    steps: [
      {
        n: "01",
        title: "Sprawdzamy dostęp do domeny",
        body: "Zanim cokolwiek wycenię, sprawdzamy, czy masz dostęp do panelu domeny. Bez tego nie da się nic zmienić.",
      },
      { n: "02", title: "Dobieramy skrzynkę", body: "Wybieramy dostawcę i pakiet pod to, ile adresów i miejsca faktycznie potrzebujesz." },
      { n: "03", title: "Przygotowanie domeny", body: "Dzień wcześniej przygotowuję domenę do zmiany, żeby przepięcie przebiegło płynnie." },
      { n: "04", title: "Przepięcie poczty", body: "Przepinam pocztę tak, żeby żadna wiadomość przychodząca nie zginęła." },
      { n: "05", title: "Zabezpieczenia wysyłki", body: "Ustawiam wpisy odpowiadające za wiarygodność nadawcy, żeby Twoje maile trafiały do skrzynki odbiorczej, a nie do spamu." },
      { n: "06", title: "Konfiguracja i testy", body: "Konfiguruję skrzynkę na Twoich urządzeniach i testujemy wysyłkę oraz odbiór w obie strony." },
    ],
    priceOnce: ["400 zł jednorazowo za całe wdrożenie."],
    priceRecurring: [
      "Te koszty nie trafiają do mnie — płacisz je bezpośrednio dostawcy skrzynki.",
      "Sama skrzynka u dostawcy: od 49 zł rocznie.",
      "Albo ok. 31–38 zł miesięcznie w Google Workspace, jeśli chcesz do tego kalendarz i dysk.",
    ],
    faq: [
      {
        q: "Czy stracę stare maile?",
        a: "Nie. Przenosimy pocztę tak, żeby nic nie zginęło, a stara skrzynka zostaje aktywna do czasu, aż wszystko potwierdzimy.",
      },
      {
        q: "Dlaczego to trwa całą dobę?",
        a: "Zmiany w ustawieniach domeny rozchodzą się po serwerach na całym świecie i to zajmuje zwykle 24–48 godzin. Nie da się tego przyspieszyć.",
      },
      {
        q: "Czy mogę mieć kilka adresów?",
        a: "Tak, na przykład biuro@, kontakt@ i imienny adres dla pracownika. Liczba adresów wpływa tylko na koszt skrzynki u dostawcy.",
      },
      {
        q: "Co jeśli domenę mam u innej firmy?",
        a: "To nie problem, ale potrzebny jest dostęp do panelu domeny. Sprawdzamy to przed wyceną, żeby nie było niespodzianek.",
      },
    ],
  },

  "pakiet-start-google": {
    slug: "pakiet-start-google",
    h1: "Wizytówka Google i karty NFC do zbierania opinii",
    promise:
      "Uzupełniony profil firmy na mapie Google plus karty, którymi zadowolony klient wystawia opinię w kilka sekund.",
    metaTitle: "Wizytówka Google i karty NFC na opinie | SCS Web",
    metaDescription:
      "Założenie i optymalizacja wizytówki Google dla lokalnej firmy plus karty NFC do zbierania opinii. 400 zł, gdy masz już profil, 600 zł od zera.",
    whatIs: [
      "W wyszukiwaniu lokalnym mapka z firmami wyświetla się NAD zwykłymi wynikami. Dobrze uzupełniona wizytówka z opiniami to często pierwsze, co widzi klient — i to z niej dzwoni.",
      "Zajmuję się całym profilem: kategorie, usługi, opis, godziny, obszar działania, zdjęcia i podpięcie strony. Do tego dostajesz karty NFC, które ułatwiają klientowi wystawienie opinii.",
    ],
    forWhom: [
      "Fachowcy i firmy usługowe działające na konkretnym terenie: hydraulik, elektryk, warsztat, dekarz, firma remontowa.",
      "Firmy, które mają wizytówkę założoną dawno temu i nigdy jej nie uzupełniły.",
    ],
    getList: [
      "Wariant A — masz już wizytówkę, 400 zł: audyt i optymalizacja profilu",
      "Kategorie, pełna lista usług i opis z frazami lokalnymi",
      "Godziny otwarcia, obszar działania i zdjęcia",
      "Podpięcie strony internetowej do profilu",
      "Konfiguracja bezpośredniego linku do wystawienia opinii",
      "3 karty NFC i naklejka QR — zaprogramowane i gotowe do użycia",
      "Instrukcja, jak z tego korzystać na co dzień",
      "Wariant B — nie masz wizytówki, 600 zł: wszystko z wariantu A plus założenie profilu od zera i przeprowadzenie Cię przez weryfikację Google",
      "Dokupienie kart później: 150 zł za komplet (3 karty i naklejka)",
    ],
    duration: [
      "Wariant A: 2 dni robocze.",
      "Wariant B: 2 dni robocze plus weryfikacja po stronie Google, która trwa od kilku dni do 2 tygodni i wymaga Twojego udziału.",
    ],
    steps: [
      { n: "01", title: "Sprawdzenie profilu", body: "Ustalamy, czy Twoja firma ma już wizytówkę i kto ma do niej dostęp. Od tego zależy wariant." },
      { n: "02", title: "Dostęp jako menedżer", body: "Dodajesz mnie jako MENEDŻERA wizytówki, podając mój adres Gmail. Nigdy nie proszę o Twoje hasła, a profil zawsze zostaje Twoją własnością." },
      { n: "03", title: "Uzupełnienie profilu", body: "Kategorie, usługi, opis z frazami lokalnymi, godziny, obszar działania, zdjęcia i podpięcie strony." },
      { n: "04", title: "Karty NFC", body: "Programuję karty i naklejkę QR na bezpośredni link do opinii. Klient przykłada telefon do karty i od razu otwiera mu się okno wystawienia opinii — niczego nie musi szukać." },
      { n: "05", title: "Przekazanie i instrukcja", body: "Pokazuję, jak używać kart przy odbiorze zlecenia i jak odpowiadać na opinie." },
    ],
    priceOnce: [
      "Wariant A (masz wizytówkę): 400 zł jednorazowo.",
      "Wariant B (zakładamy od zera): 600 zł jednorazowo.",
      "Dokupienie kompletu kart później: 150 zł.",
    ],
    priceRecurring: ["Żadne. Wizytówka Google jest darmowa i nie ma tu opłat cyklicznych."],
    notes: [
      "Zgodnie z zasadami Google nie wolno nagradzać za opinie ani wybierać, kto ma je wystawić — karta ma tylko ułatwić zadowolonemu klientowi kliknięcie.",
      "Dostaję dostęp jako menedżer profilu. Nigdy nie proszę o hasła, a wizytówka pozostaje w 100% Twoja.",
    ],
    faq: [
      {
        q: "Skąd wiem, który wariant mnie dotyczy?",
        a: "Wystarczy, że wpiszesz nazwę firmy w Google. Jeśli po prawej stronie albo na mapie pokazuje się profil Twojej firmy — to wariant A. Jeśli nic nie ma, to wariant B. Mogę też sprawdzić to za Ciebie przez telefon.",
      },
      {
        q: "Czy muszę dawać hasło do Google?",
        a: "Nie. Dodajesz mnie jako menedżera profilu, podając mój adres Gmail. Hasła nigdy nie potrzebuję i nigdy o nie nie poproszę.",
      },
      {
        q: "Ile opinii to da?",
        a: "Uczciwie: nie obiecuję żadnej liczby. Karta usuwa tylko wymówkę „nie wiem, gdzie to kliknąć” — resztę robi Twoja praca i to, czy pamiętasz poprosić o opinię.",
      },
      {
        q: "Czy pozycjonujecie strony?",
        a: "Stron nie pozycjonuję. Wizytówką Google mogę się natomiast zajmować co miesiąc — to osobna usługa: pozycjonowanie wizytówki Google za 299 zł miesięcznie, bez obietnic konkretnego miejsca w wynikach.",
      },
    ],
  },

  "pozycjonowanie-wizytowki-google": {
    slug: "pozycjonowanie-wizytowki-google",
    h1: "Pozycjonowanie wizytówki Google — opieka nad profilem firmy co miesiąc",
    promise:
      "Co miesiąc prowadzę Twoją wizytówkę Google: wpisy, zdjęcia, odpowiedzi na opinie i pilnowanie danych. Na koniec miesiąca dostajesz raport z liczbami z Google.",
    metaTitle: "Pozycjonowanie wizytówki Google — 299 zł/mies. | SCS Web",
    metaDescription:
      "Pozycjonowanie i prowadzenie wizytówki Google dla lokalnej firmy: 4 wpisy miesięcznie, nowe zdjęcia, odpowiedzi na opinie i raport z Google. 299 zł miesięcznie, minimum 3 miesiące.",
    whatIs: [
      "Wizytówka Google (profil firmy w Mapach) to często pierwsze, co widzi klient szukający fachowca w okolicy. Google chętniej pokazuje profile, które są kompletne, aktualne i aktywne: mają świeże wpisy i zdjęcia, a na opinie ktoś odpowiada.",
      "Większość firm zakłada profil raz i o nim zapomina. W tej usłudze to ja pilnuję go co miesiąc — według stałej listy czynności, którą możesz rozliczyć. Płacisz za konkretną pracę, nie za obietnicę miejsca w wynikach.",
    ],
    forWhom: [
      "Firmy usługowe działające na konkretnym terenie: hydraulik, elektryk, warsztat, dekarz, firma remontowa, gabinet, salon.",
      "Firmy, które mają już wizytówkę, ale nie mają czasu jej prowadzić — nie dodają wpisów ani zdjęć i zostawiają opinie bez odpowiedzi.",
    ],
    getList: [
      "4 wpisy miesięcznie ze zdjęciem i przyciskiem „Zadzwoń teraz” albo „Więcej informacji”",
      "Do 5 nowych zdjęć miesięcznie z Twoich materiałów",
      "Odpowiedź na każdą nową opinię w ciągu 2 dni roboczych — odpowiedzi na opinie negatywne uzgadniam z Tobą przed publikacją",
      "Kontrola profilu 2 razy w miesiącu: czy Google albo ktoś obcy nie zmienił godzin, telefonu, adresu strony, i jakie zdjęcia dodali użytkownicy",
      "Do 3 zmian na Twoje zlecenie miesięcznie: godziny świąteczne, urlop, usługi, ceny, opis",
      "Raport miesięczny z liczbami z Google: wyświetlenia profilu, kliknięcia w telefon i w stronę, lista wykonanych czynności",
      "Dostęp jako menedżer profilu — bez Twojego hasła, wizytówka zostaje Twoja",
    ],
    duration: [
      "Umowa na minimum 3 miesiące. Pierwszy miesiąc to w dużej mierze porządki i pierwsze wpisy, a raport z trzeciego miesiąca to pierwszy, z którego da się coś sensownie odczytać.",
      "Na starcie zapisuję stan Twojego profilu z ostatnich 3 miesięcy — to punkt odniesienia dla wszystkich kolejnych raportów.",
      "Raport za każdy miesiąc dostajesz do 10. dnia następnego miesiąca.",
    ],
    steps: [
      { n: "01", title: "Sprawdzenie profilu", body: "Sprawdzam, czy Twoja wizytówka jest kompletna. Jeśli wymaga najpierw uporządkowania albo jej nie ma, zaczynamy od Pakietu Start Google." },
      { n: "02", title: "Dostęp jako menedżer", body: "Dodajesz mnie jako menedżera wizytówki. Nigdy nie proszę o hasło, a profil zawsze zostaje Twoją własnością." },
      { n: "03", title: "Punkt odniesienia", body: "Zapisuję liczby z Twojego profilu z ostatnich 3 miesięcy, zanim cokolwiek zmienię. Dzięki temu w raportach widać, co się zmieniło." },
      { n: "04", title: "Praca co miesiąc", body: "Wpisy, zdjęcia, odpowiedzi na opinie, kontrola danych i Twoje zlecenia — według stałej listy." },
      { n: "05", title: "Raport", body: "Co miesiąc dostajesz liczby z Google i licznik wykonanych czynności, np. „wpisy 4/4, zdjęcia 3/5, opinie 2/2 z odpowiedzią”." },
    ],
    priceOnce: [
      "Nic, jeśli Twoja wizytówka jest uzupełniona.",
      "Jeśli profil wymaga najpierw uporządkowania: Pakiet Start Google — 400 zł (600 zł, gdy zakładamy wizytówkę od zera).",
    ],
    priceRecurring: ["299 zł miesięcznie, minimum 3 miesiące."],
    notes: [
      "Nie gwarantuję miejsca w Mapach ani w wynikach wyszukiwania — tego nie może uczciwie obiecać nikt. Liczby w raporcie to informacja o tym, co się dzieje z profilem, nie obietnica.",
      "Zgodnie z zasadami Google nie nagradzamy klientów za opinie i nie wybieramy, kto ma je wystawić.",
      "Numeru telefonu nie wpisuję w treść wpisów, bo Google potrafi takie wpisy usuwać — telefon daje przycisk „Zadzwoń teraz”.",
      "Poza usługą: Google Ads, sesje zdjęciowe i dojazdy, kontakt z Twoimi klientami w sprawie opinii, odbieranie telefonów i wiadomości, zmiany na stronie internetowej.",
    ],
    faq: [
      {
        q: "Czy gwarantujesz pierwsze miejsce w Mapach Google?",
        a: "Nie i nikomu tego nie obiecuję — kto obiecuje pozycję, sprzedaje ściemę. Pozycja w Mapach zależy też od odległości klienta od Twojej firmy i od liczby konkurentów w okolicy, a na to nikt nie ma wpływu. Pracuję nad tym, na co wpływ jest: kompletnym, aktualnym i aktywnym profilem.",
      },
      {
        q: "Dlaczego minimum 3 miesiące?",
        a: "Bo efekty regularnej pracy przy profilu nie pojawiają się z tygodnia na tydzień. Pierwszy miesiąc to porządki i pierwsze wpisy, a dopiero raport z trzeciego miesiąca da się sensownie porównać z punktem wyjścia.",
      },
      {
        q: "Czy muszę dawać hasło do konta Google?",
        a: "Nie. Dodajesz mnie jako menedżera wizytówki, podając mój adres Gmail. Hasła nigdy nie potrzebuję i nigdy o nie nie poproszę.",
      },
      {
        q: "Co, jeśli nie mam nowych zdjęć?",
        a: "Raz w miesiącu poproszę Cię o kilka zdjęć z bieżących zleceń — wystarczą zdjęcia z telefonu. Jeśli ich nie będzie, wpisy przygotuję na zdjęciach, które już są w profilu, a w raporcie zapiszę, że nowych zdjęć nie było.",
      },
      {
        q: "Czy obsługujesz firmy spoza Tarczyna?",
        a: "Tak. Wizytówkę prowadzę zdalnie, więc obsługuję firmy z całej Polski.",
      },
    ],
  },

  "projekt-wizytowki": {
    slug: "projekt-wizytowki",
    h1: "Projekt wizytówki firmowej — gotowy do druku",
    promise: "Wizytówka, którą bez poprawek zaniesiesz do dowolnej drukarni.",
    metaTitle: "Projekt wizytówki firmowej — 250 zł | SCS Web",
    metaDescription:
      "Projekt wizytówki firmowej dla lokalnej firmy: awers i rewers, 2 rundy poprawek, pliki PDF CMYK gotowe do druku i wersja cyfrowa. 250 zł jednorazowo.",
    whatIs: [
      "Wizytówka to nadal najczęściej wręczana rzecz po skończonej robocie. Jeśli wygląda porządnie, klient ją zachowa i zadzwoni ponownie albo poda ją dalej sąsiadowi.",
      "Projektuję obie strony i przygotowuję pliki dokładnie w formacie, jakiego oczekują drukarnie — nie musisz nic poprawiać ani tłumaczyć drukarni, o co Ci chodziło.",
    ],
    forWhom: [
      "Hydraulik, elektryk, warsztat, dekarz, stolarz, firma remontowa.",
      "Każdy, kto rozdaje wizytówki na budowie, u klienta albo na lokalnym targu.",
    ],
    getList: [
      "Projekt awersu i rewersu wizytówki",
      "2 rundy poprawek w cenie (każda kolejna 100 zł)",
      "Pliki gotowe do druku: PDF CMYK ze spadami",
      "Wersja cyfrowa (PNG/JPG) do wysyłania mailem i wrzucania na Facebooka",
    ],
    duration: ["Pierwszy projekt: 2 dni robocze.", "Całość razem z poprawkami: do 5 dni roboczych."],
    steps: [
      { n: "01", title: "Dane i materiały", body: "Podajesz dane kontaktowe, zakres usług i logo, jeśli je masz." },
      { n: "02", title: "Projekt", body: "W 2 dni robocze dostajesz projekt awersu i rewersu w podglądzie." },
      { n: "03", title: "Poprawki", body: "Zgłaszasz uwagi — 2 rundy poprawek są w cenie." },
      { n: "04", title: "Pliki", body: "Dostajesz PDF CMYK ze spadami do druku oraz wersję cyfrową i namiary na sprawdzoną drukarnię." },
    ],
    priceOnce: ["250 zł jednorazowo.", "Każda kolejna runda poprawek ponad dwie: 100 zł."],
    priceRecurring: ["Żadne. Płacisz raz za projekt i pliki są Twoje."],
    notes: [
      "Druku nie sprzedaję — zamawiasz go sam tam, gdzie chcesz. Podaję sprawdzoną drukarnię. Orientacyjnie: 100 sztuk ok. 60 zł, 500 sztuk 85–150 zł.",
    ],
    faq: [
      {
        q: "Czy muszę mieć logo?",
        a: "Nie musisz, ale bez logo projekt będzie po prostu słabszy. Jeśli logo jeszcze nie masz, polecam pakiet Identyfikacja, w którym logo i wizytówka powstają razem.",
      },
      {
        q: "Czemu nie drukujecie?",
        a: "Bo na druku bym tylko doliczał marżę. Zamawiasz sam w drukarni, którą polecę, i płacisz tyle, ile ona kosztuje.",
      },
      {
        q: "Co jeśli chcę więcej poprawek?",
        a: "Dwie rundy są w cenie, każda kolejna kosztuje 100 zł. Zawsze mówię o tym wcześniej, nigdy nie doliczam po fakcie.",
      },
      {
        q: "W jakim programie dostanę pliki?",
        a: "Dostajesz PDF w CMYK ze spadami — taki plik przyjmie każda drukarnia — oraz PNG/JPG do użycia w internecie.",
      },
    ],
  },

  "projekt-ulotki": {
    slug: "projekt-ulotki",
    h1: "Projekt ulotki firmowej A5 lub A6",
    promise: "Dwustronna ulotka gotowa do druku, z treścią ułożoną tak, żeby ktoś ją przeczytał.",
    metaTitle: "Projekt ulotki firmowej A5 lub A6 — 300 zł | SCS Web",
    metaDescription:
      "Projekt dwustronnej ulotki A5 lub A6 dla lokalnej firmy: 2 rundy poprawek, PDF CMYK ze spadami i wersja cyfrowa. 300 zł jednorazowo, druk po Twojej stronie.",
    whatIs: [
      "Ulotka wrzucona do skrzynek w okolicy albo zostawiona u klienta to najprostszy sposób, żeby ludzie w Twojej dzielnicy w ogóle dowiedzieli się, że istniejesz.",
      "Projektuję obie strony i pomagam ułożyć treść tak, żeby od razu było widać, co robisz, gdzie działasz i pod jaki numer zadzwonić.",
    ],
    forWhom: [
      "Hydraulik, elektryk, dekarz, firma remontowa, stolarz, warsztat.",
      "Firmy działające na konkretnym osiedlu, w mieście albo w powiecie.",
    ],
    getList: [
      "Dwustronny projekt ulotki w formacie A5 lub A6",
      "2 rundy poprawek w cenie (każda kolejna 100 zł)",
      "Pliki gotowe do druku: PDF CMYK ze spadami",
      "Wersja cyfrowa do wysyłania i publikowania w internecie",
      "Pomoc w ułożeniu treści — nie zostajesz z pustą kartką",
    ],
    duration: ["Pierwszy projekt: 2 dni robocze.", "Całość razem z poprawkami: do 5 dni roboczych."],
    steps: [
      { n: "01", title: "Treść i cel", body: "Ustalamy, do kogo trafia ulotka i co ma z niej wynieść czytelnik." },
      { n: "02", title: "Projekt", body: "W 2 dni robocze dostajesz projekt obu stron w podglądzie." },
      { n: "03", title: "Poprawki", body: "Zgłaszasz uwagi — 2 rundy poprawek są w cenie." },
      { n: "04", title: "Pliki", body: "Dostajesz PDF CMYK ze spadami i wersję cyfrową oraz namiary na sprawdzoną drukarnię." },
    ],
    priceOnce: ["300 zł jednorazowo.", "Każda kolejna runda poprawek ponad dwie: 100 zł."],
    priceRecurring: ["Żadne. Płacisz raz za projekt."],
    notes: [
      "Druku nie sprzedaję — zamawiasz go sam. Orientacyjnie 500 sztuk A6 kosztuje ok. 90 zł w polecanej drukarni.",
    ],
    faq: [
      {
        q: "Co wpisać na ulotce?",
        a: "Pomagam ułożyć treść: co robisz, gdzie działasz, dlaczego warto zadzwonić i jak się z Tobą skontaktować. Wystarczy, że odpowiesz na kilka pytań.",
      },
      {
        q: "A5 czy A6 — co wybrać?",
        a: "A6 jest tańsza w druku i lepiej sprawdza się do skrzynek. A5 daje więcej miejsca na zdjęcia i cennik, dobrze wygląda zostawiona u klienta.",
      },
      {
        q: "Co jeśli chcę więcej poprawek?",
        a: "Dwie rundy są w cenie, każda kolejna to 100 zł — mówię o tym zawsze przed rozpoczęciem pracy.",
      },
      {
        q: "W jakim programie dostanę pliki?",
        a: "PDF w CMYK ze spadami dla drukarni oraz PNG/JPG do internetu.",
      },
    ],
  },

  "oznakowanie-auta": {
    slug: "oznakowanie-auta",
    h1: "Oznakowanie auta firmowego — projekt oklejenia",
    promise: "Projekt oklejenia z wizualizacją na zdjęciu Twojego auta i plikami dla firmy reklamowej.",
    metaTitle: "Oznakowanie auta firmowego — projekt od 300 zł | SCS Web",
    metaDescription:
      "Projekt oklejenia auta firmowego dla lokalnej firmy: wariant MINI 300 zł i PEŁNY 600 zł z wizualizacją na zdjęciu Twojego auta oraz plikami wektorowymi.",
    whatIs: [
      "Auto stojące pod robotą to najtańsza reklama, jaką masz — jeździ po całym mieście i widzą je ludzie, którzy nigdy nie wpisaliby Twojej branży w Google.",
      "Projektuję, co i jak ma być na aucie, i pokazuję efekt na zdjęciu Twojego samochodu, zanim ktokolwiek zacznie naklejać folię.",
    ],
    forWhom: [
      "Hydraulik, elektryk, dekarz, firma remontowa, transport, warsztat mobilny.",
      "Każdy, kto dojeżdża do klientów własnym autem albo busem.",
    ],
    getList: [
      "Wariant MINI — 300 zł: same dane kontaktowe (logo, telefon, adres strony) na drzwi i klapę",
      "Wariant PEŁNY — 600 zł: projekt oklejenia boków, tyłu i ewentualnie maski",
      "Wizualizacja na zdjęciu TWOJEGO auta",
      "Pliki wektorowe gotowe do przekazania firmie reklamowej",
    ],
    duration: ["3 dni robocze na projekt razem z wizualizacją."],
    steps: [
      { n: "01", title: "Zdjęcia auta", body: "Robisz kilka zdjęć auta z boku, z tyłu i z przodu — telefonem, w dzień." },
      { n: "02", title: "Wybór wariantu", body: "Ustalamy, czy wystarczy MINI z danymi kontaktowymi, czy chcesz pełne oklejenie." },
      { n: "03", title: "Projekt i wizualizacja", body: "W 3 dni robocze dostajesz projekt nałożony na zdjęcie Twojego auta." },
      { n: "04", title: "Pliki dla wykonawcy", body: "Przekazuję pliki wektorowe firmie reklamowej, którą polecam albo którą sam wybierzesz." },
    ],
    priceOnce: ["Wariant MINI: 300 zł jednorazowo.", "Wariant PEŁNY: 600 zł jednorazowo."],
    priceRecurring: ["Żadne. Płacisz raz za projekt i pliki."],
    notes: [
      "Samego oklejenia nie wykonuję — robi to firma reklamowa z ploterem i folią. Orientacyjny koszt wykonania to 2800–4500 zł, w zależności od auta i zakresu. Polecam sprawdzonego wykonawcę i przekazuję mu gotowe pliki.",
    ],
    faq: [
      {
        q: "Czy sami okleicie auto?",
        a: "Nie. Oklejanie to osobne rzemiosło — potrzebny jest ploter, folia i hala. Robi to firma reklamowa, a ja przygotowuję projekt i pliki, żeby wykonawca nie improwizował.",
      },
      {
        q: "Czy zobaczę, jak to będzie wyglądać?",
        a: "Tak. Dostajesz wizualizację nałożoną na zdjęcie Twojego auta, więc widzisz efekt przed wydaniem pieniędzy na folię.",
      },
      {
        q: "Czy wystarczy wariant MINI?",
        a: "Bardzo często tak. Jeśli zależy Ci głównie na tym, żeby ludzie zapisali numer, MINI z logo, telefonem i adresem strony robi robotę za ułamek ceny.",
      },
      {
        q: "Czy pliki będą pasować każdej firmie reklamowej?",
        a: "Tak. Pliki są wektorowe, czyli w formacie, który każdy wykonawca może dowolnie skalować i wyciąć.",
      },
    ],
  },

  "projekt-logo": {
    slug: "projekt-logo",
    h1: "Projekt logo dla małej firmy",
    promise: "Trzy propozycje na start, a na koniec komplet plików i zasady używania znaku.",
    metaTitle: "Projekt logo dla małej firmy — 800 zł | SCS Web",
    metaDescription:
      "Projekt logo dla lokalnej firmy: 3 propozycje, 2 rundy poprawek, pliki wektorowe SVG, PDF i EPS oraz mini-księga znaku. 800 zł jednorazowo.",
    whatIs: [
      "Logo to znak, po którym klient rozpoznaje Twoją firmę na aucie, wizytówce, ulotce i stronie. Bez niego wszystko wygląda jak przypadkowy zbiór napisów.",
      "Projektuję znak prosty i czytelny — taki, który da się wyciąć z folii na auto i który nie rozmyje się na małej wizytówce.",
    ],
    forWhom: [
      "Nowe firmy, które dopiero zaczynają.",
      "Firmy działające od lat bez logo albo z logo zrobionym kiedyś w darmowym generatorze.",
    ],
    getList: [
      "3 propozycje wstępne",
      "Po wyborze kierunku — 2 rundy poprawek",
      "Wersja kolorowa, czarno-biała i wersja na ciemne tło",
      "Pliki wektorowe: SVG, PDF, EPS",
      "Pliki PNG do internetu",
      "Mini-księga znaku: kolory HEX/CMYK, typografia i zasady użycia",
    ],
    duration: ["3 propozycje: 3 dni robocze.", "Komplet plików: do 7 dni roboczych."],
    steps: [
      { n: "01", title: "Rozmowa o firmie", body: "Ustalamy, czym się zajmujesz, kto jest Twoim klientem i co ma mówić znak." },
      { n: "02", title: "Trzy propozycje", body: "W 3 dni robocze dostajesz trzy różne kierunki do wyboru." },
      { n: "03", title: "Poprawki", body: "Wybierasz jeden kierunek, a ja dopracowuję go w dwóch rundach poprawek." },
      { n: "04", title: "Komplet plików", body: "Dostajesz wszystkie wersje, pliki wektorowe i mini-księgę znaku." },
    ],
    priceOnce: ["800 zł jednorazowo."],
    priceRecurring: ["Żadne. Logo jest Twoje na własność i nie płacisz za nie co miesiąc."],
    faq: [
      {
        q: "Czy logo będzie moje na własność?",
        a: "Tak. Po opłaceniu projektu logo jest Twoje — możesz go używać wszędzie i bez ograniczeń czasowych.",
      },
      {
        q: "Co jeśli żadna propozycja mi się nie spodoba?",
        a: "Rozmawiamy jeszcze raz o tym, co Ci nie pasuje, i przygotowuję nowy kierunek. Celem jest znak, którego nie będziesz się wstydzić, a nie zamknięcie zlecenia.",
      },
      {
        q: "Czy dostanę pliki do druku i na internet?",
        a: "Tak. Wektory (SVG, PDF, EPS) dla drukarni i firm reklamowych oraz PNG do strony i mediów społecznościowych.",
      },
      {
        q: "Czy potrzebuję logo, jeśli mam już stronę?",
        a: "Strona zadziała i bez logo, ale ze znakiem wygląda spójnie — ten sam symbol pojawia się na stronie, wizytówce, ulotce i aucie.",
      },
    ],
  },
};
