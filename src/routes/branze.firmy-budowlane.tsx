import { createFileRoute } from "@tanstack/react-router";
import { BranchPage, branchHead } from "@/components/scs/BranchPage";
import { BRANZE } from "@/lib/branze";

const branza = BRANZE["firmy-budowlane"]!;

export const Route = createFileRoute("/branze/firmy-budowlane")({
  component: () => <BranchPage branza={branza} />,
  head: () => branchHead(branza),
});
