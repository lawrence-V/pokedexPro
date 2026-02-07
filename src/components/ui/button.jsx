import { cn } from "../../lib/utils";

const buttonVariants = {
  default: "bg-slate-900 text-white hover:bg-slate-800",
  secondary: "bg-white/90 text-slate-900 ring-1 ring-slate-200 hover:bg-white",
};

function Button({ className, variant = "default", ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition",
        buttonVariants[variant] ?? buttonVariants.default,
        className
      )}
      {...props}
    />
  );
}

export { Button };
