import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Minus, Plus } from "lucide-react";
import { PageShell } from "@/components/scs/PageShell";
import { Reveal } from "@/components/scs/Reveal";
import {
  CENNIK_ABONAMENT,
  CENNIK_JEDNORAZOWO,
  CO_DOSTAJESZ,
  CZEGO_NIE_OBIECUJE,
  JAK_TO_DZIALA,
  LOKALIZACJE,
  type Lokalizacja,
} from "@/lib/lokalizacje";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="display text-[clamp(1.5rem,3.2vw,2.15rem)] font-semibold">{children}</h2>;
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <H2>{title}</H2>
        <div className="mt-6 max-w-3xl">{children}</div>
      </div>
    </section>
  );
}

export function CoDostajeszSection() {
  return (
    <Section eyebrow="Zakres" title="Co dostajesz">
      <ul className="space-y-4">
        {CO_DOSTAJESZ.map((item) => (
          <li key={item} className="flex gap-3 border-t border-hairline pt-4 text-muted-foreground">
            <Check
              strokeWidth={1.25}
              className="mt-1 h-5 w-5 shrink-0 text-foreground"
              aria-hidden="true"
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function JakToDzialaSection() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <p className="eyebrow mb-4">Przebieg</p>
        <H2>Jak to działa</H2>
        <ol className="mt-8">
          {JAK_TO_DZIALA.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 60}>
              <div className="grid gap-4 border-t border-hairline py-8 md:grid-cols-12 md:py-10">
                <span className="display col-span-2 text-3xl font-semibold text-muted-foreground md:text-4xl">
                  {step.n}
                </span>
                <h3 className="display col-span-4 text-xl font-semibold md:text-2xl">
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
  );
}

export function CennikSection() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <p className="eyebrow mb-4">Cena</p>
        <H2>Cennik</H2>
        <div className="mt-8 grid gap-px bg-hairline md:grid-cols-2">
          <div className="bg-background">
            <div className="h-full border border-foreground p-8 md:p-10">
              <p className="eyebrow">{CENNIK_JEDNORAZOWO.label}</p>
              <p className="display mt-3 text-3xl font-bold">{CENNIK_JEDNORAZOWO.price}</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {CENNIK_JEDNORAZOWO.body}
              </p>
            </div>
          </div>
          <div className="bg-background">
            <div className="h-full border border-hairline-strong p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">{CENNIK_ABONAMENT.label}</p>
                <span className="border border-hairline-strong px-2 py-1 text-xs tracking-wide text-foreground">
                  {CENNIK_ABONAMENT.badge}
                </span>
              </div>
              <p className="display mt-3 text-3xl font-bold">{CENNIK_ABONAMENT.price}</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">{CENNIK_ABONAMENT.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CzegoNieObiecujeSection() {
  return (
    <Section eyebrow="Uczciwie" title="Czego nie obiecuję">
      <p className="text-lg leading-relaxed text-muted-foreground">{CZEGO_NIE_OBIECUJE}</p>
    </Section>
  );
}

export function CtaSection() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <div className="border border-hairline-strong p-8 md:p-12">
          <H2>Porozmawiajmy o Twojej stronie</H2>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="tel:+48664013998"
              className="inline-flex min-h-[48px] items-center gap-3 bg-foreground px-8 py-3 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Zadzwoń: +48 664 013 998
            </a>
            <a
              href="/#kontakt"
              className="inline-flex min-h-[48px] items-center gap-3 border border-foreground px-8 py-3 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
            >
              Napisz przez formularz
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocalPage({ lokalizacja }: { lokalizacja: Lokalizacja }) {
  const [open, setOpen] = useState<number | null>(0);
  const pozostale = LOKALIZACJE.filter((l) => l.slug !== lokalizacja.slug);

  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-12 md:px-10 md:pt-14 md:pb-16">
          <Link
            to="/strony-internetowe"
            className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline underline-offset-8 transition-colors hover:text-foreground"
          >
            ← Wszystkie miejscowości
          </Link>
          <h1 className="display mt-8 max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)] font-bold">
            Strony internetowe — {lokalizacja.nazwa}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {lokalizacja.lead}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground/80">
            {lokalizacja.dojazd}
          </p>
        </div>
      </section>

      <Section eyebrow="Odbiorcy" title={`Dla kogo ${lokalizacja.wLokalizacji}`}>
        <ul className="space-y-4">
          {lokalizacja.branze.map((b) => (
            <li
              key={b}
              className="border-t border-hairline pt-4 text-lg leading-relaxed text-muted-foreground"
            >
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-8 border-t border-hairline pt-6 leading-relaxed text-muted-foreground">
          Nie ma Twojej branży na liście? To nic nie zmienia — zakres pracy jest ten sam.
        </p>
      </Section>

      <Section eyebrow="Kontekst" title={`Dlaczego to ma znaczenie ${lokalizacja.wLokalizacji}`}>
        <p className="text-lg leading-relaxed text-muted-foreground">{lokalizacja.akapit}</p>
      </Section>

      <CoDostajeszSection />
      <JakToDzialaSection />
      <CennikSection />
      <CzegoNieObiecujeSection />

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">FAQ</p>
          <H2>Najczęstsze pytania</H2>
          <div className="mt-8 max-w-3xl">
            {lokalizacja.faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-t border-hairline last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex min-h-[56px] w-full items-center justify-between gap-6 py-5 text-left transition-opacity hover:opacity-60"
                  >
                    <span className="display text-xl font-semibold md:text-2xl">{item.q}</span>
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
                      <p className="max-w-2xl pb-8 text-lg leading-relaxed text-muted-foreground">
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

      <CtaSection />

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">Zasięg</p>
          <H2>Obsługiwane miejscowości</H2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Pracuję zdalnie w całej Polsce. Poniżej miejscowości, do których mogę też przyjechać.
          </p>
          <ul className="mt-8 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {pozostale.map((l) => (
              <li key={l.slug} className="bg-background">
                <a
                  href={`/strony-internetowe/${l.slug}`}
                  className="flex min-h-[56px] items-center justify-between gap-4 border border-hairline-strong px-5 py-4 text-base transition-colors hover:border-foreground"
                >
                  <span>{l.nazwa}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 border-t border-hairline pt-6">
            <Link
              to="/strony-internetowe"
              className="inline-flex min-h-[44px] items-center text-base underline underline-offset-8 transition-opacity hover:opacity-70"
            >
              Strony internetowe w Twojej okolicy — pełna lista
            </Link>
            <a
              href="/#realizacje"
              className="inline-flex min-h-[44px] items-center text-base underline underline-offset-8 transition-opacity hover:opacity-70"
            >
              Zobacz przykładowe strony
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function localHead(l: Lokalizacja) {
  const url = `https://scsweb.pl/strony-internetowe/${l.slug}`;
  return {
    meta: [
      { title: l.title },
      { name: "description", content: l.description },
      { property: "og:title", content: l.title },
      { property: "og:description", content: l.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
