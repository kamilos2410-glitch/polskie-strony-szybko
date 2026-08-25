import { createFileRoute } from "@tanstack/react-router";
import { PackagePage, packageHead } from "@/components/scs/PackagePage";
import { PACKAGES } from "@/lib/packages";

const PKG = PACKAGES["materialy-firmowe"]!;

export const Route = createFileRoute("/pakiety/materialy-firmowe")({
  head: () => packageHead(PKG),
  component: () => <PackagePage pkg={PKG} />,
});
