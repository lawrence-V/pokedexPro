import { cn } from "../../lib/utils";

const badgeVariants = {
  default: "bg-slate-900 text-white",
  secondary: "bg-white/80 text-slate-900 ring-1 ring-white/70",
};

function Badge({ className, variant = "default", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        badgeVariants[variant] ?? badgeVariants.default,
        className
      )}
      {...props}
    />
  );
}

export { Badge };
