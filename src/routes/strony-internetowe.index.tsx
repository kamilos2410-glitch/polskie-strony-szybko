import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/scs/PageShell";
import {
  CennikSection,
  CoDostajeszSection,
  CtaSection,
  CzegoNieObiecujeSection,
} from "@/components/scs/LocalPage";
import { LOKALIZACJE } from "@/lib/lokalizacje";

const TITLE = "Strony internetowe — Piaseczno, Grójec, Konstancin i okolice | SCS Web";
const DESCRIPTION =
  "Strony internetowe dla małych firm z powiatu piaseczyńskiego, grójeckiego i pruszkowskiego. Projekt w 48 godzin, płatność po akceptacji. Tel. 664 013 998.";
const URL = "https://scsweb.pl/strony-internetowe";

export const Route = createFileRoute("/strony-internetowe/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: LokalizacjeIndex,
});

function LokalizacjeIndex() {
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-12 md:px-10 md:pt-14 md:pb-16">
          <h1 className="display max-w-4xl text-[clamp(1.9rem,4.4vw,3rem)] font-bold">
            Strony internetowe w Twojej okolicy
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Pracuję zdalnie w całej Polsce — odległość nie zmienia ani ceny, ani terminu. Do
            miejscowości z tej listy mogę też po prostu przyjechać.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <p className="eyebrow mb-4">Miejscowości</p>
          <h2 className="display text-[clamp(1.5rem,3.2vw,2.15rem)] font-semibold">
            Obsługiwane miejscowości
          </h2>
          <ul className="mt-8 grid gap-px bg-hairline md:grid-cols-2">
            {LOKALIZACJE.map((l) => (
              <li key={l.slug} className="bg-background">
                <a
                  href={`/strony-internetowe/${l.slug}`}
                  className="flex h-full flex-col gap-3 border border-hairline-strong p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground md:p-8"
                >
                  <span className="display flex items-center justify-between gap-4 text-xl font-semibold">
                    {l.nazwa}
                    <span aria-hidden="true">→</span>
                  </span>
                  <span className="leading-relaxed text-muted-foreground">{l.dojazd}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CoDostajeszSection />
      <CennikSection />
      <CzegoNieObiecujeSection />
      <CtaSection />
    </PageShell>
  );
}
