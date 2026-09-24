// ============================================================
// NASZE REALIZACJE — strony, które faktycznie działają w sieci.
// To NIE są projekty przykładowe (te siedzą w CASES na stronie
// głównej i pod /demo/...). Tutaj wpisujemy wyłącznie adresy,
// pod którymi strona jest opublikowana i dostępna publicznie.
//
// Nowa pozycja = jeden wpis poniżej. Nic więcej nie trzeba
// zmieniać — sekcja na stronie głównej renderuje się z tej listy.
// ============================================================

export type Realizacja = {
  name: string;
  branch: string;
  url: string;
  href: string;
  desc: string;
  tag: string;
};

export const REALIZACJE: Realizacja[] = [
  {
    name: "DK-BUD Damian Kasiarz",
    branch: "Usługi koparką i brukarstwo — Stargard",
    url: "dk-bud.com.pl",
    href: "https://dk-bud.com.pl",
    tag: "Wdrożenie u klienta",
    desc: "Strona jednostronicowa pod własną domeną klienta: siedem usług, galeria realizacji z powiększaniem zdjęć, formularz kontaktowy wysyłający zgłoszenia prosto na skrzynkę właściciela i polityka prywatności. Zaprojektowana od zera, opublikowana we wrześniu 2026.",
  },
  {
    name: "SP Trans",
    branch: "Sprzedaż pojazdów użytkowych — Kopana k. Warszawy",
    url: "sp-trans-easy-drive.lovable.app",
    href: "https://sp-trans-easy-drive.lovable.app",
    tag: "Najbardziej rozbudowany projekt",
    desc: "Katalog około dziewięćdziesięciu pojazdów — ciężarówek, busów, ciągników siodłowych i naczep — z wyszukiwarką filtrującą po typie pojazdu, marce i cenie maksymalnej oraz osobną kartą każdego pojazdu. Dowód, że ta technologia udźwignie coś większego niż wizytówka.",
  },
  {
    name: "Wygodnia.pl",
    branch: "Sklep internetowy — artykuły do domu",
    url: "wygodnia.pl",
    href: "https://wygodnia.pl",
    tag: "Projekt własny",
    desc: "Działający sklep internetowy z katalogiem produktów, koszykiem i płatnościami online. Zbudowany i prowadzony przeze mnie — to moja własna firma, nie zlecenie.",
  },
];
