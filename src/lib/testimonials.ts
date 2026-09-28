// ============================================================
// REFERENCJE — SCS Web.
//
// ZASADA: wchodzi tu wyłącznie tekst, który został podpisany
// i na którego publikację jest zgoda na piśmie. Cytat
// przepisujemy dosłownie — bez skracania „dla lepszego
// brzmienia”, bez poprawiania stylu, bez dopisywania słów.
// Skany podpisanych dokumentów trzymamy na wypadek pytań.
//
// Jak dodać kolejną:
// 1. Dopisz obiekt do tablicy TESTIMONIALS.
// 2. quote — dosłowny fragment z podpisanego dokumentu.
//    name — osoba podpisana (pomiń, jeśli dokument jej nie podaje).
//    company / city — jak w nagłówku dokumentu.
//    url — adres strony. NA RAZIE NIEUŻYWANY: dopóki referencji
//    jest mało, karty nie mają linków. Gdy uzbiera się ich
//    więcej, wracamy do linkowania.
// 3. Sekcja na stronie głównej i na /referencje pojawia się
//    automatycznie. Dopóki tablica jest pusta, sekcja w ogóle
//    się nie renderuje — nie ma żadnego placeholdera.
// ============================================================

export type Testimonial = {
  quote: string;
  name?: string;
  company: string;
  city?: string;
  url?: string;
};

/** „Imię Nazwisko — Firma, Miasto”, z pominięciem pustych części. */
export function testimonialCaption(t: Testimonial): string {
  const right = [t.company, t.city].filter(Boolean).join(", ");
  return t.name ? `${t.name} — ${right}` : right;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    // Referencje podpisane 24.09.2026 przez Sławomira Pietraszko,
    // właściciela SP TRANS, Al. Krakowska 11, Kopana, 05-555 Tarczyn,
    // NIP 5422354450. Dokument zawiera zgodę na publikację nazwy firmy
    // na scsweb.pl. Cytat przepisany dosłownie z dokumentu.
    quote:
      "Prace zostały wykonane terminowo i zgodnie z ustaleniami. Zgłaszane przez nas uwagi były wprowadzane na bieżąco, a kontakt z wykonawcą na każdym etapie prac był szybki i rzeczowy.",
    name: "Sławomir Pietraszko",
    company: "SP Trans",
    city: "Kopana k. Tarczyna",
    url: "https://sp-trans-easy-drive.lovable.app",
  },
  {
    // Referencje podpisane 24.09.2026 przez zarząd Wygodnia.pl
    // (podpis nieczytelny, dopisek „CEO” — dokument nie podaje
    // imienia i nazwiska, dlatego pole `name` jest pominięte).
    // Dokument zawiera zgodę na publikację nazwy marki na scsweb.pl.
    // Cytat przepisany dosłownie z dokumentu.
    quote:
      "Strona powstała w ustalonym terminie. Uwagi zgłaszane przez nasz zespół były wprowadzane na bieżąco, a kontakt na każdym etapie prac był szybki i konkretny — nie musieliśmy niczego przypominać ani ponaglać.",
    company: "Wygodnia.pl",
    city: "sklep internetowy",
    url: "https://wygodnia.pl",
  },
];
