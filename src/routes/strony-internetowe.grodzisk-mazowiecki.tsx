import { createFileRoute } from "@tanstack/react-router";
import { LocalPage, localHead } from "@/components/scs/LocalPage";
import { getLokalizacja } from "@/lib/lokalizacje";

const LOKALIZACJA = getLokalizacja("grodzisk-mazowiecki");

export const Route = createFileRoute("/strony-internetowe/grodzisk-mazowiecki")({
  head: () => localHead(LOKALIZACJA),
  component: () => <LocalPage lokalizacja={LOKALIZACJA} />,
});
