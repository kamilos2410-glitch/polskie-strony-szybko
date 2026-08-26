import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DemoBar } from "@/components/scs/DemoBar";

export const Route = createFileRoute("/demo/hydro-perfekt")({
  component: HydroPerfekt,
  head: () => ({
    meta: [
      { title: "Hydro-Perfekt — hydraulik Bielsko-Biała (strona przykładowa)" },
      {
        name: "description",
        content:
          "Przykładowy projekt strony dla firmy hydraulicznej Hydro-Perfekt z Bielska-Białej. Realizacja demonstracyjna SCS Web.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Hydro-Perfekt — strona przykładowa SCS Web" },
      {
        property: "og:description",
        content: "Demonstracyjna strona firmy hydraulicznej zaprojektowana przez SCS Web.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const BLUE = "#0b3d91";
const SERVICES = [
  {
    title: "Awarie 24/7",
    body: "Zalanie, pęknięta rura, brak ciepłej wody. Przyjeżdżamy tego samego dnia, także w weekendy.",
    price: "od 150 zł",
  },
  {
    title: "Instalacje wod-kan",
    body: "Kompleksowe instalacje w domach jednorodzinnych i mieszkaniach, od projektu po odbiór.",
    price: "wycena indywidualna",
  },
  {
    title: "Montaż armatury",
    body: "Baterie, kabiny, WC podtynkowe, zmywarki i pralki. Montaż z gwarancją na robociznę.",
    price: "od 120 zł",
  },
  {
    title: "Ogrzewanie",
    body: "Wymiana grzejników, montaż pomp ciepła i przeglądy instalacji centralnego ogrzewania.",
    price: "od 200 zł",
  },
];

const OPINIE = [
  {
    text: "Pan Marek przyjechał w niedzielę o 21:00, gdy pękła nam rura. Naprawione w godzinę, cena taka jak przez telefon.",
    author: "Anna K., Bielsko-Biała",
  },
  {
    text: "Kompletna instalacja w nowym domu. Terminowo, czysto, wszystko opisane na fakturze.",
    author: "Tomasz W., Czechowice",
  },
  {
    text: "Wymiana grzejników w całym mieszkaniu. Solidna robota i konkretne doradztwo przy wyborze.",
    author: "Marta S., Bielsko-Biała",
  },
];

function HydroPerfekt() {
  const [sent, setSent] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#f4f7fb] pt-11 text-[#12233d]"
      style={{ fontFamily: '"Inter Variable", system-ui, sans-serif' }}
    >
      <DemoBar variant="light" />

      <header className="sticky top-11 z-30 border-b border-[#dde5ef] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: BLUE }}
            >
              H
            </span>
            <span className="text-lg font-bold tracking-tight">Hydro-Perfekt</span>
          </div>
          <nav className="hidden gap-7 text-sm font-medium text-[#4a5b73] md:flex">
            <a href="#uslugi">Usługi</a>
            <a href="#opinie">Opinie</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a
            href="#kontakt"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: BLUE }}
          >
            +48 664 013 998
          </a>
        </div>
      </header>

      <div className="px-5 py-2.5 text-center text-sm font-semibold text-white" style={{ background: BLUE }}>
        Awaria? Jesteśmy dostępni 24/7 — zadzwoń: +48 664 013 998
      </div>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.16em] text-[#4a5b73] uppercase">
              Hydraulik Bielsko-Biała i okolice
            </p>
            <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight md:text-5xl">
              Usterka hydrauliczna?
              <br />
              <span style={{ color: BLUE }}>Będziemy u Ciebie dziś.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-[#4a5b73]">
              Od 12 lat naprawiamy awarie, montujemy instalacje i doradzamy uczciwie. Cena ustalana
              przez telefon — bez niespodzianek na fakturze.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+48664013998"
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0b3d91]/20"
                style={{ background: BLUE }}
              >
                Zadzwoń: +48 664 013 998
              </a>
              <a
                href="#uslugi"
                className="rounded-full border border-[#c7d5e6] bg-white px-7 py-3.5 text-sm font-semibold"
              >
                Zobacz usługi
              </a>
            </div>
            <div className="mt-8 flex gap-8 text-sm text-[#4a5b73]">
              <p>
                <span className="block text-2xl font-bold text-[#12233d]">12 lat</span>doświadczenia
              </p>
              <p>
                <span className="block text-2xl font-bold text-[#12233d]">60 min</span>średni czas
                dojazdu
              </p>
              <p>
                <span className="block text-2xl font-bold text-[#12233d]">24/7</span>także weekendy
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white p-8 shadow-xl shadow-[#0b3d91]/10">
              <svg viewBox="0 0 320 220" className="w-full" role="img" aria-label="Ilustracja instalacji wodnej">
                <rect x="0" y="0" width="320" height="220" fill="#eef3f9" rx="16" />
                <path
                  d="M40 170 L40 90 Q40 70 60 70 L150 70 Q170 70 170 50 L170 30"
                  stroke={BLUE}
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M200 190 L200 120 Q200 100 220 100 L280 100"
                  stroke="#7fa5d8"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="170" cy="30" r="14" fill={BLUE} />
                <circle cx="280" cy="100" r="10" fill="#7fa5d8" />
                <circle cx="240" cy="52" r="6" fill="#9dc0ea" />
                <circle cx="258" cy="36" r="4" fill="#9dc0ea" />
                <rect x="30" y="170" width="120" height="10" rx="5" fill="#c8d8ec" />
                <rect x="190" y="190" width="110" height="10" rx="5" fill="#c8d8ec" />
              </svg>
              <p className="mt-6 text-sm text-[#4a5b73]">
                Pracujemy na sprawdzonych materiałach i dajemy 24 miesiące gwarancji na wykonaną
                robociznę.
              </p>
            </div>
          </div>
        </section>

        <section id="uslugi" className="border-y border-[#dde5ef] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Zakres usług</h2>
            <p className="mt-3 max-w-xl text-[#4a5b73]">
              Ceny orientacyjne — dokładną kwotę podajemy przez telefon po opisaniu usterki.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <div key={s.title} className="rounded-2xl border border-[#dde5ef] bg-[#f8fbff] p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <span className="text-sm font-semibold" style={{ color: BLUE }}>
                      {s.price}
                    </span>
                  </div>
                  <p className="mt-3 text-[#4a5b73]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="opinie" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Opinie klientów</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {OPINIE.map((o) => (
              <figure key={o.author} className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="mb-4 flex gap-1" aria-label="Ocena 5 na 5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: BLUE }} />
                  ))}
                </div>
                <blockquote className="text-[#26364f]">{o.text}</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-[#4a5b73]">{o.author}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="kontakt" className="text-white" style={{ background: BLUE }}>
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Kontakt</h2>
              <p className="mt-4 max-w-sm text-[#c9dcf7]">
                Opisz usterkę telefonicznie lub zostaw wiadomość — oddzwaniamy w ciągu 30 minut.
              </p>
              <dl className="mt-8 space-y-3 text-[#e6f0ff]">
                <div>
                  <dt className="text-xs tracking-widest text-[#a9c6ee] uppercase">Telefon</dt>
                  <dd className="text-xl font-bold">+48 664 013 998</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-widest text-[#a9c6ee] uppercase">Adres</dt>
                  <dd>ul. Przykładowa 1, 43-300 Bielsko-Biała</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-widest text-[#a9c6ee] uppercase">Godziny</dt>
                  <dd>Pon–Pt 7:00–19:00 · awarie całą dobę</dd>
                </div>
              </dl>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl bg-white p-7 text-[#12233d]"
            >
              <label className="block text-sm font-semibold" htmlFor="hp-name">
                Imię
              </label>
              <input
                id="hp-name"
                className="mt-2 w-full rounded-lg border border-[#dde5ef] bg-[#f8fbff] px-4 py-3"
                placeholder="Jan Kowalski"
              />
              <label className="mt-5 block text-sm font-semibold" htmlFor="hp-phone">
                Telefon
              </label>
              <input
                id="hp-phone"
                type="tel"
                className="mt-2 w-full rounded-lg border border-[#dde5ef] bg-[#f8fbff] px-4 py-3"
                placeholder="600 000 000"
              />
              <label className="mt-5 block text-sm font-semibold" htmlFor="hp-email">
                E-mail
              </label>
              <input
                id="hp-email"
                type="email"
                className="mt-2 w-full rounded-lg border border-[#dde5ef] bg-[#f8fbff] px-4 py-3"
                placeholder="jan@twojafirma.pl"
              />
              <label className="mt-5 block text-sm font-semibold" htmlFor="hp-msg">
                Opis usterki
              </label>
              <textarea
                id="hp-msg"
                rows={4}
                className="mt-2 w-full rounded-lg border border-[#dde5ef] bg-[#f8fbff] px-4 py-3"
                placeholder="Cieknie rura pod zlewem…"
              />
              <button
                type="submit"
                className="mt-6 w-full rounded-full py-3.5 text-sm font-semibold text-white"
                style={{ background: BLUE }}
              >
                Wyślij zgłoszenie
              </button>
              {sent && (
                <p className="mt-4 text-sm font-semibold text-[#0b3d91]">
                  To strona przykładowa — formularz jest nieaktywny.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#08284f] px-5 py-8 text-center text-sm text-[#9dbbe2]">
        Hydro-Perfekt · ul. Przykładowa 1, Bielsko-Biała · +48 664 013 998 — firma fikcyjna, projekt
        przykładowy SCS Web
      </footer>
    </div>
  );
}
