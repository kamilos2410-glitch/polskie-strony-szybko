import type { ReactNode } from "react";

/** Monochrome laptop frame with an HTML/CSS mini-site inside. */
export function Laptop({ children }: { children: ReactNode }) {
  return (
    <div className="w-full select-none">
      <div className="border border-foreground bg-background p-[6px]">
        <div className="flex h-5 items-center gap-1.5 border-b border-hairline px-2">
          <span className="h-1.5 w-1.5 border border-ink-soft" />
          <span className="h-1.5 w-1.5 border border-ink-soft" />
          <span className="h-1.5 w-1.5 border border-ink-soft" />
        </div>
        <div className="aspect-[16/10] overflow-hidden bg-background">{children}</div>
      </div>
      <div className="mx-auto h-[6px] w-[62%] border-x border-b border-foreground bg-secondary" />
    </div>
  );
}

export function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="w-full select-none border border-foreground bg-background p-[5px]">
      <div className="mx-auto mb-[5px] h-[3px] w-8 bg-hairline" />
      <div className="aspect-[9/17] overflow-hidden bg-background">{children}</div>
    </div>
  );
}

type SiteProps = { accent: string; name: string; tagline: string; cta: string; nav: string[] };

/** Scaled-down real markup of an example business site. */
export function MiniSite({ accent, name, tagline, cta, nav }: SiteProps) {
  return (
    <div className="flex h-full flex-col bg-background text-[4px] leading-tight sm:text-[5px]">
      <div className="flex items-center justify-between border-b border-hairline px-2 py-1.5">
        <span className="display text-[6px] font-bold sm:text-[7px]">{name}</span>
        <div className="flex gap-1.5 text-muted-foreground">
          {nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
          <span className="px-1 py-[1px] text-background" style={{ background: accent }}>
            {cta}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 px-2 py-2">
        <span className="h-[2px] w-6" style={{ background: accent }} />
        <p className="display max-w-[70%] text-[9px] font-bold sm:text-[11px]">{tagline}</p>
        <p className="max-w-[55%] text-muted-foreground">
          Szybko, solidnie i z gwarancją. Dojazd na terenie całego miasta.
        </p>
        <div className="mt-1 flex gap-1">
          <span className="px-1.5 py-[2px] text-background" style={{ background: accent }}>
            {cta}
          </span>
          <span className="border border-hairline px-1.5 py-[2px]">Cennik</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[3px] border-t border-hairline px-2 py-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="border border-hairline p-1">
            <span className="mb-[2px] block h-[3px] w-[3px]" style={{ background: accent }} />
            <span className="block h-[2px] w-[70%] bg-hairline" />
            <span className="mt-[2px] block h-[2px] w-[90%] bg-hairline" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniSiteMobile({ accent, name, tagline, cta }: SiteProps) {
  return (
    <div className="flex h-full flex-col bg-background text-[4px] leading-tight">
      <div className="flex items-center justify-between border-b border-hairline px-1.5 py-1">
        <span className="display text-[5px] font-bold">{name}</span>
        <span className="flex flex-col gap-[1px]">
          <span className="h-[1px] w-2 bg-foreground" />
          <span className="h-[1px] w-2 bg-foreground" />
        </span>
      </div>
      <div className="flex flex-col gap-1 px-1.5 py-2">
        <span className="h-[2px] w-4" style={{ background: accent }} />
        <p className="display text-[7px] font-bold">{tagline}</p>
        <span className="mt-1 w-fit px-1.5 py-[2px] text-background" style={{ background: accent }}>
          {cta}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-[3px] border-t border-hairline px-1.5 py-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="border border-hairline p-1">
            <span className="block h-[2px] w-[60%] bg-hairline" />
            <span className="mt-[2px] block h-[2px] w-[85%] bg-hairline" />
          </div>
        ))}
      </div>
    </div>
  );
}
