import { ArrowUpRight } from "lucide-react";
import { type Testimonial, testimonialCaption } from "@/lib/testimonials";

/**
 * Karta referencji: podpisany skan (klikalny, otwiera PDF), cytat, podpis.
 * Używana identycznie na stronie głównej i na /referencje — jedno miejsce,
 * żeby obie strony nie rozjechały się przy kolejnej zmianie.
 */
export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col p-6 md:p-8">
      {t.scan ? (
        <a
          href={t.pdf ?? t.scan}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-7 block border border-hairline-strong bg-white transition-opacity hover:opacity-90"
          aria-label={`Otwórz podpisane referencje — ${t.company} (PDF)`}
        >
          <img
            src={t.scan}
            width={t.scanW}
            height={t.scanH}
            loading="lazy"
            decoding="async"
            alt={`Podpisane referencje od firmy ${t.company} dla SCS Web`}
            className="block h-auto w-full"
          />
        </a>
      ) : null}

      <blockquote className="display text-xl leading-snug font-medium md:text-2xl">
        „{t.quote}”
      </blockquote>

      <figcaption className="mt-6 border-t border-hairline pt-4">
        <p className="font-semibold">{testimonialCaption(t)}</p>
        {t.pdf ? (
          <a
            href={t.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-[44px] items-center gap-2 font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Otwórz podpisany dokument (PDF)
            <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
      </figcaption>
    </figure>
  );
}
