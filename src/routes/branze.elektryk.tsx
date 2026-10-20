import { createFileRoute } from "@tanstack/react-router";
import { BranchPage, branchHead } from "@/components/scs/BranchPage";
import { BRANZE } from "@/lib/branze";

const branza = BRANZE["elektryk"]!;

export const Route = createFileRoute("/branze/elektryk")({
  component: () => <BranchPage branza={branza} />,
  head: () => branchHead(branza),
});
