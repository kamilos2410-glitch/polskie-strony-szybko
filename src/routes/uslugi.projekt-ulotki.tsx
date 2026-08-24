import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/scs/ServicePage";
import { SERVICES } from "@/lib/services";

const service = SERVICES["projekt-ulotki"]!;

export const Route = createFileRoute("/uslugi/projekt-ulotki")({
  component: () => <ServicePage service={service} />,
  head: () => serviceHead(service),
});
