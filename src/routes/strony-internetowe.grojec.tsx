import { createFileRoute } from "@tanstack/react-router";
import { LocalPage, localHead } from "@/components/scs/LocalPage";
import { getLokalizacja } from "@/lib/lokalizacje";

const LOKALIZACJA = getLokalizacja("grojec");

export const Route = createFileRoute("/strony-internetowe/grojec")({
  head: () => localHead(LOKALIZACJA),
  component: () => <LocalPage lokalizacja={LOKALIZACJA} />,
});
