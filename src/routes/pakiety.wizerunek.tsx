import { createFileRoute } from "@tanstack/react-router";
import { PackagePlaceholder } from "@/components/scs/PackagePlaceholder";

const TITLE = "Pakiet Wizerunek — logo i materiały firmowe | SCS Web";
const DESCRIPTION =
  "Pakiet Wizerunek dla lokalnej firmy: projekt logo i materiały firmowe za 820 zł zamiast 950 zł osobno. Spójny wygląd na wizytówce, ulotce i aucie.";

export const Route = createFileRoute("/pakiety/wizerunek")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PackagePlaceholder
      name="Wizerunek"
      inside="Projekt logo i materiały firmowe — jeden spójny znak na wizytówce, ulotce i aucie."
      separate="950 zł"
      bundle="820 zł"
    />
  ),
});
