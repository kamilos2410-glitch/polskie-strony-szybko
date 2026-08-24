import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/scs/ServicePage";
import { SERVICES } from "@/lib/services";

const service = SERVICES["projekt-logo"]!;

export const Route = createFileRoute("/uslugi/projekt-logo")({
  component: () => <ServicePage service={service} />,
  head: () => serviceHead(service),
});
