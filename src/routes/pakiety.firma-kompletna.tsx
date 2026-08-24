import { createFileRoute } from "@tanstack/react-router";
import { PackagePlaceholder } from "@/components/scs/PackagePlaceholder";

const TITLE = "Pakiet Firma Kompletna — strona, poczta i Google | SCS Web";
const DESCRIPTION =
  "Pakiet Firma Kompletna dla lokalnej firmy: strona internetowa, firmowa poczta na domenie i Pakiet Start Google za 2390 zł zamiast 2850 zł osobno.";

export const Route = createFileRoute("/pakiety/firma-kompletna")({
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
      name="Firma Kompletna"
      inside="Strona internetowa, firmowy e-mail na Twojej domenie i Pakiet Start Google — komplet dla firmy, która chce wyglądać poważnie."
      separate="2850 zł"
      bundle="2390 zł"
    />
  ),
});
