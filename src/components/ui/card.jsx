import { cn } from "../../lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.5)] backdrop-blur",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("relative flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-xl font-semibold tracking-tight text-slate-900", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p className={cn("text-sm text-slate-500", className)} {...props} />
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn("px-4 pb-4", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return (
    <div className={cn("flex items-center justify-between p-4 pt-0", className)} {...props} />
  );
}

function CardAction({ className, ...props }) {
  return (
    <div className={cn("absolute right-4 top-4", className)} {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
};
