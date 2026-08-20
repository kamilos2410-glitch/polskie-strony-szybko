/**
 * Miniature, screenshot-like renderings of the three demo pages.
 * Container-query units keep proportions at any card width.
 */

export function HydroPreview() {
  return (
    <div
      className="flex h-full flex-col bg-[#f4f7fb] text-[1.5cqi] leading-tight text-[#12233d]"
      style={{ fontFamily: '"Inter Variable", sans-serif', containerType: "inline-size" }}
    >
      <div className="flex items-center justify-between border-b border-[#dde5ef] bg-white px-[4%] py-[1.6%]">
        <span className="flex items-center gap-[0.8cqi] text-[2cqi] font-bold">
          <span className="h-[2cqi] w-[2cqi] rounded-full bg-[#0b3d91]" />
          Hydro-Perfekt
        </span>
        <span className="flex items-center gap-[1.6cqi] text-[#4a5b73]">
          <span>Usługi</span>
          <span>Opinie</span>
          <span className="rounded-full bg-[#0b3d91] px-[1.4cqi] py-[0.5cqi] text-white">
            600 000 000
          </span>
        </span>
      </div>
      <div className="bg-[#0b3d91] py-[0.9%] text-center text-[1.4cqi] font-semibold text-white">
        Awaria? Jesteśmy dostępni 24/7
      </div>
      <div className="flex flex-1 items-center gap-[4%] px-[5%]">
        <div className="flex-1">
          <p className="display text-[4.4cqi] leading-[1.05] font-extrabold">
            Usterka? <span className="text-[#0b3d91]">Będziemy u Ciebie dziś.</span>
          </p>
          <p className="mt-[1.2cqi] w-[85%] text-[#4a5b73]">
            Awarie, instalacje i montaż armatury w Bielsku-Białej.
          </p>
          <span className="mt-[1.6cqi] inline-block rounded-full bg-[#0b3d91] px-[2cqi] py-[0.9cqi] text-white">
            Zadzwoń
          </span>
        </div>
        <div className="w-[36%] rounded-[1.5cqi] bg-white p-[1.6cqi] shadow">
          <div className="h-[9cqi] rounded-[1cqi] bg-[#eef3f9]" />
          <span className="mt-[1cqi] block h-[0.6cqi] w-[80%] bg-[#dde5ef]" />
          <span className="mt-[0.6cqi] block h-[0.6cqi] w-[60%] bg-[#dde5ef]" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[1.2cqi] bg-white px-[5%] py-[2.2%]">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-[1cqi] border border-[#dde5ef] bg-[#f8fbff] p-[1.2cqi]">
            <span className="block h-[0.6cqi] w-[70%] bg-[#c7d5e6]" />
            <span className="mt-[0.7cqi] block h-[0.6cqi] w-[45%] bg-[#0b3d91]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function AutoPreview() {
  return (
    <div
      className="flex h-full flex-col bg-[#121212] text-[1.5cqi] leading-tight text-[#ededed]"
      style={{ fontFamily: '"Inter Variable", sans-serif', containerType: "inline-size" }}
    >
      <div className="flex items-center justify-between border-b-[0.4cqi] border-[#ffb300] bg-[#161616] px-[4%] py-[1.6%]">
        <span className="display text-[2cqi] font-extrabold tracking-wide uppercase">
          Auto<span className="text-[#ffb300]">Serwis</span> Kowalski
        </span>
        <span className="flex items-center gap-[1.6cqi] text-[#9a9a9a] uppercase">
          <span>Usługi</span>
          <span>Opinie</span>
          <span className="bg-[#ffb300] px-[1.4cqi] py-[0.5cqi] font-bold text-[#121212]">
            Umów wizytę
          </span>
        </span>
      </div>
      <div className="relative flex flex-1 flex-col justify-center px-[5%]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #ffb300 0 6px, transparent 6px 14px)",
          }}
        />
        <p className="relative text-[1.3cqi] font-bold tracking-[0.2em] text-[#ffb300] uppercase">
          Warsztat samochodowy
        </p>
        <p className="display relative mt-[1cqi] text-[5.2cqi] leading-[0.95] font-extrabold uppercase">
          Naprawiamy auta.
          <br />
          <span className="text-[#ffb300]">Tłumaczymy rachunki.</span>
        </p>
        <span className="relative mt-[1.8cqi] w-fit bg-[#ffb300] px-[2cqi] py-[0.9cqi] font-extrabold text-[#121212] uppercase">
          Umów wizytę
        </span>
      </div>
      <div className="grid grid-cols-4 gap-px bg-[#262626] px-[5%] py-[2.2%]">
        {["01", "02", "03", "04"].map((n) => (
          <div key={n} className="bg-[#161616] p-[1.2cqi]">
            <span className="text-[#ffb300]">{n}</span>
            <span className="mt-[0.7cqi] block h-[0.6cqi] w-[80%] bg-[#3a3a3a]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DachPreview() {
  const serif = 'Georgia, "Times New Roman", serif';
  return (
    <div
      className="flex h-full flex-col bg-[#faf5ef] text-[1.5cqi] leading-tight text-[#2f2b28]"
      style={{ fontFamily: '"Inter Variable", sans-serif', containerType: "inline-size" }}
    >
      <div className="flex items-center justify-between border-b border-[#e4d8c9] px-[5%] py-[1.8%]">
        <span className="text-[2.4cqi]" style={{ fontFamily: serif }}>
          Dach<span className="text-[#b4532a]">Pol</span>
        </span>
        <span className="flex gap-[1.8cqi] text-[#6b615a]">
          <span>Realizacje</span>
          <span>Materiały</span>
          <span className="font-semibold text-[#b4532a]">600 000 000</span>
        </span>
      </div>
      <div className="flex flex-1 items-center gap-[5%] px-[5%]">
        <div className="flex-1">
          <p className="text-[1.3cqi] tracking-[0.2em] text-[#b4532a] uppercase">Usługi dekarskie</p>
          <p className="mt-[1cqi] text-[4.6cqi] leading-[1.03]" style={{ fontFamily: serif }}>
            Dachy, które przetrwają następne pokolenie.
          </p>
          <span className="mt-[1.8cqi] inline-block bg-[#b4532a] px-[2cqi] py-[0.9cqi] text-[#faf5ef]">
            Bezpłatna wycena
          </span>
        </div>
        <svg viewBox="0 0 320 200" className="w-[36%]" role="presentation">
          <rect width="320" height="200" fill="#f0e6da" />
          <path d="M20 130 L160 40 L300 130 Z" fill="#b4532a" />
          <rect x="70" y="130" width="180" height="50" fill="#e2d3c1" />
          <rect x="140" y="146" width="34" height="34" fill="#2f2b28" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-[1.5cqi] border-t border-[#e4d8c9] bg-[#f4ebe0] px-[5%] py-[2.4%]">
        {["27 lat", "1 400+", "10 lat"].map((s) => (
          <div key={s}>
            <span className="text-[2.4cqi] text-[#b4532a]" style={{ fontFamily: serif }}>
              {s}
            </span>
            <span className="mt-[0.6cqi] block h-[0.6cqi] w-[70%] bg-[#ddcdb9]" />
          </div>
        ))}
      </div>
    </div>
  );
}
