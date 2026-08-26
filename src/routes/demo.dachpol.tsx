import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DemoBar } from "@/components/scs/DemoBar";
import { RoofCalculator } from "@/components/scs/RoofCalculator";

export const Route = createFileRoute("/demo/dachpol")({
  component: DachPol,
  head: () => ({
    meta: [
      { title: "DachPol — usługi dekarskie (strona przykładowa)" },
      {
        name: "description",
        content:
          "Przykładowy projekt strony dla firmy dekarskiej DachPol. Realizacja demonstracyjna SCS Web.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "DachPol — strona przykładowa SCS Web" },
      {
        property: "og:description",
        content: "Demonstracyjna strona firmy dekarskiej zaprojektowana przez SCS Web.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const TERRA = "#b4532a";
const CHAR = "#2f2b28";
const SERIF = 'Georgia, "Times New Roman", serif';

const MATERIALS = [
  {
    name: "Dachówka ceramiczna",
    body: "Klasyka na dekady. Odporna na mróz i promieniowanie UV, dostępna w kilkunastu odcieniach.",
    life: "50+ lat",
  },
  {
    name: "Blachodachówka",
    body: "Lekka i szybka w montażu. Dobre rozwiązanie przy wymianie pokrycia na istniejącej więźbie.",
    life: "30–40 lat",
  },
  {
    name: "Papa termozgrzewalna",
    body: "Dachy płaskie, garaże i budynki gospodarcze. Pełna szczelność i prosta konserwacja.",
    life: "20–25 lat",
  },
];

const GALLERY = [
  { title: "Dom jednorodzinny", place: "Świdnik", tone: "#b4532a" },
  { title: "Stodoła po renowacji", place: "Piaski", tone: "#8a6a4a" },
  { title: "Bliźniak, dachówka", place: "Lublin", tone: "#6f4a34" },
  { title: "Dach płaski, papa", place: "Łęczna", tone: "#a8724a" },
];

function DachPol() {
  const [sent, setSent] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#faf5ef] pt-11 text-[#2f2b28]"
      style={{ fontFamily: '"Inter Variable", system-ui, sans-serif' }}
    >
      <DemoBar variant="light" />

      <header className="sticky top-11 z-30 border-b border-[#e4d8c9] bg-[#faf5ef]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <span className="text-2xl" style={{ fontFamily: SERIF, color: CHAR }}>
            Dach<span style={{ color: TERRA }}>Pol</span>
          </span>
          <nav className="hidden gap-8 text-sm md:flex" style={{ color: "#6b615a" }}>
            <a href="#realizacje">Realizacje</a>
            <a href="#materialy">Materiały</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a href="tel:+48664013998" className="text-sm font-semibold" style={{ color: TERRA }}>
            +48 664 013 998
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase" style={{ color: TERRA }}>
                Usługi dekarskie · Lubelskie
              </p>
              <h1
                className="mt-5 text-[clamp(2.6rem,7vw,4.4rem)] leading-[1.02]"
                style={{ fontFamily: SERIF }}
              >
                Dachy, które przetrwają
                <br />
                następne pokolenie.
              </h1>
              <p className="mt-6 max-w-md text-lg" style={{ color: "#6b615a" }}>
                Kryjemy, remontujemy i ocieplamy dachy od 1998 roku. Bezpłatny pomiar i wycena w
                promieniu 60 km.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="px-8 py-4 text-sm font-semibold text-[#faf5ef]"
                  style={{ background: TERRA }}
                >
                  Zamów bezpłatną wycenę
                </a>
                <a
                  href="#realizacje"
                  className="border px-8 py-4 text-sm font-semibold"
                  style={{ borderColor: "#d9c9b6" }}
                >
                  Zobacz realizacje
                </a>
              </div>
            </div>
            <svg viewBox="0 0 320 200" className="w-full" role="img" aria-label="Ilustracja dachu">
              <rect width="320" height="200" fill="#f0e6da" />
              <path d="M20 130 L160 40 L300 130 Z" fill={TERRA} />
              <path d="M160 40 L300 130 L300 140 L160 52 Z" fill="#8f3f1f" />
              <rect x="70" y="130" width="180" height="50" fill="#e2d3c1" />
              <rect x="140" y="146" width="34" height="34" fill={CHAR} />
              <path
                d="M20 130 L160 40"
                stroke="#faf5ef"
                strokeWidth="2"
                strokeDasharray="6 8"
                fill="none"
              />
              <rect x="222" y="70" width="18" height="34" fill={CHAR} />
            </svg>
          </div>

          <dl className="mt-16 grid gap-8 border-t border-[#e4d8c9] pt-10 sm:grid-cols-3">
            {[
              ["27", "lat doświadczenia"],
              ["1 400+", "wykonanych dachów"],
              ["10 lat", "gwarancji na montaż"],
            ].map(([big, small]) => (
              <div key={small}>
                <dt className="text-4xl" style={{ fontFamily: SERIF, color: TERRA }}>
                  {big}
                </dt>
                <dd className="mt-2 text-sm" style={{ color: "#6b615a" }}>
                  {small}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="realizacje" className="border-y border-[#e4d8c9] bg-[#f4ebe0]">
          <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: SERIF }}>
              Wybrane realizacje
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {GALLERY.map((g) => (
                <figure key={g.title} className="bg-[#faf5ef] p-4">
                  <svg viewBox="0 0 320 170" className="w-full" role="img" aria-label={g.title}>
                    <rect width="320" height="170" fill="#eadfd1" />
                    <path d="M10 120 L160 40 L310 120 Z" fill={g.tone} />
                    <rect x="60" y="120" width="200" height="40" fill="#ddcdb9" />
                    <circle cx="270" cy="34" r="12" fill="#e9c99a" />
                  </svg>
                  <figcaption className="mt-4 flex items-baseline justify-between">
                    <span className="text-lg" style={{ fontFamily: SERIF }}>
                      {g.title}
                    </span>
                    <span className="text-sm" style={{ color: "#8a7f76" }}>
                      {g.place}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <RoofCalculator />

        <section id="materialy" className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: SERIF }}>
            Materiały, z którymi pracujemy
          </h2>
          <div className="mt-10 divide-y divide-[#e4d8c9] border-y border-[#e4d8c9]">
            {MATERIALS.map((m) => (
              <div key={m.name} className="grid gap-3 py-7 md:grid-cols-[220px_1fr_120px]">
                <h3 className="text-xl" style={{ fontFamily: SERIF }}>
                  {m.name}
                </h3>
                <p style={{ color: "#6b615a" }}>{m.body}</p>
                <span className="text-sm font-semibold md:text-right" style={{ color: TERRA }}>
                  {m.life}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="kontakt" className="bg-[#2f2b28] text-[#f2e8dd]">
          <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: SERIF }}>
                Bezpłatna wycena
              </h2>
              <p className="mt-4 max-w-sm text-[#c3b6a8]">
                Przyjeżdżamy, mierzymy dach i przedstawiamy wycenę na piśmie. Bez opłat i bez
                zobowiązań.
              </p>
              <div className="mt-8 space-y-2">
                <p className="text-2xl" style={{ fontFamily: SERIF, color: "#e79a6f" }}>
                  +48 664 013 998
                </p>
                <p className="text-[#c3b6a8]">ul. Przykładowa 1, 20-001 Lublin</p>
                <p className="text-[#c3b6a8]">Pon–Sob 7:00–17:00</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-[#faf5ef] p-7 text-[#2f2b28]"
            >
              <label className="block text-sm font-semibold" htmlFor="dp-name">
                Imię i nazwisko
              </label>
              <input
                id="dp-name"
                className="mt-2 w-full border border-[#ddcdb9] bg-[#f4ebe0] px-4 py-3"
                placeholder="Jan Kowalski"
              />
              <label className="mt-5 block text-sm font-semibold" htmlFor="dp-tel">
                Telefon
              </label>
              <input
                id="dp-tel"
                type="tel"
                className="mt-2 w-full border border-[#ddcdb9] bg-[#f4ebe0] px-4 py-3"
                placeholder="600 000 000"
              />
              <label className="mt-5 block text-sm font-semibold" htmlFor="dp-email">
                E-mail
              </label>
              <input
                id="dp-email"
                type="email"
                className="mt-2 w-full border border-[#ddcdb9] bg-[#f4ebe0] px-4 py-3"
                placeholder="jan@twojafirma.pl"
              />
              <label className="mt-5 block text-sm font-semibold" htmlFor="dp-msg">
                Zakres prac
              </label>
              <textarea
                id="dp-msg"
                rows={4}
                className="mt-2 w-full border border-[#ddcdb9] bg-[#f4ebe0] px-4 py-3"
                placeholder="Wymiana pokrycia na domu 120 m²…"
              />
              <button
                type="submit"
                className="mt-6 w-full py-3.5 text-sm font-semibold text-[#faf5ef]"
                style={{ background: TERRA }}
              >
                Wyślij zapytanie
              </button>
              {sent && (
                <p className="mt-4 text-sm font-semibold" style={{ color: TERRA }}>
                  To strona przykładowa — formularz jest nieaktywny.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="px-5 py-8 text-center text-sm" style={{ color: "#8a7f76" }}>
        DachPol · ul. Przykładowa 1, Lublin · +48 664 013 998 — firma fikcyjna, projekt przykładowy SCS
        Web
      </footer>
    </div>
  );
}
