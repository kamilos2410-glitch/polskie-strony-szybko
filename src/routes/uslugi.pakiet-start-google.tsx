import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/scs/ServicePage";
import { SERVICES } from "@/lib/services";

const service = SERVICES["pakiet-start-google"]!;

export const Route = createFileRoute("/uslugi/pakiet-start-google")({
  component: () => <ServicePage service={service} />,
  head: () => serviceHead(service),
});
