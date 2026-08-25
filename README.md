# Semplice Strone

Build a premium one-page marketing website in POLISH for "SCS Web" — a service that builds websites for small local businesses in Poland (plumbers, car workshops, roofers). The whole site copy must be in Polish, addressing the visitor informally ("Ty" form).

=== HARD TECHNICAL CONSTRAINTS (non-negotiable) ===
- Fully STATIC frontend-only app (Vite + React SPA). Do NOT enable Lovable Cloud, Supabase, any database, auth, user data storage, or any server-side/edge functions. `npm run build` must produce a plain static site.
- ALL assets bundled locally in the repo: self-host fonts via @fontsource npm packages (NO Google Fonts <link>, no external CDNs). Icons as inline SVG / lucide-react. No heavy images — keep the whole homepage under 3 MB.
- Contact form: pure client-side POST to Web3Forms API (https://api.web3forms.com/submit) with an access key stored in a clearly-marked constant `WEB3FORMS_ACCESS_KEY = "PLACEHOLDER_KEY"` at the top of the form component (we will paste the real key later). Include honest success/error states. No backend.

=== DESIGN DIRECTION (very important) ===
Premium, Apple-like, monochrome elegance. This must NOT look like a typical AI-generated template. Specifically:
- Pure white background, near-black (#0a0a0a) text, monochrome throughout; grays for secondary text. No color gradients, no purple/blue "SaaS" gradients, no glassmorphism, no decorative blobs, no emoji.
- SHARP, editorial geometry: border-radius 0px (or max 2px) on buttons, cards, images. No pill buttons, no heavily rounded cards. Hairline 1px dividers (#e5e5e5) to structure sections, like a high-end editorial/luxury brand site.
- Typography is the hero: use "Schibsted Grotesk" (via @fontsource) for display headlines — very large sizes (clamp up to ~72px on desktop), tight letter-spacing (-0.03em), strong weight contrast — and "Inter" for body text. Generous whitespace, max-width ~1200px, lots of air between sections.
- Buttons: solid black rectangle with white text, subtle hover (slight opacity/translate). Secondary: black text with underline or 1px black border.
- Subtle, tasteful micro-interactions only (fade/slide on scroll, ease-out). Nothing bouncy or flashy.
- Mobile-first: must look perfect on a phone.

=== PAGE STRUCTURE (single page, anchor navigation) ===
Sticky minimal top bar: wordmark "SCS Web" (typographic, black) + anchor links (Jak to działa, Realizacje, Cennik, FAQ) + small black CTA button "Darmowe demo".

1. HERO: giant headline "Profesjonalna strona dla Twojej firmy w 48 godzin", subline "Zobaczysz projekt, zanim zapłacisz. Bez ryzyka, bez zaliczek, bez abonamentu za samą stronę." Primary CTA "Zamów darmowe demo" (scrolls to form), secondary link "Zobacz przykłady". Below: an elegant CSS-built laptop mockup showing a miniature monochrome website preview (built in HTML/CSS, not an image).

2. JAK TO DZIAŁA — 3 numbered steps, editorial layout (large numerals 01/02/03, hairline separators): (01) Darmowe demo — opowiadasz o swojej firmie, w 48 godzin dostajesz link do gotowego projektu strony; (02) Akceptacja — zgłaszasz poprawki, płacisz dopiero, gdy projekt Ci się podoba; (03) Publikacja — strona działa pod Twoją domeną w 48 godzin od akceptacji.

3. REALIZACJE (portfolio) — 3 FICTIONAL example businesses, each shown as a mini website preview rendered in pure HTML/CSS inside a laptop frame + phone frame (scaled-down real markup, monochrome frames; each mini-site can have its own restrained accent color): "Hydro-Perfekt" (hydraulik), "AutoSerwis Kowalski" (warsztat samochodowy), "DachPol" (dekarz). Clear caption: "Projekty przykładowe — Twoja strona będzie zaprojektowana od zera pod Twoją firmę."

4. CENNIK — two large side-by-side pricing cards (sharp corners, 1px borders):
   - "Jednorazowo — 1500 zł": strona na własność, publikacja pod Twoją domeną; potem jedyny stały koszt to domena ok. 100–150 zł rocznie, rejestrowana na Twoje dane. Żadnego abonamentu za stronę.
   - "Abonament — 199 zł/mies." (badge "Bez kosztów na start"): 0 zł na start, domena i hosting w cenie, drobne zmiany na stronie i opieka techniczna, monitoring.
   Below, a slim horizontal add-on card: "Pakiet Start Google — 500 zł": założenie lub optymalizacja wizytówki Google Maps, podpięcie strony, uzupełnienie danych i zdjęć, instrukcja zbierania opinii.

5. DLACZEGO SCS WEB — 4 points in a clean grid with thin-line icons: Projekt przed płatnością (nic nie ryzykujesz); 48 godzin zamiast tygodni; Zero abonamentu za samą stronę (przy zakupie jednorazowym); Bezpośredni kontakt z jedną osobą — bez agencji i pośredników.

6. FAQ — accordion (sharp, hairline dividers, plus/minus icon): (a) Ile to kosztuje w przyszłości? — za samą stronę nie płacisz żadnego abonamentu; jedyny stały koszt to domena ok. 100–150 zł/rok (w abonamencie 199 zł/mies. domena i hosting są w cenie); (b) Czyja jest domena? — zawsze rejestrowana na Twoje dane, jest Twoją własnością; (c) Ile trwa realizacja? — projekt demo w 48 h, publikacja w 48 h od akceptacji; (d) Co jeśli projekt mi się nie spodoba? — nic nie płacisz, demo jest darmowe i niezobowiązujące; (e) Czy mogę później coś zmienić na stronie? — tak, drobne zmiany w abonamencie są w cenie, przy zakupie jednorazowym wyceniamy je indywidualnie.

7. KONTAKT / FORMULARZ — heading "Zamów darmowe demo"; fields: Imię, Telefon lub e-mail, Nazwa firmy i branża, Krótko o Twojej firmie (textarea); black submit button "Wyślij — odezwę się w 24 h"; note under form: "Zero spamu. Odpowiadam osobiście." Web3Forms client-side as specified above.

8. FOOTER — hairline top border: "SCS Web — strony internetowe dla lokalnych firm", Kamil Pietraszko, tel. 664 013 998, kamil.pietraszko@onet.pl, © 2026 SCS Web.

=== TECHNICAL SEO (must be in the build) ===
- index.html: lang="pl", title "Strona internetowa dla firmy w 48h — SCS Web", meta description in Polish with local-business phrasing, Open Graph tags.
- Semantic single H1 (hero headline), H2 per section.
- JSON-LD ProfessionalService schema in index.html: name "SCS Web", founder "Kamil Pietraszko", telephone "+48 664 013 998", email "kamil.pietraszko@onet.pl", url "https://scsweb.pl", areaServed "Polska".
- public/robots.txt (allow all, sitemap reference) and public/sitemap.xml with https://scsweb.pl/.
- Favicon: minimalist black "S" monogram as SVG in the repo (plus .ico), referenced in index.html.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7c4aa011-0f76-4c30-bf23-e95ded918f90).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
