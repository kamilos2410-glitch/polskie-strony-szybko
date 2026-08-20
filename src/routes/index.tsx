import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, Timer, Ban, UserRound, Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/scs/Reveal";
import { HeroVisual } from "@/components/scs/HeroVisual";
import { HydroPreview, AutoPreview, DachPreview } from "@/components/scs/DemoPreviews";
import { ContactForm } from "@/components/scs/ContactForm";

const TITLE = "Strona internetowa dla firmy w 48h — SCS Web";
const DESCRIPTION =
  "SCS Web tworzy strony internetowe dla lokalnych firm w Polsce — hydraulików, warsztatów i dekarzy. Darmowy projekt w 48 godzin, płacisz dopiero gdy Ci się spodoba.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: "https://scsweb.pl/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://scsweb.pl/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "SCS Web",
          description: DESCRIPTION,
          url: "https://scsweb.pl",
          telephone: "+48 664 013 998",
          email: "kamil.pietraszko@onet.pl",
          founder: { "@type": "Person", name: "Kamil Pietraszko" },
          areaServed: { "@type": "Country", name: "Polska" },
          priceRange: "1500 PLN",
        }),
      },
    ],
  }),
});

const NAV = [
  { href: "#jak-to-dziala", label: "Jak to działa" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#cennik", label: "Cennik" },
  { href: "#faq", label: "FAQ" },
];

const STEPS = [
  {
    n: "01",
    title: "Darmowe demo",
    body: "Opowiadasz o swojej firmie. W 48 godzin dostajesz link do gotowego projektu strony — nie makiety, tylko działającej witryny.",
  },
  {
    n: "02",
    title: "Akceptacja",
    body: "Zgłaszasz poprawki. Płacisz dopiero wtedy, gdy projekt Ci się podoba. Wcześniej nie wydajesz ani złotówki.",
  },
  {
    n: "03",
    title: "Publikacja",
    body: "Strona działa pod Twoją domeną w 48 godzin od akceptacji. Domenę rejestruję na Twoje dane.",
  },
];

const CASES = [
  {
    name: "Hydro-Perfekt",
    branch: "Hydraulik — Bielsko-Biała",
    url: "hydro-perfekt.pl",
    desc: "Jasny, uporządkowany layout z całodobowym paskiem awaryjnym, siatką usług z widełkami cen i opiniami klientów.",
    to: "/demo/hydro-perfekt",
    Preview: HydroPreview,
  },
  {
    name: "AutoSerwis Kowalski",
    branch: "Warsztat samochodowy — Radom",
    url: "autoserwis-kowalski.pl",
    desc: "Ciemna, warsztatowa estetyka z żółtym akcentem, mocną typografią, godzinami otwarcia i szybkim umawianiem wizyt.",
    to: "/demo/autoserwis-kowalski",
    Preview: AutoPreview,
  },
  {
    name: "DachPol",
    branch: "Dekarz — Lublin",
    url: "dachpol.pl",
    desc: "Ciepła, ziemista paleta z szeryfową typografią, galerią realizacji, przeglądem materiałów i licznikiem doświadczenia.",
    to: "/demo/dachpol",
    Preview: DachPreview,
  },
] as const;

const WHY = [
  {
    icon: ShieldCheck,
    title: "Projekt przed płatnością",
    body: "Najpierw widzisz gotową stronę, potem decydujesz. Nic nie ryzykujesz.",
  },
  {
    icon: Timer,
    title: "48 godzin zamiast tygodni",
    body: "Nie czekasz miesiąca na pierwszy szkic. Demo dostajesz w dwa dni.",
  },
  {
    icon: Ban,
    title: "Zero abonamentu za samą stronę",
    body: "Przy zakupie jednorazowym strona jest Twoja. Bez comiesięcznych opłat.",
  },
  {
    icon: UserRound,
    title: "Bezpośredni kontakt",
    body: "Rozmawiasz z jedną osobą, która robi Twoją stronę. Bez agencji i pośredników.",
  },
];

const FAQ = [
  {
    q: "Ile to kosztuje w przyszłości?",
    a: "Za samą stronę nie płacisz żadnego abonamentu. Jedyny stały koszt to domena, czyli ok. 100–150 zł rocznie. W wariancie abonamentowym za 199 zł miesięcznie domena i hosting są już w cenie.",
  },
  {
    q: "Czyja jest domena?",
    a: "Twoja. Domenę zawsze rejestruję na Twoje dane, więc jest Twoją własnością i możesz ją w każdej chwili przenieść.",
  },
  {
    q: "Ile trwa realizacja?",
    a: "Projekt demo dostajesz w 48 godzin od rozmowy. Publikacja pod Twoją domeną następuje w ciągu 48 godzin od akceptacji projektu.",
  },
  {
    q: "Co jeśli projekt mi się nie spodoba?",
    a: "Nic nie płacisz. Demo jest darmowe i całkowicie niezobowiązujące — po prostu kończymy współpracę.",
  },
  {
    q: "Czy mogę później coś zmienić na stronie?",
    a: "Tak. W abonamencie drobne zmiany są w cenie. Przy zakupie jednorazowym wyceniam je indywidualnie, zawsze przed rozpoczęciem pracy.",
  },
];

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-14 max-w-3xl md:mb-20">
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="display text-[clamp(2rem,5vw,3.5rem)] font-semibold">{title}</h2>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-10">
          <a href="#top" className="display text-lg font-bold tracking-tight">
            SCS Web
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="bg-foreground px-5 py-2.5 text-xs font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Darmowe demo
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="border-b border-hairline">
          <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-6 pt-20 pb-20 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-10 md:pt-28 md:pb-28">
            <Reveal>
              <p className="eyebrow mb-8">Strony dla lokalnych firm w Polsce</p>
              <h1 className="display text-[clamp(2.5rem,6vw,4.25rem)] font-bold">
                Profesjonalna strona dla Twojej firmy w 48 godzin
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Zobaczysz projekt, zanim zapłacisz. Bez ryzyka, bez zaliczek, bez abonamentu za samą
                stronę.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#kontakt"
                  className="bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Zamów darmowe demo
                </a>
                <a
                  href="#realizacje"
                  className="border border-foreground/60 px-8 py-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
                >
                  Zobacz przykłady
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        {/* JAK TO DZIAŁA */}
        <section id="jak-to-dziala" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
            <SectionHead eyebrow="Proces" title="Jak to działa" />
            <ol>
              {STEPS.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 90}>
                  <div className="grid gap-6 border-t border-hairline py-10 md:grid-cols-12 md:py-14">
                    <span className="display col-span-2 text-4xl font-semibold text-muted-foreground md:text-5xl">
                      {step.n}
                    </span>
                    <h3 className="display col-span-4 text-2xl font-semibold md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="col-span-6 max-w-xl leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* REALIZACJE */}
        <section id="realizacje" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
            <SectionHead eyebrow="Realizacje" title="Przykładowe projekty" />
            <div className="space-y-12 md:space-y-16">
              {CASES.map((c, i) => (
                <Reveal key={c.name} delay={i * 60}>
                  <article className="border border-hairline bg-secondary/30">
                    <div className="border-b border-hairline p-4 md:p-6">
                      <div className="border border-hairline bg-[#0d0d0d]">
                        <div className="flex h-7 items-center gap-1.5 border-b border-hairline px-3">
                          <span className="h-1.5 w-1.5 border border-foreground/35" />
                          <span className="h-1.5 w-1.5 border border-foreground/25" />
                          <span className="h-1.5 w-1.5 border border-foreground/25" />
                          <span className="ml-3 text-[10px] text-muted-foreground">{c.url}</span>
                        </div>
                        <div className="aspect-[16/9] overflow-hidden">
                          <c.Preview />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-end justify-between gap-6 p-6 md:p-8">
                      <div>
                        <p className="eyebrow mb-3">{c.branch}</p>
                        <h3 className="display text-2xl font-semibold md:text-3xl">{c.name}</h3>
                        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                          {c.desc}
                        </p>
                      </div>
                      <Link
                        to={c.to}
                        className="bg-foreground px-7 py-3.5 text-sm font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                      >
                        Zobacz demo
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-14 border-t border-hairline pt-6 text-sm text-muted-foreground">
              Projekty przykładowe dla fikcyjnych firm, zaprojektowane od zera — Twoja strona
              powstanie tak samo, pod Twoją branżę i Twoich klientów.
            </p>
          </div>
        </section>

        {/* CENNIK */}
        <section id="cennik" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
            <SectionHead eyebrow="Cennik" title="Dwa sposoby na start" />
            <div className="grid gap-px bg-hairline md:grid-cols-2">
              <Reveal className="bg-background">
                <div className="flex h-full flex-col border border-hairline p-8 md:p-12">
                  <p className="eyebrow mb-6">Jednorazowo</p>
                  <p className="display text-[clamp(2.25rem,5vw,3.25rem)] font-bold">1500 zł</p>
                  <ul className="mt-8 space-y-4 text-muted-foreground">
                    <li className="border-t border-hairline pt-4">
                      Strona na własność — bez ukrytych warunków
                    </li>
                    <li className="border-t border-hairline pt-4">Publikacja pod Twoją domeną</li>
                    <li className="border-t border-hairline pt-4">
                      Potem jedyny stały koszt to domena, ok. 100–150 zł rocznie, rejestrowana na
                      Twoje dane
                    </li>
                    <li className="border-t border-hairline pt-4">Żadnego abonamentu za stronę</li>
                  </ul>
                  <a
                    href="#kontakt"
                    className="mt-10 w-fit border border-foreground px-7 py-3.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
                  >
                    Zamów darmowe demo
                  </a>
                </div>
              </Reveal>

              <Reveal delay={90} className="bg-background">
                <div className="flex h-full flex-col border border-foreground p-8 md:p-12">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <p className="eyebrow">Abonament</p>
                    <span className="border border-foreground px-3 py-1 text-[10px] tracking-widest uppercase">
                      Bez kosztów na start
                    </span>
                  </div>
                  <p className="display text-[clamp(2.25rem,5vw,3.25rem)] font-bold">
                    199 zł<span className="text-xl font-normal">/mies.</span>
                  </p>
                  <ul className="mt-8 space-y-4 text-muted-foreground">
                    <li className="border-t border-hairline pt-4">0 zł na start</li>
                    <li className="border-t border-hairline pt-4">Domena i hosting w cenie</li>
                    <li className="border-t border-hairline pt-4">
                      Drobne zmiany na stronie i opieka techniczna
                    </li>
                    <li className="border-t border-hairline pt-4">
                      Monitoring działania strony przez całą dobę
                    </li>
                  </ul>
                  <a
                    href="#kontakt"
                    className="mt-10 w-fit bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                  >
                    Zamów darmowe demo
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-col gap-6 border border-hairline p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="max-w-2xl">
                  <h3 className="display text-xl font-semibold md:text-2xl">
                    Pakiet Start Google — 500 zł
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Założenie lub optymalizacja wizytówki Google Maps, podpięcie strony, uzupełnienie
                    danych i zdjęć oraz instrukcja zbierania opinii od klientów.
                  </p>
                </div>
                <a
                  href="#kontakt"
                  className="w-fit text-sm font-medium underline underline-offset-8 transition-opacity hover:opacity-60"
                >
                  Dopytaj o pakiet
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* DLACZEGO */}
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
            <SectionHead eyebrow="Dlaczego SCS Web" title="Cztery powody, żeby zacząć" />
            <div className="grid gap-px bg-hairline sm:grid-cols-2">
              {WHY.map((item, i) => (
                <Reveal key={item.title} delay={i * 70} className="bg-background">
                  <div className="h-full p-8 md:p-12">
                    <item.icon strokeWidth={1} className="h-8 w-8" aria-hidden="true" />
                    <h3 className="display mt-8 text-xl font-semibold md:text-2xl">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
            <SectionHead eyebrow="FAQ" title="Najczęstsze pytania" />
            <div className="max-w-3xl">
              {FAQ.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q} className="border-t border-hairline last:border-b">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left transition-opacity hover:opacity-60"
                    >
                      <span className="display text-lg font-semibold md:text-xl">{item.q}</span>
                      {isOpen ? (
                        <Minus strokeWidth={1.25} className="h-5 w-5 shrink-0" aria-hidden="true" />
                      ) : (
                        <Plus strokeWidth={1.25} className="h-5 w-5 shrink-0" aria-hidden="true" />
                      )}
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-8 leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
            <div className="grid gap-14 md:grid-cols-2 md:gap-24">
              <Reveal>
                <p className="eyebrow mb-5">Kontakt</p>
                <h2 className="display text-[clamp(2rem,5vw,3.5rem)] font-semibold">
                  Zamów darmowe demo
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                  Napisz kilka zdań o swojej firmie. W 48 godzin dostaniesz link do gotowego projektu
                  strony — bez zaliczki i bez zobowiązań.
                </p>
                <div className="mt-10 space-y-3 text-sm">
                  <p>
                    <a href="tel:+48664013998" className="underline underline-offset-8">
                      664 013 998
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:kamil.pietraszko@onet.pl"
                      className="underline underline-offset-8"
                    >
                      kamil.pietraszko@onet.pl
                    </a>
                  </p>
                </div>
              </Reveal>
              <Reveal delay={90}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="display text-base font-bold text-foreground">SCS Web</p>
            <p className="mt-2">Strony internetowe dla lokalnych firm</p>
          </div>
          <div className="space-y-1 md:text-right">
            <p className="text-foreground">Kamil Pietraszko</p>
            <p>tel. 664 013 998</p>
            <p>kamil.pietraszko@onet.pl</p>
            <p className="pt-2">© 2026 SCS Web</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
