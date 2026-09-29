// ============================================================
// NAWIGACJA — JEDNO ŹRÓDŁO PRAWDY.
//
// Wcześniej ta lista istniała DWA razy: w `src/routes/index.tsx`
// i w `src/components/scs/PageShell.tsx`. Rozjechały się —
// strona główna miała „Kalkulator”, podstrony nie. Wyglądało to
// jak znikający element menu przy przechodzeniu między stronami.
// Nie dopisuj pozycji w komponencie. Dopisuj tutaj.
//
// Limit praktyczny: przy 7 pozycjach menu nachodziło na logo
// w oknie ~1500 px. Sześć mieści się z zapasem. Zanim dodasz
// siódmą, sprawdź nagłówek na wąskim ekranie desktopowym.
// ============================================================

export type NavItem = { href: string; label: string };

/** Menu na stronie głównej — kotwice są lokalne. */
export const NAV: NavItem[] = [
  { href: "#jak-to-dziala", label: "Jak to działa" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#cennik", label: "Cennik" },
  { href: "/kalkulator", label: "Kalkulator" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

/**
 * To samo menu na podstronach — kotwice muszą prowadzić na stronę
 * główną, więc dostają przedrostek „/”. Wyliczane z NAV, żeby obie
 * listy nie mogły się już rozjechać.
 */
export const NAV_SUBPAGE: NavItem[] = NAV.map((item) =>
  item.href.startsWith("#") ? { ...item, href: `/${item.href}` } : item,
);

/**
 * Wizytówka Google SCS Web.
 * CID wyliczony z linku do opinii, który podał Kamil
 * (https://g.page/r/CW0rPf4_HRHPEAE/review → 0xcf111d3ffe3d2b6d).
 * Poprzednia wartość w kodzie (11760883947227790812) była błędna —
 * prowadziła w pusty punkt na mapie, nie na wizytówkę.
 */
export const GOOGLE_PROFILE_URL = "https://maps.google.com/?cid=14920739201140730733";
