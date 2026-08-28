// ============================================================
// PIERWSZE REALIZACJE — prawdziwe opinie klientów SCS Web.
//
// Jak dodać pierwszą opinię:
// 1. Skopiuj przykład poniżej do tablicy TESTIMONIALS.
// 2. Uzupełnij dane: cytat, imię, firmę, miasto i adres
//    opublikowanej strony (pełny URL z https://).
// 3. Sekcja na stronie głównej pojawi się automatycznie.
//    Dopóki tablica jest pusta, sekcja w ogóle się nie
//    renderuje — nie ma żadnego placeholdera.
//
// PRZYKŁAD (odkomentuj i uzupełnij):
// {
//   quote: "Strona gotowa w dwa dni, klienci sami dzwonią.",
//   name: "Jan",
//   company: "Hydro-Perfekt",
//   city: "Bielsko-Biała",
//   url: "https://hydro-perfekt.pl",
// },
// ============================================================

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  city: string;
  url: string;
};

export const TESTIMONIALS: Testimonial[] = [];
