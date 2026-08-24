import { PageShell } from "@/components/scs/PageShell";

export function PackagePlaceholder({
  name,
  inside,
  separate,
  bundle,
}: {
  name: string;
  inside: string;
  separate: string;
  bundle: string;
}) {
  return (
    <PageShell>
      <section>
        <div className="mx-auto max-w-[1200px] px-6 pt-14 pb-24 md:px-10 md:pt-20 md:pb-32">
          <a
            href="/#cennik"
            className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline underline-offset-8 transition-colors hover:text-foreground"
          >
            ← Wróć do oferty
          </a>
          <p className="eyebrow mt-8 mb-4">Pakiet</p>
          <h1 className="display max-w-3xl text-[clamp(2.25rem,5.5vw,4rem)] font-bold">{name}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{inside}</p>
          <div className="mt-10 flex flex-wrap items-baseline gap-5 border-t border-hairline pt-8">
            <span className="text-lg text-muted-foreground line-through">osobno {separate}</span>
            <span className="display text-[clamp(2rem,5vw,3rem)] font-bold">w pakiecie {bundle}</span>
          </div>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            Pełny opis pakietu przygotowuję — jeśli chcesz poznać szczegóły już teraz, zadzwoń albo
            napisz, a wszystko wytłumaczę.
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
    </PageShell>
  );
}
