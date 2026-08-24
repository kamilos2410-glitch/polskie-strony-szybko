import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/scs/ServicePage";
import { SERVICES } from "@/lib/services";

const service = SERVICES["oznakowanie-auta"]!;

export const Route = createFileRoute("/uslugi/oznakowanie-auta")({
  component: () => <ServicePage service={service} />,
  head: () => serviceHead(service),
});
