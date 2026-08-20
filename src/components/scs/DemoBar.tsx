import { Link } from "@tanstack/react-router";

/** Slim fixed notice bar shown on every demo page. */
export function DemoBar({ variant = "light" }: { variant?: "light" | "dark" }) {
  const cls =
    variant === "dark"
      ? "bg-[#0a0a0a] text-[#d4d4d4] border-b border-[#2a2a2a]"
      : "bg-[#111111] text-[#e5e5e5]";
  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 flex h-9 items-center justify-center px-4 text-center text-xs ${cls}`}
    >
      <span>
        Strona przykładowa — projekt SCS Web ·{" "}
        <Link to="/" className="font-semibold text-white underline underline-offset-4">
          wróć do scsweb.pl
        </Link>
      </span>
    </div>
  );
}
