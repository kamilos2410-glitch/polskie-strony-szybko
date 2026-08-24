import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/scs/ServicePage";
import { SERVICES } from "@/lib/services";

const service = SERVICES["poczta-firmowa"]!;

export const Route = createFileRoute("/uslugi/poczta-firmowa")({
  component: () => <ServicePage service={service} />,
  head: () => serviceHead(service),
});
