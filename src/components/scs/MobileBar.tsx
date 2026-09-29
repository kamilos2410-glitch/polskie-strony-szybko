import { Phone, ArrowRight } from "lucide-react";

/**
 * Pasek akcji przyklejony do dołu ekranu.
 * Widoczny poniżej `lg` — dokładnie tam, gdzie chowa się menu w nagłówku
 * (przy 6 pozycjach menu nie mieści się poniżej 1024 px). Te dwa progi
 * muszą być zawsze takie same, inaczej powstaje okno szerokości, w którym
 * nie ma ani menu, ani paska.
 */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-background/95 backdrop-blur-sm lg:hidden">
      <div className="grid grid-cols-2 gap-3 px-4 py-3">
        <a
          href="tel:+48664013998"
          className="flex min-h-[48px] items-center justify-center gap-2 border border-foreground/70 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
        >
          <Phone strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
          Zadzwoń
        </a>
        <a
          href="#kontakt"
          className="flex min-h-[48px] items-center justify-center gap-2 bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Darmowe demo
          <ArrowRight strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
