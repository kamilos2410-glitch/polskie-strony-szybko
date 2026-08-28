import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { MobileBar } from "@/components/scs/MobileBar";

const NAV = [
  { href: "/#jak-to-dziala", label: "Jak to działa" },
  { href: "/#realizacje", label: "Realizacje" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="display text-lg font-bold tracking-tight">
            SCS Web
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 md:gap-5">
            <a
              href="tel:+48664013998"
              aria-label="Zadzwoń: +48 664 013 998"
              className="inline-flex min-h-[44px] items-center gap-2 px-1 text-base font-medium transition-opacity hover:opacity-70"
            >
              <Phone strokeWidth={1.5} className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">+48 664 013 998</span>
            </a>
            <a
              href="/#kontakt"
              className="inline-flex min-h-[44px] items-center gap-2 bg-foreground px-5 py-3 text-sm font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Darmowe demo
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="display text-base font-bold text-foreground">SCS Web</p>
            <p className="mt-2">Strony internetowe dla lokalnych firm</p>
          </div>
          <div className="space-y-1 md:text-right">
            <p className="text-foreground">Kamil Pietraszko</p>
            <p>tel. +48 664 013 998</p>
            <p>kamil@scsweb.pl</p>
            <p className="pt-2">© 2026 SCS Web</p>
          </div>
        </div>
      </footer>

      <MobileBar />
    </div>
  );
}
