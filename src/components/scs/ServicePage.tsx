import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { PageShell } from "@/components/scs/PageShell";
import { Reveal } from "@/components/scs/Reveal";
import type { Service } from "@/lib/services";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold">{children}</h2>
  );
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
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <H2>{title}</H2>
        <div className="mt-8 max-w-3xl">{children}</div>
      </div>
    </section>
  );
}

export function ServicePage({ service }: { service: Service }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 pt-14 pb-16 md:px-10 md:pt-20 md:pb-24">
          <a
            href="/#cennik"
            className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline underline-offset-8 transition-colors hover:text-foreground"
          >
            ← Wróć do oferty
          </a>
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.25rem,5.5vw,4rem)] font-bold">
            {service.h1}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {service.promise}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="/#kontakt"
              className="inline-flex min-h-[56px] items-center gap-3 bg-foreground px-10 py-4 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Zamów darmowe demo
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="tel:+48664013998"
              className="inline-flex min-h-[56px] items-center gap-3 border border-foreground px-10 py-4 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
            >
              Zadzwoń: +48 664 013 998
            </a>
          </div>
        </div>
      </section>

      <Section eyebrow="Po co to" title="Co to jest i po co">
        <div className="space-y-5">
          {service.whatIs.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section eyebrow="Odbiorcy" title="Dla kogo">
        <ul className="space-y-5">
          {service.forWhom.map((p) => (
            <li key={p} className="border-t border-hairline pt-5 text-lg leading-relaxed text-muted-foreground">
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Zakres" title="Co dokładnie dostajesz">
        <ul className="space-y-4">
          {service.getList.map((item) => (
            <li key={item} className="flex gap-3 border-t border-hairline pt-4 text-muted-foreground">
              <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Czas" title="Ile to trwa">
        <div className="space-y-5">
          {service.duration.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
          <p className="eyebrow mb-4">Przebieg</p>
          <H2>Jak to wygląda krok po kroku</H2>
          <ol className="mt-10">
            {service.steps.map((step, i) => (
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
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
          <p className="eyebrow mb-4">Cena</p>
          <H2>Cena</H2>
          <div className="mt-10 grid gap-px bg-hairline md:grid-cols-2">
            <div className="bg-background">
              <div className="h-full border border-foreground p-8 md:p-10">
                <p className="display text-xl font-semibold">Płacisz raz</p>
                <ul className="mt-6 space-y-4">
                  {service.priceOnce.map((p) => (
                    <li key={p} className="flex gap-3 border-t border-hairline pt-4 text-muted-foreground">
                      <Check strokeWidth={1.25} className="mt-1 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
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
                  {service.priceRecurring.map((p) => (
                    <li key={p} className="border-t border-hairline pt-4 leading-relaxed text-muted-foreground">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {service.notes?.length ? (
            <div className="mt-8 space-y-4 border-t border-hairline pt-6">
              {service.notes.map((n) => (
                <p key={n} className="max-w-3xl leading-relaxed text-muted-foreground">
                  {n}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
          <p className="eyebrow mb-4">FAQ</p>
          <H2>Najczęstsze pytania</H2>
          <div className="mt-10 max-w-3xl">
            {service.faq.map((item, i) => {
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
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
          <div className="border border-hairline p-8 md:p-12">
            <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold">
              Zamów darmowe demo albo po prostu porozmawiajmy
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Napisz kilka zdań o swojej firmie albo zadzwoń. Doradzę bez zobowiązań i powiem
              wprost, czy ta usługa ma u Ciebie sens.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="/#kontakt"
                className="inline-flex min-h-[56px] items-center gap-3 bg-foreground px-10 py-4 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                Zamów darmowe demo
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="tel:+48664013998"
                className="inline-flex min-h-[56px] items-center gap-3 border border-foreground px-10 py-4 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
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

export function serviceHead(service: Service) {
  const url = `https://scsweb.pl/uslugi/${service.slug}`;
  return {
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
