import { createFileRoute } from "@tanstack/react-router";
import { PackagePage, packageHead } from "@/components/scs/PackagePage";
import { PACKAGES } from "@/lib/packages";

const PKG = PACKAGES["start-online"]!;

export const Route = createFileRoute("/pakiety/start-online")({
  head: () => packageHead(PKG),
  component: () => <PackagePage pkg={PKG} />,
});
