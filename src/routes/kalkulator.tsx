import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { PageShell } from "@/components/scs/PageShell";
import { ContactForm } from "@/components/scs/ContactForm";
import {
  EMPTY_SELECTION,
  ITEMS,
  calculate,
  unitPrice,
  zl,
  type ItemKey,
  type Selection,
} from "@/lib/calculator";

const TITLE = "Kalkulator wyceny strony i usług — SCS Web";
const DESCRIPTION =
  "Policz online, ile kosztuje strona internetowa, firmowy e-mail, wizytówka Google i materiały firmowe dla Twojej lokalnej firmy. Rabat pakietowy naliczany automatycznie.";

export const Route = createFileRoute("/kalkulator")({
  component: KalkulatorPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: "https://scsweb.pl/kalkulator" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://scsweb.pl/kalkulator" }],
  }),
});

const radioClass =
  "inline-flex min-h-[44px] flex-1 cursor-pointer items-center gap-2.5 border border-hairline-strong bg-field px-3 py-2 text-sm transition-colors hover:border-[oklch(0.45_0_0)]";

function KalkulatorPage() {
  const [sel, setSel] = useState<Selection>(EMPTY_SELECTION);
  const result = useMemo(() => calculate(sel), [sel]);

  const toggle = (key: ItemKey) =>
    setSel((s) => ({ ...s, items: { ...s.items, [key]: !s.items[key] } }));

  const abonament = sel.pay === "abonament" && sel.items.strona;

  const panel = (
    <div className="border border-hairline bg-secondary/25 p-6">
      <p className="eyebrow mb-3">Twoja wycena</p>
      <p className="display text-[clamp(2rem,4.5vw,2.9rem)] font-bold leading-none">
        Płacisz raz: {zl(result.oneTime)}
      </p>
      {result.monthly > 0 && (
        <p className="display mt-2 text-xl font-semibold">
          + {result.monthly} zł/mies. za stronę
        </p>
      )}

      {result.packages.length > 0 && (
        <div className="mt-4 border-t border-hairline pt-4">
          <p className="text-muted-foreground line-through">osobno {zl(result.separateTotal)}</p>
          <p className="mt-1 font-medium text-foreground">
            Oszczędzasz {zl(result.savings)} dzięki{" "}
            {result.packages.length > 1 ? "pakietom" : "pakietowi"}{" "}
            {result.packages.map((p) => p.name).join(" + ")}
          </p>
        </div>
      )}

      {abonament && (
        <p className="mt-4 border-t border-hairline pt-4 text-sm text-muted-foreground">
          Przy abonamencie za stronę rabaty pakietowe nie obowiązują — każdą usługę liczę osobno.
        </p>
      )}

      <div className="mt-5 border-t border-hairline pt-4">
        <p className="mb-2 font-medium">Koszty cykliczne (nie do nas):</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {result.recurring.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      <p className="mt-5 border-l-2 border-hairline pl-4 text-sm leading-relaxed text-muted-foreground">
        To wstępna wycena. Ostateczną cenę potwierdzam po krótkiej rozmowie — nie zmieni się w górę
        bez Twojej zgody.
      </p>

      <a
        href="#wycena-kontakt"
        className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-3 bg-foreground px-6 py-3 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
      >
        Wyślij tę wycenę do mnie
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );

  return (
    <PageShell>
      <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-28 md:px-10 md:pt-14 md:pb-20">
        <a
          href="/#cennik"
          className="inline-flex min-h-[44px] items-center text-sm text-muted-foreground underline underline-offset-8 hover:text-foreground"
        >
          ← Wróć do oferty
        </a>

        <p className="eyebrow mt-6 mb-4">Kalkulator</p>
        <h1 className="display max-w-3xl text-[clamp(2rem,4.6vw,3.2rem)] font-bold">
          Kalkulator wyceny — policz swoją stronę i usługi
        </h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Zaznacz, czego potrzebujesz. Cena przelicza się od razu, a jeśli Twój wybór pasuje do
          pakietu — rabat naliczam automatycznie.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          <div>
            {/* payment mode */}
            <div className="border border-hairline p-5">
              <p className="display mb-3 text-lg font-semibold">Jak wolisz płacić za stronę?</p>
              <div className="flex flex-col gap-2 sm:flex-row">
                {(
                  [
                    ["jednorazowo", "Jednorazowo 1500 zł"],
                    ["abonament", "Abonament 199 zł/mies. (0 zł na start)"],
                  ] as const
                ).map(([value, label]) => (
                  <label key={value} className={radioClass}>
                    <input
                      type="radio"
                      name="pay"
                      checked={sel.pay === value}
                      onChange={() => setSel((s) => ({ ...s, pay: value }))}
                      className="h-4 w-4 accent-white"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <ul className="mt-6">
              {ITEMS.map((item) => {
                const checked = sel.items[item.key];
                return (
                  <li key={item.key} className="border-t border-hairline last:border-b">
                    <label className="flex min-h-[64px] cursor-pointer items-center gap-4 py-4">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(item.key)}
                        className="h-5 w-5 shrink-0 accent-white"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="display block text-base font-semibold md:text-lg">
                          {item.name}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {item.benefit}
                        </span>
                      </span>
                      <span className="display shrink-0 text-base font-semibold md:text-lg">
                        {item.key === "strona" && sel.pay === "abonament"
                          ? "199 zł/mies."
                          : item.priceLabel}
                      </span>
                    </label>

                    {checked && item.key === "google" && (
                      <div className="flex flex-col gap-2 pb-4 pl-9 sm:flex-row">
                        {(
                          [
                            ["A", "Mam już wizytówkę Google — 400 zł"],
                            ["B", "Nie mam wizytówki — załóż od zera — 600 zł"],
                          ] as const
                        ).map(([value, label]) => (
                          <label key={value} className={radioClass}>
                            <input
                              type="radio"
                              name="google"
                              checked={sel.google === value}
                              onChange={() => setSel((s) => ({ ...s, google: value }))}
                              className="h-4 w-4 accent-white"
                            />
                            {label}
                          </label>
                        ))}
                      </div>
                    )}

                    {checked && item.key === "auto" && (
                      <div className="flex flex-col gap-2 pb-4 pl-9 sm:flex-row">
                        {(
                          [
                            ["mini", "MINI — 300 zł"],
                            ["pelny", "PEŁNY — 600 zł"],
                          ] as const
                        ).map(([value, label]) => (
                          <label key={value} className={radioClass}>
                            <input
                              type="radio"
                              name="auto"
                              checked={sel.auto === value}
                              onChange={() => setSel((s) => ({ ...s, auto: value }))}
                              className="h-4 w-4 accent-white"
                            />
                            {label}
                          </label>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              {result.packages.map((p) => (
                <p key={p.id} className="flex gap-3">
                  <Check strokeWidth={1.25} className="mt-0.5 h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
                  Twój wybór pasuje do pakietu {p.name} — zamiast {zl(p.separate)} płacisz{" "}
                  {zl(p.price)}.
                </p>
              ))}
            </div>
          </div>

          {/* desktop sticky panel */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">{panel}</div>
          </aside>

          {/* mobile inline panel */}
          <div className="lg:hidden">{panel}</div>
        </div>

        <section id="wycena-kontakt" className="mt-16 border-t border-hairline pt-12">
          <p className="eyebrow mb-4">Kontakt</p>
          <h2 className="display text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold">
            Wyślij mi swoją wycenę
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Twoja konfiguracja dołączy się do wiadomości automatycznie. Odezwę się w 24 godziny.
          </p>
          <div className="mt-8 max-w-2xl">
            <ContactForm
              subject="Wycena z kalkulatora (SCS Web)"
              hiddenFields={{ "Wybrana konfiguracja": result.summary }}
            />
          </div>
        </section>
      </div>

      {/* mobile fixed summary */}
      <div className="fixed inset-x-0 bottom-16 z-40 border-t border-hairline bg-background/95 px-4 py-2.5 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Płacisz raz</p>
            <p className="display truncate text-lg font-bold">
              {zl(result.oneTime)}
              {result.monthly > 0 && (
                <span className="ml-2 text-sm font-medium text-muted-foreground">
                  + {result.monthly} zł/mies.
                </span>
              )}
            </p>
          </div>
          <a
            href="#wycena-kontakt"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 bg-foreground px-4 py-2 text-sm font-medium text-background"
          >
            Wyślij wycenę
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </PageShell>
  );
}
