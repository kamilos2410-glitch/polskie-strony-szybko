import { createFileRoute } from "@tanstack/react-router";
import { LocalPage, localHead } from "@/components/scs/LocalPage";
import { getLokalizacja } from "@/lib/lokalizacje";

const LOKALIZACJA = getLokalizacja("pruszkow");

export const Route = createFileRoute("/strony-internetowe/pruszkow")({
  head: () => localHead(LOKALIZACJA),
  component: () => <LocalPage lokalizacja={LOKALIZACJA} />,
});
