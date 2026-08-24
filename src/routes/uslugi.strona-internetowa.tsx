import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/scs/ServicePage";
import { SERVICES } from "@/lib/services";

const service = SERVICES["strona-internetowa"]!;

export const Route = createFileRoute("/uslugi/strona-internetowa")({
  component: () => <ServicePage service={service} />,
  head: () => serviceHead(service),
});
