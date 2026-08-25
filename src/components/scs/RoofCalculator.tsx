import { useMemo, useState } from "react";

const TERRA = "#b4532a";
const SERIF = 'Georgia, "Times New Roman", serif';

type CoverKey = "ceramiczna" | "blachodachowka" | "papa";
type ScopeKey = "nowy" | "wymiana" | "naprawa";

// Orientacyjne widełki dla rynku polskiego (zł za m²) — dane przykładowe.
const COVERS: { key: CoverKey; label: string; mat: [number, number]; lab: [number, number] }[] = [
  { key: "ceramiczna", label: "Dachówka ceramiczna", mat: [70, 130], lab: [80, 120] },
  { key: "blachodachowka", label: "Blachodachówka", mat: [45, 85], lab: [60, 95] },
  { key: "papa", label: "Papa termozgrzewalna", mat: [30, 55], lab: [45, 75] },
];

const SCOPES: { key: ScopeKey; label: string; mat: number; lab: number }[] = [
  { key: "nowy", label: "Nowy dach", mat: 1, lab: 1 },
  { key: "wymiana", label: "Wymiana pokrycia z demontażem starego", mat: 1, lab: 1.35 },
  { key: "naprawa", label: "Naprawa i uszczelnienie", mat: 0.3, lab: 0.45 },
];

const pln = (v: number) => `${Math.round(v / 10) * 10} zł`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export function RoofCalculator() {
  const [area, setArea] = useState(120);
  const [cover, setCover] = useState<CoverKey>("ceramiczna");
  const [scope, setScope] = useState<ScopeKey>("nowy");

  const calc = useMemo(() => {
    const c = COVERS.find((x) => x.key === cover)!;
    const s = SCOPES.find((x) => x.key === scope)!;
    const a = Math.max(10, Math.min(1000, area || 0));
    const matMin = c.mat[0] * s.mat * a;
    const matMax = c.mat[1] * s.mat * a;
    const labMin = c.lab[0] * s.lab * a;
    const labMax = c.lab[1] * s.lab * a;
    return {
      min: matMin + labMin,
      max: matMax + labMax,
      matMin,
      matMax,
      labMin,
      labMax,
    };
  }, [area, cover, scope]);

  const fieldLabel = "mb-2 block text-sm font-semibold uppercase tracking-wider";

  return (
    <section id="kalkulator" className="border-y border-[#e4d8c9] bg-[#f4ebe0]">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl" style={{ fontFamily: SERIF }}>
          Kalkulator kosztu dachu
        </h2>
        <p className="mt-3 max-w-2xl" style={{ color: "#6b615a" }}>
          Wycena orientacyjna — dokładną podamy po oględzinach dachu.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div>
              <label htmlFor="rc-area" className={fieldLabel} style={{ color: "#6b615a" }}>
                Powierzchnia dachu
              </label>
              <div className="flex items-center gap-4">
                <input
                  id="rc-area"
                  type="number"
                  min={10}
                  max={1000}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-32 border border-[#ddcdb9] bg-[#faf5ef] px-4 py-3 text-lg"
                />
                <span className="text-lg">m²</span>
              </div>
              <input
                type="range"
                min={10}
                max={500}
                step={5}
                value={Math.min(500, Math.max(10, area || 10))}
                onChange={(e) => setArea(Number(e.target.value))}
                aria-label="Powierzchnia dachu w metrach kwadratowych"
                className="mt-4 w-full"
                style={{ accentColor: TERRA }}
              />
            </div>

            <fieldset>
              <legend className={fieldLabel} style={{ color: "#6b615a" }}>
                Rodzaj pokrycia
              </legend>
              <div className="grid gap-2">
                {COVERS.map((c) => (
                  <label
                    key={c.key}
                    className="flex min-h-[48px] cursor-pointer items-center gap-3 border border-[#ddcdb9] bg-[#faf5ef] px-4 py-3"
                    style={cover === c.key ? { borderColor: TERRA } : undefined}
                  >
                    <input
                      type="radio"
                      name="rc-cover"
                      checked={cover === c.key}
                      onChange={() => setCover(c.key)}
                      style={{ accentColor: TERRA }}
                    />
                    {c.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className={fieldLabel} style={{ color: "#6b615a" }}>
                Zakres prac
              </legend>
              <div className="grid gap-2">
                {SCOPES.map((s) => (
                  <label
                    key={s.key}
                    className="flex min-h-[48px] cursor-pointer items-center gap-3 border border-[#ddcdb9] bg-[#faf5ef] px-4 py-3"
                    style={scope === s.key ? { borderColor: TERRA } : undefined}
                  >
                    <input
                      type="radio"
                      name="rc-scope"
                      checked={scope === s.key}
                      onChange={() => setScope(s.key)}
                      style={{ accentColor: TERRA }}
                    />
                    {s.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="h-fit border-2 border-[#2f2b28] bg-[#faf5ef] p-6 md:sticky md:top-28">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: TERRA }}>
              Szacowany koszt
            </p>
            <p className="mt-3 text-3xl md:text-4xl" style={{ fontFamily: SERIF }}>
              {pln(calc.min)} – {pln(calc.max)}
            </p>
            <dl className="mt-6 space-y-2 border-t border-[#e4d8c9] pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt style={{ color: "#6b615a" }}>Robocizna</dt>
                <dd className="font-semibold">
                  {pln(calc.labMin)} – {pln(calc.labMax)}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt style={{ color: "#6b615a" }}>Materiał</dt>
                <dd className="font-semibold">
                  {pln(calc.matMin)} – {pln(calc.matMax)}
                </dd>
              </div>
            </dl>
            <p className="mt-5 border-t border-[#e4d8c9] pt-4 text-sm" style={{ color: "#6b615a" }}>
              Stawki przykładowe — strona demonstracyjna.
            </p>
            <a
              href="#kontakt"
              className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center px-6 py-3 font-semibold text-[#faf5ef]"
              style={{ backgroundColor: TERRA }}
            >
              Umów bezpłatne oględziny
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
