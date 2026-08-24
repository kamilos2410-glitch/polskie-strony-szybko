import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/scs/ServicePage";
import { SERVICES } from "@/lib/services";

const service = SERVICES["projekt-wizytowki"]!;

export const Route = createFileRoute("/uslugi/projekt-wizytowki")({
  component: () => <ServicePage service={service} />,
  head: () => serviceHead(service),
});
