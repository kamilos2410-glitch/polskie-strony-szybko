/**
 * Hero composition: layered laptop + phone mockups on a fine hairline grid.
 * Pure HTML/CSS/SVG — no images.
 */
export function HeroVisual() {
  return (
    <div className="relative isolate w-full select-none" aria-hidden="true">
      {/* hairline grid backdrop */}
      <svg
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 -z-10 h-[calc(100%+5rem)] w-[calc(100%+4rem)] text-foreground/[0.07]"
        role="presentation"
      >
        <defs>
          <pattern id="hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <radialGradient id="hero-fade" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-mask">
            <rect width="100%" height="100%" fill="url(#hero-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-mask)" />
      </svg>

      {/* soft glow behind screens */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 bg-foreground/[0.06] blur-3xl" />

      <div className="relative pr-10 pb-14 md:pr-16 md:pb-16">
        {/* laptop */}
        <div
          className="relative"
          style={{ transform: "perspective(1400px) rotateY(-9deg) rotateX(4deg)" }}
        >
          <div className="border border-foreground/25 bg-[#0d0d0d] p-[7px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
            <div className="flex h-6 items-center gap-1.5 border-b border-foreground/15 px-3">
              <span className="h-1.5 w-1.5 border border-foreground/40" />
              <span className="h-1.5 w-1.5 border border-foreground/25" />
              <span className="h-1.5 w-1.5 border border-foreground/25" />
              <span className="ml-3 h-2 w-24 bg-foreground/10" />
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-[#0a0a0a]" style={{ containerType: "inline-size" }}>
              <ScreenDesktop />
            </div>
          </div>
          <div className="mx-auto h-[7px] w-[64%] border-x border-b border-foreground/25 bg-[#151515]" />
        </div>

        {/* phone */}
        <div
          className="absolute right-0 bottom-0 w-[26%] min-w-[92px]"
          style={{ transform: "perspective(1200px) rotateY(-9deg) rotateX(3deg)" }}
        >
          <div className="border border-foreground/25 bg-[#0d0d0d] p-[5px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.95)]">
            <div className="mx-auto mb-[5px] h-[3px] w-7 bg-foreground/20" />
            <div className="aspect-[9/17] overflow-hidden bg-[#0a0a0a]" style={{ containerType: "inline-size" }}>
              <ScreenMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenDesktop() {
  return (
    <div className="flex h-full flex-col text-[1.5cqi] leading-tight text-foreground">
      <div className="flex items-center justify-between border-b border-foreground/12 px-[4%] py-[1.8%]">
        <span className="display text-[2.2cqi] font-bold">Twoja Firma</span>
        <div className="flex items-center gap-[2cqi] text-foreground/45">
          <span>Oferta</span>
          <span>Realizacje</span>
          <span>Kontakt</span>
          <span className="bg-foreground px-[1.2cqi] py-[0.5cqi] text-[#0a0a0a]">Zadzwoń</span>
        </div>
      </div>
      <div className="flex flex-1 items-center gap-[4%] px-[4%]">
        <div className="flex flex-1 flex-col gap-[1.4cqi]">
          <span className="h-[0.4cqi] w-[7cqi] bg-foreground/70" />
          <p className="display text-[4.8cqi] font-bold">Strona, która przynosi telefony.</p>
          <p className="max-w-[85%] text-foreground/45">
            Projekt gotowy w 48 godzin. Płacisz dopiero, gdy Ci się spodoba.
          </p>
          <div className="mt-[0.6cqi] flex gap-[1cqi]">
            <span className="bg-foreground px-[1.6cqi] py-[0.7cqi] text-[#0a0a0a]">Darmowe demo</span>
            <span className="border border-foreground/30 px-[1.6cqi] py-[0.7cqi] text-foreground/70">
              Cennik
            </span>
          </div>
        </div>
        <div className="grid w-[34%] gap-[1cqi]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border border-foreground/12 p-[1.2cqi]">
              <span className="mb-[0.8cqi] block h-[0.9cqi] w-[0.9cqi] bg-foreground/60" />
              <span className="block h-[0.5cqi] w-[70%] bg-foreground/20" />
              <span className="mt-[0.6cqi] block h-[0.5cqi] w-[90%] bg-foreground/12" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-foreground/12 px-[4%] py-[1.6%] text-foreground/35">
        <span>600 000 000</span>
        <span>Pon–Pt 8:00–18:00</span>
      </div>
    </div>
  );
}

function ScreenMobile() {
  return (
    <div className="flex h-full flex-col text-[3.4cqi] leading-tight text-foreground">
      <div className="flex items-center justify-between border-b border-foreground/12 px-[6%] py-[4%]">
        <span className="display text-[4.4cqi] font-bold">Firma</span>
        <span className="flex flex-col gap-[1cqi]">
          <span className="h-[0.6cqi] w-[5cqi] bg-foreground/60" />
          <span className="h-[0.6cqi] w-[5cqi] bg-foreground/60" />
        </span>
      </div>
      <div className="flex flex-col gap-[2cqi] px-[6%] py-[7%]">
        <span className="h-[0.8cqi] w-[9cqi] bg-foreground/70" />
        <p className="display text-[7.6cqi] font-bold">Zadzwoń i umów termin</p>
        <span className="mt-[1cqi] w-fit bg-foreground px-[3cqi] py-[1.6cqi] text-[3.2cqi] text-[#0a0a0a]">
          Kontakt
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-[2.5cqi] border-t border-foreground/12 px-[6%] py-[6%]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="border border-foreground/12 p-[3cqi]">
            <span className="block h-[1.2cqi] w-[55%] bg-foreground/25" />
            <span className="mt-[1.6cqi] block h-[1.2cqi] w-[85%] bg-foreground/12" />
          </div>
        ))}
      </div>
    </div>
  );
}
