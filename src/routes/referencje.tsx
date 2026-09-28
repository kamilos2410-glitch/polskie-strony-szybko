import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/scs/PageShell";
import { TESTIMONIALS, testimonialCaption } from "@/lib/testimonials";
import { REALIZACJE } from "@/lib/realizacje";

const TITLE = "Referencje i opinie klientów — SCS Web";
const DESCRIPTION =
  "Opinie firm, dla których zrobiłem stronę internetową, oraz adresy działających realizacji SCS Web. Bez wymyślonych cytatów — publikuję wyłącznie to, co klient sam napisał.";
const URL = "https://scsweb.pl/referencje/";

export const Route = createFileRoute("/referencje")({
  component: ReferencjePage,
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
    scripts:
      TESTIMONIALS.length > 0
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "SCS Web",
                url: "https://scsweb.pl/",
                review: TESTIMONIALS.map((t) => ({
                  "@type": "Review",
                  reviewBody: t.quote,
                  author: t.name
                    ? { "@type": "Person", name: `${t.name} — ${t.company}` }
                    : { "@type": "Organization", name: t.company },
                })),
              }),
            },
          ]
        : [],
  }),
});

function ReferencjePage() {
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <p className="eyebrow mb-3">Referencje</p>
          <h1 className="display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] font-bold">
            Co mówią firmy, dla których zrobiłem stronę
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Publikuję wyłącznie to, co klient sam napisał, pod swoim imieniem i nazwą firmy, razem
            z adresem strony — żeby każdy mógł sprawdzić. Żadnych wymyślonych cytatów i żadnych
            opinii „zadowolonego klienta z Warszawy”.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          {TESTIMONIALS.length > 0 ? (
            <div className="grid gap-px bg-hairline md:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <figure key={`${t.name}-${t.company}`} className="flex h-full flex-col bg-background p-6 md:p-8">
                  <blockquote className="display text-xl leading-snug font-medium md:text-2xl">
                    „{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-hairline pt-4">
                    <p className="font-semibold">
                      {testimonialCaption(t)}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="border border-hairline-strong bg-secondary/20 p-6 md:p-10">
              <h2 className="display text-2xl font-semibold">Pierwsze referencje są w drodze</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                SCS Web działa od sierpnia 2026 i pierwsze strony właśnie ruszyły. Poprosiłem
                klientów o kilka zdań o współpracy — pojawią się tutaj, gdy je odeślą. Do tego
                czasu zamiast cytatów zostawiam coś bardziej konkretnego: adresy stron, które
                możesz sprawdzić sam.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <p className="eyebrow mb-3">Realizacje</p>
          <h2 className="display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">
            Strony, które działają w sieci
          </h2>
          <div className="mt-10 grid gap-px bg-hairline md:grid-cols-3">
            {REALIZACJE.map((r) => (
              <article key={r.href} className="flex h-full flex-col bg-background p-6 md:p-8">
                <p className="eyebrow mb-3">{r.tag}</p>
                <h3 className="display text-xl font-semibold">{r.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.branch}</p>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  {r.url}
                  <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
          <h2 className="display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold">
            Chcesz zobaczyć projekt swojej strony?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Przygotowuję go w 48 godzin i pokazuję, zanim zapłacisz choćby złotówkę.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#kontakt"
              className="inline-flex min-h-[52px] items-center justify-center bg-foreground px-7 text-base font-medium tracking-wide text-background transition-opacity hover:opacity-90"
            >
              Zamów darmowy projekt
            </a>
            <Link
              to="/kalkulator"
              className="inline-flex min-h-[52px] items-center justify-center border border-hairline-strong px-7 text-base font-medium tracking-wide transition-colors hover:border-foreground/45"
            >
              Policz cenę w kalkulatorze
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
