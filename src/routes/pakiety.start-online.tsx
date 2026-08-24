import { createFileRoute } from "@tanstack/react-router";
import { PackagePlaceholder } from "@/components/scs/PackagePlaceholder";

const TITLE = "Pakiet Start Online — strona i wizytówka Google | SCS Web";
const DESCRIPTION =
  "Pakiet Start Online dla lokalnej firmy: strona internetowa i Pakiet Start Google w jednej cenie 1990 zł zamiast 2300 zł osobno.";

export const Route = createFileRoute("/pakiety/start-online")({
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
      name="Start Online"
      inside="Strona internetowa i Pakiet Start Google — wszystko, czego potrzebujesz, żeby klient Cię znalazł i do Ciebie zadzwonił."
      separate="2300 zł"
      bundle="1990 zł"
    />
  ),
});
