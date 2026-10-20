import { createFileRoute } from "@tanstack/react-router";
import { BranchPage, branchHead } from "@/components/scs/BranchPage";
import { BRANZE } from "@/lib/branze";

const branza = BRANZE["dekarz"]!;

export const Route = createFileRoute("/branze/dekarz")({
  component: () => <BranchPage branza={branza} />,
  head: () => branchHead(branza),
});
