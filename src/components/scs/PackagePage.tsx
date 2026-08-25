import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Minus, Plus } from "lucide-react";
import { PageShell } from "@/components/scs/PageShell";
import { Reveal } from "@/components/scs/Reveal";
import type { Pkg } from "@/lib/packages";

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
        <div className="mt-8 max-w-3xl">{children}</div>
      </div>
    </section>
  );
}

export function PackagePage({ pkg }: { pkg: Pkg }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-12 md:px-10 md:pt-14 md:pb-16">
          <a
            href="/#cennik"
            className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline underline-offset-8 transition-colors hover:text-foreground"
          >
            ← Wróć do oferty
          </a>
          <p className="eyebrow mt-8 mb-4">Pakiet</p>
          <h1 className="display max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)] font-bold">{pkg.h1}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {pkg.promise}
          </p>
          <div className="mt-10 flex flex-wrap items-baseline gap-5 border-t border-hairline pt-8">
            <span className="text-lg text-muted-foreground line-through">
              osobno {pkg.separate}
            </span>
            <span className="display text-[clamp(2rem,5vw,3rem)] font-bold">
              w pakiecie {pkg.bundle}
            </span>
          </div>
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

      {/* CO JEST W PAKIECIE */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">Zawartość</p>
          <H2>Co jest w pakiecie</H2>
          <ul className="mt-10">
            {pkg.items.map((item) => (
              <li key={item.to} className="border-t border-hairline last:border-b">
                <Link
                  to={item.to}
                  className="group flex min-h-[64px] flex-wrap items-center justify-between gap-4 py-6 transition-opacity hover:opacity-70"
                >
                  <span className="display text-xl font-semibold md:text-2xl">{item.name}</span>
                  <span className="flex items-center gap-4 text-muted-foreground">
                    {item.price}
                    <span
                      aria-hidden="true"
                      className="text-foreground transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            Osobno wyszłoby {pkg.separate}. W pakiecie płacisz {pkg.bundle}.
            {pkg.bundleNote ? ` ${pkg.bundleNote}` : ""}
          </p>
        </div>
      </section>

      <Section eyebrow="Odbiorcy" title="Dla kogo">
        <ul className="space-y-5">
          {pkg.forWhom.map((p) => (
            <li
              key={p}
              className="border-t border-hairline pt-5 text-lg leading-relaxed text-muted-foreground"
            >
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Czas" title="Ile trwa">
        <ul className="space-y-4">
          {pkg.duration.map((p) => (
            <li key={p} className="border-t border-hairline pt-4 leading-relaxed text-muted-foreground">
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">Przebieg</p>
          <H2>Jak to wygląda krok po kroku</H2>
          <ol className="mt-10">
            {pkg.steps.map((step, i) => (
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
          <div className="mt-10 grid gap-px bg-hairline md:grid-cols-2">
            <div className="bg-background">
              <div className="h-full border border-foreground p-8 md:p-10">
                <p className="display text-xl font-semibold">Płacisz raz</p>
                <ul className="mt-6 space-y-4">
                  {pkg.priceOnce.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 border-t border-hairline pt-4 text-muted-foreground"
                    >
                      <Check
                        strokeWidth={1.25}
                        className="mt-1 h-5 w-5 shrink-0 text-foreground"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-background">
              <div className="h-full border border-hairline p-8 md:p-10">
                <p className="display text-xl font-semibold">Koszty cykliczne (nie do nas)</p>
                <ul className="mt-6 space-y-4">
                  {pkg.priceRecurring.map((p) => (
                    <li key={p} className="border-t border-hairline pt-4 leading-relaxed text-muted-foreground">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {pkg.notes?.length ? (
            <div className="mt-8 space-y-4 border-t border-hairline pt-6">
              {pkg.notes.map((n) => (
                <p key={n} className="max-w-3xl leading-relaxed text-muted-foreground">
                  {n}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">FAQ</p>
          <H2>Najczęstsze pytania</H2>
          <div className="mt-10 max-w-3xl">
            {pkg.faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-t border-hairline last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex min-h-[56px] w-full items-center justify-between gap-6 py-7 text-left transition-opacity hover:opacity-60"
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
          <div className="border border-hairline p-8 md:p-12">
            <h2 className="display text-[clamp(1.5rem,3.2vw,2.15rem)] font-semibold">
              Zamów darmowe demo albo po prostu porozmawiajmy
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Napisz kilka zdań o swojej firmie albo zadzwoń. Doradzę bez zobowiązań i powiem
              wprost, czy ten pakiet ma u Ciebie sens.
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
            <p className="mt-8 border-t border-hairline pt-6">
              <a
                href="/#cennik"
                className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline underline-offset-8 transition-colors hover:text-foreground"
              >
                ← Wróć do oferty
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function packageHead(pkg: Pkg) {
  const url = `https://scsweb.pl/pakiety/${pkg.slug}`;
  return {
    meta: [
      { title: pkg.metaTitle },
      { name: "description", content: pkg.metaDescription },
      { property: "og:title", content: pkg.metaTitle },
      { property: "og:description", content: pkg.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
