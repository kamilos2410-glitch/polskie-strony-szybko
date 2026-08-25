import { createFileRoute } from "@tanstack/react-router";
import { PackagePage, packageHead } from "@/components/scs/PackagePage";
import { PACKAGES } from "@/lib/packages";

const PKG = PACKAGES["firma-kompletna"]!;

export const Route = createFileRoute("/pakiety/firma-kompletna")({
  head: () => packageHead(PKG),
  component: () => <PackagePage pkg={PKG} />,
});
