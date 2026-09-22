import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/scs/ServicePage";
import { SERVICES } from "@/lib/services";

const service = SERVICES["pozycjonowanie-wizytowki-google"]!;

export const Route = createFileRoute("/uslugi/pozycjonowanie-wizytowki-google")({
  component: () => <ServicePage service={service} />,
  head: () => serviceHead(service),
});
