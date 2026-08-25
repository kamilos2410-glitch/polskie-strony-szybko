import { createFileRoute } from "@tanstack/react-router";
import { PackagePage, packageHead } from "@/components/scs/PackagePage";
import { PACKAGES } from "@/lib/packages";

const PKG = PACKAGES["wizerunek"]!;

export const Route = createFileRoute("/pakiety/wizerunek")({
  head: () => packageHead(PKG),
  component: () => <PackagePage pkg={PKG} />,
});
