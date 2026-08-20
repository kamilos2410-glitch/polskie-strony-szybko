import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DemoBar } from "@/components/scs/DemoBar";

export const Route = createFileRoute("/demo/autoserwis-kowalski")({
  component: AutoSerwis,
  head: () => ({
    meta: [
      { title: "AutoSerwis Kowalski — warsztat samochodowy (strona przykładowa)" },
      {
        name: "description",
        content:
          "Przykładowy projekt strony dla warsztatu samochodowego AutoSerwis Kowalski. Realizacja demonstracyjna SCS Web.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "AutoSerwis Kowalski — strona przykładowa SCS Web" },
      {
        property: "og:description",
        content: "Demonstracyjna strona warsztatu samochodowego zaprojektowana przez SCS Web.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const AMBER = "#ffb300";
const DISPLAY = '"Schibsted Grotesk Variable", system-ui, sans-serif';

const SERVICES = [
  {
    n: "01",
    title: "Diagnostyka komputerowa",
    body: "Odczyt błędów, testy czujników i jasne wytłumaczenie, co naprawdę wymaga naprawy.",
  },
  {
    n: "02",
    title: "Mechanika ogólna",
    body: "Zawieszenie, hamulce, rozrządy, sprzęgła i wymiany olejów w każdej popularnej marce.",
  },
  {
    n: "03",
    title: "Klimatyzacja",
    body: "Odgrzybianie, uzupełnienie czynnika R134a i R1234yf, wykrywanie nieszczelności.",
  },
  {
    n: "04",
    title: "Wymiana opon",
    body: "Sezonowa wymiana, wyważanie i przechowanie kompletu kół w naszym magazynie.",
  },
];

const OPINIE = [
  { text: "Zero naciągania. Pokazali zużytą część i wytłumaczyli, po co ją wymieniać.", a: "Paweł R." },
  { text: "Diagnostyka w 40 minut, auto odebrane tego samego dnia. Polecam.", a: "Iwona M." },
  { text: "Uczciwa wycena przed pracą i tyle samo na fakturze. Rzadkość.", a: "Krzysztof D." },
];

function AutoSerwis() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] pt-9 text-[#ededed]" style={{ fontFamily: '"Inter Variable", system-ui, sans-serif' }}>
      <DemoBar variant="dark" />

      <header className="sticky top-9 z-30 border-b-2 border-[#ffb300] bg-[#161616]">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <span
            className="text-xl font-extrabold tracking-[0.06em] uppercase"
            style={{ fontFamily: DISPLAY }}
          >
            Auto<span style={{ color: AMBER }}>Serwis</span> Kowalski
          </span>
          <nav className="hidden gap-8 text-xs font-bold tracking-[0.14em] text-[#9a9a9a] uppercase md:flex">
            <a href="#uslugi">Usługi</a>
            <a href="#godziny">Godziny</a>
            <a href="#opinie">Opinie</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a
            href="#kontakt"
            className="px-5 py-2.5 text-xs font-extrabold tracking-[0.12em] text-[#121212] uppercase"
            style={{ background: AMBER }}
          >
            Umów wizytę
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#262626]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #ffb300 0 14px, transparent 14px 28px)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
            <p className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: AMBER }}>
              Warsztat samochodowy · ul. Przykładowa 1
            </p>
            <h1
              className="mt-5 max-w-3xl text-5xl leading-[0.95] font-extrabold tracking-tight uppercase md:text-7xl"
              style={{ fontFamily: DISPLAY }}
            >
              Naprawiamy auta.
              <br />
              <span style={{ color: AMBER }}>Tłumaczymy rachunki.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-[#a8a8a8]">
              Rodzinny warsztat z 18-letnim stażem. Wycena przed pracą, zdjęcia zużytych części i
              termin, którego dotrzymujemy.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="px-8 py-4 text-sm font-extrabold tracking-[0.12em] text-[#121212] uppercase"
                style={{ background: AMBER }}
              >
                Umów wizytę
              </a>
              <a
                href="tel:600000000"
                className="border border-[#4a4a4a] px-8 py-4 text-sm font-extrabold tracking-[0.12em] uppercase"
              >
                600 000 000
              </a>
            </div>
          </div>
        </section>

        <section id="uslugi" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2
            className="text-3xl font-extrabold tracking-tight uppercase md:text-4xl"
            style={{ fontFamily: DISPLAY }}
          >
            Co robimy
          </h2>
          <div className="mt-10 grid gap-px bg-[#262626] sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.n} className="bg-[#161616] p-8">
                <span className="text-sm font-mono font-bold" style={{ color: AMBER }}>
                  {s.n}
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase" style={{ fontFamily: DISPLAY }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-[#a8a8a8]">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="godziny" className="border-y border-[#262626] bg-[#161616]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-extrabold uppercase" style={{ fontFamily: DISPLAY }}>
                Godziny otwarcia
              </h2>
              <ul className="mt-5 space-y-2 text-[#a8a8a8]">
                <li className="flex justify-between border-b border-[#262626] pb-2">
                  <span>Poniedziałek – piątek</span>
                  <span className="text-[#ededed]">8:00 – 18:00</span>
                </li>
                <li className="flex justify-between border-b border-[#262626] pb-2">
                  <span>Sobota</span>
                  <span className="text-[#ededed]">9:00 – 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Niedziela</span>
                  <span className="text-[#ededed]">nieczynne</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2 md:pl-10">
              <h2 className="text-xl font-extrabold uppercase" style={{ fontFamily: DISPLAY }}>
                Auto zastępcze
              </h2>
              <p className="mt-5 max-w-xl text-[#a8a8a8]">
                Przy naprawach powyżej jednego dnia udostępniamy auto zastępcze bez dodatkowych
                opłat. Wystarczy zaznaczyć to przy umawianiu wizyty.
              </p>
              <p className="mt-6 text-4xl font-extrabold" style={{ fontFamily: DISPLAY, color: AMBER }}>
                18 lat na rynku
              </p>
            </div>
          </div>
        </section>

        <section id="opinie" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2
            className="text-3xl font-extrabold tracking-tight uppercase md:text-4xl"
            style={{ fontFamily: DISPLAY }}
          >
            Opinie kierowców
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {OPINIE.map((o) => (
              <figure key={o.a} className="border-l-2 bg-[#161616] p-7" style={{ borderColor: AMBER }}>
                <blockquote className="text-[#d4d4d4]">„{o.text}”</blockquote>
                <figcaption className="mt-4 text-xs font-bold tracking-[0.14em] text-[#8a8a8a] uppercase">
                  {o.a}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="kontakt" className="border-t border-[#262626] bg-[#161616]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2
                className="text-3xl font-extrabold uppercase md:text-4xl"
                style={{ fontFamily: DISPLAY }}
              >
                Umów wizytę
              </h2>
              <p className="mt-4 max-w-sm text-[#a8a8a8]">
                Zostaw markę auta i opis problemu — oddzwaniamy z terminem i wstępną wyceną.
              </p>
              <div className="mt-8 space-y-3 text-[#d4d4d4]">
                <p className="text-2xl font-extrabold" style={{ color: AMBER }}>
                  600 000 000
                </p>
                <p>ul. Przykładowa 1, 26-600 Radom</p>
                <p>kontakt@autoserwis-kowalski.example</p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="border border-[#2e2e2e] bg-[#121212] p-7"
            >
              <label className="block text-xs font-bold tracking-[0.14em] uppercase" htmlFor="ak-car">
                Marka i model
              </label>
              <input
                id="ak-car"
                className="mt-2 w-full border border-[#2e2e2e] bg-[#181818] px-4 py-3 text-[#ededed]"
                placeholder="Skoda Octavia 1.6 TDI"
              />
              <label className="mt-5 block text-xs font-bold tracking-[0.14em] uppercase" htmlFor="ak-tel">
                Telefon
              </label>
              <input
                id="ak-tel"
                className="mt-2 w-full border border-[#2e2e2e] bg-[#181818] px-4 py-3 text-[#ededed]"
                placeholder="600 000 000"
              />
              <label className="mt-5 block text-xs font-bold tracking-[0.14em] uppercase" htmlFor="ak-msg">
                Opis problemu
              </label>
              <textarea
                id="ak-msg"
                rows={4}
                className="mt-2 w-full border border-[#2e2e2e] bg-[#181818] px-4 py-3 text-[#ededed]"
                placeholder="Stuka przednie zawieszenie…"
              />
              <button
                type="submit"
                className="mt-6 w-full py-3.5 text-sm font-extrabold tracking-[0.12em] text-[#121212] uppercase"
                style={{ background: AMBER }}
              >
                Wyślij zgłoszenie
              </button>
              {sent && (
                <p className="mt-4 text-sm font-semibold" style={{ color: AMBER }}>
                  To strona przykładowa — formularz jest nieaktywny.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#262626] px-5 py-8 text-center text-sm text-[#7a7a7a]">
        AutoSerwis Kowalski · ul. Przykładowa 1, Radom · 600 000 000 — firma fikcyjna, projekt
        przykładowy SCS Web
      </footer>
    </div>
  );
}
