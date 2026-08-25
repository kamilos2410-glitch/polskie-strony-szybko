export type ItemKey =
  | "strona"
  | "poczta"
  | "google"
  | "wizytowka"
  | "ulotka"
  | "auto"
  | "logo";

export type GoogleVariant = "A" | "B";
export type AutoVariant = "mini" | "pelny";
export type PayMode = "jednorazowo" | "abonament";

export type Selection = {
  items: Record<ItemKey, boolean>;
  google: GoogleVariant;
  auto: AutoVariant;
  pay: PayMode;
};

export const EMPTY_SELECTION: Selection = {
  items: {
    strona: false,
    poczta: false,
    google: false,
    wizytowka: false,
    ulotka: false,
    auto: false,
    logo: false,
  },
  google: "A",
  auto: "mini",
  pay: "jednorazowo",
};

export const ITEMS: {
  key: ItemKey;
  name: string;
  benefit: string;
  price: number;
  priceLabel: string;
}[] = [
  {
    key: "strona",
    name: "Strona internetowa",
    benefit: "Twoja wizytówka w internecie — gotowa w 48 godzin od akceptacji.",
    price: 1500,
    priceLabel: "1500 zł",
  },
  {
    key: "poczta",
    name: "Firmowy e-mail na domenie",
    benefit: "Adres kontakt@twojafirma.pl zamiast skrzynki na darmowym portalu.",
    price: 400,
    priceLabel: "400 zł",
  },
  {
    key: "google",
    name: "Pakiet Start Google",
    benefit: "Wizytówka Google plus karty NFC — klienci znajdują Cię w mapach.",
    price: 400,
    priceLabel: "od 400 zł",
  },
  {
    key: "wizytowka",
    name: "Projekt wizytówki",
    benefit: "Papierowa wizytówka gotowa do druku, spójna z Twoją stroną.",
    price: 250,
    priceLabel: "250 zł",
  },
  {
    key: "ulotka",
    name: "Projekt ulotki",
    benefit: "Ulotka do skrzynek i na miejsce — z ofertą i numerem telefonu.",
    price: 300,
    priceLabel: "300 zł",
  },
  {
    key: "auto",
    name: "Oznakowanie auta",
    benefit: "Twoje auto pracuje jak reklama — projekt naklejek na samochód.",
    price: 300,
    priceLabel: "od 300 zł",
  },
  {
    key: "logo",
    name: "Projekt logo",
    benefit: "Znak firmowy, który wygląda poważnie na stronie i w druku.",
    price: 800,
    priceLabel: "800 zł",
  },
];

export const ITEM_LABEL: Record<ItemKey, string> = {
  strona: "Strona internetowa",
  poczta: "Firmowy e-mail na domenie",
  google: "Pakiet Start Google",
  wizytowka: "Projekt wizytówki",
  ulotka: "Projekt ulotki",
  auto: "Oznakowanie auta",
  logo: "Projekt logo",
};

type Pkg = {
  id: string;
  name: string;
  items: ItemKey[];
  price: (g: GoogleVariant) => number;
};

const PACKAGES: Pkg[] = [
  {
    id: "firma-kompletna",
    name: "Firma Kompletna",
    items: ["strona", "poczta", "google", "wizytowka", "ulotka"],
    price: (g) => (g === "A" ? 2390 : 2590),
  },
  {
    id: "start-online",
    name: "Start Online",
    items: ["strona", "poczta", "google"],
    price: (g) => (g === "A" ? 1990 : 2190),
  },
  {
    id: "wizerunek",
    name: "Wizerunek",
    items: ["google", "wizytowka", "ulotka"],
    price: (g) => (g === "A" ? 820 : 1020),
  },
  {
    id: "identyfikacja",
    name: "Identyfikacja",
    items: ["logo", "wizytowka", "ulotka"],
    price: () => 1200,
  },
  {
    id: "materialy-firmowe",
    name: "Materiały firmowe",
    items: ["wizytowka", "ulotka"],
    price: () => 480,
  },
];

export function unitPrice(key: ItemKey, sel: Selection): number {
  if (key === "google") return sel.google === "A" ? 400 : 600;
  if (key === "auto") return sel.auto === "mini" ? 300 : 600;
  if (key === "strona") return sel.pay === "abonament" ? 0 : 1500;
  return ITEMS.find((i) => i.key === key)!.price;
}

export type AppliedPackage = { id: string; name: string; price: number; separate: number };

export type CalcResult = {
  selected: ItemKey[];
  oneTime: number;
  monthly: number;
  separateTotal: number;
  packages: AppliedPackage[];
  savings: number;
  singles: { key: ItemKey; label: string; price: number }[];
  recurring: string[];
  summary: string;
};

export function calculate(sel: Selection): CalcResult {
  const selected = (Object.keys(sel.items) as ItemKey[]).filter((k) => sel.items[k]);
  const abonament = sel.pay === "abonament" && sel.items.strona;

  const separateTotal = selected.reduce((sum, k) => sum + unitPrice(k, sel), 0);

  let remaining = [...selected];
  const applied: AppliedPackage[] = [];

  // greedily apply the package with the biggest saving that fully fits the remainder.
  // With abonament the strona costs 0 zł one-time, so its 1500 zł is removed from the
  // package price too — the absolute package discount stays the same.
  for (;;) {
    let best: { pkg: Pkg; saving: number; separate: number; price: number } | null = null;
    for (const pkg of PACKAGES) {
      if (!pkg.items.every((i) => remaining.includes(i))) continue;
      const separate = pkg.items.reduce((s, i) => s + unitPrice(i, sel), 0);
      const price =
        pkg.price(sel.google) - (abonament && pkg.items.includes("strona") ? 1500 : 0);
      const saving = separate - price;
      if (saving > 0 && (!best || saving > best.saving)) {
        best = { pkg, saving, separate, price };
      }
    }
    if (!best) break;
    applied.push({
      id: best.pkg.id,
      name: best.pkg.name,
      price: best.price,
      separate: best.separate,
    });
    remaining = remaining.filter((i) => !best!.pkg.items.includes(i));
  }

  const singles = remaining.map((k) => ({
    key: k,
    label: ITEM_LABEL[k],
    price: unitPrice(k, sel),
  }));

  const oneTime =
    applied.reduce((s, p) => s + p.price, 0) + singles.reduce((s, i) => s + i.price, 0);
  const monthly = abonament ? 199 : 0;
  const savings = separateTotal - oneTime;

  const recurring: string[] = [];
  if (sel.items.strona && abonament) {
    recurring.push("Domena i hosting w cenie abonamentu — nic nie dopłacasz osobno.");
  } else if (sel.items.strona) {
    recurring.push("Domena: ok. 100–150 zł rocznie (płacisz rejestratorowi, nie nam).");
  }
  if (sel.items.poczta) {
    recurring.push("Skrzynka pocztowa: od 49 zł rocznie (płacisz dostawcy, nie nam).");
  }
  if (recurring.length === 0) {
    recurring.push("Brak — nic nie płacisz cyklicznie.");
  }

  // readable summary for the hidden form field
  const parts: string[] = [];
  for (const p of applied) parts.push(`pakiet ${p.name} ${p.price} zł`);
  for (const s of singles) {
    let label = s.label;
    if (s.key === "google") label += ` wariant ${sel.google}`;
    if (s.key === "auto") label += ` ${sel.auto === "mini" ? "MINI" : "PEŁNY"}`;
    if (s.key === "strona") label += abonament ? " (abonament)" : " (jednorazowo)";
    parts.push(`${label} ${s.price} zł`);
  }
  let summary =
    parts.length > 0
      ? `${parts.join(" + ")} = razem ${oneTime} zł jednorazowo`
      : "Nic jeszcze nie wybrano";
  if (monthly > 0) summary += ` + ${monthly} zł/mies. abonament za stronę`;
  summary += `; cyklicznie: ${recurring.join(" ")}`;

  return {
    selected,
    oneTime,
    monthly,
    separateTotal,
    packages: applied,
    savings: savings > 0 ? savings : 0,
    singles,
    recurring,
    summary,
  };
}

export function zl(value: number): string {
  return `${value.toLocaleString("pl-PL")} zł`;
}
