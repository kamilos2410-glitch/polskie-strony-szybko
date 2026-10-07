import { useState } from "react";
import { ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import { PageShell } from "@/components/scs/PageShell";
import { Reveal } from "@/components/scs/Reveal";
import type { Branza } from "@/lib/branze";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="display text-[clamp(1.5rem,3.2vw,2.15rem)] font-semibold">{children}</h2>;
}

export function BranchPage({ branza }: { branza: Branza }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-12 md:px-10 md:pt-14 md:pb-16">
          <a
            href="/#cennik"
            className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline underline-offset-8 transition-colors hover:text-foreground"
          >
            ← Wróć do oferty
          </a>
          <h1 className="display mt-8 max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)] font-bold">
            {branza.h1}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {branza.promise}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="/#kontakt"
              className="inline-flex min-h-[48px] items-center gap-3 bg-foreground px-8 py-3 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Zamów darmowe demo
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="tel:+48664013998"
              className="inline-flex min-h-[48px] items-center gap-3 border border-foreground px-8 py-3 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
            >
              Zadzwoń: +48 664 013 998
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">Co decyduje</p>
          <H2>Czego taka strona naprawdę potrzebuje</H2>
          <div className="mt-10">
            {branza.czegoPotrzebuje.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="grid gap-3 border-t border-hairline py-7 md:grid-cols-12 md:gap-8 md:py-9">
                  <h3 className="display col-span-5 text-xl font-semibold md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="col-span-7 max-w-2xl leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">Zakres</p>
          <H2>Co dostajesz</H2>
          <ul className="mt-8 max-w-3xl space-y-4">
            {branza.getList.map((item) => (
              <li key={item} className="flex gap-3 border-t border-hairline pt-4 text-muted-foreground">
                <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {branza.proof ? (
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
            <p className="eyebrow mb-4">Dowód</p>
            <H2>{branza.proof.title}</H2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {branza.proof.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              {branza.proof.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex min-h-[44px] items-center gap-2 font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  {l.label}
                  <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">Przebieg</p>
          <H2>Jak to wygląda krok po kroku</H2>
          <ol className="mt-10">
            {branza.steps.map((step, i) => (
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

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">Cena</p>
          <H2>Cena</H2>
          <ul className="mt-8 max-w-3xl space-y-4">
            {branza.price.map((p) => (
              <li key={p} className="border-t border-hairline pt-4 text-lg leading-relaxed text-muted-foreground">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">FAQ</p>
          <H2>Najczęstsze pytania</H2>
          <div className="mt-8 max-w-3xl">
            {branza.faq.map((item, i) => {
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

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <div className="border border-hairline-strong p-8 md:p-12">
            <h2 className="display text-[clamp(1.5rem,3.2vw,2.15rem)] font-semibold">
              Zamów darmowe demo albo po prostu porozmawiajmy
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Opowiedz kilka zdań o firmie albo zadzwoń. Doradzę bez zobowiązań i powiem wprost,
              czy strona jest u Ciebie tym, co najbardziej się opłaci.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="/#kontakt"
                className="inline-flex min-h-[48px] items-center gap-3 bg-foreground px-8 py-3 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                Zamów darmowe demo
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="tel:+48664013998"
                className="inline-flex min-h-[48px] items-center gap-3 border border-foreground px-8 py-3 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
              >
                Zadzwoń: +48 664 013 998
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/**
 * Canonical ZAWSZE z ukośnikiem na końcu — bez tego adres kanoniczny
 * wskazuje na przekierowanie i Google nie indeksuje strony.
 * Pełny opis pułapki: claude/seo-scsweb-canonical-20-09.md
 */
export function branchHead(branza: Branza) {
  const url = `https://scsweb.pl/branze/${branza.slug}/`;
  return {
    meta: [
      { title: branza.metaTitle },
      { name: "description", content: branza.metaDescription },
      { property: "og:title", content: branza.metaTitle },
      { property: "og:description", content: branza.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: branza.h1,
          description: branza.metaDescription,
          url,
          provider: {
            "@type": "ProfessionalService",
            name: "SCS Web",
            url: "https://scsweb.pl/",
            telephone: "+48 664 013 998",
          },
          areaServed: { "@type": "Country", name: "Polska" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: branza.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  };
}
