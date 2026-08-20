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
        <div
          className="aspect-[16/10] overflow-hidden bg-background"
          style={{ containerType: "inline-size" }}
        >
          {children}
        </div>
      </div>
      <div className="mx-auto h-[6px] w-[62%] border-x border-b border-foreground bg-secondary" />
    </div>
  );
}

export function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="w-full select-none border border-foreground bg-background p-[5px]">
      <div className="mx-auto mb-[5px] h-[3px] w-8 bg-hairline" />
      <div
        className="aspect-[9/17] overflow-hidden bg-background"
        style={{ containerType: "inline-size" }}
      >
        {children}
      </div>
    </div>
  );
}

type SiteProps = { accent: string; name: string; tagline: string; cta: string; nav: string[] };

/** Scaled-down real markup of an example business site. */
export function MiniSite({ accent, name, tagline, cta, nav }: SiteProps) {
  return (
    <div className="flex h-full flex-col bg-background text-[1.5cqi] leading-tight">
      <div className="flex items-center justify-between border-b border-hairline px-[3%] py-[1.6%]">
        <span className="display text-[2.2cqi] font-bold">{name}</span>
        <div className="flex gap-[1.6cqi] text-muted-foreground">
          {nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
          <span className="px-[0.8cqi] py-[0.3cqi] text-background" style={{ background: accent }}>
            {cta}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-[1.4cqi] px-[3%] py-[3%]">
        <span className="h-[0.5cqi] w-[6cqi]" style={{ background: accent }} />
        <p className="display max-w-[62%] text-[4.6cqi] font-bold">{tagline}</p>
        <p className="max-w-[55%] text-muted-foreground">
          Szybko, solidnie i z gwarancją. Dojazd na terenie całego miasta.
        </p>
        <div className="mt-[1cqi] flex gap-[1cqi]">
          <span className="px-[1.4cqi] py-[0.7cqi] text-background" style={{ background: accent }}>
            {cta}
          </span>
          <span className="border border-hairline px-[1.4cqi] py-[0.7cqi]">Cennik</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[1.5cqi] border-t border-hairline px-[3%] py-[2.4%]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="border border-hairline p-[1.2cqi]">
            <span className="mb-[0.8cqi] block h-[1cqi] w-[1cqi]" style={{ background: accent }} />
            <span className="block h-[0.6cqi] w-[70%] bg-hairline" />
            <span className="mt-[0.8cqi] block h-[0.6cqi] w-[90%] bg-hairline" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniSiteMobile({ accent, name, tagline, cta }: SiteProps) {
  return (
    <div className="flex h-full flex-col bg-background text-[3.4cqi] leading-tight">
      <div className="flex items-center justify-between border-b border-hairline px-[5%] py-[3%]">
        <span className="display text-[4.6cqi] font-bold">{name}</span>
        <span className="flex flex-col gap-[1cqi]">
          <span className="h-[0.6cqi] w-[5cqi] bg-foreground" />
          <span className="h-[0.6cqi] w-[5cqi] bg-foreground" />
        </span>
      </div>
      <div className="flex flex-col gap-[2cqi] px-[5%] py-[6%]">
        <span className="h-[1cqi] w-[10cqi]" style={{ background: accent }} />
        <p className="display text-[8cqi] font-bold">{tagline}</p>
        <span
          className="mt-[1cqi] w-fit px-[3cqi] py-[1.5cqi] text-background"
          style={{ background: accent }}
        >
          {cta}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-[3cqi] border-t border-hairline px-[5%] py-[5%]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="border border-hairline p-[3cqi]">
            <span className="block h-[1.4cqi] w-[60%] bg-hairline" />
            <span className="mt-[1.6cqi] block h-[1.4cqi] w-[85%] bg-hairline" />
          </div>
        ))}
      </div>
    </div>
  );
}
